// Enhanced Drag and Drop for Easy Sheets Divider
// Advanced file handling with visual feedback and validation

class EnhancedDragDrop {
    constructor() {
        this.dropZones = [];
        this.activeDropZone = null;
        this.dragCounter = 0;
        this.supportedTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.ms-excel', // .xls
            'text/csv', // .csv
            'application/csv', // .csv
            'application/vnd.oasis.opendocument.spreadsheet', // .ods
        ];
        this.supportedExtensions = ['.xlsx', '.xls', '.csv', '.ods', '.gsheet', '.fods'];
        this.maxFileSize = 500 * 1024 * 1024; // 500MB
        this.maxFiles = 50; // Maximum files for batch processing
        
        this.init();
    }

    init() {
        this.setupDropZones();
        this.setupGlobalDragHandlers();
        this.createVisualFeedback();
    }

    setupDropZones() {
        // Primary drop zone
        const primaryDropZone = document.getElementById('dropArea');
        if (primaryDropZone) {
            this.registerDropZone(primaryDropZone, {
                onDrop: (files) => this.handlePrimaryDrop(files),
                onDragEnter: () => this.handleDragEnter(primaryDropZone),
                onDragLeave: () => this.handleDragLeave(primaryDropZone),
                allowMultiple: true
            });
        }

        // Body as fallback drop zone
        this.registerDropZone(document.body, {
            onDrop: (files) => this.handleFallbackDrop(files),
            onDragEnter: () => this.showGlobalDropIndicator(),
            onDragLeave: () => this.hideGlobalDropIndicator(),
            allowMultiple: true,
            isGlobal: true
        });
    }

    registerDropZone(element, options = {}) {
        const dropZone = {
            element,
            options: {
                allowMultiple: true,
                validateFiles: true,
                showPreview: true,
                ...options
            }
        };

        this.dropZones.push(dropZone);
        this.setupDropZoneEvents(dropZone);
    }

    setupDropZoneEvents(dropZone) {
        const { element, options } = dropZone;

        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            element.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });

        // Drag enter
        element.addEventListener('dragenter', (e) => {
            this.dragCounter++;
            if (options.onDragEnter) {
                options.onDragEnter(e);
            }
            this.addDragOverEffect(element);
        });

        // Drag over
        element.addEventListener('dragover', (e) => {
            e.dataTransfer.dropEffect = 'copy';
            this.updateDragFeedback(e);
        });

        // Drag leave
        element.addEventListener('dragleave', (e) => {
            this.dragCounter--;
            if (this.dragCounter === 0) {
                if (options.onDragLeave) {
                    options.onDragLeave(e);
                }
                this.removeDragOverEffect(element);
            }
        });

        // Drop
        element.addEventListener('drop', (e) => {
            this.dragCounter = 0;
            this.removeDragOverEffect(element);
            
            const files = Array.from(e.dataTransfer.files);
            
            if (options.validateFiles) {
                const validation = this.validateFiles(files, options.allowMultiple);
                if (!validation.valid) {
                    this.showValidationError(validation.errors);
                    return;
                }
            }
            
            if (options.onDrop) {
                options.onDrop(files, e);
            }
        });
    }

    setupGlobalDragHandlers() {
        // Prevent default drag behavior on the entire window
        window.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        window.addEventListener('drop', (e) => {
            e.preventDefault();
        });

        // Reset drag counter when leaving window
        window.addEventListener('dragleave', (e) => {
            if (e.clientX === 0 && e.clientY === 0) {
                this.dragCounter = 0;
                this.hideGlobalDropIndicator();
            }
        });
    }

    createVisualFeedback() {
        // Create global drop indicator
        const globalIndicator = document.createElement('div');
        globalIndicator.id = 'globalDropIndicator';
        globalIndicator.className = 'global-drop-indicator';
        globalIndicator.innerHTML = `
            <div class="drop-indicator-content">
                <div class="drop-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>
                <div class="drop-text">
                    <h3>Drop files here to upload</h3>
                    <p>Supports Excel, CSV, and OpenOffice files</p>
                </div>
            </div>
        `;
        globalIndicator.style.display = 'none';
        document.body.appendChild(globalIndicator);

        // Create file preview overlay
        const previewOverlay = document.createElement('div');
        previewOverlay.id = 'filePreviewOverlay';
        previewOverlay.className = 'file-preview-overlay';
        previewOverlay.style.display = 'none';
        document.body.appendChild(previewOverlay);
    }

    validateFiles(files, allowMultiple = true) {
        const errors = [];
        const validFiles = [];

        // Check file count
        if (!allowMultiple && files.length > 1) {
            errors.push('Only one file is allowed in single file mode');
            return { valid: false, errors, validFiles };
        }

        if (files.length > this.maxFiles) {
            errors.push(`Maximum ${this.maxFiles} files allowed`);
            return { valid: false, errors, validFiles };
        }

        // Validate each file
        files.forEach((file, index) => {
            const fileErrors = this.validateSingleFile(file);
            if (fileErrors.length > 0) {
                errors.push(`File ${index + 1} (${file.name}): ${fileErrors.join(', ')}`);
            } else {
                validFiles.push(file);
            }
        });

        return {
            valid: errors.length === 0,
            errors,
            validFiles
        };
    }

    validateSingleFile(file) {
        const errors = [];

        // Check file type
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        const isValidType = this.supportedTypes.includes(file.type) || 
                           this.supportedExtensions.includes(extension);
        
        if (!isValidType) {
            errors.push('Unsupported file type');
        }

        // Check file size
        if (file.size > this.maxFileSize) {
            errors.push(`File too large (max ${this.formatFileSize(this.maxFileSize)})`);
        }

        // Check if file is empty
        if (file.size === 0) {
            errors.push('File is empty');
        }

        return errors;
    }

    addDragOverEffect(element) {
        element.classList.add('drag-over');
        
        // Add visual feedback
        if (element.id === 'dropArea') {
            this.showDropZoneFeedback(element);
        }
    }

    removeDragOverEffect(element) {
        element.classList.remove('drag-over');
        
        // Remove visual feedback
        if (element.id === 'dropArea') {
            this.hideDropZoneFeedback(element);
        }
    }

    showDropZoneFeedback(element) {
        const feedback = element.querySelector('.drop-feedback');
        if (!feedback) {
            const feedbackElement = document.createElement('div');
            feedbackElement.className = 'drop-feedback';
            feedbackElement.innerHTML = `
                <div class="drop-feedback-content">
                    <div class="drop-animation">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7,10 12,15 17,10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </div>
                    <span>Release to upload</span>
                </div>
            `;
            element.appendChild(feedbackElement);
        }
    }

    hideDropZoneFeedback(element) {
        const feedback = element.querySelector('.drop-feedback');
        if (feedback) {
            feedback.remove();
        }
    }

    showGlobalDropIndicator() {
        const indicator = document.getElementById('globalDropIndicator');
        if (indicator) {
            indicator.style.display = 'flex';
            indicator.classList.add('fade-in');
        }
    }

    hideGlobalDropIndicator() {
        const indicator = document.getElementById('globalDropIndicator');
        if (indicator) {
            indicator.style.display = 'none';
            indicator.classList.remove('fade-in');
        }
    }

    updateDragFeedback(event) {
        // Update visual feedback based on drag position
        const indicator = document.getElementById('globalDropIndicator');
        if (indicator && indicator.style.display !== 'none') {
            // Add subtle animation or position updates
            indicator.style.transform = `scale(${1 + Math.sin(Date.now() / 500) * 0.02})`;
        }
    }

    handlePrimaryDrop(files) {
        this.hideGlobalDropIndicator();
        
        if (window.app) {
            window.app.handleFiles(files);
        }
        
        this.showFilePreview(files);
    }

    handleFallbackDrop(files) {
        // Handle drops outside the main drop zone
        this.hideGlobalDropIndicator();
        
        if (window.app) {
            window.app.handleFiles(files);
        }
    }

    showFilePreview(files) {
        const overlay = document.getElementById('filePreviewOverlay');
        if (!overlay || files.length === 0) return;

        const fileList = Array.from(files).map(file => `
            <div class="preview-file-item">
                <div class="file-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                    </svg>
                </div>
                <div class="file-details">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${this.formatFileSize(file.size)}</div>
                </div>
                <div class="file-status">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                </div>
            </div>
        `).join('');

        overlay.innerHTML = `
            <div class="preview-content">
                <div class="preview-header">
                    <h3>Files Added Successfully</h3>
                    <button class="close-preview" onclick="this.parentElement.parentElement.parentElement.style.display='none'">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="preview-files">
                    ${fileList}
                </div>
            </div>
        `;

        overlay.style.display = 'flex';
        overlay.classList.add('fade-in');

        // Auto-hide after 3 seconds
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.classList.remove('fade-in');
        }, 3000);
    }

    showValidationError(errors) {
        if (window.app && window.app.showNotification) {
            const errorMessage = errors.length === 1 ? 
                errors[0] : 
                `Multiple errors:\n${errors.join('\n')}`;
            
            window.app.showNotification(errorMessage, 'error');
        } else {
            alert(`File validation failed:\n${errors.join('\n')}`);
        }
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Enable/disable drop zones
    enableDropZones() {
        this.dropZones.forEach(dropZone => {
            dropZone.element.style.pointerEvents = 'auto';
            dropZone.element.classList.remove('disabled');
        });
    }

    disableDropZones() {
        this.dropZones.forEach(dropZone => {
            dropZone.element.style.pointerEvents = 'none';
            dropZone.element.classList.add('disabled');
        });
    }

    // Programmatically trigger file selection
    triggerFileSelection(multiple = true) {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = multiple;
        input.accept = this.supportedExtensions.join(',');
        
        input.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            this.handlePrimaryDrop(files);
        });
        
        input.click();
    }

    // Get supported file types for display
    getSupportedTypes() {
        return {
            extensions: this.supportedExtensions,
            mimeTypes: this.supportedTypes,
            description: 'Excel, CSV, OpenOffice, and Google Sheets files'
        };
    }

    // Update configuration
    updateConfig(config) {
        if (config.maxFileSize) {
            this.maxFileSize = config.maxFileSize;
        }
        
        if (config.maxFiles) {
            this.maxFiles = config.maxFiles;
        }
        
        if (config.supportedExtensions) {
            this.supportedExtensions = config.supportedExtensions;
        }
        
        if (config.supportedTypes) {
            this.supportedTypes = config.supportedTypes;
        }
    }

    // Cleanup
    destroy() {
        // Remove global drop indicator
        const indicator = document.getElementById('globalDropIndicator');
        if (indicator) {
            indicator.remove();
        }

        // Remove preview overlay
        const overlay = document.getElementById('filePreviewOverlay');
        if (overlay) {
            overlay.remove();
        }

        // Clear drop zones
        this.dropZones = [];
        this.dragCounter = 0;
    }
}

// Create global enhanced drag drop instance
window.enhancedDragDrop = new EnhancedDragDrop();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedDragDrop;
}
