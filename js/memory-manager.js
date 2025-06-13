// Memory Manager for Easy Sheets Divider
// Optimizes memory usage for large file processing

class MemoryManager {
    constructor() {
        this.memoryThreshold = 0.8; // 80% of available memory
        this.chunkSize = 1024 * 1024; // 1MB chunks
        this.maxFileSize = 500 * 1024 * 1024; // 500MB max file size
        this.gcInterval = 5000; // Garbage collection interval in ms
        this.memoryStats = {
            used: 0,
            peak: 0,
            available: this.getAvailableMemory()
        };
        
        this.init();
    }

    init() {
        this.startMemoryMonitoring();
        this.setupMemoryWarnings();
    }

    getAvailableMemory() {
        // Estimate available memory based on device capabilities
        if (navigator.deviceMemory) {
            return navigator.deviceMemory * 1024 * 1024 * 1024; // Convert GB to bytes
        }
        
        // Fallback estimation based on user agent
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('mobile')) {
            return 2 * 1024 * 1024 * 1024; // 2GB for mobile
        }
        return 4 * 1024 * 1024 * 1024; // 4GB for desktop
    }

    startMemoryMonitoring() {
        setInterval(() => {
            this.updateMemoryStats();
            this.checkMemoryPressure();
        }, this.gcInterval);
    }

    updateMemoryStats() {
        if (performance.memory) {
            this.memoryStats.used = performance.memory.usedJSHeapSize;
            this.memoryStats.peak = Math.max(this.memoryStats.peak, this.memoryStats.used);
        }
    }

    checkMemoryPressure() {
        const memoryUsage = this.getMemoryUsageRatio();
        
        if (memoryUsage > this.memoryThreshold) {
            this.triggerGarbageCollection();
            this.showMemoryWarning();
        }
    }

    getMemoryUsageRatio() {
        if (performance.memory) {
            return performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
        }
        return 0;
    }

    triggerGarbageCollection() {
        // Force garbage collection if available
        if (window.gc) {
            window.gc();
        }
        
        // Clear any cached data that's not immediately needed
        this.clearNonEssentialCache();
    }

    clearNonEssentialCache() {
        // Clear any temporary data structures
        if (window.app && window.app.tempData) {
            window.app.tempData = null;
        }
    }

    showMemoryWarning() {
        const memoryUsage = Math.round(this.getMemoryUsageRatio() * 100);
        console.warn(`High memory usage detected: ${memoryUsage}%`);
        
        if (window.app && window.app.showNotification) {
            window.app.showNotification(
                `Memory usage is high (${memoryUsage}%). Consider processing smaller files or fewer files at once.`,
                'warning'
            );
        }
    }

    setupMemoryWarnings() {
        // Monitor for memory pressure events
        if ('memory' in performance) {
            // Modern browsers with memory API
            this.monitorMemoryAPI();
        }
    }

    monitorMemoryAPI() {
        const checkMemory = () => {
            const memory = performance.memory;
            const usageRatio = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
            
            if (usageRatio > 0.9) {
                this.handleCriticalMemory();
            }
        };
        
        setInterval(checkMemory, 1000);
    }

    handleCriticalMemory() {
        console.error('Critical memory usage detected!');
        
        if (window.app) {
            window.app.showNotification(
                'Critical memory usage! Processing has been paused. Please close other applications or refresh the page.',
                'error'
            );
            
            // Pause any ongoing processing
            if (window.app.isProcessing) {
                window.app.cancelProcessing();
            }
        }
    }

    // File size validation
    validateFileSize(file) {
        if (file.size > this.maxFileSize) {
            throw new Error(`File size (${this.formatBytes(file.size)}) exceeds maximum allowed size (${this.formatBytes(this.maxFileSize)})`);
        }
        
        // Check if file size is reasonable for current memory
        const estimatedMemoryNeeded = file.size * 3; // Rough estimate for processing overhead
        const availableMemory = this.getAvailableMemory() * this.memoryThreshold;
        
        if (estimatedMemoryNeeded > availableMemory) {
            throw new Error(`File is too large for current memory constraints. Try a smaller file or close other applications.`);
        }
        
        return true;
    }

    // Chunked file reading for large files
    async readFileInChunks(file, onChunk, onProgress) {
        const totalChunks = Math.ceil(file.size / this.chunkSize);
        let currentChunk = 0;
        
        for (let start = 0; start < file.size; start += this.chunkSize) {
            const end = Math.min(start + this.chunkSize, file.size);
            const chunk = file.slice(start, end);
            
            try {
                const arrayBuffer = await chunk.arrayBuffer();
                await onChunk(arrayBuffer, currentChunk, totalChunks);
                
                currentChunk++;
                
                if (onProgress) {
                    onProgress(currentChunk / totalChunks);
                }
                
                // Check memory pressure after each chunk
                if (this.getMemoryUsageRatio() > this.memoryThreshold) {
                    await this.waitForMemoryRelief();
                }
                
                // Small delay to prevent blocking the UI
                await this.sleep(10);
                
            } catch (error) {
                throw new Error(`Error processing chunk ${currentChunk}: ${error.message}`);
            }
        }
    }

    async waitForMemoryRelief() {
        let attempts = 0;
        const maxAttempts = 10;
        
        while (this.getMemoryUsageRatio() > this.memoryThreshold && attempts < maxAttempts) {
            this.triggerGarbageCollection();
            await this.sleep(1000); // Wait 1 second
            attempts++;
        }
        
        if (attempts >= maxAttempts) {
            throw new Error('Unable to free sufficient memory for processing');
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Memory-efficient array processing
    processArrayInBatches(array, batchSize, processor) {
        return new Promise(async (resolve, reject) => {
            const results = [];
            
            try {
                for (let i = 0; i < array.length; i += batchSize) {
                    const batch = array.slice(i, i + batchSize);
                    const batchResults = await processor(batch);
                    results.push(...batchResults);
                    
                    // Check memory after each batch
                    if (this.getMemoryUsageRatio() > this.memoryThreshold) {
                        await this.waitForMemoryRelief();
                    }
                    
                    // Small delay to prevent blocking
                    await this.sleep(10);
                }
                
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Optimize workbook processing
    optimizeWorkbookMemory(workbook) {
        // Remove unnecessary properties to save memory
        if (workbook.Props) {
            delete workbook.Props.Comments;
            delete workbook.Props.Keywords;
            delete workbook.Props.Description;
        }
        
        // Clear cached data
        Object.keys(workbook.Sheets).forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            if (sheet['!margins']) delete sheet['!margins'];
            if (sheet['!printHeader']) delete sheet['!printHeader'];
            if (sheet['!printFooter']) delete sheet['!printFooter'];
        });
        
        return workbook;
    }

    // Memory usage reporting
    getMemoryReport() {
        const memory = performance.memory;
        const report = {
            timestamp: new Date().toISOString(),
            available: this.formatBytes(this.memoryStats.available),
            peak: this.formatBytes(this.memoryStats.peak),
            usageRatio: this.getMemoryUsageRatio()
        };
        
        if (memory) {
            report.used = this.formatBytes(memory.usedJSHeapSize);
            report.total = this.formatBytes(memory.totalJSHeapSize);
            report.limit = this.formatBytes(memory.jsHeapSizeLimit);
        }
        
        return report;
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Estimate processing time based on file size and memory
    estimateProcessingTime(fileSize, operationType = 'split') {
        const baseTimePerMB = {
            'split': 0.5, // 0.5 seconds per MB for splitting
            'convert': 0.8, // 0.8 seconds per MB for format conversion
            'analyze': 0.2 // 0.2 seconds per MB for analysis
        };
        
        const fileSizeMB = fileSize / (1024 * 1024);
        const baseTime = fileSizeMB * (baseTimePerMB[operationType] || 0.5);
        
        // Adjust for memory pressure
        const memoryFactor = Math.max(1, this.getMemoryUsageRatio() * 2);
        
        // Adjust for device capabilities
        const deviceFactor = navigator.hardwareConcurrency ? 
            Math.max(0.5, 4 / navigator.hardwareConcurrency) : 1;
        
        return Math.round(baseTime * memoryFactor * deviceFactor);
    }

    // Clean up resources
    cleanup() {
        this.clearNonEssentialCache();
        this.triggerGarbageCollection();
    }

    // Get memory recommendations
    getMemoryRecommendations(fileSize) {
        const recommendations = [];
        const fileSizeMB = fileSize / (1024 * 1024);
        
        if (fileSizeMB > 100) {
            recommendations.push('Consider splitting this large file into smaller chunks before processing');
        }
        
        if (this.getMemoryUsageRatio() > 0.7) {
            recommendations.push('Close other browser tabs and applications to free up memory');
        }
        
        if (fileSizeMB > 50 && navigator.userAgent.toLowerCase().includes('mobile')) {
            recommendations.push('Large file processing on mobile devices may be slow or fail');
        }
        
        return recommendations;
    }
}

// Create global memory manager instance
window.memoryManager = new MemoryManager();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MemoryManager;
}
