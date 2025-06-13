// Excel Compartmentalizer Security Configuration
// TLS 1.3 and Modern Security Implementation

class SecurityManager {
    constructor() {
        this.config = {
            // TLS Configuration
            tls: {
                minVersion: '1.2',
                preferredVersion: '1.3',
                enforceHTTPS: true,
                hstsMaxAge: 63072000, // 2 years
                includeSubdomains: true,
                preload: true
            },
            
            // Content Security Policy
            csp: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
                fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
                imgSrc: ["'self'", "data:", "blob:"],
                connectSrc: ["'self'", "https:"],
                workerSrc: ["'self'"],
                manifestSrc: ["'self'"],
                frameAncestors: ["'none'"],
                baseUri: ["'self'"],
                formAction: ["'self'"]
            },
            
            // Allowed external domains
            allowedDomains: [
                'cdnjs.cloudflare.com',
                'fonts.googleapis.com',
                'fonts.gstatic.com'
            ],
            
            // Security headers
            headers: {
                'X-Frame-Options': 'DENY',
                'X-Content-Type-Options': 'nosniff',
                'X-XSS-Protection': '1; mode=block',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Resource-Policy': 'same-origin'
            }
        };
        
        this.init();
    }
    
    init() {
        this.enforceHTTPS();
        this.validateTLSSupport();
        this.setupSecurityHeaders();
        this.monitorSecurityViolations();
    }
    
    // Force HTTPS redirect
    enforceHTTPS() {
        if (this.config.tls.enforceHTTPS && location.protocol === 'http:' && location.hostname !== 'localhost') {
            console.warn('Security: Redirecting to HTTPS');
            location.replace(location.href.replace('http:', 'https:'));
        }
    }
    
    // Check TLS version support
    validateTLSSupport() {
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            // Check for modern browser support
            const isModernBrowser = this.checkModernBrowserSupport();
            
            if (!isModernBrowser) {
                console.warn('Security: Browser may not support TLS 1.3');
                this.showSecurityWarning();
            }
            
            // Log TLS information if available
            this.logTLSInfo();
        }
    }
    
    // Check if browser supports modern security features
    checkModernBrowserSupport() {
        const features = [
            'fetch',
            'Promise',
            'ServiceWorker',
            'crypto',
            'SubtleCrypto'
        ];
        
        return features.every(feature => {
            switch (feature) {
                case 'fetch':
                    return typeof fetch !== 'undefined';
                case 'Promise':
                    return typeof Promise !== 'undefined';
                case 'ServiceWorker':
                    return 'serviceWorker' in navigator;
                case 'crypto':
                    return typeof crypto !== 'undefined';
                case 'SubtleCrypto':
                    return crypto && crypto.subtle;
                default:
                    return false;
            }
        });
    }
    
    // Log TLS connection information
    logTLSInfo() {
        if (location.protocol === 'https:') {
            console.log('Security: HTTPS connection established');
            
            // Try to get TLS information from performance API
            if (performance && performance.getEntriesByType) {
                const navigationEntries = performance.getEntriesByType('navigation');
                if (navigationEntries.length > 0) {
                    const entry = navigationEntries[0];
                    console.log('Security: Connection details:', {
                        protocol: entry.nextHopProtocol || 'unknown',
                        secureConnectionStart: entry.secureConnectionStart,
                        connectEnd: entry.connectEnd
                    });
                }
            }
        }
    }
    
    // Setup additional security headers via JavaScript
    setupSecurityHeaders() {
        // Add security meta tags if not present
        this.addMetaTag('X-Content-Type-Options', 'nosniff');
        this.addMetaTag('X-Frame-Options', 'DENY');
        this.addMetaTag('X-XSS-Protection', '1; mode=block');
        this.addMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');
    }
    
    // Add meta tag if not exists
    addMetaTag(name, content) {
        if (!document.querySelector(`meta[http-equiv="${name}"]`)) {
            const meta = document.createElement('meta');
            meta.httpEquiv = name;
            meta.content = content;
            document.head.appendChild(meta);
        }
    }
    
    // Monitor for security violations
    monitorSecurityViolations() {
        // CSP violation reporting
        document.addEventListener('securitypolicyviolation', (event) => {
            console.error('Security: CSP violation detected:', {
                blockedURI: event.blockedURI,
                violatedDirective: event.violatedDirective,
                originalPolicy: event.originalPolicy
            });
            
            // Report to analytics or monitoring service
            this.reportSecurityViolation('csp', event);
        });
        
        // Monitor for mixed content
        if (location.protocol === 'https:') {
            this.monitorMixedContent();
        }
    }
    
    // Monitor for mixed content issues
    monitorMixedContent() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        this.checkElementSecurity(node);
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Check element for security issues
    checkElementSecurity(element) {
        const insecureAttributes = ['src', 'href', 'action'];
        
        insecureAttributes.forEach(attr => {
            const value = element.getAttribute(attr);
            if (value && value.startsWith('http:') && !value.includes('localhost')) {
                console.warn('Security: Insecure HTTP resource detected:', value);
                this.reportSecurityViolation('mixed-content', { element, attribute: attr, value });
            }
        });
    }
    
    // Report security violations
    reportSecurityViolation(type, details) {
        // Log locally
        console.error(`Security violation (${type}):`, details);
        
        // Could send to monitoring service in production
        // this.sendToMonitoringService(type, details);
    }
    
    // Show security warning for unsupported browsers
    showSecurityWarning() {
        const warning = document.createElement('div');
        warning.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #ff6b6b;
            color: white;
            padding: 10px;
            text-align: center;
            z-index: 10000;
            font-family: Arial, sans-serif;
        `;
        warning.innerHTML = `
            ⚠️ Your browser may not support the latest security features. 
            Please update to a modern browser for optimal security.
            <button onclick="this.parentElement.remove()" style="margin-left: 10px; background: white; color: #ff6b6b; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Dismiss</button>
        `;
        document.body.insertBefore(warning, document.body.firstChild);
    }
    
    // Get current security status
    getSecurityStatus() {
        return {
            https: location.protocol === 'https:',
            modernBrowser: this.checkModernBrowserSupport(),
            serviceWorkerSupported: 'serviceWorker' in navigator,
            cryptoSupported: typeof crypto !== 'undefined' && crypto.subtle,
            config: this.config
        };
    }
}

// Initialize security manager
const securityManager = new SecurityManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecurityManager;
} else if (typeof window !== 'undefined') {
    window.SecurityManager = SecurityManager;
    window.securityManager = securityManager;
}
