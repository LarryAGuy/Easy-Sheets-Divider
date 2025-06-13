// Progressive Loader for Easy Sheets Divider
// Handles large file processing with progress tracking and time estimation

class ProgressiveLoader {
    constructor() {
        this.isLoading = false;
        this.currentProgress = 0;
        this.startTime = null;
        this.estimatedTime = 0;
        this.actualTime = 0;
        this.progressCallbacks = [];
        this.completionCallbacks = [];
        this.errorCallbacks = [];
        
        this.init();
    }

    init() {
        this.setupProgressElements();
    }

    setupProgressElements() {
        this.progressBar = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.timeEstimate = document.getElementById('timeEstimate');
        this.progressDetails = document.getElementById('progressDetails');
        this.headerProgress = document.getElementById('headerProgress');
    }

    // Start loading with initial setup
    startLoading(operation, totalSteps = 100) {
        this.isLoading = true;
        this.currentProgress = 0;
        this.startTime = Date.now();
        this.operation = operation;
        this.totalSteps = totalSteps;
        this.completedSteps = 0;
        
        this.showProgressBar();
        this.updateProgress(0, 'Initializing...');
        
        // Estimate initial time based on operation type
        this.estimateInitialTime(operation);
    }

    estimateInitialTime(operation) {
        const estimates = {
            'reading': 2000,      // 2 seconds for reading
            'parsing': 3000,      // 3 seconds for parsing
            'splitting': 5000,    // 5 seconds for splitting
            'converting': 4000,   // 4 seconds for converting
            'compressing': 2000,  // 2 seconds for compressing
            'batch': 10000        // 10 seconds for batch processing
        };
        
        this.estimatedTime = estimates[operation] || 3000;
        this.updateTimeEstimate();
    }

    // Update progress with percentage and message
    updateProgress(percentage, message, details = '') {
        if (!this.isLoading) return;
        
        this.currentProgress = Math.min(100, Math.max(0, percentage));
        this.completedSteps = Math.round((this.currentProgress / 100) * this.totalSteps);
        
        // Update UI elements
        if (this.progressBar) {
            this.progressBar.style.width = `${this.currentProgress}%`;
        }
        
        if (this.progressText) {
            this.progressText.textContent = message;
        }
        
        if (this.progressDetails && details) {
            this.progressDetails.textContent = details;
        }
        
        // Update time estimate
        this.updateTimeEstimate();
        
        // Trigger callbacks
        this.progressCallbacks.forEach(callback => {
            try {
                callback(this.currentProgress, message, details);
            } catch (error) {
                console.error('Progress callback error:', error);
            }
        });
        
        // Check if completed
        if (this.currentProgress >= 100) {
            this.completeLoading();
        }
    }

    updateTimeEstimate() {
        if (!this.timeEstimate || !this.startTime) return;
        
        const elapsed = Date.now() - this.startTime;
        let remaining = 0;
        
        if (this.currentProgress > 0) {
            // Calculate based on actual progress
            const totalEstimated = (elapsed / this.currentProgress) * 100;
            remaining = Math.max(0, totalEstimated - elapsed);
        } else {
            // Use initial estimate
            remaining = this.estimatedTime;
        }
        
        this.timeEstimate.textContent = this.formatTime(remaining);
    }

