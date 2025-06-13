// Easy Sheets Divider - Progressive File Loading System
// Processes Excel files in chunks with real-time progress indicators

class ProgressiveLoader {
    constructor(memoryManager, languageManager) {
        this.memoryManager = memoryManager;
        this.languageManager = languageManager;
        
        this.config = {
            chunkSize: 10 * 1024 * 1024, // 10MB chunks
            maxConcurrentChunks: 3,
            progressUpdateInterval: 100, // Update progress every 100ms
            timeEstimationSamples: 10 // Use last 10 samples for time estimation
        };
        
        this.state = {
            isLoading: false,
            currentFile: null,
            totalChunks: 0,
            processedChunks: 0,
            startTime: 0,
            lastUpdateTime: 0,
            processingTimes: [],
            estimatedTimeRemaining: 0,
            currentOperation: '',
            bytesProcessed: 0,
            totalBytes: 0
        };
        
        this.callbacks = {
            onProgress: null,
            onChunkComplete: null,
            onComplete: null,
            onError: null
        };
        
        this.activeChunks = new Map();
        this.progressElement = null;
        
        this.init();
    }
    
    init() {
        this.createProgressUI();
        this.setupEventListeners();
    }
    
    // Create progress UI elements
    createProgressUI() {
        // Create progress modal
        const progressModal = document.createElement('div');
        progressModal.id = 'progressModal';
        progressModal.className = 'modal progress-modal';
        progressModal.style.display = 'none';
        
        progressModal.innerHTML = `
            <div class="modal-content progress-modal-content">
                <div class="modal-header">
                    <h2>
                        <i class="fas fa-cog fa-spin"></i>
                        <span data-translate="processingFile">Processing File</span>
                    </h2>
                </div>
                <div class="modal-body">
                    <div class="progress-container">
                        <div class="progress-info">
                            <div class="file-info">
                                <span class="file-name" id="progressFileName">filename.xlsx</span>
                                <span class="file-size" id="progressFileSize">0 MB</span>
                            </div>
                            <div class="progress-stats">
                                <div class="stat-item">
                                    <span class="stat-label" data-translate="progress">Progress</span>
                                    <span class="stat-value" id="progressPercentage">0%</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label" data-translate="timeRemaining">Time Remaining</span>
                                    <span class="stat-value" id="progressTimeRemaining">--:--</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label" data-translate="currentOperation">Current Operation</span>
                                    <span class="stat-value" id="progressCurrentOperation">Initializing...</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="progressFill"></div>
                                <div class="progress-text" id="progressText">0%</div>
                            </div>
                        </div>
                        
                        <div class="chunk-progress">
                            <div class="chunk-info">
                                <span data-translate="chunksProcessed">Chunks Processed</span>
                                <span id="chunkProgress">0 / 0</span>
                            </div>
                            <div class="memory-info">
                                <span data-translate="memoryUsage">Memory Usage</span>
                                <span id="memoryUsage">0%</span>
                            </div>
                        </div>
                        
                        <div class="processing-details">
                            <div class="detail-item">
                                <span data-translate="bytesProcessed">Bytes Processed</span>
                                <span id="bytesProcessed">0 MB / 0 MB</span>
                            </div>
                            <div class="detail-item">
                                <span data-translate="processingSpeed">Processing Speed</span>
                                <span id="processingSpeed">0 MB/s</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="progress-actions">
                        <button class="btn btn-secondary" id="pauseProcessing" data-translate="pause">Pause</button>
                        <button class="btn btn-danger" id="cancelProcessing" data-translate="cancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(progressModal);
        this.progressElement = progressModal;
    }
    
    // Setup event listeners
    setupEventListeners() {
        // Pause button
        document.getElementById('pauseProcessing')?.addEventListener('click', () => {
            this.pauseProcessing();
        });
        
        // Cancel button
        document.getElementById('cancelProcessing')?.addEventListener('click', () => {
            this.cancelProcessing();
        });
        
        // Memory manager callbacks
        if (this.memoryManager) {
            this.memoryManager.setCallbacks({
                onUpdate: (stats) => this.updateMemoryDisplay(stats),
                onWarning: (stats) => this.handleMemoryWarning(stats),
                onCritical: (stats) => this.handleMemoryCritical(stats)
            });
        }
    }
    
    // Start progressive loading of file
    async loadFile(file, options = {}) {
        if (this.state.isLoading) {
            throw new Error('Another file is currently being processed');
        }
        
        try {
            // Validate file size
            if (this.memoryManager) {
                this.memoryManager.validateFileSize(file.size);
            }
            
            // Initialize state
            this.initializeLoadingState(file, options);
            
            // Show progress modal
            this.showProgressModal();
            
            // Start processing
            const result = await this.processFileInChunks(file, options);
            
            // Complete processing
            this.completeProcessing(result);
            
            return result;
            
        } catch (error) {
            this.handleError(error);
            throw error;
        } finally {
            this.cleanup();
        }
    }
    
    // Initialize loading state
    initializeLoadingState(file, options) {
        const chunkSize = this.memoryManager ? 
            this.memoryManager.calculateChunkSize(file.size) : 
            this.config.chunkSize;
        
        this.state = {
            isLoading: true,
            currentFile: file,
            totalChunks: Math.ceil(file.size / chunkSize),
            processedChunks: 0,
            startTime: Date.now(),
            lastUpdateTime: Date.now(),
            processingTimes: [],
            estimatedTimeRemaining: 0,
            currentOperation: this.languageManager?.translate('initializing') || 'Initializing...',
            bytesProcessed: 0,
            totalBytes: file.size,
            chunkSize: chunkSize,
            options: options
        };
        
        this.activeChunks.clear();
    }
    
    // Process file in chunks
    async processFileInChunks(file, options) {
        const chunks = [];
        const chunkSize = this.state.chunkSize;
        
        // Update operation status
        this.updateOperation('readingFile');
        
        // Read file in chunks
        for (let offset = 0; offset < file.size; offset += chunkSize) {
            if (!this.state.isLoading) {
                throw new Error('Processing cancelled');
            }
            
            const chunk = file.slice(offset, offset + chunkSize);
            const chunkData = await this.readChunk(chunk, offset);
            
            chunks.push(chunkData);
            this.updateProgress();
            
            // Memory management
            if (this.memoryManager && this.state.processedChunks % 5 === 0) {
                this.memoryManager.triggerGarbageCollection();
            }
        }
        
        // Process chunks based on file type
        this.updateOperation('processingData');
        const result = await this.processChunks(chunks, options);
        
        return result;
    }
    
    // Read individual chunk
    async readChunk(chunk, offset) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                const chunkData = {
                    data: event.target.result,
                    offset: offset,
                    size: chunk.size
                };
                
                this.state.processedChunks++;
                this.state.bytesProcessed += chunk.size;
                
                // Track processing time
                const now = Date.now();
                const chunkTime = now - this.state.lastUpdateTime;
                this.state.processingTimes.push(chunkTime);
                
                if (this.state.processingTimes.length > this.config.timeEstimationSamples) {
                    this.state.processingTimes.shift();
                }
                
                this.state.lastUpdateTime = now;
                
                resolve(chunkData);
            };
            
            reader.onerror = () => {
                reject(new Error(`Failed to read chunk at offset ${offset}`));
            };
            
            reader.readAsArrayBuffer(chunk);
        });
    }
    
    // Process all chunks
    async processChunks(chunks, options) {
        // Combine chunks back into complete file data
        const totalSize = chunks.reduce((sum, chunk) => sum + chunk.size, 0);
        const combinedData = new Uint8Array(totalSize);
        
        let offset = 0;
        for (const chunk of chunks) {
            const chunkArray = new Uint8Array(chunk.data);
            combinedData.set(chunkArray, offset);
            offset += chunkArray.length;
        }
        
        // Process with existing Excel processing logic
        this.updateOperation('parsingExcel');
        
        // This would integrate with the existing Excel processing
        // For now, return the combined data
        return {
            data: combinedData,
            size: totalSize,
            chunks: chunks.length,
            processingTime: Date.now() - this.state.startTime
        };
    }
    
    // Update progress display
    updateProgress() {
        const percentage = (this.state.processedChunks / this.state.totalChunks) * 100;
        const bytesPercentage = (this.state.bytesProcessed / this.state.totalBytes) * 100;
        
        // Calculate estimated time remaining
        this.calculateTimeRemaining();
        
        // Update UI elements
        this.updateProgressUI(percentage, bytesPercentage);
        
        // Call progress callback
        if (this.callbacks.onProgress) {
            this.callbacks.onProgress({
                percentage: percentage,
                bytesProcessed: this.state.bytesProcessed,
                totalBytes: this.state.totalBytes,
                chunksProcessed: this.state.processedChunks,
                totalChunks: this.state.totalChunks,
                timeRemaining: this.state.estimatedTimeRemaining,
                currentOperation: this.state.currentOperation
            });
        }
    }
    
    // Calculate estimated time remaining
    calculateTimeRemaining() {
        if (this.state.processingTimes.length === 0) {
            this.state.estimatedTimeRemaining = 0;
            return;
        }
        
        const avgChunkTime = this.state.processingTimes.reduce((sum, time) => sum + time, 0) / this.state.processingTimes.length;
        const remainingChunks = this.state.totalChunks - this.state.processedChunks;
        this.state.estimatedTimeRemaining = Math.max(0, remainingChunks * avgChunkTime);
    }
    
    // Update progress UI
    updateProgressUI(percentage, bytesPercentage) {
        // Update progress bar
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${Math.round(percentage)}%`;
        }
        
