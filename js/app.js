// Easy Sheets Divider - Main Application Logic
// Privacy-first Excel/CSV file splitting with advanced features

class EasySheetsApp {
    constructor() {
        this.currentFiles = [];
        this.processedResults = [];
        this.isProcessing = false;
        this.processingMode = 'single';
        this.fileQueue = [];
        this.translations = {};
        this.currentLanguage = 'en';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDragAndDrop();
        this.loadTranslations();
        this.initializeUI();
        this.setupServiceWorker();
    }

    setupEventListeners() {
        // Processing mode selection
        document.querySelectorAll('input[name="processingMode"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.processingMode = e.target.value;
                this.updateUIForMode();
            });
        });

        // File input
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        }

        // Split method changes
        document.querySelectorAll('input[name="splitMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.updateSplitOptions(e.target.value));
        });

        // Multi-file split method changes
        document.querySelectorAll('input[name="multiSplitMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.updateMultiSplitOptions(e.target.value));
        });

        // Action buttons
        this.setupButtonListeners();

        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Modal close buttons
        document.querySelectorAll('.close-button').forEach(btn => {
            btn.addEventListener('click', (e) => this.closeModal(e.target.closest('.modal')));
        });

        // Window click to close modals
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target);
            }
        });
    }

    setupButtonListeners() {
        // Split button
        const splitButton = document.getElementById('splitButton');
        if (splitButton) {
            splitButton.addEventListener('click', () => this.startSplitting());
        }

        // Cancel button
        const cancelButton = document.getElementById('cancelButton');
        if (cancelButton) {
            cancelButton.addEventListener('click', () => this.cancelProcessing());
        }

        // Batch processing buttons
        const startBatchButton = document.getElementById('startBatchProcessingButton');
        if (startBatchButton) {
            startBatchButton.addEventListener('click', () => this.startBatchProcessing());
        }

        const cancelBatchButton = document.getElementById('cancelBatchProcessingButton');
        if (cancelBatchButton) {
            cancelBatchButton.addEventListener('click', () => this.cancelBatchProcessing());
        }

        // Clear file button
        const clearFileButton = document.getElementById('clearFileButton');
        if (clearFileButton) {
            clearFileButton.addEventListener('click', () => this.clearFiles());
        }

        // Results buttons
        const downloadAllButton = document.getElementById('downloadAllButton');
        if (downloadAllButton) {
            downloadAllButton.addEventListener('click', () => this.downloadAllFiles());
        }

        const previewButton = document.getElementById('previewButton');
        if (previewButton) {
            previewButton.addEventListener('click', () => this.showPreview());
        }

        const resetButton = document.getElementById('resetButton');
        if (resetButton) {
            resetButton.addEventListener('click', () => this.resetApplication());
        }

        // Queue management buttons
        const addMoreFilesButton = document.getElementById('addMoreFilesButton');
        if (addMoreFilesButton) {
            addMoreFilesButton.addEventListener('click', () => this.addMoreFiles());
        }

        const clearQueueButton = document.getElementById('clearQueueButton');
        if (clearQueueButton) {
            clearQueueButton.addEventListener('click', () => this.clearQueue());
        }

        // Multi-file results buttons
        const downloadAllMultiButton = document.getElementById('downloadAllMultiButton');
        if (downloadAllMultiButton) {
            downloadAllMultiButton.addEventListener('click', () => this.downloadAllMultiFiles());
        }

        const clearMultiResultsButton = document.getElementById('clearMultiResultsButton');
        if (clearMultiResultsButton) {
            clearMultiResultsButton.addEventListener('click', () => this.clearMultiResults());
        }

        // Completion modal buttons
        const viewResultsButton = document.getElementById('viewResultsButton');
        if (viewResultsButton) {
            viewResultsButton.addEventListener('click', () => this.viewResults());
        }

        const dismissNotificationButton = document.getElementById('dismissNotificationButton');
        if (dismissNotificationButton) {
            dismissNotificationButton.addEventListener('click', () => this.dismissNotification());
        }
    }

    setupDragAndDrop() {
        const dropArea = document.getElementById('dropArea');
        if (!dropArea) return;

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, this.preventDefaults, false);
            document.body.addEventListener(eventName, this.preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add('drag-over'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove('drag-over'), false);
        });

        dropArea.addEventListener('drop', (e) => this.handleDrop(e), false);
    }

    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        this.handleFiles(files);
    }

    handleFileSelect(e) {
        const files = e.target.files;
        this.handleFiles(files);
    }

    handleFiles(files) {
        if (this.processingMode === 'single') {
            if (files.length > 1) {
                this.showNotification('Please select only one file for single file mode.', 'warning');
                return;
            }
            this.currentFiles = Array.from(files);
            this.displayFileInfo(files[0]);
        } else {
            // Multi-file mode
            Array.from(files).forEach(file => {
                if (this.isValidFile(file)) {
                    this.fileQueue.push(file);
                }
            });
            this.updateFileQueue();
        }
        
        this.updateUI();
    }

    isValidFile(file) {
        const validTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.ms-excel', // .xls
            'text/csv', // .csv
            'application/csv', // .csv
            'application/vnd.oasis.opendocument.spreadsheet', // .ods
        ];
        
        const validExtensions = ['.xlsx', '.xls', '.csv', '.ods', '.gsheet', '.fods'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        
        return validTypes.includes(file.type) || validExtensions.includes(fileExtension);
    }

    displayFileInfo(file) {
        const fileInfo = document.getElementById('fileInfo');
        if (!fileInfo) return;

        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        const fileType = this.getFileTypeDisplay(file);
        
        fileInfo.innerHTML = `
            <div class="file-details">
                <div class="file-name">${file.name}</div>
                <div class="file-meta">
                    <span class="file-size">${sizeInMB} MB</span>
                    <span class="file-type">${fileType}</span>
                </div>
            </div>
        `;
        
        fileInfo.style.display = 'block';
        
        // Show file actions
        const fileActions = document.getElementById('fileActions');
        if (fileActions) {
            fileActions.style.display = 'block';
        }
        
        // Read file to get sheet information
        this.readFileForPreview(file);
    }

    getFileTypeDisplay(file) {
        const extension = file.name.split('.').pop().toLowerCase();
        const typeMap = {
            'xlsx': 'Excel Workbook',
            'xls': 'Excel 97-2003',
            'csv': 'CSV File',
            'ods': 'OpenOffice Calc',
            'gsheet': 'Google Sheets',
            'fods': 'OpenDocument Flat XML'
        };
        return typeMap[extension] || 'Spreadsheet';
    }

    async readFileForPreview(file) {
        try {
            this.showUploadIndicator(true, 'Reading file...');
            
            const arrayBuffer = await file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            
            // Store workbook for later use
            this.currentWorkbook = workbook;
            
            // Update sheet list for worksheet splitting
            this.updateSheetList(workbook.SheetNames);
            
            // Update column options for column splitting
            if (workbook.SheetNames.length > 0) {
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                this.updateColumnOptions(firstSheet);
            }
            
            this.showUploadIndicator(false);
            
        } catch (error) {
            console.error('Error reading file:', error);
            this.showUploadIndicator(false);
            this.showNotification('Error reading file. Please ensure it\'s a valid spreadsheet file.', 'error');
        }
    }

    updateSheetList(sheetNames) {
        const sheetList = document.getElementById('sheetList');
        if (!sheetList) return;

        sheetList.innerHTML = '';
        
        sheetNames.forEach((name, index) => {
            const checkbox = document.createElement('label');
            checkbox.className = 'sheet-checkbox';
            checkbox.innerHTML = `
                <input type="checkbox" value="${name}" ${index === 0 ? 'checked' : ''}>
                <span>${name}</span>
            `;
            sheetList.appendChild(checkbox);
        });
    }

    updateColumnOptions(sheet) {
        const columnSelect = document.getElementById('columnSelect');
        if (!columnSelect) return;

        columnSelect.innerHTML = '<option value="">Select column...</option>';
        
        // Get first row to extract column headers
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const firstRow = range.s.r;
        
        for (let col = range.s.c; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: firstRow, c: col });
            const cell = sheet[cellAddress];
            const columnName = cell ? cell.v : `Column ${col + 1}`;
            const columnLetter = XLSX.utils.encode_col(col);
            
            const option = document.createElement('option');
            option.value = columnLetter;
            option.textContent = `${columnLetter}: ${columnName}`;
            columnSelect.appendChild(option);
        }
    }

    updateUIForMode() {
        const singleMode = this.processingMode === 'single';
        
        // Show/hide appropriate sections
        const optionsSection = document.getElementById('optionsSection');
        const outputSection = document.getElementById('outputSection');
        const multiOptionsSection = document.getElementById('multiOptionsSection');
        const fileQueueSection = document.getElementById('fileQueueSection');
        
        if (optionsSection) optionsSection.style.display = singleMode ? 'block' : 'none';
        if (outputSection) outputSection.style.display = singleMode ? 'block' : 'none';
        if (multiOptionsSection) multiOptionsSection.style.display = singleMode ? 'none' : 'block';
        if (fileQueueSection) fileQueueSection.style.display = singleMode ? 'none' : 'block';
        
        // Update file input to allow multiple files in multi mode
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.multiple = !singleMode;
        }
        
        // Update upload text
        const uploadText = document.getElementById('uploadText');
        if (uploadText) {
            uploadText.textContent = singleMode ? 'Drop or click' : 'Drop or click (multiple files)';
        }
        
        // Clear current state when switching modes
        this.clearFiles();
        this.clearQueue();
    }

    updateSplitOptions(method) {
        // Hide all option panels
        document.querySelectorAll('.sidebar-details').forEach(panel => {
            panel.style.display = 'none';
        });
        
        // Show selected option panel
        const panelMap = {
            'bySheet': 'sheetOptions',
            'byColumn': 'columnOptions',
            'byRowCount': 'rowCountOptions',
            'byFileSize': 'fileSizeOptions'
        };
        
        const panelId = panelMap[method];
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.style.display = 'block';
        }
    }

    updateMultiSplitOptions(method) {
        // Hide all multi option panels
        document.getElementById('multiRowCountOptions').style.display = 'none';
        document.getElementById('multiFileSizeOptions').style.display = 'none';
        
        // Show selected option panel
        if (method === 'byRowCount') {
            document.getElementById('multiRowCountOptions').style.display = 'block';
        } else if (method === 'byFileSize') {
            document.getElementById('multiFileSizeOptions').style.display = 'block';
        }
    }

    showUploadIndicator(show, text = 'Reading...') {
        const indicator = document.getElementById('uploadIndicator');
        const message = document.getElementById('fileMessage');
        const indicatorText = document.getElementById('uploadIndicatorText');
        
        if (indicator && message) {
            indicator.style.display = show ? 'flex' : 'none';
            message.style.display = show ? 'none' : 'flex';
            
            if (indicatorText && text) {
                indicatorText.textContent = text;
            }
        }
    }

    updateUI() {
        const hasFiles = this.currentFiles.length > 0 || this.fileQueue.length > 0;
        
        // Show/hide sections based on file presence
        const optionsSection = document.getElementById('optionsSection');
        const outputSection = document.getElementById('outputSection');
        const multiOptionsSection = document.getElementById('multiOptionsSection');
        
        if (this.processingMode === 'single' && this.currentFiles.length > 0) {
            if (optionsSection) optionsSection.style.display = 'block';
            if (outputSection) outputSection.style.display = 'block';
        } else if (this.processingMode === 'multi' && this.fileQueue.length > 0) {
            if (multiOptionsSection) multiOptionsSection.style.display = 'block';
        }
        
        // Update content status
        this.updateContentStatus();
    }

    updateContentStatus() {
        const contentStatus = document.getElementById('contentStatus');
        if (!contentStatus) return;
        
        let statusText = '';
        
        if (this.processingMode === 'single') {
            if (this.currentFiles.length === 0) {
                statusText = 'Upload a file to begin splitting';
            } else {
                statusText = 'Configure split options and click "Split File"';
            }
        } else {
            if (this.fileQueue.length === 0) {
                statusText = 'Add files to the queue to begin batch processing';
            } else {
                statusText = `${this.fileQueue.length} file(s) in queue - ready to process`;
            }
        }
        
        contentStatus.textContent = statusText;
    }

    clearFiles() {
        this.currentFiles = [];
        this.currentWorkbook = null;
        
        // Clear file input
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = '';
        }
        
        // Hide file info and actions
        const fileInfo = document.getElementById('fileInfo');
        const fileActions = document.getElementById('fileActions');
        
        if (fileInfo) fileInfo.style.display = 'none';
        if (fileActions) fileActions.style.display = 'none';
        
        // Hide options sections
        const optionsSection = document.getElementById('optionsSection');
        const outputSection = document.getElementById('outputSection');
        
        if (optionsSection) optionsSection.style.display = 'none';
        if (outputSection) outputSection.style.display = 'none';
        
        this.updateContentStatus();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
        
        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            });
        }
    }

    async loadTranslations() {
        // Basic translations - can be expanded
        this.translations = {
            en: {
                appTitle: 'Easy Sheets Divider',
                appSubtitle: 'Split large spreadsheet files into smaller, manageable spreadsheets',
                // Add more translations as needed
            }
        };
    }

    initializeUI() {
        // Initialize any UI components that need setup
        this.updateUIForMode();
        this.updateContentStatus();
    }

    async setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('./sw.js');
                console.log('Service Worker registered successfully:', registration);
            } catch (error) {
                console.log('Service Worker registration failed:', error);
            }
        }
    }

    // File splitting functionality
    async startSplitting() {
        if (!this.currentFiles.length || !this.currentWorkbook) {
            this.showNotification('Please upload a file first.', 'warning');
            return;
        }

        if (this.isProcessing) {
            this.showNotification('Processing is already in progress.', 'warning');
            return;
        }

        try {
            this.isProcessing = true;
            this.showProcessingUI(true);

            const splitMethod = document.querySelector('input[name="splitMethod"]:checked')?.value;
            const outputFormat = document.querySelector('input[name="outputFormat"]:checked')?.value || 'xlsx';
            const namingScheme = document.querySelector('input[name="namingScheme"]:checked')?.value || 'sequential';
            const outputPrefix = document.getElementById('outputPrefix')?.value || 'split';

            // Start progress tracking
            window.progressiveLoader.startLoading('splitting', 100);

            let results = [];

            switch (splitMethod) {
                case 'bySheet':
                    results = await this.splitByWorksheet(outputFormat, namingScheme, outputPrefix);
                    break;
                case 'byColumn':
                    results = await this.splitByColumn(outputFormat, namingScheme, outputPrefix);
                    break;
                case 'byRowCount':
                    results = await this.splitByRowCount(outputFormat, namingScheme, outputPrefix);
                    break;
                case 'byFileSize':
                    results = await this.splitByFileSize(outputFormat, namingScheme, outputPrefix);
                    break;
                default:
                    throw new Error('Invalid split method selected');
            }

            this.processedResults = results;
            this.displayResults(results);
            this.showCompletionNotification(results.length);

            window.progressiveLoader.completeLoading('Splitting completed successfully!');

        } catch (error) {
            console.error('Splitting error:', error);
            this.showNotification(`Error during splitting: ${error.message}`, 'error');
            window.progressiveLoader.handleError(error, 'Splitting failed');
        } finally {
            this.isProcessing = false;
            this.showProcessingUI(false);
        }
    }

    async splitByWorksheet(outputFormat, namingScheme, outputPrefix) {
        const selectedSheets = Array.from(document.querySelectorAll('#sheetList input[type="checkbox"]:checked'))
            .map(cb => cb.value);

        if (selectedSheets.length === 0) {
            throw new Error('Please select at least one worksheet to split');
        }

        const results = [];
        const totalSheets = selectedSheets.length;

        for (let i = 0; i < selectedSheets.length; i++) {
            const sheetName = selectedSheets[i];
            const progress = ((i + 1) / totalSheets) * 100;

            window.progressiveLoader.updateProgress(progress, `Processing sheet: ${sheetName}`);

            // Create new workbook with single sheet
            const newWorkbook = XLSX.utils.book_new();
            const sheet = this.currentWorkbook.Sheets[sheetName];
            XLSX.utils.book_append_sheet(newWorkbook, sheet, sheetName);

            // Generate filename
            const filename = this.generateFilename(outputPrefix, sheetName, namingScheme, outputFormat, i);

            // Convert to desired format
            const fileData = await this.convertWorkbook(newWorkbook, outputFormat);

            results.push({
                name: filename,
                data: fileData,
                size: fileData.byteLength || fileData.length,
                type: outputFormat,
                originalSheet: sheetName
            });

            // Small delay to prevent blocking
            await this.sleep(10);
        }

        return results;
    }

    async splitByColumn(outputFormat, namingScheme, outputPrefix) {
        const columnSelect = document.getElementById('columnSelect');
        const includeHeaders = document.getElementById('includeHeadersCheck')?.checked || false;

        if (!columnSelect?.value) {
            throw new Error('Please select a column for splitting');
        }

        const columnLetter = columnSelect.value;
        const columnIndex = XLSX.utils.decode_col(columnLetter);

        // Get first sheet for processing
        const firstSheetName = this.currentWorkbook.SheetNames[0];
        const sheet = this.currentWorkbook.Sheets[firstSheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (data.length === 0) {
            throw new Error('No data found in the worksheet');
        }

        // Group rows by column value
        const groups = new Map();
        const headerRow = data[0];

        window.progressiveLoader.updateProgress(20, 'Analyzing data and grouping rows...');

        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const columnValue = row[columnIndex] || 'empty';
            const groupKey = String(columnValue).trim() || 'empty';

            if (!groups.has(groupKey)) {
                groups.set(groupKey, []);
            }
            groups.get(groupKey).push(row);
        }

        // Create files for each group
        const results = [];
        const groupEntries = Array.from(groups.entries());

        for (let i = 0; i < groupEntries.length; i++) {
            const [groupKey, rows] = groupEntries[i];
            const progress = 20 + ((i + 1) / groupEntries.length) * 80;

            window.progressiveLoader.updateProgress(progress, `Creating file for group: ${groupKey}`);

            // Prepare data with headers if requested
            const fileData = includeHeaders ? [headerRow, ...rows] : rows;

            // Create new workbook
            const newWorkbook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.aoa_to_sheet(fileData);
            XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Data');

            // Generate filename
            const filename = this.generateFilename(outputPrefix, groupKey, namingScheme, outputFormat, i);

            // Convert to desired format
            const convertedData = await this.convertWorkbook(newWorkbook, outputFormat);

            results.push({
                name: filename,
                data: convertedData,
                size: convertedData.byteLength || convertedData.length,
                type: outputFormat,
                groupValue: groupKey,
                rowCount: rows.length
            });

            await this.sleep(10);
        }

        return results;
    }

    async splitByRowCount(outputFormat, namingScheme, outputPrefix) {
        const rowsPerFile = parseInt(document.getElementById('rowsPerFile')?.value) || 1000;
        const includeHeaders = document.getElementById('includeHeadersRowCheck')?.checked || false;

        if (rowsPerFile <= 0) {
            throw new Error('Rows per file must be greater than 0');
        }

        const results = [];

        // Process each sheet
        for (let sheetIndex = 0; sheetIndex < this.currentWorkbook.SheetNames.length; sheetIndex++) {
            const sheetName = this.currentWorkbook.SheetNames[sheetIndex];
            const sheet = this.currentWorkbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            if (data.length === 0) continue;

            const headerRow = data[0];
            const dataRows = data.slice(1);
            const totalFiles = Math.ceil(dataRows.length / rowsPerFile);

            window.progressiveLoader.updateProgress(
                (sheetIndex / this.currentWorkbook.SheetNames.length) * 100,
                `Processing sheet: ${sheetName}`
            );

            for (let fileIndex = 0; fileIndex < totalFiles; fileIndex++) {
                const startRow = fileIndex * rowsPerFile;
                const endRow = Math.min(startRow + rowsPerFile, dataRows.length);
                const fileRows = dataRows.slice(startRow, endRow);

                // Prepare data
                const fileData = includeHeaders ? [headerRow, ...fileRows] : fileRows;

                // Create new workbook
                const newWorkbook = XLSX.utils.book_new();
                const newSheet = XLSX.utils.aoa_to_sheet(fileData);
                XLSX.utils.book_append_sheet(newWorkbook, newSheet, sheetName);

                // Generate filename
                const suffix = totalFiles > 1 ? `_part${fileIndex + 1}` : '';
                const filename = this.generateFilename(outputPrefix, `${sheetName}${suffix}`, namingScheme, outputFormat, results.length);

                // Convert to desired format
                const convertedData = await this.convertWorkbook(newWorkbook, outputFormat);

                results.push({
                    name: filename,
                    data: convertedData,
                    size: convertedData.byteLength || convertedData.length,
                    type: outputFormat,
                    originalSheet: sheetName,
                    partNumber: fileIndex + 1,
                    totalParts: totalFiles,
                    rowCount: fileRows.length
                });

                await this.sleep(10);
            }
        }

        return results;
    }

    async splitByFileSize(outputFormat, namingScheme, outputPrefix) {
        const maxFileSize = parseFloat(document.getElementById('maxFileSize')?.value) || 10;
        const fileSizeUnit = document.getElementById('fileSizeUnit')?.value || 'MB';
        const includeHeaders = document.getElementById('includeHeadersSizeCheck')?.checked || false;

        // Convert to bytes
        const unitMultipliers = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 };
        const maxSizeBytes = maxFileSize * unitMultipliers[fileSizeUnit];

        const results = [];

        for (let sheetIndex = 0; sheetIndex < this.currentWorkbook.SheetNames.length; sheetIndex++) {
            const sheetName = this.currentWorkbook.SheetNames[sheetIndex];
            const sheet = this.currentWorkbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            if (data.length === 0) continue;

            const headerRow = data[0];
            const dataRows = data.slice(1);

            let currentFileData = includeHeaders ? [headerRow] : [];
            let currentFileSize = 0;
            let fileIndex = 0;

            window.progressiveLoader.updateProgress(
                (sheetIndex / this.currentWorkbook.SheetNames.length) * 100,
                `Processing sheet: ${sheetName}`
            );

            for (let rowIndex = 0; rowIndex < dataRows.length; rowIndex++) {
                const row = dataRows[rowIndex];
                const estimatedRowSize = JSON.stringify(row).length * 2; // Rough estimate

                if (currentFileSize + estimatedRowSize > maxSizeBytes && currentFileData.length > (includeHeaders ? 1 : 0)) {
                    // Save current file
                    await this.saveFileSizeChunk(currentFileData, sheetName, fileIndex, outputFormat, namingScheme, outputPrefix, results);

                    // Start new file
                    currentFileData = includeHeaders ? [headerRow, row] : [row];
                    currentFileSize = estimatedRowSize;
                    fileIndex++;
                } else {
                    currentFileData.push(row);
                    currentFileSize += estimatedRowSize;
                }
            }

            // Save remaining data
            if (currentFileData.length > (includeHeaders ? 1 : 0)) {
                await this.saveFileSizeChunk(currentFileData, sheetName, fileIndex, outputFormat, namingScheme, outputPrefix, results);
            }
        }

        return results;
    }

    async saveFileSizeChunk(data, sheetName, fileIndex, outputFormat, namingScheme, outputPrefix, results) {
        const newWorkbook = XLSX.utils.book_new();
        const newSheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(newWorkbook, newSheet, sheetName);

        const suffix = fileIndex > 0 ? `_part${fileIndex + 1}` : '';
        const filename = this.generateFilename(outputPrefix, `${sheetName}${suffix}`, namingScheme, outputFormat, results.length);

        const convertedData = await this.convertWorkbook(newWorkbook, outputFormat);

        results.push({
            name: filename,
            data: convertedData,
            size: convertedData.byteLength || convertedData.length,
            type: outputFormat,
            originalSheet: sheetName,
            partNumber: fileIndex + 1,
            rowCount: data.length - (data[0] && data[0].length > 0 && typeof data[0][0] === 'string' ? 1 : 0)
        });
    }

    cancelProcessing() {
        if (this.isProcessing) {
            this.isProcessing = false;
            window.progressiveLoader.cancelLoading();
            this.showProcessingUI(false);
            this.showNotification('Processing cancelled by user.', 'info');
        }
    }

    async startBatchProcessing() {
        if (this.fileQueue.length === 0) {
            this.showNotification('Please add files to the queue first.', 'warning');
            return;
        }

        if (this.isProcessing) {
            this.showNotification('Processing is already in progress.', 'warning');
            return;
        }

        try {
            this.isProcessing = true;
            this.showBatchProcessingUI(true);

            const splitMethod = document.querySelector('input[name="multiSplitMethod"]:checked')?.value || 'bySheet';
            const outputFormat = document.querySelector('input[name="multiOutputFormat"]:checked')?.value || 'xlsx';
            const namingScheme = document.querySelector('input[name="multiNamingScheme"]:checked')?.value || 'descriptive';

            window.progressiveLoader.startLoading('batch', this.fileQueue.length);

            const batchResults = [];

            for (let i = 0; i < this.fileQueue.length; i++) {
                const file = this.fileQueue[i];
                const progress = ((i + 1) / this.fileQueue.length) * 100;

                window.progressiveLoader.updateProgress(progress, `Processing file ${i + 1} of ${this.fileQueue.length}`, file.name);

                try {
                    // Read file
                    const arrayBuffer = await file.arrayBuffer();
                    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

                    // Process file based on method
                    let fileResults = [];
                    const outputPrefix = file.name.split('.')[0];

                    // Temporarily set current workbook for processing
                    const originalWorkbook = this.currentWorkbook;
                    this.currentWorkbook = workbook;

                    switch (splitMethod) {
                        case 'bySheet':
                            // Split all sheets
                            for (const sheetName of workbook.SheetNames) {
                                const newWorkbook = XLSX.utils.book_new();
                                XLSX.utils.book_append_sheet(newWorkbook, workbook.Sheets[sheetName], sheetName);
                                const convertedData = await this.convertWorkbook(newWorkbook, outputFormat);

                                fileResults.push({
                                    name: this.generateFilename(outputPrefix, sheetName, namingScheme, outputFormat, fileResults.length),
                                    data: convertedData,
                                    size: convertedData.byteLength || convertedData.length,
                                    type: outputFormat,
                                    originalSheet: sheetName,
                                    sourceFile: file.name
                                });
                            }
                            break;
                        case 'byRowCount':
                            const rowsPerFile = parseInt(document.getElementById('multiRowsPerFile')?.value) || 1000;
                            const includeHeaders = document.getElementById('multiIncludeHeaders')?.checked || false;
                            fileResults = await this.splitByRowCount(outputFormat, namingScheme, outputPrefix);
                            break;
                        case 'byFileSize':
                            fileResults = await this.splitByFileSize(outputFormat, namingScheme, outputPrefix);
                            break;
                    }

                    // Restore original workbook
                    this.currentWorkbook = originalWorkbook;

                    batchResults.push({
                        sourceFile: file.name,
                        status: 'success',
                        results: fileResults,
                        fileCount: fileResults.length
                    });

                } catch (error) {
                    console.error(`Error processing file ${file.name}:`, error);
                    batchResults.push({
                        sourceFile: file.name,
                        status: 'error',
                        error: error.message,
                        results: []
                    });
                }

                await this.sleep(50); // Small delay between files
            }

            this.displayBatchResults(batchResults);
            window.progressiveLoader.completeLoading('Batch processing completed!');

        } catch (error) {
            console.error('Batch processing error:', error);
            this.showNotification(`Error during batch processing: ${error.message}`, 'error');
            window.progressiveLoader.handleError(error, 'Batch processing failed');
        } finally {
            this.isProcessing = false;
            this.showBatchProcessingUI(false);
        }
    }

    cancelBatchProcessing() {
        if (this.isProcessing) {
            this.isProcessing = false;
            window.progressiveLoader.cancelLoading();
            this.showBatchProcessingUI(false);
            this.showNotification('Batch processing cancelled by user.', 'info');
        }
    }

    resetApplication() {
        this.clearFiles();
        this.clearQueue();
        this.processedResults = [];
        this.updateUI();
    }

    updateFileQueue() {
        const fileQueueList = document.getElementById('fileQueueList');
        if (!fileQueueList) return;

        fileQueueList.innerHTML = '';
        
        this.fileQueue.forEach((file, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item';
            queueItem.innerHTML = `
                <div class="queue-info">
                    <div class="queue-name">${file.name}</div>
                    <div class="queue-details">${(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                </div>
                <div class="queue-actions">
                    <button class="remove-button" onclick="app.removeFromQueue(${index})">Remove</button>
                </div>
            `;
            fileQueueList.appendChild(queueItem);
        });
        
        this.updateUI();
    }

    removeFromQueue(index) {
        this.fileQueue.splice(index, 1);
        this.updateFileQueue();
    }

    addMoreFiles() {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    }

    clearQueue() {
        this.fileQueue = [];
        this.updateFileQueue();
    }

    async downloadAllFiles() {
        if (this.processedResults.length === 0) {
            this.showNotification('No files to download.', 'warning');
            return;
        }

        try {
            window.progressiveLoader.startLoading('compressing', this.processedResults.length);

            const zip = new JSZip();

            for (let i = 0; i < this.processedResults.length; i++) {
                const result = this.processedResults[i];
                const progress = ((i + 1) / this.processedResults.length) * 100;

                window.progressiveLoader.updateProgress(progress, `Adding ${result.name} to archive...`);

                zip.file(result.name, result.data);
                await this.sleep(10);
            }

            window.progressiveLoader.updateProgress(95, 'Generating ZIP file...');

            const zipBlob = await zip.generateAsync({ type: 'blob' });
            const filename = `split_files_${new Date().toISOString().slice(0, 10)}.zip`;

            // Download the ZIP file
            saveAs(zipBlob, filename);

            window.progressiveLoader.completeLoading('Download started!');
            this.showNotification(`ZIP file "${filename}" download started.`, 'success');

        } catch (error) {
            console.error('Download error:', error);
            this.showNotification(`Error creating download: ${error.message}`, 'error');
            window.progressiveLoader.handleError(error, 'Download failed');
        }
    }

    showPreview() {
        if (this.processedResults.length === 0) {
            this.showNotification('No results to preview.', 'warning');
            return;
        }

        const modal = document.getElementById('previewModal');
        const previewContent = document.getElementById('previewContent');

        if (!modal || !previewContent) return;

        let previewHtml = '<div class="preview-list">';

        this.processedResults.forEach((result, index) => {
            const sizeFormatted = this.formatFileSize(result.size);
            previewHtml += `
                <div class="preview-item">
                    <div class="preview-header">
                        <span class="preview-filename">${result.name}</span>
                        <span class="preview-size">${sizeFormatted}</span>
                    </div>
                    <div class="preview-details">
                        <span class="preview-type">Type: ${result.type.toUpperCase()}</span>
                        ${result.rowCount ? `<span class="preview-rows">Rows: ${result.rowCount}</span>` : ''}
                        ${result.originalSheet ? `<span class="preview-sheet">Sheet: ${result.originalSheet}</span>` : ''}
                    </div>
                    <div class="preview-actions">
                        <button class="download-single-btn" onclick="app.downloadSingleFile(${index})">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                </div>
            `;
        });

        previewHtml += '</div>';
        previewContent.innerHTML = previewHtml;
        modal.style.display = 'block';
    }

    downloadSingleFile(index) {
        if (index < 0 || index >= this.processedResults.length) return;

        const result = this.processedResults[index];
        const blob = new Blob([result.data], { type: this.getMimeType(result.type) });
        saveAs(blob, result.name);

        this.showNotification(`Download started: ${result.name}`, 'success');
    }

    getMimeType(format) {
        const mimeTypes = {
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'xls': 'application/vnd.ms-excel',
            'csv': 'text/csv',
            'ods': 'application/vnd.oasis.opendocument.spreadsheet'
        };
        return mimeTypes[format] || 'application/octet-stream';
    }

    async convertWorkbook(workbook, format) {
        // Optimize workbook for memory efficiency
        if (window.memoryManager) {
            workbook = window.memoryManager.optimizeWorkbookMemory(workbook);
        }

        switch (format) {
            case 'xlsx':
                return XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            case 'xls':
                return XLSX.write(workbook, { bookType: 'xls', type: 'array' });
            case 'csv':
                // For CSV, only export the first sheet
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const csvData = XLSX.utils.sheet_to_csv(firstSheet);
                return new TextEncoder().encode(csvData);
            case 'ods':
                return XLSX.write(workbook, { bookType: 'ods', type: 'array' });
            case 'all':
                // Return multiple formats
                return {
                    xlsx: XLSX.write(workbook, { bookType: 'xlsx', type: 'array' }),
                    csv: new TextEncoder().encode(XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]])),
                    ods: XLSX.write(workbook, { bookType: 'ods', type: 'array' })
                };
            default:
                return XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        }
    }

    generateFilename(prefix, identifier, namingScheme, format, index) {
        let filename = '';

        switch (namingScheme) {
            case 'descriptive':
                filename = `${prefix}_${identifier}`;
                break;
            case 'sequential':
            case 'numbered':
                filename = `${prefix}_${String(index + 1).padStart(3, '0')}`;
                break;
            case 'simple':
            default:
                filename = `${prefix}_${index + 1}`;
                break;
        }

        // Clean filename
        filename = filename.replace(/[^a-zA-Z0-9_-]/g, '_');

        return `${filename}.${format}`;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    displayResults(results) {
        const resultsList = document.getElementById('resultsList');
        const processingSummary = document.getElementById('processingSummary');
        const resultsControls = document.getElementById('resultsControls');

        if (!resultsList) return;

        // Update summary
        if (processingSummary) {
            const totalSize = results.reduce((sum, result) => sum + result.size, 0);
            const avgSize = totalSize / results.length;

            document.getElementById('filesCreatedCount').textContent = results.length;
            document.getElementById('totalSizeValue').textContent = this.formatFileSize(totalSize);
            document.getElementById('avgFileSizeValue').textContent = this.formatFileSize(avgSize);

            processingSummary.style.display = 'block';
        }

        // Show controls
        if (resultsControls) {
            resultsControls.style.display = 'flex';
        }

        // Display results
        resultsList.innerHTML = '';

        results.forEach((result, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item fade-in';
            resultItem.innerHTML = `
                <div class="result-header">
                    <span class="result-title">${result.name}</span>
                    <span class="result-size">${this.formatFileSize(result.size)}</span>
                </div>
                <div class="result-details">
                    <span class="result-type">Format: ${result.type.toUpperCase()}</span>
                    ${result.rowCount ? `<span class="result-rows">Rows: ${result.rowCount}</span>` : ''}
                    ${result.originalSheet ? `<span class="result-sheet">Source: ${result.originalSheet}</span>` : ''}
                </div>
                <div class="result-actions">
                    <button class="download-button" onclick="app.downloadSingleFile(${index})">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            `;
            resultsList.appendChild(resultItem);
        });

        // Update content status
        const contentStatus = document.getElementById('contentStatus');
        if (contentStatus) {
            contentStatus.textContent = `Successfully created ${results.length} file(s)`;
        }
    }

    async downloadAllMultiFiles() {
        if (!this.batchResults || this.batchResults.length === 0) {
            this.showNotification('No batch results to download.', 'warning');
            return;
        }

        try {
            window.progressiveLoader.startLoading('compressing', this.batchResults.length);

            const zip = new JSZip();
            let fileCount = 0;

            for (let batchIndex = 0; batchIndex < this.batchResults.length; batchIndex++) {
                const batch = this.batchResults[batchIndex];

                if (batch.status === 'success' && batch.results) {
                    // Create folder for each source file
                    const folderName = batch.sourceFile.split('.')[0];
                    const folder = zip.folder(folderName);

                    for (const file of batch.results) {
                        folder.file(file.name, file.data);
                        fileCount++;
                    }
                }

                const progress = ((batchIndex + 1) / this.batchResults.length) * 90;
                window.progressiveLoader.updateProgress(progress, `Processing batch ${batchIndex + 1}...`);
            }

            window.progressiveLoader.updateProgress(95, 'Generating ZIP file...');

            const zipBlob = await zip.generateAsync({ type: 'blob' });
            const filename = `batch_split_files_${new Date().toISOString().slice(0, 10)}.zip`;

            saveAs(zipBlob, filename);

            window.progressiveLoader.completeLoading('Batch download started!');
            this.showNotification(`ZIP file "${filename}" with ${fileCount} files download started.`, 'success');

        } catch (error) {
            console.error('Batch download error:', error);
            this.showNotification(`Error creating batch download: ${error.message}`, 'error');
            window.progressiveLoader.handleError(error, 'Batch download failed');
        }
    }

    clearMultiResults() {
        this.batchResults = [];
        const multiResultsSection = document.getElementById('multiResultsSection');
        if (multiResultsSection) {
            multiResultsSection.style.display = 'none';
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    viewResults() {
        const completionModal = document.getElementById('completionModal');
        if (completionModal) {
            completionModal.style.display = 'none';
        }
    }

    dismissNotification() {
        const completionModal = document.getElementById('completionModal');
        if (completionModal) {
            completionModal.style.display = 'none';
        }
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('collapsed');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }
}

    showCompletionNotification(fileCount) {
        const modal = document.getElementById('completionModal');
        const fileCountElement = document.getElementById('completionFileCount');
        const timeElement = document.getElementById('completionTime');

        if (modal && fileCountElement && timeElement) {
            fileCountElement.textContent = fileCount;

            if (window.progressiveLoader) {
                const status = window.progressiveLoader.getStatus();
                timeElement.textContent = this.formatTime(status.elapsedTime);
            }

            modal.style.display = 'block';

            // Play completion sound
            this.playCompletionSound();
        }
    }

    playCompletionSound() {
        const audio = document.getElementById('completionSound');
        if (audio) {
            audio.play().catch(e => console.log('Could not play completion sound:', e));
        }
    }

    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        if (seconds < 60) {
            return `${seconds}s`;
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    showProcessingUI(show) {
        const splitButton = document.getElementById('splitButton');
        const cancelButton = document.getElementById('cancelButton');

        if (splitButton) {
            splitButton.style.display = show ? 'none' : 'block';
        }

        if (cancelButton) {
            cancelButton.style.display = show ? 'block' : 'none';
        }
    }

    showBatchProcessingUI(show) {
        const startButton = document.getElementById('startBatchProcessingButton');
        const cancelButton = document.getElementById('cancelBatchProcessingButton');

        if (startButton) {
            startButton.style.display = show ? 'none' : 'block';
        }

        if (cancelButton) {
            cancelButton.style.display = show ? 'block' : 'none';
        }
    }

    displayBatchResults(batchResults) {
        const multiResultsList = document.getElementById('multiResultsList');
        const multiResultsSection = document.getElementById('multiResultsSection');

        if (!multiResultsList || !multiResultsSection) return;

        multiResultsList.innerHTML = '';

        batchResults.forEach((batch, index) => {
            const statusClass = batch.status === 'success' ? 'status-success' : 'status-error';
            const resultGroup = document.createElement('div');
            resultGroup.className = 'multi-result-group fade-in';

            let filesHtml = '';
            if (batch.results && batch.results.length > 0) {
                filesHtml = batch.results.map((file, fileIndex) => `
                    <div class="multi-file-item">
                        <span class="multi-file-name">${file.name}</span>
                        <span class="multi-file-size">${this.formatFileSize(file.size)}</span>
                        <button class="download-button small" onclick="app.downloadBatchFile(${index}, ${fileIndex})">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                `).join('');
            }

            resultGroup.innerHTML = `
                <div class="multi-result-header">
                    <span class="multi-result-title">${batch.sourceFile}</span>
                    <span class="multi-result-status ${statusClass}">
                        ${batch.status === 'success' ? `${batch.fileCount} files created` : 'Error'}
                    </span>
                </div>
                <div class="multi-result-files">
                    ${batch.status === 'success' ? filesHtml : `<p class="error-message">${batch.error}</p>`}
                </div>
            `;

            multiResultsList.appendChild(resultGroup);
        });

        multiResultsSection.style.display = 'block';

        // Store batch results for download
        this.batchResults = batchResults;
    }

    downloadBatchFile(batchIndex, fileIndex) {
        if (!this.batchResults || !this.batchResults[batchIndex] || !this.batchResults[batchIndex].results) return;

        const file = this.batchResults[batchIndex].results[fileIndex];
        if (file) {
            const blob = new Blob([file.data], { type: this.getMimeType(file.type) });
            saveAs(blob, file.name);
            this.showNotification(`Download started: ${file.name}`, 'success');
        }
    }
}

// Global functions for HTML onclick handlers
function openHelpGuideModal() {
    // Create and show help guide modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>Easy Sheets Divider - Help Guide</h2>
            <div class="help-content">
                <h3>Getting Started</h3>
                <p>Easy Sheets Divider helps you split large spreadsheet files into smaller, manageable files.</p>

                <h3>Supported File Types</h3>
                <ul>
                    <li>Excel files (.xlsx, .xls)</li>
                    <li>CSV files (.csv)</li>
                    <li>OpenOffice Calc files (.ods)</li>
                    <li>Google Sheets files</li>
                </ul>

                <h3>Processing Modes</h3>
                <h4>Single File Mode</h4>
                <p>Process one file at a time with detailed options.</p>

                <h4>Multi-File Mode</h4>
                <p>Batch process multiple files simultaneously.</p>

                <h3>Split Methods</h3>
                <h4>By Worksheet</h4>
                <p>Create separate files for each worksheet in your Excel file.</p>

                <h4>By Column Value</h4>
                <p>Split data based on unique values in a specific column.</p>

                <h4>By Row Count</h4>
                <p>Split into files with a specified number of rows each.</p>

                <h4>By File Size</h4>
                <p>Split into files that don't exceed a specified size limit.</p>

                <h3>Privacy & Security</h3>
                <p>All processing happens locally in your browser. Your data never leaves your computer.</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function openDonationWindow() {
    // Open donation window with payment options
    const donationWindow = window.open('', 'donation', 'width=600,height=700,scrollbars=yes');
    donationWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Support Easy Sheets Divider Development</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
                .container { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                h1 { color: #667eea; text-align: center; margin-bottom: 20px; }
                .payment-option { margin: 20px 0; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center; }
                .payment-option h3 { margin: 0 0 10px 0; color: #1e293b; }
                .qr-code { width: 150px; height: 150px; margin: 10px auto; }
                .address { font-family: monospace; font-size: 12px; word-break: break-all; background: #f1f5f9; padding: 10px; border-radius: 4px; margin: 10px 0; }
                .copy-btn { background: #667eea; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
                .copy-btn:hover { background: #5a67d8; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Support Development</h1>
                <p>Help keep Easy Sheets Divider free and open source!</p>

                <div class="payment-option">
                    <h3>PayPal</h3>
                    <img src="PayPal_QR.png" alt="PayPal QR Code" class="qr-code">
                    <p>Scan QR code or click below:</p>
                    <a href="https://paypal.me/yourpaypallink" target="_blank" style="color: #667eea;">Donate via PayPal</a>
                </div>

                <div class="payment-option">
                    <h3>Bitcoin (BTC)</h3>
                    <img src="BTC_QR.png" alt="Bitcoin QR Code" class="qr-code">
                    <div class="address">bc1qexampleaddresshere</div>
                    <button class="copy-btn" onclick="copyToClipboard('bc1qexampleaddresshere')">Copy Address</button>
                </div>

                <div class="payment-option">
                    <h3>Ethereum (ETH)</h3>
                    <img src="ETH_QR.png" alt="Ethereum QR Code" class="qr-code">
                    <div class="address">0xExampleEthereumAddressHere</div>
                    <button class="copy-btn" onclick="copyToClipboard('0xExampleEthereumAddressHere')">Copy Address</button>
                </div>

                <div class="payment-option">
                    <h3>Solana (SOL)</h3>
                    <img src="SOL_QR.png" alt="Solana QR Code" class="qr-code">
                    <div class="address">ExampleSolanaAddressHere</div>
                    <button class="copy-btn" onclick="copyToClipboard('ExampleSolanaAddressHere')">Copy Address</button>
                </div>

                <p style="text-align: center; margin-top: 30px; color: #64748b;">
                    Thank you for supporting open source development!
                </p>
            </div>

            <script>
                function copyToClipboard(text) {
                    navigator.clipboard.writeText(text).then(() => {
                        alert('Address copied to clipboard!');
                    }).catch(() => {
                        prompt('Copy this address:', text);
                    });
                }
            </script>
        </body>
        </html>
    `);
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EasySheetsApp();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EasySheetsApp;
}
