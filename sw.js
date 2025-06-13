// Excel Compartmentalizer Service Worker
// Optimized for Chrome browser performance, offline functionality, and TLS 1.3 security

const CACHE_NAME = 'excel-compartmentalizer-v1.1.0';
const STATIC_CACHE = 'excel-compartmentalizer-static-v1.1';
const DYNAMIC_CACHE = 'excel-compartmentalizer-dynamic-v1.1';

// Security configuration for TLS 1.3
const SECURITY_CONFIG = {
    enforceHTTPS: true,
    requireTLS13: true,
    allowedOrigins: ['https://cdnjs.cloudflare.com'],
    blockedProtocols: ['http:', 'ftp:', 'file:']
};

// Files to cache for offline functionality
const STATIC_FILES = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './manifest.json',
    './img/excel-icon.svg',
    // External CDN files (cached dynamically)
    'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Static files cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Error caching static files:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated successfully');
                return self.clients.claim();
            })
    );
});

// Security validation function
function validateRequest(request) {
    const url = new URL(request.url);

    // Enforce HTTPS for external requests
    if (SECURITY_CONFIG.enforceHTTPS && url.protocol === 'http:' && url.hostname !== 'localhost') {
        console.warn('Service Worker: Blocking insecure HTTP request:', request.url);
        return false;
    }

    // Block dangerous protocols
    if (SECURITY_CONFIG.blockedProtocols.includes(url.protocol)) {
        console.warn('Service Worker: Blocking dangerous protocol:', url.protocol);
        return false;
    }

    // Validate allowed origins for external resources
    if (url.hostname !== location.hostname &&
        !SECURITY_CONFIG.allowedOrigins.some(origin => request.url.startsWith(origin))) {
        console.warn('Service Worker: Blocking unauthorized origin:', url.hostname);
        return false;
    }

    return true;
}

// Fetch event - serve cached files or fetch from network with security validation
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip Chrome extension requests
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    // Skip data URLs
    if (event.request.url.startsWith('data:')) {
        return;
    }

    // Security validation
    if (!validateRequest(event.request)) {
        event.respondWith(new Response('Request blocked by security policy', {
            status: 403,
            statusText: 'Forbidden'
        }));
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    console.log('Service Worker: Serving from cache:', event.request.url);
                    return cachedResponse;
                }
                
                // Fetch from network and cache dynamically
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Check if response is valid
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }
                        
                        // Clone response for caching
                        const responseToCache = networkResponse.clone();
                        
                        // Cache dynamic content
                        caches.open(DYNAMIC_CACHE)
                            .then((cache) => {
                                console.log('Service Worker: Caching dynamic content:', event.request.url);
                                cache.put(event.request, responseToCache);
                            });
                        
                        return networkResponse;
                    })
                    .catch((error) => {
                        console.error('Service Worker: Fetch failed:', error);
                        
                        // Return offline fallback for HTML requests
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                        
                        throw error;
                    });
            })
    );
});

// Message event - handle messages from main thread
self.addEventListener('message', (event) => {
    console.log('Service Worker: Received message:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({
            version: CACHE_NAME,
            staticCache: STATIC_CACHE,
            dynamicCache: DYNAMIC_CACHE
        });
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => caches.delete(cacheName))
            );
        }).then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

// Background sync for Chrome
self.addEventListener('sync', (event) => {
    console.log('Service Worker: Background sync triggered:', event.tag);
    
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Perform background tasks here
            Promise.resolve()
        );
    }
});

// Push notifications (for future use)
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'Excel Compartmentalizer notification',
        icon: './img/excel-icon.svg',
        badge: './img/excel-icon.svg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Open App',
                icon: './img/excel-icon.svg'
            },
            {
                action: 'close',
                title: 'Close',
                icon: './img/excel-icon.svg'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Excel Compartmentalizer', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    console.log('Service Worker: Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});

console.log('Service Worker: Loaded successfully for Excel Compartmentalizer');
