// Easy Sheets Divider - Enhanced Drag & Drop System
// Multi-file support with visual feedback and validation

class EnhancedDragDrop {
    constructor(app, languageManager) {
        this.app = app;
        this.languageManager = languageManager;
        
        this.dragState = {
            isDragging: false,
            dragCounter: 0,
            files: [],
            validFiles: [],
            invalidFiles: []
        };
        
        this.config = {
            maxFiles: 50,
            maxTotalSize: 2 * 1024 * 1024 * 1024, // 2GB total
            supportedExtensions: ['.xlsx', '.xls', '.csv', '.ods'],
            animationDuration: 300
        };
        
        this.elements = {
            uploadArea: null,
            dragOverlay: null,
            filePreview: null,
            validationStatus: null
        };
        
        this.init();
    }
    
    init() {
        this.createDragOverlay();
        this.setupDragDropListeners();
        this.enhanceUploadArea();
    }
    
    // Create drag overlay for visual feedback
    createDragOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'dragDropOverlay';
        overlay.className = 'drag-drop-overlay';
        overlay.style.display = 'none';
        
        overlay.innerHTML = `
            <div class="drag-overlay-content">
                <div class="drag-icon">
                    <i class="fas fa-cloud-upload-alt"></i>
                </div>
                <div class="drag-message">
                    <h3 data-translate="dropFilesHere">Drop files here</h3>
                    <p class="file-count" id="dragFileCount">0 files selected</p>
                    <p class="file-size" id="dragFileSize">0 MB total</p>
                </div>
                <div class="drag-validation" id="dragValidation">
                    <div class="validation-item valid" id="validFilesIndicator">
                        <i class="fas fa-check-circle"></i>
                        <span data-translate="validFiles">Valid files</span>
                        <span class="count" id="validCount">0</span>
                    </div>
                    <div class="validation-item invalid" id="invalidFilesIndicator">
                        <i class="fas fa-times-circle"></i>
                        <span data-translate="invalidFiles">Invalid files</span>
                        <span class="count" id="invalidCount">0</span>
                    </div>
                </div>
                <div class="drag-queue" id="dragQueue" style="display: none;">
                    <h4 data-translate="queuePosition">Queue Position</h4>
                    <div class="queue-list" id="queueList"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.elements.dragOverlay = overlay;
    }
    
    // Setup drag and drop event listeners
    setupDragDropListeners() {
        // Try both uploadArea and dropArea IDs for compatibility
        const uploadArea = document.getElementById('uploadArea') || document.getElementById('dropArea');
        if (!uploadArea) return;

        this.elements.uploadArea = uploadArea;

        // Prevent default drag behaviors only for drag events, not click events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            document.addEventListener(eventName, this.preventDragDefaults.bind(this), false);
            uploadArea.addEventListener(eventName, this.preventDragDefaults.bind(this), false);
        });

        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            document.addEventListener(eventName, this.handleDragEnter.bind(this), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            document.addEventListener(eventName, this.handleDragLeave.bind(this), false);
        });

        // Handle dropped files - only add to document to avoid duplicates
        // Note: We only provide visual feedback, the actual file handling is done by the main app
        document.addEventListener('drop', this.handleDrop.bind(this), false);
    }
    
    // Enhance upload area with better visual feedback
    enhanceUploadArea() {
        const uploadArea = this.elements.uploadArea;
        if (!uploadArea) return;

        // Add enhanced styling classes
        uploadArea.classList.add('enhanced-upload-area');

        // Note: Click handling is done by the main app to avoid duplicate handlers
        
        // Create file preview area
        const previewArea = document.createElement('div');
        previewArea.className = 'file-preview-area';
        previewArea.id = 'filePreviewArea';
        previewArea.style.display = 'none';
        
        previewArea.innerHTML = `
            <div class="preview-header">
                <h4 data-translate="selectedFiles">Selected Files</h4>
                <button class="btn btn-sm btn-secondary" id="clearSelectedFiles">
                    <i class="fas fa-times"></i>
                    <span data-translate="clear">Clear</span>
                </button>
            </div>
            <div class="preview-list" id="previewList"></div>
            <div class="preview-summary" id="previewSummary">
                <div class="summary-item">
                    <span data-translate="totalFiles">Total Files:</span>
                    <span id="totalFilesCount">0</span>
                </div>
                <div class="summary-item">
                    <span data-translate="totalSize">Total Size:</span>
                    <span id="totalSizeDisplay">0 MB</span>
                </div>
                <div class="summary-item">
                    <span data-translate="validFilesCount">Valid Files:</span>
                    <span id="validFilesCount">0</span>
                </div>
            </div>
        `;
        
        uploadArea.parentNode.insertBefore(previewArea, uploadArea.nextSibling);
        this.elements.filePreview = previewArea;
        
        // Add clear button event listener
        document.getElementById('clearSelectedFiles')?.addEventListener('click', () => {
            this.clearSelectedFiles();
        });
    }
    
    // Prevent default drag behaviors (only for drag events, not click events)
    preventDragDefaults(e) {
        // Only prevent defaults for actual drag events
        if (e.type === 'dragenter' || e.type === 'dragover' || e.type === 'dragleave' || e.type === 'drop') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    
    // Handle drag enter
    handleDragEnter(e) {
        // Only handle if this is actually a drag event with files
        if (!e.dataTransfer || !e.dataTransfer.items || e.dataTransfer.items.length === 0) {
            return;
        }

        // Check if any of the dragged items are files
        const hasFiles = Array.from(e.dataTransfer.items).some(item => item.kind === 'file');
        if (!hasFiles) {
            return;
        }

        this.dragState.dragCounter++;

        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.dragState.isDragging = true;
            this.showDragOverlay();
            this.updateDragPreview(e.dataTransfer.items);
        }
    }
    
    // Handle drag leave
    handleDragLeave(e) {
        this.dragState.dragCounter--;
        
        if (this.dragState.dragCounter === 0) {
            this.dragState.isDragging = false;
            this.hideDragOverlay();
        }
    }
    
    // Handle file drop
    handleDrop(e) {
        // Only handle if this is actually a drop event with files
        if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length === 0) {
            return;
        }

        this.dragState.dragCounter = 0;
        this.dragState.isDragging = false;
        this.hideDragOverlay();

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            // Only provide visual feedback, don't prevent the original handler
            // The main app will handle the actual file processing
            this.showDropFeedback(files);
        }
    }
    
    // Show drag overlay
    showDragOverlay() {
        if (this.elements.dragOverlay) {
            this.elements.dragOverlay.style.display = 'flex';
            this.elements.uploadArea?.classList.add('drag-active');
            
            // Animate in
            setTimeout(() => {
                this.elements.dragOverlay.classList.add('visible');
            }, 10);
        }
    }
    
    // Hide drag overlay
    hideDragOverlay() {
        if (this.elements.dragOverlay) {
            this.elements.dragOverlay.classList.remove('visible');
            this.elements.uploadArea?.classList.remove('drag-active');
            
            // Animate out
            setTimeout(() => {
                this.elements.dragOverlay.style.display = 'none';
            }, this.config.animationDuration);
        }
    }
    
    // Update drag preview
    updateDragPreview(items) {
        const files = Array.from(items).filter(item => item.kind === 'file');
        const fileCount = files.length;
        let totalSize = 0;
        
        // Estimate total size (not always available during drag)
        files.forEach(item => {
            if (item.getAsFile) {
                const file = item.getAsFile();
                if (file) {
                    totalSize += file.size;
                }
            }
        });
        
        // Validate files
        const validation = this.validateDraggedFiles(files);
        
        // Update overlay content
        document.getElementById('dragFileCount').textContent = 
            this.languageManager?.translate('filesSelected', { count: fileCount }) || `${fileCount} files selected`;
        document.getElementById('dragFileSize').textContent = this.formatBytes(totalSize);
        document.getElementById('validCount').textContent = validation.valid;
        document.getElementById('invalidCount').textContent = validation.invalid;
        
        // Show/hide validation indicators
        const validIndicator = document.getElementById('validFilesIndicator');
        const invalidIndicator = document.getElementById('invalidFilesIndicator');
        
        if (validIndicator) {
            validIndicator.style.display = validation.valid > 0 ? 'flex' : 'none';
        }
        
        if (invalidIndicator) {
            invalidIndicator.style.display = validation.invalid > 0 ? 'flex' : 'none';
        }
        
        // Update queue if in multi-file mode
        if (this.app.processingMode === 'multi') {
            this.updateDragQueue(files);
        }
    }
    
    // Validate dragged files
    validateDraggedFiles(items) {
        let valid = 0;
        let invalid = 0;
        
        items.forEach(item => {
            if (item.getAsFile) {
                const file = item.getAsFile();
                if (file && this.isValidFile(file)) {
                    valid++;
                } else {
                    invalid++;
                }
            }
        });
        
        return { valid, invalid };
    }
    
    // Check if file is valid
    isValidFile(file) {
        if (!file || !file.name) return false;
        
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        return this.config.supportedExtensions.includes(extension);
    }
    
    // Update drag queue display
    updateDragQueue(files) {
        const queueElement = document.getElementById('dragQueue');
        const queueList = document.getElementById('queueList');
        
        if (!queueElement || !queueList) return;
        
        if (files.length > 1) {
            queueElement.style.display = 'block';
            
            queueList.innerHTML = files.slice(0, 5).map((item, index) => {
                const file = item.getAsFile ? item.getAsFile() : item;
                const isValid = file ? this.isValidFile(file) : false;
                
                return `
                    <div class="queue-item ${isValid ? 'valid' : 'invalid'}">
                        <span class="queue-position">${index + 1}</span>
                        <span class="queue-filename">${file ? file.name : 'Unknown'}</span>
                        <i class="fas fa-${isValid ? 'check' : 'times'}"></i>
                    </div>
                `;
            }).join('');
            
            if (files.length > 5) {
                queueList.innerHTML += `
                    <div class="queue-item more">
                        <span data-translate="andMore">...and ${files.length - 5} more</span>
                    </div>
                `;
            }
        } else {
            queueElement.style.display = 'none';
        }
    }
    
    // Show drop feedback (visual only, no file processing)
    showDropFeedback(files) {
        console.log('Enhanced drag & drop: Showing feedback for dropped files:', files.length);

        // Validate files for visual feedback only
        const validation = this.validateFiles(files);
        this.dragState.files = files;
        this.dragState.validFiles = validation.valid;
        this.dragState.invalidFiles = validation.invalid;

        // Show file preview for visual feedback
        this.showFilePreview(files, validation);

        // Show validation results as notifications
        this.showValidationResults(validation);
    }

    // Process dropped files (kept for compatibility but not used in drop handler)
    processDroppedFiles(files) {
        console.log('Processing dropped files:', files.length);

        // Validate files
        const validation = this.validateFiles(files);
        this.dragState.files = files;
        this.dragState.validFiles = validation.valid;
        this.dragState.invalidFiles = validation.invalid;

        // Show file preview
        this.showFilePreview(files, validation);

        // Handle based on mode
        if (this.app.processingMode === 'multi') {
            this.handleMultiFileDrop(validation.valid);
        } else {
            this.handleSingleFileDrop(validation.valid);
        }

        // Show validation results
        this.showValidationResults(validation);
    }
    
    // Validate files
    validateFiles(files) {
        const valid = [];
        const invalid = [];
        
        files.forEach(file => {
            if (this.isValidFile(file)) {
                valid.push(file);
            } else {
                invalid.push({
                    file: file,
                    reason: this.getValidationError(file)
                });
            }
        });
        
        return { valid, invalid };
    }
    
    // Get validation error reason
    getValidationError(file) {
        if (!file || !file.name) {
            return this.languageManager?.translate('invalidFile') || 'Invalid file';
        }
        
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        if (!this.config.supportedExtensions.includes(extension)) {
            return this.languageManager?.translate('unsupportedFormat') || 'Unsupported format';
        }
        
        return this.languageManager?.translate('unknownError') || 'Unknown error';
    }
    
    // Show file preview
    showFilePreview(files, validation) {
        const previewArea = this.elements.filePreview;
        if (!previewArea) return;
        
        const previewList = document.getElementById('previewList');
        if (!previewList) return;
        
        // Update summary
        document.getElementById('totalFilesCount').textContent = files.length;
        document.getElementById('totalSizeDisplay').textContent = this.formatBytes(
            files.reduce((sum, file) => sum + file.size, 0)
        );
        document.getElementById('validFilesCount').textContent = validation.valid.length;
        
        // Create file list
        previewList.innerHTML = files.map((file, index) => {
            const isValid = validation.valid.includes(file);
            const error = isValid ? null : validation.invalid.find(inv => inv.file === file)?.reason;
            
            return `
                <div class="preview-item ${isValid ? 'valid' : 'invalid'}">
                    <div class="preview-icon">
                        <i class="fas fa-${this.getFileIcon(file)}"></i>
                    </div>
                    <div class="preview-info">
                        <div class="preview-name">${file.name}</div>
                        <div class="preview-details">
                            ${this.formatBytes(file.size)} • ${isValid ? 'Valid' : error}
                        </div>
                    </div>
                    <div class="preview-status">
                        <i class="fas fa-${isValid ? 'check-circle' : 'times-circle'}"></i>
                    </div>
                </div>
            `;
        }).join('');
        
        previewArea.style.display = 'block';
    }
    
    // Get file icon based on extension
    getFileIcon(file) {
        const extension = file.name.split('.').pop().toLowerCase();
        
        switch (extension) {
            case 'xlsx':
            case 'xls':
                return 'file-excel';
            case 'csv':
                return 'file-csv';
            case 'ods':
                return 'file-alt';
            default:
                return 'file';
        }
    }
    
    // Handle single file drop
    handleSingleFileDrop(validFiles) {
        if (validFiles.length > 0) {
            // Use the existing app's drop handler to avoid conflicts
            const fakeEvent = {
                dataTransfer: {
                    files: validFiles
                },
                preventDefault: () => {},
                stopPropagation: () => {}
            };

            // Call the app's existing handleDrop method
            if (this.app.handleDrop) {
                this.app.handleDrop(fakeEvent);
            } else {
                // Fallback to processFile
                this.app.processFile(validFiles[0]);
            }
        }
    }

    // Handle multi-file drop
    handleMultiFileDrop(validFiles) {
        if (validFiles.length > 0) {
            // Use the existing app's multi-file handler
            if (this.app.handleMultiFileSelect) {
                this.app.handleMultiFileSelect(validFiles);
            }
        }
    }
    
    // Show validation results
    showValidationResults(validation) {
        if (validation.invalid.length > 0) {
            const message = this.languageManager?.translate('someFilesInvalid', { 
                count: validation.invalid.length 
            }) || `${validation.invalid.length} files were invalid and skipped`;
            
            this.app.showNotification(message, 'warning');
        }
        
        if (validation.valid.length > 0) {
            const message = this.languageManager?.translate('filesAdded', { 
                count: validation.valid.length 
            }) || `${validation.valid.length} files added successfully`;
            
            this.app.showBriefNotification(message);
        }
    }
    
    // Clear selected files
    clearSelectedFiles() {
        this.dragState.files = [];
        this.dragState.validFiles = [];
        this.dragState.invalidFiles = [];
        
        if (this.elements.filePreview) {
            this.elements.filePreview.style.display = 'none';
        }
    }
    
    // Format bytes for display
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Get current drag state
    getDragState() {
        return this.dragState;
    }
    
    // Cleanup
    destroy() {
        if (this.elements.dragOverlay) {
            this.elements.dragOverlay.remove();
        }

        // Remove event listeners
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            document.removeEventListener(eventName, this.preventDragDefaults.bind(this), false);
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedDragDrop;
} else if (typeof window !== 'undefined') {
    window.EnhancedDragDrop = EnhancedDragDrop;
}