        // Update statistics
        document.getElementById('progressPercentage').textContent = `${Math.round(percentage)}%`;
        document.getElementById('progressTimeRemaining').textContent = this.formatTime(this.state.estimatedTimeRemaining);
        document.getElementById('progressCurrentOperation').textContent = this.state.currentOperation;
        document.getElementById('chunkProgress').textContent = `${this.state.processedChunks} / ${this.state.totalChunks}`;
        document.getElementById('bytesProcessed').textContent = `${this.formatBytes(this.state.bytesProcessed)} / ${this.formatBytes(this.state.totalBytes)}`;
        
        // Calculate processing speed
        const elapsedTime = (Date.now() - this.state.startTime) / 1000; // seconds
        const speed = elapsedTime > 0 ? this.state.bytesProcessed / elapsedTime : 0;
        document.getElementById('processingSpeed').textContent = `${this.formatBytes(speed)}/s`;
    }
    
    // Update current operation
    updateOperation(operationKey) {
        this.state.currentOperation = this.languageManager?.translate(operationKey) || operationKey;
    }
    
    // Show progress modal
    showProgressModal() {
        if (this.progressElement) {
            // Update file info
            document.getElementById('progressFileName').textContent = this.state.currentFile.name;
            document.getElementById('progressFileSize').textContent = this.formatBytes(this.state.currentFile.size);
            
            this.progressElement.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Hide progress modal
    hideProgressModal() {
        if (this.progressElement) {
            this.progressElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Update memory display
    updateMemoryDisplay(stats) {
        const memoryElement = document.getElementById('memoryUsage');
        if (memoryElement) {
            memoryElement.textContent = `${Math.round(stats.percentage)}%`;
            
            // Color coding for memory usage
            if (stats.percentage >= 80) {
                memoryElement.style.color = '#ff6b6b';
            } else if (stats.percentage >= 60) {
                memoryElement.style.color = '#ffa726';
            } else {
                memoryElement.style.color = '#4caf50';
            }
        }
    }
    
    // Handle memory warning
    handleMemoryWarning(stats) {
        console.warn('Progressive Loader: Memory warning during processing');
        // Could pause processing or reduce chunk size
    }
    
    // Handle critical memory
    handleMemoryCritical(stats) {
        console.error('Progressive Loader: Critical memory usage - pausing processing');
        this.pauseProcessing();
    }
    
    // Pause processing
    pauseProcessing() {
        this.state.isLoading = false;
        const pauseBtn = document.getElementById('pauseProcessing');
        if (pauseBtn) {
            pauseBtn.textContent = this.languageManager?.translate('resume') || 'Resume';
        }
    }
    
    // Cancel processing
    cancelProcessing() {
        this.state.isLoading = false;
        this.hideProgressModal();
        
        if (this.callbacks.onError) {
            this.callbacks.onError(new Error('Processing cancelled by user'));
        }
    }
    
    // Complete processing
    completeProcessing(result) {
        this.hideProgressModal();
        
        if (this.callbacks.onComplete) {
            this.callbacks.onComplete(result);
        }
    }
    
    // Handle errors
    handleError(error) {
        this.hideProgressModal();
        console.error('Progressive Loader: Error during processing:', error);
        
        if (this.callbacks.onError) {
            this.callbacks.onError(error);
        }
    }
    
    // Cleanup resources
    cleanup() {
        this.state.isLoading = false;
        this.activeChunks.clear();
        
        // Trigger garbage collection
        if (this.memoryManager) {
            this.memoryManager.triggerGarbageCollection();
        }
    }
    
    // Set callback functions
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
    }
    
    // Format time in mm:ss format
    formatTime(milliseconds) {
        if (!milliseconds || milliseconds <= 0) return '--:--';
        
        const seconds = Math.ceil(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // Format bytes for display
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Get current progress status
    getProgressStatus() {
        return {
            isLoading: this.state.isLoading,
            percentage: (this.state.processedChunks / this.state.totalChunks) * 100,
            bytesProcessed: this.state.bytesProcessed,
            totalBytes: this.state.totalBytes,
            timeRemaining: this.state.estimatedTimeRemaining,
            currentOperation: this.state.currentOperation
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressiveLoader;
} else if (typeof window !== 'undefined') {
    window.ProgressiveLoader = ProgressiveLoader;
}