    formatTime(milliseconds) {
        if (milliseconds < 1000) {
            return 'Less than 1 second';
        }
        
        const seconds = Math.ceil(milliseconds / 1000);
        
        if (seconds < 60) {
            return `${seconds} second${seconds !== 1 ? 's' : ''}`;
        }
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        if (remainingSeconds === 0) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
        
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Increment progress by a step
    incrementProgress(message, details = '') {
        const increment = 100 / this.totalSteps;
        const newProgress = this.currentProgress + increment;
        this.updateProgress(newProgress, message, details);
    }

    // Set progress to a specific step
    setProgressStep(step, message, details = '') {
        const percentage = (step / this.totalSteps) * 100;
        this.updateProgress(percentage, message, details);
    }

    // Show progress bar
    showProgressBar() {
        if (this.headerProgress) {
            this.headerProgress.style.display = 'block';
            this.headerProgress.classList.add('fade-in');
        }
    }

    // Hide progress bar
    hideProgressBar() {
        if (this.headerProgress) {
            this.headerProgress.style.display = 'none';
            this.headerProgress.classList.remove('fade-in');
        }
    }

    // Complete loading
    completeLoading(message = 'Complete!') {
        this.isLoading = false;
        this.actualTime = Date.now() - this.startTime;
        
        this.updateProgress(100, message, 'Processing completed successfully');
        
        // Trigger completion callbacks
        this.completionCallbacks.forEach(callback => {
            try {
                callback(this.actualTime, this.operation);
            } catch (error) {
                console.error('Completion callback error:', error);
            }
        });
        
        // Hide progress bar after a delay
        setTimeout(() => {
            this.hideProgressBar();
        }, 2000);
        
        // Log performance metrics
        this.logPerformanceMetrics();
    }

    // Handle errors
    handleError(error, message = 'An error occurred') {
        this.isLoading = false;
        
        if (this.progressText) {
            this.progressText.textContent = message;
            this.progressText.classList.add('text-error');
        }
        
        if (this.progressDetails) {
            this.progressDetails.textContent = error.message || 'Unknown error';
        }
        
        // Trigger error callbacks
        this.errorCallbacks.forEach(callback => {
            try {
                callback(error, message);
            } catch (callbackError) {
                console.error('Error callback error:', callbackError);
            }
        });
        
        // Hide progress bar after a delay
        setTimeout(() => {
            this.hideProgressBar();
            if (this.progressText) {
                this.progressText.classList.remove('text-error');
            }
        }, 5000);
    }

    // Cancel loading
    cancelLoading() {
        this.isLoading = false;
        this.updateProgress(0, 'Cancelled', 'Operation was cancelled by user');
        this.hideProgressBar();
    }

    // Add progress callback
    onProgress(callback) {
        this.progressCallbacks.push(callback);
    }

    // Add completion callback
    onComplete(callback) {
        this.completionCallbacks.push(callback);
    }

    // Add error callback
    onError(callback) {
        this.errorCallbacks.push(callback);
    }

    // Remove callbacks
    removeCallback(type, callback) {
        const callbacks = {
            'progress': this.progressCallbacks,
            'complete': this.completionCallbacks,
            'error': this.errorCallbacks
        };
        
        const callbackArray = callbacks[type];
        if (callbackArray) {
            const index = callbackArray.indexOf(callback);
            if (index > -1) {
                callbackArray.splice(index, 1);
            }
        }
    }

    // Clear all callbacks
    clearCallbacks() {
        this.progressCallbacks = [];
        this.completionCallbacks = [];
        this.errorCallbacks = [];
    }

    // Process with automatic progress tracking
    async processWithProgress(asyncFunction, operation, steps = 100) {
        try {
            this.startLoading(operation, steps);
            
            const result = await asyncFunction((progress, message, details) => {
                this.updateProgress(progress, message, details);
            });
            
            this.completeLoading();
            return result;
            
        } catch (error) {
            this.handleError(error, `Error during ${operation}`);
            throw error;
        }
    }

    // Batch processing with progress
    async processBatch(items, processor, operation = 'batch') {
        const totalItems = items.length;
        this.startLoading(operation, totalItems);
        
        const results = [];
        
        try {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const progress = ((i + 1) / totalItems) * 100;
                
                this.updateProgress(
                    progress,
                    `Processing item ${i + 1} of ${totalItems}`,
                    `Current: ${item.name || item.toString()}`
                );
                
                const result = await processor(item, i);
                results.push(result);
                
                // Small delay to prevent blocking
                await this.sleep(10);
            }
            
            this.completeLoading(`Processed ${totalItems} items`);
            return results;
            
        } catch (error) {
            this.handleError(error, `Error processing batch at item ${results.length + 1}`);
            throw error;
        }
    }

    // Utility sleep function
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Log performance metrics
    logPerformanceMetrics() {
        const metrics = {
            operation: this.operation,
            estimatedTime: this.estimatedTime,
            actualTime: this.actualTime,
            accuracy: this.calculateAccuracy(),
            timestamp: new Date().toISOString()
        };
        
        console.log('Performance Metrics:', metrics);
        
        // Store metrics for future estimation improvements
        this.storeMetrics(metrics);
    }

    calculateAccuracy() {
        if (this.estimatedTime === 0) return 0;
        
        const difference = Math.abs(this.actualTime - this.estimatedTime);
        const accuracy = Math.max(0, 100 - (difference / this.estimatedTime) * 100);
        
        return Math.round(accuracy);
    }

    storeMetrics(metrics) {
        try {
            const stored = localStorage.getItem('easySheetsMetrics');
            const allMetrics = stored ? JSON.parse(stored) : [];
            
            allMetrics.push(metrics);
            
            // Keep only last 50 metrics
            if (allMetrics.length > 50) {
                allMetrics.splice(0, allMetrics.length - 50);
            }
            
            localStorage.setItem('easySheetsMetrics', JSON.stringify(allMetrics));
        } catch (error) {
            console.warn('Could not store performance metrics:', error);
        }
    }

    // Get historical metrics for better estimation
    getHistoricalMetrics(operation) {
        try {
            const stored = localStorage.getItem('easySheetsMetrics');
            const allMetrics = stored ? JSON.parse(stored) : [];
            
            return allMetrics.filter(metric => metric.operation === operation);
        } catch (error) {
            console.warn('Could not retrieve historical metrics:', error);
            return [];
        }
    }

    // Improve time estimation based on historical data
    improveEstimation(operation, fileSize) {
        const historical = this.getHistoricalMetrics(operation);
        
        if (historical.length === 0) {
            return this.estimateInitialTime(operation);
        }
        
        // Calculate average time for similar operations
        const avgTime = historical.reduce((sum, metric) => sum + metric.actualTime, 0) / historical.length;
        
        // Adjust for file size if available
        if (fileSize && window.memoryManager) {
            const estimatedTime = window.memoryManager.estimateProcessingTime(fileSize, operation);
            return Math.round((avgTime + estimatedTime) / 2);
        }
        
        return Math.round(avgTime);
    }

    // Get current status
    getStatus() {
        return {
            isLoading: this.isLoading,
            progress: this.currentProgress,
            operation: this.operation,
            estimatedTime: this.estimatedTime,
            elapsedTime: this.startTime ? Date.now() - this.startTime : 0
        };
    }
}

// Create global progressive loader instance
window.progressiveLoader = new ProgressiveLoader();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressiveLoader;
}
