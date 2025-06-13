// Easy Sheets Divider - Memory Management System
// Optimized for large file processing with TLS 1.3 security compliance

class MemoryManager {
    constructor() {
        this.config = {
            maxMemoryUsage: 0.8, // 80% of available memory
            chunkSize: 10 * 1024 * 1024, // 10MB chunks
            gcThreshold: 0.7, // Trigger GC at 70% memory usage
            warningThreshold: 0.6, // Show warning at 60%
            maxFileSize: 500 * 1024 * 1024, // 500MB max file size
            monitoringInterval: 1000 // Check memory every second
        };
        
        this.memoryStats = {
            used: 0,
            available: 0,
            percentage: 0,
            peak: 0,
            allocations: 0,
            collections: 0
        };
        
        this.activeObjects = new Set();
        this.monitoringActive = false;
        this.callbacks = {
            onWarning: null,
            onCritical: null,
            onUpdate: null
        };
        
        this.init();
    }
    
    init() {
        this.estimateAvailableMemory();
        this.startMonitoring();
        this.setupPerformanceObserver();
    }
    
    // Estimate available memory based on browser and device
    estimateAvailableMemory() {
        let estimatedMemory = 2 * 1024 * 1024 * 1024; // Default 2GB
        
        // Use Memory API if available
        if ('memory' in performance) {
            const memInfo = performance.memory;
            estimatedMemory = memInfo.jsHeapSizeLimit || estimatedMemory;
            this.memoryStats.available = estimatedMemory;
        } else if ('deviceMemory' in navigator) {
            // Use Device Memory API
            estimatedMemory = navigator.deviceMemory * 1024 * 1024 * 1024 * 0.5; // 50% of device memory
        } else {
            // Fallback estimation based on user agent
            const userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.includes('mobile') || userAgent.includes('android')) {
                estimatedMemory = 1 * 1024 * 1024 * 1024; // 1GB for mobile
            } else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
                estimatedMemory = 2 * 1024 * 1024 * 1024; // 2GB for tablets
            }
        }
        
        this.memoryStats.available = estimatedMemory;
        console.log(`Memory Manager: Estimated available memory: ${this.formatBytes(estimatedMemory)}`);
    }
    
    // Start memory monitoring
    startMonitoring() {
        if (this.monitoringActive) return;
        
        this.monitoringActive = true;
        this.monitoringInterval = setInterval(() => {
            this.updateMemoryStats();
            this.checkMemoryThresholds();
        }, this.config.monitoringInterval);
        
        console.log('Memory Manager: Monitoring started');
    }
    
    // Stop memory monitoring
    stopMonitoring() {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
        }
        this.monitoringActive = false;
        console.log('Memory Manager: Monitoring stopped');
    }
    
    // Update current memory statistics
    updateMemoryStats() {
        if ('memory' in performance) {
            const memInfo = performance.memory;
            this.memoryStats.used = memInfo.usedJSHeapSize;
            this.memoryStats.available = memInfo.jsHeapSizeLimit;
            this.memoryStats.percentage = (this.memoryStats.used / this.memoryStats.available) * 100;
            
            if (this.memoryStats.used > this.memoryStats.peak) {
                this.memoryStats.peak = this.memoryStats.used;
            }
        } else {
            // Fallback estimation
            this.memoryStats.percentage = (this.activeObjects.size * 1024 * 1024) / this.memoryStats.available * 100;
        }
        
        // Notify callbacks
        if (this.callbacks.onUpdate) {
            this.callbacks.onUpdate(this.memoryStats);
        }
    }
    
    // Check memory thresholds and trigger actions
    checkMemoryThresholds() {
        const percentage = this.memoryStats.percentage;
        
        if (percentage >= this.config.maxMemoryUsage * 100) {
            this.triggerCriticalMemoryAction();
        } else if (percentage >= this.config.gcThreshold * 100) {
            this.triggerGarbageCollection();
        } else if (percentage >= this.config.warningThreshold * 100) {
            this.triggerMemoryWarning();
        }
    }
    
    // Trigger garbage collection
    triggerGarbageCollection() {
        console.log('Memory Manager: Triggering garbage collection');
        
        // Clear weak references and unused objects
        this.cleanupActiveObjects();
        
        // Force garbage collection if available
        if (window.gc) {
            window.gc();
        } else {
            // Fallback: create and destroy large objects to trigger GC
            this.forceGarbageCollection();
        }
        
        this.memoryStats.collections++;
        console.log(`Memory Manager: GC completed (${this.memoryStats.collections} total)`);
    }
    
    // Force garbage collection fallback
    forceGarbageCollection() {
        const largeArrays = [];
        try {
            // Create large objects to trigger GC
            for (let i = 0; i < 10; i++) {
                largeArrays.push(new Array(1000000).fill(0));
            }
        } catch (e) {
            // Memory exhausted, which should trigger GC
        } finally {
            // Clear references
            largeArrays.length = 0;
        }
    }
    
    // Clean up tracked objects
    cleanupActiveObjects() {
        const objectsToRemove = [];
        
        this.activeObjects.forEach(obj => {
            if (obj && typeof obj.cleanup === 'function') {
                try {
                    obj.cleanup();
                    objectsToRemove.push(obj);
                } catch (e) {
                    console.warn('Memory Manager: Error during object cleanup:', e);
                }
            }
        });
        
        objectsToRemove.forEach(obj => {
            this.activeObjects.delete(obj);
        });
    }
    
    // Trigger memory warning
    triggerMemoryWarning() {
        if (this.callbacks.onWarning) {
            this.callbacks.onWarning(this.memoryStats);
        }
        console.warn(`Memory Manager: Memory usage warning - ${this.memoryStats.percentage.toFixed(1)}%`);
    }
    
    // Trigger critical memory action
    triggerCriticalMemoryAction() {
        if (this.callbacks.onCritical) {
            this.callbacks.onCritical(this.memoryStats);
        }
        console.error(`Memory Manager: Critical memory usage - ${this.memoryStats.percentage.toFixed(1)}%`);
        
        // Emergency cleanup
        this.emergencyCleanup();
    }
    
    // Emergency memory cleanup
    emergencyCleanup() {
        console.log('Memory Manager: Performing emergency cleanup');
        
        // Clear all tracked objects
        this.activeObjects.forEach(obj => {
            if (obj && typeof obj.cleanup === 'function') {
                try {
                    obj.cleanup();
                } catch (e) {
                    console.warn('Memory Manager: Error during emergency cleanup:', e);
                }
            }
        });
        
        this.activeObjects.clear();
        
        // Force multiple GC cycles
        for (let i = 0; i < 3; i++) {
            this.triggerGarbageCollection();
        }
    }
    
    // Register object for memory tracking
    registerObject(obj, size = 0) {
        this.activeObjects.add(obj);
        this.memoryStats.allocations++;
        
        if (size > 0) {
            this.memoryStats.used += size;
        }
        
        return obj;
    }
    
    // Unregister object from memory tracking
    unregisterObject(obj) {
        this.activeObjects.delete(obj);
    }
    
    // Check if file size is within limits
    validateFileSize(fileSize) {
        if (fileSize > this.config.maxFileSize) {
            throw new Error(`File size (${this.formatBytes(fileSize)}) exceeds maximum limit (${this.formatBytes(this.config.maxFileSize)})`);
        }
        
        const requiredMemory = fileSize * 3; // Estimate 3x file size for processing
        const availableMemory = this.memoryStats.available * this.config.maxMemoryUsage;
        
        if (requiredMemory > availableMemory) {
            throw new Error(`Insufficient memory for file processing. Required: ${this.formatBytes(requiredMemory)}, Available: ${this.formatBytes(availableMemory)}`);
        }
        
        return true;
    }
    
    // Calculate optimal chunk size for file
    calculateChunkSize(fileSize) {
        const baseChunkSize = this.config.chunkSize;
        const availableMemory = this.memoryStats.available * this.config.maxMemoryUsage;
        const maxChunkSize = Math.min(availableMemory / 4, fileSize / 10);
        
        return Math.min(baseChunkSize, maxChunkSize);
    }
    
    // Setup performance observer
    setupPerformanceObserver() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (entry.entryType === 'measure' && entry.name.includes('memory')) {
                            console.log(`Memory Manager: Performance measure - ${entry.name}: ${entry.duration}ms`);
                        }
                    });
                });
                
                observer.observe({ entryTypes: ['measure'] });
            } catch (e) {
                console.warn('Memory Manager: Performance observer not supported');
            }
        }
    }
    
    // Set callback functions
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
    }
    
    // Format bytes for display
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Get current memory status
    getMemoryStatus() {
        return {
            ...this.memoryStats,
            formattedUsed: this.formatBytes(this.memoryStats.used),
            formattedAvailable: this.formatBytes(this.memoryStats.available),
            formattedPeak: this.formatBytes(this.memoryStats.peak),
            isWarning: this.memoryStats.percentage >= this.config.warningThreshold * 100,
            isCritical: this.memoryStats.percentage >= this.config.maxMemoryUsage * 100
        };
    }
    
    // Cleanup and destroy
    destroy() {
        this.stopMonitoring();
        this.emergencyCleanup();
        this.callbacks = {};
        console.log('Memory Manager: Destroyed');
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MemoryManager;
} else if (typeof window !== 'undefined') {
    window.MemoryManager = MemoryManager;
}
