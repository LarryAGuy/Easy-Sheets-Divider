// Easy Sheets Divider - Main Application
// Split Excel files into smaller, manageable spreadsheets with TLS 1.3 security

// Translation data structure
const translations = {
    'en': {
        // Main Application
        appTitle: 'Easy Sheets Divider',
        appSubtitle: 'Split large Excel files into smaller, manageable spreadsheets',

        // Header Navigation
        helpGuide: 'Help Guide',
        supportDevelopment: 'Support Development',
        language: 'Language',

        // Processing Modes
        processingMode: '1. Processing Mode',
        singleFileMode: 'Single File',
        multiFileMode: 'Multi-File',
        singleFileDesc: 'Process one file at a time',
        multiFileDesc: 'Batch process multiple files',

        // Upload Area
        uploadTitle: '2. Upload Files',
        uploadInstruction: 'Drag & drop files here or click to browse',
        uploadSupported: 'Supported formats: Excel (.xlsx, .xls), CSV, OpenOffice (.ods)',
        uploadMaxSize: 'Maximum file size: 100MB per file',
        dropOrClick: 'Drop or click',
        dropMultipleFiles: 'Drop multiple files or click',
        excelCSVFiles: 'Excel, CSV, OpenOffice, Google Sheets files',
        reading: 'Reading...',
        clear: 'Clear',
        options: 'Options',
        batchProcessingResults: 'Batch Processing Results',

        // Splitting Methods
        splitMethod: '3. Split Method',
        splittingMethod: 'Splitting Method',
        byWorksheets: 'By Worksheets',
        byRowCount: 'By Row Count',
        byFileSize: 'By File Size',
        byWorksheetsDesc: 'Create separate files for each worksheet',
        byRowCountDesc: 'Split data into files with specified row count',
        byFileSizeDesc: 'Create files under target size limit',
        worksheet: 'Worksheet',
        column: 'Column',
        rows: 'Rows',
        size: 'Size',
        includeHeaders: 'Include headers',
        outputOptions: '4. Output Options',
        batchOptions: 'Batch Options',

        // Configuration Options
        outputFormat: 'Output Format',
        includeHeadersDesc: 'Add column headers to each split file',
        rowsPerFile: 'Rows per File',
        targetFileSize: 'Target File Size (MB)',

        // Buttons
        processFiles: 'Process Files',
        splitFile: 'Split File',
        downloadAll: 'Download All',
        downloadZip: 'Download ZIP',
        download: 'Download',
        cancel: 'Cancel',
        close: 'Close',

        // Progress and Status
        processing: 'Processing...',
        completed: 'Completed',
        failed: 'Failed',
        ready: 'Ready',
        filesProcessed: 'files processed',
        estimatedTime: 'Estimated time',
        timeRemaining: 'Time remaining',

        // File Formats
        excel: 'Excel',
        csv: 'CSV',
        openoffice: 'OpenOffice',
        allFormats: 'All Formats',

        // Error Messages
        errorFileSize: 'File size exceeds maximum limit',
        errorFileFormat: 'Unsupported file format',
        errorProcessing: 'Error processing file',
        errorNetwork: 'Network error occurred',
        errorGeneral: 'An unexpected error occurred',

        // Notifications
        fileUploaded: 'File uploaded successfully',
        processingStarted: 'Processing started',
        processingComplete: 'Processing completed successfully',
        downloadReady: 'Download ready',

        // Help Guide Content
        helpTitle: 'Easy Sheets Divider User Guide',
        helpSubtitle: 'Your complete guide to splitting large Excel files into smaller, manageable spreadsheets',

        // Help Guide Navigation
        systemRequirements: 'System Requirements',
        overview: 'Overview',
        usage: 'How to Use',
        performance: 'Performance Tips',
        troubleshooting: 'Troubleshooting',

        // System Requirements Section
        systemRequirementsPerformance: 'System Requirements & Performance',
        privacyFirstProcessing: 'Privacy-First Processing',
        privacyFirstDesc: 'Easy Sheets Divider runs entirely in your web browser using your local computer\'s resources. Your data never leaves your computer - all processing happens locally, ensuring complete privacy and security.',
        performanceFactors: 'Performance Factors',
        performanceFactorsDesc: 'Processing speed depends on your computer\'s specifications:',
        component: 'Component',
        impactOnPerformance: 'Impact on Performance',
        recommendation: 'Recommendation',
        cpu: 'CPU',
        cpuImpact: 'Faster processors handle large files more quickly',
        cpuRecommendation: 'Modern multi-core processor',
        ram: 'RAM',
        ramImpact: 'More memory allows processing of larger files',
        ramRecommendation: '8GB+ for large files (50MB+)',
        browser: 'Browser',
        browserImpact: 'Modern browsers optimize JavaScript performance',
        browserRecommendation: 'Chrome, Firefox, Safari, or Edge (latest versions)',
        performanceTip: 'Performance Tip',
        performanceTipDesc: 'Close unnecessary browser tabs and applications before processing large files to free up system resources for optimal performance.',

        // Application Overview Section
        applicationOverview: 'Application Overview',
        whatIsExcelCompartmentalizer: 'What is Easy Sheets Divider?',
        whatIsDesc: 'Easy Sheets Divider is a powerful, browser-based tool that splits large Excel files into smaller, more manageable spreadsheets. Perfect for organizing data, reducing file sizes, and improving spreadsheet performance.',
        supportedFileFormats: 'Supported File Formats',
        excelFiles: 'Excel Files',
        excelFilesDesc: '.xlsx and .xls formats\nAll Excel versions supported',
        csvFiles: 'CSV Files',
        csvFilesDesc: 'Comma-separated values\nUniversal compatibility',
        openOfficeFiles: 'OpenOffice',
        openOfficeFilesDesc: '.ods format\nLibreOffice Calc files',
        googleSheetsFiles: 'Google Sheets',
        googleSheetsFilesDesc: 'Exported Google Sheets\nDownload as Excel first',
        keyFeatures: 'Key Features',
        multipleSplittingMethods: 'Multiple Splitting Methods: By worksheets, row count, or file size',
        batchProcessing: 'Batch Processing: Process multiple files simultaneously',
        formatConversion: 'Format Conversion: Output to Excel, CSV, or OpenOffice formats',
        organizedDownloads: 'Organized Downloads: Individual files or ZIP archives',
        realTimeProgress: 'Real-time Progress: Live updates during processing',
        privacyFirst: 'Privacy-First: All processing happens locally',

        // Usage Instructions Section
        howToUseExcelCompartmentalizer: 'How to Use Easy Sheets Divider',
        step1ChooseProcessingMode: 'Step 1: Choose Processing Mode',
        step1Desc: 'Select your processing mode at the top of the application:',
        singleFileModeDesc: 'Single-File Mode: Process one file at a time with detailed options',
        multiFileModeDesc: 'Multi-File Mode: Batch process multiple files with the same settings',
        step2UploadFiles: 'Step 2: Upload Your Files',
        dragDrop: 'Drag & Drop: Drag files directly onto the upload area',
        clickToBrowse: 'Click to Browse: Click the upload area to select files from your computer',
        fileValidation: 'File Validation: Only supported file formats will be accepted',
        queueManagement: 'Queue Management: In multi-file mode, files are added to a processing queue',
        step3ChooseSplittingMethod: 'Step 3: Choose Splitting Method',
        byWorksheetsTitle: 'By Worksheets',
        byWorksheetsMethodDesc: 'Creates separate files for each worksheet in your Excel file. Perfect for files with multiple sheets.',
        byRowCountTitle: 'By Row Count',
        byRowCountMethodDesc: 'Splits data into files with a specified number of rows. Ideal for large datasets.',
        byFileSizeTitle: 'By File Size',
        byFileSizeMethodDesc: 'Creates files under a target size limit. Great for email attachments or system limitations.',
        step4ConfigureOptions: 'Step 4: Configure Options',
        option: 'Option',
        description: 'Description',
        outputFormatOption: 'Output Format',
        outputFormatDesc: 'Choose Excel (.xlsx), CSV, OpenOffice (.ods), or All Formats',
        outputFormatRecommendation: 'Excel for compatibility, CSV for simplicity',
        includeHeadersOption: 'Include Headers',
        includeHeadersOptionDesc: 'Add column headers to each split file',
        includeHeadersRecommendation: 'Always recommended for data clarity',
        namingScheme: 'Naming Scheme',
        namingSchemeDesc: 'Descriptive names or numbered files',
        namingSchemeRecommendation: 'Descriptive for easy identification',
        step5StartProcessing: 'Step 5: Start Processing',
        reviewSettings: 'Review Settings: Double-check your splitting method and options',
        clickProcess: 'Click Process: Start the splitting operation',
        monitorProgress: 'Monitor Progress: Watch real-time progress updates',
        waitForCompletion: 'Wait for Completion: Processing time varies by file size and complexity',
        step6DownloadResults: 'Step 6: Download Results',
        individualDownloads: 'Individual Downloads',
        individualDownloadsDesc: 'Download specific files one at a time using the download buttons next to each result.',
        batchZipDownload: 'Batch ZIP Download',
        batchZipDownloadDesc: 'Download all files in an organized ZIP archive with processing summaries included.',

        // Performance Tips Section
        performanceTipsBestPractices: 'Performance Tips & Best Practices',
        optimizeProcessingSpeed: 'Optimize Processing Speed',
        closeUnnecessaryTabs: 'Close unnecessary browser tabs and applications',
        useLatestBrowser: 'Use the latest version of your web browser',
        processOffPeak: 'Process files during off-peak computer usage',
        considerSplittingLarge: 'Consider splitting very large files (100MB+) in smaller chunks',
        largeFileWarning: 'Large File Warning',
        largeFileWarningDesc: 'Files over 100MB may take several minutes to process and require significant system resources. Ensure you have adequate free memory before processing very large files.',

        // Troubleshooting Section
        troubleshootingTitle: 'Troubleshooting',
        commonIssues: 'Common Issues',
        problem: 'Problem',
        possibleCause: 'Possible Cause',
        solution: 'Solution',
        fileWontUpload: 'File won\'t upload',
        unsupportedFileFormat: 'Unsupported file format',
        ensureFileFormat: 'Ensure file is .xlsx, .xls, .csv, or .ods format',
        processingSlow: 'Processing is slow',
        largeFileOrLimitedResources: 'Large file size or limited system resources',
        closeOtherApps: 'Close other applications, try smaller files first',
        browserCrashes: 'Browser crashes',
        insufficientMemory: 'Insufficient memory for large files',
        restartBrowser: 'Restart browser, close other tabs, try smaller files',
        downloadFails: 'Download fails',
        browserDownloadRestrictions: 'Browser download restrictions',
        checkBrowserSettings: 'Check browser settings, allow downloads from this site',
        needMoreHelp: 'Need More Help?',
        needMoreHelpDesc: 'If you continue experiencing issues, try refreshing the page and starting over. Most problems are resolved by restarting the browser or trying a different browser.',

        // Support Development Content
        supportTitle: 'Support Development',
        supportSubtitle: 'Help keep this tool free, fast, and ad-free for everyone',
        supportDescription: 'Help keep this tool free, fast, and ad-free for everyone',
        supportHeroTitle: 'Help Keep This Excel Processing Tool Free',
        supportHeroDesc: 'This Easy Sheets Divider is developed and maintained by professionals for the community. Your support helps us continue improving this free resource with new features, better performance, and enhanced functionality for Excel processing operations.',
        continuousDevelopment: 'Continuous Development',
        serverCosts: 'Server & Processing Costs',
        communitySupport: 'Community Support',
        creditDebitCard: 'Credit/Debit Card',
        securePayment: 'Secure payment processing via PayPal',
        donateWithPayPal: 'Donate with PayPal',
        acceptedPaymentMethods: 'Accepted Payment Methods:',
        scanPayPalQR: 'Or scan PayPal QR code:',
        scanWithMobile: 'Scan with mobile device',
        secureSSL: 'Secure SSL encrypted transactions',
        questionsOrFeedback: 'Questions or Feedback?',
        feedbackDesc: 'Have ideas for new features or found a bug? We\'d love to hear from you!',
        sendFeedback: 'Send Feedback',
        cryptocurrency: 'Cryptocurrency',
        cryptoDesc: 'Direct crypto donations - no fees, maximum impact',
        bitcoin: 'Bitcoin (BTC)',
        ethereum: 'Ethereum (ETH)',
        solana: 'Solana (SOL)',
        copy: 'Copy',
        scanToSend: 'Scan to send',
        verifyAddresses: 'Always verify addresses before sending',
        thankYouTitle: 'Thank You for Your Support!',
        thankYouDesc: 'Every donation, no matter the size, helps us maintain and improve this tool for the community. Your support ensures we can continue providing accurate, up-to-date Excel processing resources, completely free of charge.',
        developedByProfessionals: 'Developed by professionals, for professionals',

        // Progress Modal Content
        processingFile: 'Processing File',
        progress: 'Progress',
        timeRemaining: 'Time Remaining',
        currentOperation: 'Current Operation',
        chunksProcessed: 'Chunks Processed',
        memoryUsage: 'Memory Usage',
        bytesProcessed: 'Bytes Processed',
        processingSpeed: 'Processing Speed',
        pause: 'Pause',
        resume: 'Resume',
        cancel: 'Cancel',
        initializing: 'Initializing...',
        readingFile: 'Reading file...',
        processingData: 'Processing data...',
        parsingExcel: 'Parsing Excel file...',
        splittingData: 'Splitting data...',
        generatingFiles: 'Generating files...',
        memoryWarning: 'Memory usage is high',
        memoryCritical: 'Critical memory usage - processing paused',
        largeFileLoaded: 'Large file loaded successfully using progressive loading',
        errorProcessingData: 'Error processing file data',

        // Conditional Splitting Content
        conditionalSplitting: 'Conditional Splitting',
        conditionalSplittingDesc: 'Split files based on specific conditions like cell values, date ranges, or numerical thresholds',
        addCondition: 'Add Condition',
        addNew: 'Add New',
        conditionType: 'Condition Type',
        cellValue: 'Cell Value',
        dateRange: 'Date Range',
        numericalThreshold: 'Numerical Threshold',
        textContains: 'Text Contains',
        regexMatch: 'Regex Match',
        targetColumn: 'Target Column',
        selectColumn: 'Select Column...',
        operator: 'Operator',
        equals: 'Equals',
        notEquals: 'Not Equals',
        contains: 'Contains',
        notContains: 'Not Contains',
        startsWith: 'Starts With',
        endsWith: 'Ends With',
        greaterThan: 'Greater Than',
        lessThan: 'Less Than',
        greaterEqual: 'Greater or Equal',
        lessEqual: 'Less or Equal',
        between: 'Between',
        notBetween: 'Not Between',
        value: 'Value',
        secondValue: 'Second Value',
        dateFormat: 'Date Format',
        saveCondition: 'Save Condition',
        activeConditions: 'Active Conditions',
        noConditionsAdded: 'No conditions added yet. Add conditions to enable conditional splitting.',
        previewSplit: 'Preview Split',
        executeSplit: 'Execute Split',
        pleaseCompleteCondition: 'Please complete all required fields',
        pleaseEnterSecondValue: 'Please enter a second value for range conditions',
        enableConditionalSplitting: 'Enable Conditional Splitting',
        conditionalSplittingHint: 'Split based on cell values, dates, or conditions',

        // Enhanced Drag & Drop Content
        dropFilesHere: 'Drop files here',
        validFiles: 'Valid files',
        invalidFiles: 'Invalid files',
        queuePosition: 'Queue Position',
        selectedFiles: 'Selected Files',
        clear: 'Clear',
        totalFiles: 'Total Files',
        totalSize: 'Total Size',
        validFilesCount: 'Valid Files',
        andMore: '...and more',
        invalidFile: 'Invalid file',
        unsupportedFormat: 'Unsupported format',
        unknownError: 'Unknown error',
        someFilesInvalid: 'Some files were invalid and skipped',
        filesAdded: 'Files added successfully',

        // Naming Options
        naming: 'Naming',
        simple: 'Simple',
        detailed: 'Detailed',
        descriptive: 'Descriptive',
        numbered: 'Numbered',

        // Format Options
        excelFormat: 'Excel (.xlsx)',
        csvFormat: 'CSV (.csv)',
        odsFormat: 'OpenOffice (.ods)',
        gsheetFormat: 'Google Sheets',

        // Multi-file Options
        worksheets: 'Worksheets',
        startBatchProcessing: 'Start Batch Processing',

        // Placeholder Text
        filePrefix: 'File prefix',

        // About Section
        aboutThisTool: 'About This Tool',
        aboutDescription: 'Split Excel, CSV, OpenOffice, and Google Sheets files by worksheet, column value, row count, or file size. All processing happens in your browser - your data never leaves your computer.',
        sheetJS: 'SheetJS',
        clientSide: 'Client-Side',
        privacyFirst: 'Privacy-First',

        // Main Content
        splitResults: '5. Processing Results',
        uploadFileToBegin: 'Upload a file to begin splitting',
        selectProcessingMode: 'Select processing mode and upload files to begin',

        // Status Messages
        excelFileLoaded: 'Excel file loaded successfully. Configure split options in the sidebar.',
        csvFileLoaded: 'CSV file loaded successfully. Configure split options in the sidebar.',
        odsFileLoaded: 'OpenOffice Calc file loaded successfully. Configure split options in the sidebar.',
        googleSheetsLoaded: 'Google Sheets file loaded successfully. Configure split options in the sidebar.',
        errorLoadingFile: 'Error loading file. Please try again.',
        processingFile: 'Processing file... Please wait.',
        splitComplete: 'Split complete!',
        filesCreated: 'files created.',
        fileLoadedConfigure: 'File loaded - configure options and split',
        uploadMultipleFiles: 'Upload multiple files to begin batch processing',
        filesInQueue: 'files in queue',
        filesCreatedFrom: 'files created from',
        sourceFiles: 'source files',

        // Footer
        copyrightText: '© 2025 Easy Sheets Divider | Privacy-First File Processing',
        privacyFirstProcessing: 'Privacy-First File Processing',

        // Common UI Elements
        loading: 'Loading...',
        pleaseWait: 'Please wait...',
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Information'
    },

    'es': {
        // Main Application
        appTitle: 'Easy Sheets Divider',
        appSubtitle: 'Divide archivos grandes de Excel en hojas de cálculo más pequeñas y manejables',

        // Header Navigation
        helpGuide: 'Guía de Ayuda',
        supportDevelopment: 'Apoyar el Desarrollo',
        language: 'Idioma',

        // Processing Modes
        processingMode: '1. Modo de Procesamiento',
        singleFileMode: 'Archivo Único',
        multiFileMode: 'Multi-Archivo',
        singleFileDesc: 'Procesa un archivo a la vez',
        multiFileDesc: 'Procesa múltiples archivos por lotes',

        // Upload Area
        uploadTitle: '2. Subir Archivos',
        uploadInstruction: 'Arrastra y suelta archivos aquí o haz clic para explorar',
        uploadSupported: 'Formatos compatibles: Excel (.xlsx, .xls), CSV, OpenOffice (.ods)',
        uploadMaxSize: 'Tamaño máximo de archivo: 100MB por archivo',
        dropOrClick: 'Soltar o hacer clic',
        dropMultipleFiles: 'Soltar múltiples archivos o hacer clic',
        excelCSVFiles: 'Archivos de Excel, CSV, OpenOffice, Google Sheets',
        reading: 'Leyendo...',
        clear: 'Limpiar',
        options: 'Opciones',
        batchProcessingResults: 'Resultados de Procesamiento por Lotes',

        // Splitting Methods
        splitMethod: '3. Método de División',
        splittingMethod: 'Método de División',
        byWorksheets: 'Por Hojas de Trabajo',
        byRowCount: 'Por Número de Filas',
        byFileSize: 'Por Tamaño de Archivo',
        byWorksheetsDesc: 'Crear archivos separados para cada hoja de trabajo',
        byRowCountDesc: 'Dividir datos en archivos con número específico de filas',
        byFileSizeDesc: 'Crear archivos bajo el límite de tamaño objetivo',
        worksheet: 'Hoja de Trabajo',
        column: 'Columna',
        rows: 'Filas',
        size: 'Tamaño',
        includeHeaders: 'Incluir encabezados',
        outputOptions: '4. Opciones de Salida',
        batchOptions: 'Opciones por Lotes',

        // Configuration Options
        outputFormat: 'Formato de Salida',
        includeHeadersDesc: 'Agregar encabezados de columna a cada archivo dividido',
        rowsPerFile: 'Filas por Archivo',
        targetFileSize: 'Tamaño de Archivo Objetivo (MB)',

        // Buttons
        processFiles: 'Procesar Archivos',
        splitFile: 'Dividir Archivo',
        downloadAll: 'Descargar Todo',
        downloadZip: 'Descargar ZIP',
        download: 'Descargar',
        cancel: 'Cancelar',
        close: 'Cerrar',
        startBatchProcessing: 'Iniciar Procesamiento por Lotes',

        // Naming Options
        naming: 'Nomenclatura',
        simple: 'Simple',
        detailed: 'Detallado',
        descriptive: 'Descriptivo',
        numbered: 'Numerado',

        // Format Options
        excelFormat: 'Excel (.xlsx)',
        csvFormat: 'CSV (.csv)',
        odsFormat: 'OpenOffice (.ods)',
        gsheetFormat: 'Google Sheets',

        // Multi-file Options
        worksheets: 'Hojas de Trabajo',

        // Placeholder Text
        filePrefix: 'Prefijo de archivo',

        // Progress and Status
        processing: 'Procesando...',
        completed: 'Completado',
        failed: 'Falló',
        ready: 'Listo',
        filesProcessed: 'archivos procesados',
        estimatedTime: 'Tiempo estimado',
        timeRemaining: 'Tiempo restante',

        // File Formats
        excel: 'Excel',
        csv: 'CSV',
        openoffice: 'OpenOffice',
        allFormats: 'Todos los Formatos',

        // Error Messages
        errorFileSize: 'El tamaño del archivo excede el límite máximo',
        errorFileFormat: 'Formato de archivo no compatible',
        errorProcessing: 'Error al procesar el archivo',
        errorNetwork: 'Ocurrió un error de red',
        errorGeneral: 'Ocurrió un error inesperado',

        // Notifications
        fileUploaded: 'Archivo subido exitosamente',
        processingStarted: 'Procesamiento iniciado',
        processingComplete: 'Procesamiento completado exitosamente',
        downloadReady: 'Descarga lista',

        // Help Guide Content
        helpTitle: 'Guía de Usuario de Easy Sheets Divider',
        helpSubtitle: 'Tu guía completa para dividir archivos grandes de Excel en hojas de cálculo más pequeñas y manejables',

        // Help Guide Navigation
        systemRequirements: 'Requisitos del Sistema',
        overview: 'Descripción General',
        usage: 'Cómo Usar',
        performance: 'Consejos de Rendimiento',
        troubleshooting: 'Solución de Problemas',

        // System Requirements Section
        systemRequirementsPerformance: 'Requisitos del Sistema y Rendimiento',
        privacyFirstProcessing: 'Procesamiento con Privacidad Primero',
        privacyFirstDesc: 'Easy Sheets Divider funciona completamente en tu navegador web usando los recursos de tu computadora local. Tus datos nunca salen de tu computadora - todo el procesamiento ocurre localmente, asegurando completa privacidad y seguridad.',
        performanceFactors: 'Factores de Rendimiento',
        performanceFactorsDesc: 'La velocidad de procesamiento depende de las especificaciones de tu computadora:',
        component: 'Componente',
        impactOnPerformance: 'Impacto en el Rendimiento',
        recommendation: 'Recomendación',
        cpu: 'CPU',
        cpuImpact: 'Procesadores más rápidos manejan archivos grandes más rápidamente',
        cpuRecommendation: 'Procesador moderno multi-núcleo',
        ram: 'RAM',
        ramImpact: 'Más memoria permite procesar archivos más grandes',
        ramRecommendation: '8GB+ para archivos grandes (50MB+)',
        browser: 'Navegador',
        browserImpact: 'Los navegadores modernos optimizan el rendimiento de JavaScript',
        browserRecommendation: 'Chrome, Firefox, Safari o Edge (versiones más recientes)',
        performanceTip: 'Consejo de Rendimiento',
        performanceTipDesc: 'Cierra pestañas innecesarias del navegador y aplicaciones antes de procesar archivos grandes para liberar recursos del sistema para un rendimiento óptimo.',

        // Application Overview Section
        applicationOverview: 'Descripción General de la Aplicación',
        whatIsExcelCompartmentalizer: '¿Qué es Easy Sheets Divider?',
        whatIsDesc: 'Easy Sheets Divider es una herramienta poderosa basada en navegador que divide archivos grandes de Excel en hojas de cálculo más pequeñas y manejables. Perfecto para organizar datos, reducir tamaños de archivo y mejorar el rendimiento de las hojas de cálculo.',
        supportedFileFormats: 'Formatos de Archivo Compatibles',
        excelFiles: 'Archivos de Excel',
        excelFilesDesc: 'Formatos .xlsx y .xls\nTodas las versiones de Excel compatibles',
        csvFiles: 'Archivos CSV',
        csvFilesDesc: 'Valores separados por comas\nCompatibilidad universal',
        openOfficeFiles: 'OpenOffice',
        openOfficeFilesDesc: 'Formato .ods\nArchivos de LibreOffice Calc',
        googleSheetsFiles: 'Google Sheets',
        googleSheetsFilesDesc: 'Google Sheets exportadas\nDescargar como Excel primero',
        keyFeatures: 'Características Clave',
        multipleSplittingMethods: 'Múltiples Métodos de División: Por hojas de trabajo, número de filas o tamaño de archivo',
        batchProcessing: 'Procesamiento por Lotes: Procesar múltiples archivos simultáneamente',
        formatConversion: 'Conversión de Formato: Salida a formatos Excel, CSV u OpenOffice',
        organizedDownloads: 'Descargas Organizadas: Archivos individuales o archivos ZIP',
        realTimeProgress: 'Progreso en Tiempo Real: Actualizaciones en vivo durante el procesamiento',
        privacyFirst: 'Privacidad Primero: Todo el procesamiento ocurre localmente',

        // Usage Instructions Section
        howToUseExcelCompartmentalizer: 'Cómo Usar Easy Sheets Divider',
        step1ChooseProcessingMode: 'Paso 1: Elegir Modo de Procesamiento',
        step1Desc: 'Selecciona tu modo de procesamiento en la parte superior de la aplicación:',
        singleFileModeDesc: 'Modo de Archivo Único: Procesar un archivo a la vez con opciones detalladas',
        multiFileModeDesc: 'Modo Multi-Archivo: Procesar múltiples archivos por lotes con la misma configuración',
        step2UploadFiles: 'Paso 2: Subir Tus Archivos',
        dragDrop: 'Arrastrar y Soltar: Arrastra archivos directamente al área de carga',
        clickToBrowse: 'Hacer Clic para Navegar: Haz clic en el área de carga para seleccionar archivos de tu computadora',
        fileValidation: 'Validación de Archivos: Solo se aceptarán formatos de archivo compatibles',
        queueManagement: 'Gestión de Cola: En modo multi-archivo, los archivos se agregan a una cola de procesamiento',
        step3ChooseSplittingMethod: 'Paso 3: Elegir Método de División',
        byWorksheetsTitle: 'Por Hojas de Trabajo',
        byWorksheetsMethodDesc: 'Crea archivos separados para cada hoja de trabajo en tu archivo de Excel. Perfecto para archivos con múltiples hojas.',
        byRowCountTitle: 'Por Número de Filas',
        byRowCountMethodDesc: 'Divide los datos en archivos con un número específico de filas. Ideal para conjuntos de datos grandes.',
        byFileSizeTitle: 'Por Tamaño de Archivo',
        byFileSizeMethodDesc: 'Crea archivos bajo un límite de tamaño objetivo. Excelente para archivos adjuntos de correo o limitaciones del sistema.',
        step4ConfigureOptions: 'Paso 4: Configurar Opciones',
        option: 'Opción',
        description: 'Descripción',
        outputFormatOption: 'Formato de Salida',
        outputFormatDesc: 'Elegir Excel (.xlsx), CSV, OpenOffice (.ods), o Todos los Formatos',
        outputFormatRecommendation: 'Excel para compatibilidad, CSV para simplicidad',
        includeHeadersOption: 'Incluir Encabezados',
        includeHeadersOptionDesc: 'Agregar encabezados de columna a cada archivo dividido',
        includeHeadersRecommendation: 'Siempre recomendado para claridad de datos',
        namingScheme: 'Esquema de Nomenclatura',
        namingSchemeDesc: 'Nombres descriptivos o archivos numerados',
        namingSchemeRecommendation: 'Descriptivo para fácil identificación',
        step5StartProcessing: 'Paso 5: Iniciar Procesamiento',
        reviewSettings: 'Revisar Configuración: Verifica tu método de división y opciones',
        clickProcess: 'Hacer Clic en Procesar: Iniciar la operación de división',
        monitorProgress: 'Monitorear Progreso: Observar actualizaciones de progreso en tiempo real',
        waitForCompletion: 'Esperar Finalización: El tiempo de procesamiento varía según el tamaño y complejidad del archivo',
        step6DownloadResults: 'Paso 6: Descargar Resultados',
        individualDownloads: 'Descargas Individuales',
        individualDownloadsDesc: 'Descargar archivos específicos uno a la vez usando los botones de descarga junto a cada resultado.',
        batchZipDownload: 'Descarga ZIP por Lotes',
        batchZipDownloadDesc: 'Descargar todos los archivos en un archivo ZIP organizado con resúmenes de procesamiento incluidos.',

        // Performance Tips Section
        performanceTipsBestPractices: 'Consejos de Rendimiento y Mejores Prácticas',
        optimizeProcessingSpeed: 'Optimizar Velocidad de Procesamiento',
        closeUnnecessaryTabs: 'Cerrar pestañas innecesarias del navegador y aplicaciones',
        useLatestBrowser: 'Usar la versión más reciente de tu navegador web',
        processOffPeak: 'Procesar archivos durante uso de computadora fuera de horas pico',
        considerSplittingLarge: 'Considerar dividir archivos muy grandes (100MB+) en fragmentos más pequeños',
        largeFileWarning: 'Advertencia de Archivo Grande',
        largeFileWarningDesc: 'Los archivos de más de 100MB pueden tomar varios minutos para procesar y requieren recursos significativos del sistema. Asegúrate de tener memoria libre adecuada antes de procesar archivos muy grandes.',

        // Troubleshooting Section
        troubleshootingTitle: 'Solución de Problemas',
        commonIssues: 'Problemas Comunes',
        problem: 'Problema',
        possibleCause: 'Causa Posible',
        solution: 'Solución',
        fileWontUpload: 'El archivo no se carga',
        unsupportedFileFormat: 'Formato de archivo no compatible',
        ensureFileFormat: 'Asegurar que el archivo sea formato .xlsx, .xls, .csv, o .ods',
        processingSlow: 'El procesamiento es lento',
        largeFileOrLimitedResources: 'Tamaño de archivo grande o recursos limitados del sistema',
        closeOtherApps: 'Cerrar otras aplicaciones, probar archivos más pequeños primero',
        browserCrashes: 'El navegador se bloquea',
        insufficientMemory: 'Memoria insuficiente para archivos grandes',
        restartBrowser: 'Reiniciar navegador, cerrar otras pestañas, probar archivos más pequeños',
        downloadFails: 'La descarga falla',
        browserDownloadRestrictions: 'Restricciones de descarga del navegador',
        checkBrowserSettings: 'Verificar configuración del navegador, permitir descargas de este sitio',
        needMoreHelp: '¿Necesitas Más Ayuda?',
        needMoreHelpDesc: 'Si continúas experimentando problemas, intenta actualizar la página y comenzar de nuevo. La mayoría de los problemas se resuelven reiniciando el navegador o probando un navegador diferente.',

        // Support Development Content
        supportTitle: 'Apoyar el Desarrollo',
        supportSubtitle: 'Ayuda a mantener esta herramienta gratuita, rápida y sin anuncios para todos',
        supportDescription: 'Ayuda a mantener esta herramienta gratuita, rápida y sin anuncios para todos',
        supportHeroTitle: 'Ayuda a Mantener Esta Herramienta de Procesamiento de Excel Gratuita',
        supportHeroDesc: 'Este Easy Sheets Divider es desarrollado y mantenido por profesionales para la comunidad. Tu apoyo nos ayuda a continuar mejorando este recurso gratuito con nuevas características, mejor rendimiento y funcionalidad mejorada para operaciones de procesamiento de Excel.',
        continuousDevelopment: 'Desarrollo Continuo',
        serverCosts: 'Costos de Servidor y Procesamiento',
        communitySupport: 'Soporte Comunitario',
        creditDebitCard: 'Tarjeta de Crédito/Débito',
        securePayment: 'Procesamiento de pagos seguro vía PayPal',
        donateWithPayPal: 'Donar con PayPal',
        acceptedPaymentMethods: 'Métodos de Pago Aceptados:',
        scanPayPalQR: 'O escanea el código QR de PayPal:',
        scanWithMobile: 'Escanear con dispositivo móvil',
        secureSSL: 'Transacciones SSL seguras encriptadas',
        questionsOrFeedback: '¿Preguntas o Comentarios?',
        feedbackDesc: '¿Tienes ideas para nuevas características o encontraste un error? ¡Nos encantaría escucharte!',
        sendFeedback: 'Enviar Comentarios',
        cryptocurrency: 'Criptomoneda',
        cryptoDesc: 'Donaciones directas en cripto - sin comisiones, máximo impacto',
        bitcoin: 'Bitcoin (BTC)',
        ethereum: 'Ethereum (ETH)',
        solana: 'Solana (SOL)',
        copy: 'Copiar',
        scanToSend: 'Escanear para enviar',
        verifyAddresses: 'Siempre verifica las direcciones antes de enviar',
        thankYouTitle: '¡Gracias por Tu Apoyo!',
        thankYouDesc: 'Cada donación, sin importar el tamaño, nos ayuda a mantener y mejorar esta herramienta para la comunidad. Tu apoyo asegura que podamos continuar proporcionando recursos de procesamiento de Excel precisos y actualizados, completamente gratis.',
        developedByProfessionals: 'Desarrollado por profesionales, para profesionales',

        // Progress Modal Content
        processingFile: 'Procesando Archivo',
        progress: 'Progreso',
        timeRemaining: 'Tiempo Restante',
        currentOperation: 'Operación Actual',
        chunksProcessed: 'Fragmentos Procesados',
        memoryUsage: 'Uso de Memoria',
        bytesProcessed: 'Bytes Procesados',
        processingSpeed: 'Velocidad de Procesamiento',
        pause: 'Pausar',
        resume: 'Reanudar',
        cancel: 'Cancelar',
        initializing: 'Inicializando...',
        readingFile: 'Leyendo archivo...',
        processingData: 'Procesando datos...',
        parsingExcel: 'Analizando archivo Excel...',
        splittingData: 'Dividiendo datos...',
        generatingFiles: 'Generando archivos...',
        memoryWarning: 'El uso de memoria es alto',
        memoryCritical: 'Uso crítico de memoria - procesamiento pausado',

        // About Section
        aboutThisTool: 'Acerca de Esta Herramienta',
        aboutDescription: 'Divide archivos de Excel, CSV, OpenOffice y Google Sheets por hoja de trabajo, valor de columna, número de filas o tamaño de archivo. Todo el procesamiento ocurre en tu navegador - tus datos nunca salen de tu computadora.',
        sheetJS: 'SheetJS',
        clientSide: 'Del Lado del Cliente',
        privacyFirst: 'Privacidad Primero',

        // Main Content
        splitResults: '5. Resultados del Procesamiento',
        uploadFileToBegin: 'Sube un archivo para comenzar la división',
        selectProcessingMode: 'Selecciona el modo de procesamiento y sube archivos para comenzar',

        // Status Messages
        excelFileLoaded: 'Archivo Excel cargado exitosamente. Configura las opciones de división en la barra lateral.',
        csvFileLoaded: 'Archivo CSV cargado exitosamente. Configura las opciones de división en la barra lateral.',
        odsFileLoaded: 'Archivo OpenOffice Calc cargado exitosamente. Configura las opciones de división en la barra lateral.',
        googleSheetsLoaded: 'Archivo Google Sheets cargado exitosamente. Configura las opciones de división en la barra lateral.',
        errorLoadingFile: 'Error al cargar el archivo. Por favor intenta de nuevo.',
        processingFile: 'Procesando archivo... Por favor espera.',
        splitComplete: '¡División completa!',
        filesCreated: 'archivos creados.',
        fileLoadedConfigure: 'Archivo cargado - configura opciones y divide',
        uploadMultipleFiles: 'Sube múltiples archivos para comenzar el procesamiento por lotes',
        filesInQueue: 'archivos en cola',
        filesCreatedFrom: 'archivos creados de',
        sourceFiles: 'archivos fuente',

        // Footer
        copyrightText: '© 2025 Easy Sheets Divider | Procesamiento de Archivos con Privacidad Primero',
        privacyFirstProcessing: 'Procesamiento de Archivos con Privacidad Primero',

        // Common UI Elements
        loading: 'Cargando...',
        pleaseWait: 'Por favor espera...',
        success: 'Éxito',
        error: 'Error',
        warning: 'Advertencia',
        info: 'Información'
    },

    'fr': {
        // Main Application
        appTitle: 'Easy Sheets Divider',
        appSubtitle: 'Diviser de gros fichiers Excel en feuilles de calcul plus petites et gérables',

        // Header Navigation
        helpGuide: 'Guide d\'Aide',
        supportDevelopment: 'Soutenir le Développement',
        language: 'Langue',

        // Processing Modes
        processingMode: '1. Mode de Traitement',
        singleFileMode: 'Fichier Unique',
        multiFileMode: 'Multi-Fichiers',
        singleFileDesc: 'Traiter un fichier à la fois',
        multiFileDesc: 'Traiter plusieurs fichiers par lots',

        // Upload Area
        uploadTitle: '2. Télécharger des Fichiers',
        uploadInstruction: 'Glissez-déposez les fichiers ici ou cliquez pour parcourir',
        uploadSupported: 'Formats pris en charge : Excel (.xlsx, .xls), CSV, OpenOffice (.ods)',
        uploadMaxSize: 'Taille maximale du fichier : 100 Mo par fichier',
        dropOrClick: 'Déposer ou cliquer',
        dropMultipleFiles: 'Déposer plusieurs fichiers ou cliquer',
        excelCSVFiles: 'Fichiers Excel, CSV, OpenOffice, Google Sheets',
        reading: 'Lecture...',
        clear: 'Effacer',
        options: 'Options',
        batchProcessingResults: 'Résultats de Traitement par Lots',

        // Splitting Methods
        splitMethod: '3. Méthode de Division',
        splittingMethod: 'Méthode de Division',
        byWorksheets: 'Par Feuilles de Calcul',
        byRowCount: 'Par Nombre de Lignes',
        byFileSize: 'Par Taille de Fichier',
        byWorksheetsDesc: 'Créer des fichiers séparés pour chaque feuille de calcul',
        byRowCountDesc: 'Diviser les données en fichiers avec un nombre spécifique de lignes',
        byFileSizeDesc: 'Créer des fichiers sous la limite de taille cible',
        worksheet: 'Feuille de Calcul',
        column: 'Colonne',
        rows: 'Lignes',
        size: 'Taille',
        includeHeaders: 'Inclure les en-têtes',
        outputOptions: '4. Options de Sortie',
        batchOptions: 'Options par Lots',

        // Configuration Options
        outputFormat: 'Format de Sortie',
        includeHeadersDesc: 'Ajouter des en-têtes de colonne à chaque fichier divisé',
        rowsPerFile: 'Lignes par Fichier',
        targetFileSize: 'Taille de Fichier Cible (Mo)',

        // Buttons
        processFiles: 'Traiter les Fichiers',
        splitFile: 'Diviser le Fichier',
        downloadAll: 'Tout Télécharger',
        downloadZip: 'Télécharger ZIP',
        download: 'Télécharger',
        cancel: 'Annuler',
        close: 'Fermer',
        startBatchProcessing: 'Démarrer le Traitement par Lots',

        // Naming Options
        naming: 'Nomenclature',
        simple: 'Simple',
        detailed: 'Détaillé',
        descriptive: 'Descriptif',
        numbered: 'Numéroté',

        // Format Options
        excelFormat: 'Excel (.xlsx)',
        csvFormat: 'CSV (.csv)',
        odsFormat: 'OpenOffice (.ods)',
        gsheetFormat: 'Google Sheets',

        // Multi-file Options
        worksheets: 'Feuilles de Calcul',

        // Placeholder Text
        filePrefix: 'Préfixe de fichier',

        // Progress and Status
        processing: 'Traitement en cours...',
        completed: 'Terminé',
        failed: 'Échec',
        ready: 'Prêt',
        filesProcessed: 'fichiers traités',
        estimatedTime: 'Temps estimé',
        timeRemaining: 'Temps restant',

        // File Formats
        excel: 'Excel',
        csv: 'CSV',
        openoffice: 'OpenOffice',
        allFormats: 'Tous les Formats',

        // Error Messages
        errorFileSize: 'La taille du fichier dépasse la limite maximale',
        errorFileFormat: 'Format de fichier non pris en charge',
        errorProcessing: 'Erreur lors du traitement du fichier',
        errorNetwork: 'Une erreur réseau s\'est produite',
        errorGeneral: 'Une erreur inattendue s\'est produite',

        // Notifications
        fileUploaded: 'Fichier téléchargé avec succès',
        processingStarted: 'Traitement commencé',
        processingComplete: 'Traitement terminé avec succès',
        downloadReady: 'Téléchargement prêt',

        // Help Guide Content
        helpTitle: 'Guide Utilisateur de Easy Sheets Divider',
        helpSubtitle: 'Votre guide complet pour diviser de gros fichiers Excel en feuilles de calcul plus petites et gérables',

        // Help Guide Navigation
        systemRequirements: 'Configuration Système',
        overview: 'Aperçu',
        usage: 'Comment Utiliser',
        performance: 'Conseils de Performance',
        troubleshooting: 'Dépannage',

        // System Requirements Section
        systemRequirementsPerformance: 'Configuration Système et Performance',
        privacyFirstProcessing: 'Traitement Axé sur la Confidentialité',
        privacyFirstDesc: 'Easy Sheets Divider fonctionne entièrement dans votre navigateur web en utilisant les ressources de votre ordinateur local. Vos données ne quittent jamais votre ordinateur - tout le traitement se fait localement, garantissant une confidentialité et une sécurité complètes.',
        performanceFactors: 'Facteurs de Performance',
        performanceFactorsDesc: 'La vitesse de traitement dépend des spécifications de votre ordinateur :',
        component: 'Composant',
        impactOnPerformance: 'Impact sur la Performance',
        recommendation: 'Recommandation',
        cpu: 'CPU',
        cpuImpact: 'Les processeurs plus rapides gèrent les gros fichiers plus rapidement',
        cpuRecommendation: 'Processeur moderne multi-cœur',
        ram: 'RAM',
        ramImpact: 'Plus de mémoire permet de traiter des fichiers plus volumineux',
        ramRecommendation: '8GB+ pour les gros fichiers (50MB+)',
        browser: 'Navigateur',
        browserImpact: 'Les navigateurs modernes optimisent les performances JavaScript',
        browserRecommendation: 'Chrome, Firefox, Safari ou Edge (dernières versions)',
        performanceTip: 'Conseil de Performance',
        performanceTipDesc: 'Fermez les onglets de navigateur et applications inutiles avant de traiter de gros fichiers pour libérer les ressources système pour une performance optimale.',

        // Application Overview Section
        applicationOverview: 'Aperçu de l\'Application',
        whatIsExcelCompartmentalizer: 'Qu\'est-ce que Easy Sheets Divider ?',
        whatIsDesc: 'Easy Sheets Divider est un outil puissant basé sur navigateur qui divise de gros fichiers Excel en feuilles de calcul plus petites et plus gérables. Parfait pour organiser les données, réduire les tailles de fichiers et améliorer les performances des feuilles de calcul.',
        supportedFileFormats: 'Formats de Fichiers Pris en Charge',
        excelFiles: 'Fichiers Excel',
        excelFilesDesc: 'Formats .xlsx et .xls\nToutes les versions Excel prises en charge',
        csvFiles: 'Fichiers CSV',
        csvFilesDesc: 'Valeurs séparées par des virgules\nCompatibilité universelle',
        openOfficeFiles: 'OpenOffice',
        openOfficeFilesDesc: 'Format .ods\nFichiers LibreOffice Calc',
        googleSheetsFiles: 'Google Sheets',
        googleSheetsFilesDesc: 'Google Sheets exportées\nTélécharger en Excel d\'abord',
        keyFeatures: 'Fonctionnalités Clés',
        multipleSplittingMethods: 'Méthodes de Division Multiples : Par feuilles de travail, nombre de lignes ou taille de fichier',
        batchProcessing: 'Traitement par Lots : Traiter plusieurs fichiers simultanément',
        formatConversion: 'Conversion de Format : Sortie vers Excel, CSV ou formats OpenOffice',
        organizedDownloads: 'Téléchargements Organisés : Fichiers individuels ou archives ZIP',
        realTimeProgress: 'Progrès en Temps Réel : Mises à jour en direct pendant le traitement',
        privacyFirst: 'Confidentialité d\'Abord : Tout le traitement se fait localement',

        // Usage Instructions Section
        howToUseExcelCompartmentalizer: 'Comment Utiliser Easy Sheets Divider',
        step1ChooseProcessingMode: 'Étape 1 : Choisir le Mode de Traitement',
        step1Desc: 'Sélectionnez votre mode de traitement en haut de l\'application :',
        singleFileModeDesc: 'Mode Fichier Unique : Traiter un fichier à la fois avec des options détaillées',
        multiFileModeDesc: 'Mode Multi-Fichiers : Traiter plusieurs fichiers par lots avec les mêmes paramètres',
        step2UploadFiles: 'Étape 2 : Télécharger Vos Fichiers',
        dragDrop: 'Glisser-Déposer : Glissez les fichiers directement sur la zone de téléchargement',
        clickToBrowse: 'Cliquer pour Parcourir : Cliquez sur la zone de téléchargement pour sélectionner des fichiers depuis votre ordinateur',
        fileValidation: 'Validation de Fichier : Seuls les formats de fichiers pris en charge seront acceptés',
        queueManagement: 'Gestion de File d\'Attente : En mode multi-fichiers, les fichiers sont ajoutés à une file de traitement',
        step3ChooseSplittingMethod: 'Étape 3 : Choisir la Méthode de Division',
        byWorksheetsTitle: 'Par Feuilles de Travail',
        byWorksheetsMethodDesc: 'Crée des fichiers séparés pour chaque feuille de travail dans votre fichier Excel. Parfait pour les fichiers avec plusieurs feuilles.',
        byRowCountTitle: 'Par Nombre de Lignes',
        byRowCountMethodDesc: 'Divise les données en fichiers avec un nombre spécifié de lignes. Idéal pour les grands ensembles de données.',
        byFileSizeTitle: 'Par Taille de Fichier',
        byFileSizeMethodDesc: 'Crée des fichiers sous une limite de taille cible. Excellent pour les pièces jointes d\'email ou les limitations système.',
        step4ConfigureOptions: 'Étape 4 : Configurer les Options',
        option: 'Option',
        description: 'Description',
        outputFormatOption: 'Format de Sortie',
        outputFormatDesc: 'Choisir Excel (.xlsx), CSV, OpenOffice (.ods), ou Tous les Formats',
        outputFormatRecommendation: 'Excel pour la compatibilité, CSV pour la simplicité',
        includeHeadersOption: 'Inclure les En-têtes',
        includeHeadersOptionDesc: 'Ajouter des en-têtes de colonnes à chaque fichier divisé',
        includeHeadersRecommendation: 'Toujours recommandé pour la clarté des données',
        namingScheme: 'Schéma de Nommage',
        namingSchemeDesc: 'Noms descriptifs ou fichiers numérotés',
        namingSchemeRecommendation: 'Descriptif pour une identification facile',
        step5StartProcessing: 'Étape 5 : Démarrer le Traitement',
        reviewSettings: 'Réviser les Paramètres : Vérifiez votre méthode de division et options',
        clickProcess: 'Cliquer sur Traiter : Démarrer l\'opération de division',
        monitorProgress: 'Surveiller le Progrès : Regarder les mises à jour de progrès en temps réel',
        waitForCompletion: 'Attendre la Finalisation : Le temps de traitement varie selon la taille et la complexité du fichier',
        step6DownloadResults: 'Étape 6 : Télécharger les Résultats',
        individualDownloads: 'Téléchargements Individuels',
        individualDownloadsDesc: 'Télécharger des fichiers spécifiques un à la fois en utilisant les boutons de téléchargement à côté de chaque résultat.',
        batchZipDownload: 'Téléchargement ZIP par Lots',
        batchZipDownloadDesc: 'Télécharger tous les fichiers dans une archive ZIP organisée avec des résumés de traitement inclus.',

        // Performance Tips Section
        performanceTipsBestPractices: 'Conseils de Performance et Meilleures Pratiques',
        optimizeProcessingSpeed: 'Optimiser la Vitesse de Traitement',
        closeUnnecessaryTabs: 'Fermer les onglets de navigateur et applications inutiles',
        useLatestBrowser: 'Utiliser la dernière version de votre navigateur web',
        processOffPeak: 'Traiter les fichiers pendant les heures creuses d\'utilisation de l\'ordinateur',
        considerSplittingLarge: 'Considérer diviser les très gros fichiers (100MB+) en plus petits morceaux',
        largeFileWarning: 'Avertissement Gros Fichier',
        largeFileWarningDesc: 'Les fichiers de plus de 100MB peuvent prendre plusieurs minutes à traiter et nécessitent des ressources système importantes. Assurez-vous d\'avoir suffisamment de mémoire libre avant de traiter de très gros fichiers.',

        // Troubleshooting Section
        troubleshootingTitle: 'Dépannage',
        commonIssues: 'Problèmes Courants',
        problem: 'Problème',
        possibleCause: 'Cause Possible',
        solution: 'Solution',
        fileWontUpload: 'Le fichier ne se télécharge pas',
        unsupportedFileFormat: 'Format de fichier non pris en charge',
        ensureFileFormat: 'S\'assurer que le fichier est au format .xlsx, .xls, .csv, ou .ods',
        processingSlow: 'Le traitement est lent',
        largeFileOrLimitedResources: 'Taille de fichier importante ou ressources système limitées',
        closeOtherApps: 'Fermer d\'autres applications, essayer d\'abord des fichiers plus petits',
        browserCrashes: 'Le navigateur plante',
        insufficientMemory: 'Mémoire insuffisante pour les gros fichiers',
        restartBrowser: 'Redémarrer le navigateur, fermer d\'autres onglets, essayer des fichiers plus petits',
        downloadFails: 'Le téléchargement échoue',
        browserDownloadRestrictions: 'Restrictions de téléchargement du navigateur',
        checkBrowserSettings: 'Vérifier les paramètres du navigateur, autoriser les téléchargements depuis ce site',
        needMoreHelp: 'Besoin de Plus d\'Aide ?',
        needMoreHelpDesc: 'Si vous continuez à rencontrer des problèmes, essayez de rafraîchir la page et de recommencer. La plupart des problèmes sont résolus en redémarrant le navigateur ou en essayant un navigateur différent.',

        // Support Development Content
        supportTitle: 'Soutenir le Développement',
        supportSubtitle: 'Aidez à maintenir cet outil gratuit, rapide et sans publicité pour tous',
        supportDescription: 'Aidez à maintenir cet outil gratuit, rapide et sans publicité pour tous',
        supportHeroTitle: 'Aidez à Maintenir Cet Outil de Traitement Excel Gratuit',
        supportHeroDesc: 'Ce Easy Sheets Divider est développé et maintenu par des professionnels pour la communauté. Votre soutien nous aide à continuer d\'améliorer cette ressource gratuite avec de nouvelles fonctionnalités, de meilleures performances et une fonctionnalité améliorée pour les opérations de traitement Excel.',
        continuousDevelopment: 'Développement Continu',
        serverCosts: 'Coûts de Serveur et de Traitement',
        communitySupport: 'Support Communautaire',
        creditDebitCard: 'Carte de Crédit/Débit',
        securePayment: 'Traitement de paiement sécurisé via PayPal',
        donateWithPayPal: 'Faire un Don avec PayPal',
        acceptedPaymentMethods: 'Méthodes de Paiement Acceptées :',
        scanPayPalQR: 'Ou scannez le code QR PayPal :',
        scanWithMobile: 'Scanner avec un appareil mobile',
        secureSSL: 'Transactions SSL sécurisées et cryptées',
        questionsOrFeedback: 'Questions ou Commentaires ?',
        feedbackDesc: 'Vous avez des idées pour de nouvelles fonctionnalités ou avez trouvé un bug ? Nous aimerions vous entendre !',
        sendFeedback: 'Envoyer des Commentaires',
        cryptocurrency: 'Cryptomonnaie',
        cryptoDesc: 'Dons crypto directs - pas de frais, impact maximum',
        bitcoin: 'Bitcoin (BTC)',
        ethereum: 'Ethereum (ETH)',
        solana: 'Solana (SOL)',
        copy: 'Copier',
        scanToSend: 'Scanner pour envoyer',
        verifyAddresses: 'Toujours vérifier les adresses avant d\'envoyer',
        thankYouTitle: 'Merci pour Votre Soutien !',
        thankYouDesc: 'Chaque don, quelle que soit sa taille, nous aide à maintenir et améliorer cet outil pour la communauté. Votre soutien nous assure de pouvoir continuer à fournir des ressources de traitement Excel précises et à jour, entièrement gratuites.',
        developedByProfessionals: 'Développé par des professionnels, pour des professionnels',

        // About Section
        aboutThisTool: 'À Propos de Cet Outil',
        aboutDescription: 'Diviser les fichiers Excel, CSV, OpenOffice et Google Sheets par feuille de calcul, valeur de colonne, nombre de lignes ou taille de fichier. Tout le traitement se fait dans votre navigateur - vos données ne quittent jamais votre ordinateur.',
        sheetJS: 'SheetJS',
        clientSide: 'Côté Client',
        privacyFirst: 'Confidentialité d\'Abord',

        // Main Content
        splitResults: '5. Résultats du Traitement',
        uploadFileToBegin: 'Téléchargez un fichier pour commencer la division',
        selectProcessingMode: 'Sélectionnez le mode de traitement et téléchargez des fichiers pour commencer',

        // Status Messages
        excelFileLoaded: 'Fichier Excel chargé avec succès. Configurez les options de division dans la barre latérale.',
        csvFileLoaded: 'Fichier CSV chargé avec succès. Configurez les options de division dans la barre latérale.',
        odsFileLoaded: 'Fichier OpenOffice Calc chargé avec succès. Configurez les options de division dans la barre latérale.',
        googleSheetsLoaded: 'Fichier Google Sheets chargé avec succès. Configurez les options de division dans la barre latérale.',
        errorLoadingFile: 'Erreur lors du chargement du fichier. Veuillez réessayer.',
        processingFile: 'Traitement du fichier... Veuillez patienter.',
        splitComplete: 'Division terminée !',
        filesCreated: 'fichiers créés.',
        fileLoadedConfigure: 'Fichier chargé - configurez les options et divisez',
        uploadMultipleFiles: 'Téléchargez plusieurs fichiers pour commencer le traitement par lots',
        filesInQueue: 'fichiers en file d\'attente',
        filesCreatedFrom: 'fichiers créés à partir de',
        sourceFiles: 'fichiers sources',

        // Footer
        copyrightText: '© 2025 Easy Sheets Divider | Traitement de Fichiers Axé sur la Confidentialité',
        privacyFirstProcessing: 'Traitement de Fichiers Axé sur la Confidentialité',

        // Common UI Elements
        loading: 'Chargement...',
        pleaseWait: 'Veuillez patienter...',
        success: 'Succès',
        error: 'Erreur',
        warning: 'Avertissement',
        info: 'Information'
    },

    'de': {
        // Main Application
        appTitle: 'Easy Sheets Divider',
        appSubtitle: 'Große Excel-Dateien in kleinere, handhabbare Tabellenkalkulationen aufteilen',

        // Header Navigation
        helpGuide: 'Hilfe-Leitfaden',
        supportDevelopment: 'Entwicklung Unterstützen',
        language: 'Sprache',

        // Processing Modes
        processingMode: '1. Verarbeitungsmodus',
        singleFileMode: 'Einzeldatei',
        multiFileMode: 'Mehrfachdatei',
        singleFileDesc: 'Eine Datei nach der anderen verarbeiten',
        multiFileDesc: 'Mehrere Dateien stapelweise verarbeiten',

        // Upload Area
        uploadTitle: '2. Dateien Hochladen',
        uploadInstruction: 'Dateien hier hineinziehen oder klicken zum Durchsuchen',
        uploadSupported: 'Unterstützte Formate: Excel (.xlsx, .xls), CSV, OpenOffice (.ods)',
        uploadMaxSize: 'Maximale Dateigröße: 100MB pro Datei',
        dropOrClick: 'Ablegen oder klicken',
        dropMultipleFiles: 'Mehrere Dateien ablegen oder klicken',
        excelCSVFiles: 'Excel-, CSV-, OpenOffice-, Google Sheets-Dateien',
        reading: 'Lesen...',
        clear: 'Löschen',
        options: 'Optionen',
        batchProcessingResults: 'Stapelverarbeitungsergebnisse',

        // Splitting Methods
        splitMethod: '3. Aufteilungsmethode',
        splittingMethod: 'Aufteilungsmethode',
        byWorksheets: 'Nach Arbeitsblättern',
        byRowCount: 'Nach Zeilenanzahl',
        byFileSize: 'Nach Dateigröße',
        byWorksheetsDesc: 'Separate Dateien für jedes Arbeitsblatt erstellen',
        byRowCountDesc: 'Daten in Dateien mit bestimmter Zeilenanzahl aufteilen',
        byFileSizeDesc: 'Dateien unter der Zielgrößenbegrenzung erstellen',
        worksheet: 'Arbeitsblatt',
        column: 'Spalte',
        rows: 'Zeilen',
        size: 'Größe',
        includeHeaders: 'Kopfzeilen einschließen',
        outputOptions: '4. Ausgabeoptionen',
        batchOptions: 'Stapeloptionen',

        // Configuration Options
        outputFormat: 'Ausgabeformat',
        includeHeadersDesc: 'Spaltenüberschriften zu jeder geteilten Datei hinzufügen',
        rowsPerFile: 'Zeilen pro Datei',
        targetFileSize: 'Ziel-Dateigröße (MB)',

        // Buttons
        processFiles: 'Dateien Verarbeiten',
        splitFile: 'Datei Aufteilen',
        downloadAll: 'Alle Herunterladen',
        downloadZip: 'ZIP Herunterladen',
        download: 'Herunterladen',
        cancel: 'Abbrechen',
        close: 'Schließen',
        startBatchProcessing: 'Stapelverarbeitung Starten',

        // Naming Options
        naming: 'Benennung',
        simple: 'Einfach',
        detailed: 'Detailliert',
        descriptive: 'Beschreibend',
        numbered: 'Nummeriert',

        // Format Options
        excelFormat: 'Excel (.xlsx)',
        csvFormat: 'CSV (.csv)',
        odsFormat: 'OpenOffice (.ods)',
        gsheetFormat: 'Google Sheets',

        // Multi-file Options
        worksheets: 'Arbeitsblätter',

        // Placeholder Text
        filePrefix: 'Datei-Präfix',

        // Progress and Status
        processing: 'Verarbeitung läuft...',
        completed: 'Abgeschlossen',
        failed: 'Fehlgeschlagen',
        ready: 'Bereit',
        filesProcessed: 'Dateien verarbeitet',
        estimatedTime: 'Geschätzte Zeit',
        timeRemaining: 'Verbleibende Zeit',

        // File Formats
        excel: 'Excel',
        csv: 'CSV',
        openoffice: 'OpenOffice',
        allFormats: 'Alle Formate',

        // Error Messages
        errorFileSize: 'Dateigröße überschreitet das maximale Limit',
        errorFileFormat: 'Nicht unterstütztes Dateiformat',
        errorProcessing: 'Fehler beim Verarbeiten der Datei',
        errorNetwork: 'Netzwerkfehler aufgetreten',
        errorGeneral: 'Ein unerwarteter Fehler ist aufgetreten',

        // Notifications
        fileUploaded: 'Datei erfolgreich hochgeladen',
        processingStarted: 'Verarbeitung gestartet',
        processingComplete: 'Verarbeitung erfolgreich abgeschlossen',
        downloadReady: 'Download bereit',

        // Help Guide Content
        helpTitle: 'Easy Sheets Divider Benutzerhandbuch',
        helpSubtitle: 'Ihr vollständiger Leitfaden zum Aufteilen großer Excel-Dateien in kleinere, handhabbare Tabellenkalkulationen',

        // Help Guide Navigation
        systemRequirements: 'Systemanforderungen',
        overview: 'Überblick',
        usage: 'Verwendung',
        performance: 'Leistungstipps',
        troubleshooting: 'Fehlerbehebung',

        // System Requirements Section
        systemRequirementsPerformance: 'Systemanforderungen und Leistung',
        privacyFirstProcessing: 'Datenschutz-Erste Verarbeitung',
        privacyFirstDesc: 'Easy Sheets Divider läuft vollständig in Ihrem Webbrowser unter Verwendung der Ressourcen Ihres lokalen Computers. Ihre Daten verlassen niemals Ihren Computer - alle Verarbeitung erfolgt lokal und gewährleistet vollständige Privatsphäre und Sicherheit.',
        performanceFactors: 'Leistungsfaktoren',
        performanceFactorsDesc: 'Die Verarbeitungsgeschwindigkeit hängt von den Spezifikationen Ihres Computers ab:',
        component: 'Komponente',
        impactOnPerformance: 'Auswirkung auf die Leistung',
        recommendation: 'Empfehlung',
        cpu: 'CPU',
        cpuImpact: 'Schnellere Prozessoren verarbeiten große Dateien schneller',
        cpuRecommendation: 'Moderner Multi-Core-Prozessor',
        ram: 'RAM',
        ramImpact: 'Mehr Speicher ermöglicht die Verarbeitung größerer Dateien',
        ramRecommendation: '8GB+ für große Dateien (50MB+)',
        browser: 'Browser',
        browserImpact: 'Moderne Browser optimieren JavaScript-Leistung',
        browserRecommendation: 'Chrome, Firefox, Safari oder Edge (neueste Versionen)',
        performanceTip: 'Leistungstipp',
        performanceTipDesc: 'Schließen Sie unnötige Browser-Tabs und Anwendungen vor der Verarbeitung großer Dateien, um Systemressourcen für optimale Leistung freizugeben.',

        // Application Overview Section
        applicationOverview: 'Anwendungsüberblick',
        whatIsExcelCompartmentalizer: 'Was ist Easy Sheets Divider?',
        whatIsDesc: 'Easy Sheets Divider ist ein leistungsstarkes, browserbasiertes Tool, das große Excel-Dateien in kleinere, besser handhabbare Tabellenkalkulationen aufteilt. Perfekt zum Organisieren von Daten, Reduzieren von Dateigrößen und Verbessern der Tabellenkalkulations-Leistung.',
        supportedFileFormats: 'Unterstützte Dateiformate',
        excelFiles: 'Excel-Dateien',
        excelFilesDesc: '.xlsx und .xls Formate\nAlle Excel-Versionen unterstützt',
        csvFiles: 'CSV-Dateien',
        csvFilesDesc: 'Komma-getrennte Werte\nUniverselle Kompatibilität',
        openOfficeFiles: 'OpenOffice',
        openOfficeFilesDesc: '.ods Format\nLibreOffice Calc Dateien',
        googleSheetsFiles: 'Google Sheets',
        googleSheetsFilesDesc: 'Exportierte Google Sheets\nZuerst als Excel herunterladen',
        keyFeatures: 'Hauptfunktionen',
        multipleSplittingMethods: 'Mehrere Aufteilungsmethoden: Nach Arbeitsblättern, Zeilenzahl oder Dateigröße',
        batchProcessing: 'Stapelverarbeitung: Mehrere Dateien gleichzeitig verarbeiten',
        formatConversion: 'Formatkonvertierung: Ausgabe in Excel-, CSV- oder OpenOffice-Formaten',
        organizedDownloads: 'Organisierte Downloads: Einzelne Dateien oder ZIP-Archive',
        realTimeProgress: 'Echtzeit-Fortschritt: Live-Updates während der Verarbeitung',
        privacyFirst: 'Datenschutz zuerst: Alle Verarbeitung erfolgt lokal',

        // Usage Instructions Section
        howToUseExcelCompartmentalizer: 'Wie man Easy Sheets Divider verwendet',
        step1ChooseProcessingMode: 'Schritt 1: Verarbeitungsmodus wählen',
        step1Desc: 'Wählen Sie Ihren Verarbeitungsmodus oben in der Anwendung:',
        singleFileModeDesc: 'Einzeldatei-Modus: Eine Datei nach der anderen mit detaillierten Optionen verarbeiten',
        multiFileModeDesc: 'Multi-Datei-Modus: Mehrere Dateien stapelweise mit denselben Einstellungen verarbeiten',
        step2UploadFiles: 'Schritt 2: Ihre Dateien hochladen',
        dragDrop: 'Drag & Drop: Dateien direkt in den Upload-Bereich ziehen',
        clickToBrowse: 'Klicken zum Durchsuchen: Klicken Sie auf den Upload-Bereich, um Dateien von Ihrem Computer auszuwählen',
        fileValidation: 'Dateivalidierung: Nur unterstützte Dateiformate werden akzeptiert',
        queueManagement: 'Warteschlangen-Management: Im Multi-Datei-Modus werden Dateien zu einer Verarbeitungsqueue hinzugefügt',
        step3ChooseSplittingMethod: 'Schritt 3: Aufteilungsmethode wählen',
        byWorksheetsTitle: 'Nach Arbeitsblättern',
        byWorksheetsMethodDesc: 'Erstellt separate Dateien für jedes Arbeitsblatt in Ihrer Excel-Datei. Perfekt für Dateien mit mehreren Blättern.',
        byRowCountTitle: 'Nach Zeilenzahl',
        byRowCountMethodDesc: 'Teilt Daten in Dateien mit einer bestimmten Anzahl von Zeilen auf. Ideal für große Datensätze.',
        byFileSizeTitle: 'Nach Dateigröße',
        byFileSizeMethodDesc: 'Erstellt Dateien unter einer Zielgrößenbegrenzung. Großartig für E-Mail-Anhänge oder Systembeschränkungen.',
        step4ConfigureOptions: 'Schritt 4: Optionen konfigurieren',
        option: 'Option',
        description: 'Beschreibung',
        outputFormatOption: 'Ausgabeformat',
        outputFormatDesc: 'Wählen Sie Excel (.xlsx), CSV, OpenOffice (.ods) oder Alle Formate',
        outputFormatRecommendation: 'Excel für Kompatibilität, CSV für Einfachheit',
        includeHeadersOption: 'Kopfzeilen einschließen',
        includeHeadersOptionDesc: 'Spaltenüberschriften zu jeder geteilten Datei hinzufügen',
        includeHeadersRecommendation: 'Immer empfohlen für Datenklarheit',
        namingScheme: 'Benennungsschema',
        namingSchemeDesc: 'Beschreibende Namen oder nummerierte Dateien',
        namingSchemeRecommendation: 'Beschreibend für einfache Identifikation',
        step5StartProcessing: 'Schritt 5: Verarbeitung starten',
        reviewSettings: 'Einstellungen überprüfen: Überprüfen Sie Ihre Aufteilungsmethode und Optionen',
        clickProcess: 'Auf Verarbeiten klicken: Die Aufteilungsoperation starten',
        monitorProgress: 'Fortschritt überwachen: Echtzeit-Fortschrittsupdates beobachten',
        waitForCompletion: 'Auf Fertigstellung warten: Die Verarbeitungszeit variiert je nach Dateigröße und Komplexität',
        step6DownloadResults: 'Schritt 6: Ergebnisse herunterladen',
        individualDownloads: 'Einzelne Downloads',
        individualDownloadsDesc: 'Spezifische Dateien einzeln mit den Download-Buttons neben jedem Ergebnis herunterladen.',
        batchZipDownload: 'Stapel-ZIP-Download',
        batchZipDownloadDesc: 'Alle Dateien in einem organisierten ZIP-Archiv mit enthaltenen Verarbeitungszusammenfassungen herunterladen.',

        // Performance Tips Section
        performanceTipsBestPractices: 'Leistungstipps und Best Practices',
        optimizeProcessingSpeed: 'Verarbeitungsgeschwindigkeit optimieren',
        closeUnnecessaryTabs: 'Unnötige Browser-Tabs und Anwendungen schließen',
        useLatestBrowser: 'Die neueste Version Ihres Webbrowsers verwenden',
        processOffPeak: 'Dateien während schwacher Computer-Nutzungszeiten verarbeiten',
        considerSplittingLarge: 'Erwägen Sie, sehr große Dateien (100MB+) in kleinere Stücke aufzuteilen',
        largeFileWarning: 'Warnung bei großen Dateien',
        largeFileWarningDesc: 'Dateien über 100MB können mehrere Minuten zur Verarbeitung benötigen und erhebliche Systemressourcen erfordern. Stellen Sie sicher, dass Sie ausreichend freien Speicher haben, bevor Sie sehr große Dateien verarbeiten.',

        // Troubleshooting Section
        troubleshootingTitle: 'Fehlerbehebung',
        commonIssues: 'Häufige Probleme',
        problem: 'Problem',
        possibleCause: 'Mögliche Ursache',
        solution: 'Lösung',
        fileWontUpload: 'Datei wird nicht hochgeladen',
        unsupportedFileFormat: 'Nicht unterstütztes Dateiformat',
        ensureFileFormat: 'Stellen Sie sicher, dass die Datei im Format .xlsx, .xls, .csv oder .ods vorliegt',
        processingSlow: 'Verarbeitung ist langsam',
        largeFileOrLimitedResources: 'Große Dateigröße oder begrenzte Systemressourcen',
        closeOtherApps: 'Andere Anwendungen schließen, zuerst kleinere Dateien versuchen',
        browserCrashes: 'Browser stürzt ab',
        insufficientMemory: 'Unzureichender Speicher für große Dateien',
        restartBrowser: 'Browser neu starten, andere Tabs schließen, kleinere Dateien versuchen',
        downloadFails: 'Download schlägt fehl',
        browserDownloadRestrictions: 'Browser-Download-Beschränkungen',
        checkBrowserSettings: 'Browser-Einstellungen überprüfen, Downloads von dieser Seite erlauben',
        needMoreHelp: 'Benötigen Sie weitere Hilfe?',
        needMoreHelpDesc: 'Wenn Sie weiterhin Probleme haben, versuchen Sie, die Seite zu aktualisieren und von vorne zu beginnen. Die meisten Probleme werden durch einen Neustart des Browsers oder das Ausprobieren eines anderen Browsers gelöst.',

        // Support Development Content
        supportTitle: 'Entwicklung Unterstützen',
        supportSubtitle: 'Helfen Sie dabei, dieses Tool kostenlos, schnell und werbefrei für alle zu halten',
        supportDescription: 'Helfen Sie dabei, dieses Tool kostenlos, schnell und werbefrei für alle zu halten',
        supportHeroTitle: 'Helfen Sie, Dieses Excel-Verarbeitungstool Kostenlos zu Halten',
        supportHeroDesc: 'Dieser Easy Sheets Divider wird von Fachleuten für die Gemeinschaft entwickelt und gepflegt. Ihre Unterstützung hilft uns, diese kostenlose Ressource mit neuen Funktionen, besserer Leistung und verbesserter Funktionalität für Excel-Verarbeitungsoperationen weiter zu verbessern.',
        continuousDevelopment: 'Kontinuierliche Entwicklung',
        serverCosts: 'Server- und Verarbeitungskosten',
        communitySupport: 'Community-Unterstützung',
        creditDebitCard: 'Kredit-/Debitkarte',
        securePayment: 'Sichere Zahlungsabwicklung über PayPal',
        donateWithPayPal: 'Mit PayPal Spenden',
        acceptedPaymentMethods: 'Akzeptierte Zahlungsmethoden:',
        scanPayPalQR: 'Oder PayPal QR-Code scannen:',
        scanWithMobile: 'Mit Mobilgerät scannen',
        secureSSL: 'Sichere SSL-verschlüsselte Transaktionen',
        questionsOrFeedback: 'Fragen oder Feedback?',
        feedbackDesc: 'Haben Sie Ideen für neue Funktionen oder einen Fehler gefunden? Wir würden gerne von Ihnen hören!',
        sendFeedback: 'Feedback Senden',
        cryptocurrency: 'Kryptowährung',
        cryptoDesc: 'Direkte Krypto-Spenden - keine Gebühren, maximale Wirkung',
        bitcoin: 'Bitcoin (BTC)',
        ethereum: 'Ethereum (ETH)',
        solana: 'Solana (SOL)',
        copy: 'Kopieren',
        scanToSend: 'Zum Senden scannen',
        verifyAddresses: 'Adressen vor dem Senden immer überprüfen',
        thankYouTitle: 'Vielen Dank für Ihre Unterstützung!',
        thankYouDesc: 'Jede Spende, egal wie groß, hilft uns, dieses Tool für die Gemeinschaft zu erhalten und zu verbessern. Ihre Unterstützung stellt sicher, dass wir weiterhin genaue, aktuelle Excel-Verarbeitungsressourcen völlig kostenlos bereitstellen können.',
        developedByProfessionals: 'Von Fachleuten entwickelt, für Fachleute',

        // About Section
        aboutThisTool: 'Über Dieses Tool',
        aboutDescription: 'Teilen Sie Excel-, CSV-, OpenOffice- und Google Sheets-Dateien nach Arbeitsblatt, Spaltenwert, Zeilenanzahl oder Dateigröße auf. Die gesamte Verarbeitung erfolgt in Ihrem Browser - Ihre Daten verlassen niemals Ihren Computer.',
        sheetJS: 'SheetJS',
        clientSide: 'Client-seitig',
        privacyFirst: 'Datenschutz Zuerst',

        // Main Content
        splitResults: '5. Verarbeitungsergebnisse',
        uploadFileToBegin: 'Laden Sie eine Datei hoch, um mit der Aufteilung zu beginnen',
        selectProcessingMode: 'Wählen Sie den Verarbeitungsmodus und laden Sie Dateien hoch, um zu beginnen',

        // Status Messages
        excelFileLoaded: 'Excel-Datei erfolgreich geladen. Konfigurieren Sie die Aufteilungsoptionen in der Seitenleiste.',
        csvFileLoaded: 'CSV-Datei erfolgreich geladen. Konfigurieren Sie die Aufteilungsoptionen in der Seitenleiste.',
        odsFileLoaded: 'OpenOffice Calc-Datei erfolgreich geladen. Konfigurieren Sie die Aufteilungsoptionen in der Seitenleiste.',
        googleSheetsLoaded: 'Google Sheets-Datei erfolgreich geladen. Konfigurieren Sie die Aufteilungsoptionen in der Seitenleiste.',
        errorLoadingFile: 'Fehler beim Laden der Datei. Bitte versuchen Sie es erneut.',
        processingFile: 'Datei wird verarbeitet... Bitte warten.',
        splitComplete: 'Aufteilung abgeschlossen!',
        filesCreated: 'Dateien erstellt.',
        fileLoadedConfigure: 'Datei geladen - Optionen konfigurieren und aufteilen',
        uploadMultipleFiles: 'Laden Sie mehrere Dateien hoch, um die Stapelverarbeitung zu beginnen',
        filesInQueue: 'Dateien in der Warteschlange',
        filesCreatedFrom: 'Dateien erstellt aus',
        sourceFiles: 'Quelldateien',

        // Footer
        copyrightText: '© 2025 Easy Sheets Divider | Datenschutz-Erste Dateiverarbeitung',
        privacyFirstProcessing: 'Datenschutz-Erste Dateiverarbeitung',

        // Common UI Elements
        loading: 'Laden...',
        pleaseWait: 'Bitte warten...',
        success: 'Erfolg',
        error: 'Fehler',
        warning: 'Warnung',
        info: 'Information'
    },

    'ko': {
        // Main Application
        appTitle: 'Easy Sheets Divider',
        appSubtitle: '큰 엑셀 파일을 작고 관리하기 쉬운 스프레드시트로 분할',

        // Header Navigation
        helpGuide: '도움말 가이드',
        supportDevelopment: '개발 지원',
        language: '언어',

        // Processing Modes
        processingMode: '1단계 처리 모드',
        singleFileMode: '단일 파일',
        multiFileMode: '다중 파일',
        singleFileDesc: '한 번에 하나의 파일 처리',
        multiFileDesc: '여러 파일을 일괄 처리',

        // Upload Area
        uploadTitle: '2단계 파일 업로드',
        uploadInstruction: '파일을 여기에 끌어다 놓거나 클릭하여 찾아보기',
        uploadSupported: '지원 형식: Excel (.xlsx, .xls), CSV, OpenOffice (.ods)',
        uploadMaxSize: '최대 파일 크기: 파일당 100MB',
        dropOrClick: '끌어다 놓거나 클릭하여 업로드',
        dropMultipleFiles: '여러 파일을 끌어다 놓거나 클릭하여 업로드',
        excelCSVFiles: 'Excel, CSV, OpenOffice, Google Sheets 파일 지원',
        reading: '읽는 중...',
        clear: '지우기',
        options: '옵션',
        batchProcessingResults: '일괄 처리 결과',

        // Splitting Methods
        splitMethod: '3단계 분할 방법',
        splittingMethod: '분할 방법',
        byWorksheets: '워크시트별',
        byRowCount: '행 수별',
        byFileSize: '파일 크기별',
        byWorksheetsDesc: '각 워크시트에 대해 별도 파일 생성',
        byRowCountDesc: '지정된 행 수로 데이터를 파일로 분할',
        byFileSizeDesc: '목표 크기 제한 하에서 파일 생성',
        worksheet: '워크시트',
        column: '열',
        rows: '행',
        size: '크기',
        includeHeaders: '헤더 포함',
        outputOptions: '4단계 출력 옵션',
        batchOptions: '일괄 옵션',

        // Configuration Options
        outputFormat: '출력 형식',
        includeHeadersDesc: '각 분할 파일에 열 헤더 추가',
        rowsPerFile: '파일당 행 수',
        targetFileSize: '목표 파일 크기 (MB)',

        // Buttons
        processFiles: '파일 처리',
        splitFile: '파일 분할',
        downloadAll: '모두 다운로드',
        downloadZip: 'ZIP 다운로드',
        download: '다운로드',
        cancel: '취소',
        close: '닫기',
        startBatchProcessing: '일괄 처리 시작',

        // Naming Options
        naming: '명명',
        simple: '간단',
        detailed: '상세',
        descriptive: '설명적',
        numbered: '번호',

        // Format Options
        excelFormat: 'Excel (.xlsx)',
        csvFormat: 'CSV (.csv)',
        odsFormat: 'OpenOffice (.ods)',
        gsheetFormat: 'Google Sheets',

        // Multi-file Options
        worksheets: '워크시트',

        // Placeholder Text
        filePrefix: '파일 접두사',

        // Progress and Status
        processing: '처리 중...',
        completed: '완료됨',
        failed: '실패',
        ready: '준비됨',
        filesProcessed: '파일 처리됨',
        estimatedTime: '예상 시간',
        timeRemaining: '남은 시간',

        // File Formats
        excel: '엑셀',
        csv: 'CSV',
        openoffice: 'OpenOffice',
        allFormats: '모든 형식',

        // Error Messages
        errorFileSize: '파일 크기가 최대 제한을 초과합니다',
        errorFileFormat: '지원되지 않는 파일 형식',
        errorProcessing: '파일 처리 중 오류',
        errorNetwork: '네트워크 오류가 발생했습니다',
        errorGeneral: '예상치 못한 오류가 발생했습니다',

        // Notifications
        fileUploaded: '파일이 성공적으로 업로드되었습니다',
        processingStarted: '처리가 시작되었습니다',
        processingComplete: '처리가 성공적으로 완료되었습니다',
        downloadReady: '다운로드 준비됨',

        // Help Guide Content
        helpTitle: 'Easy Sheets Divider 사용자 가이드',
        helpSubtitle: '큰 엑셀 파일을 작고 관리하기 쉬운 스프레드시트로 분할하는 완전한 가이드',

        // Help Guide Navigation
        systemRequirements: '시스템 요구사항',
        overview: '개요',
        usage: '사용 방법',
        performance: '성능 팁',
        troubleshooting: '문제 해결',

        // System Requirements Section
        systemRequirementsPerformance: '시스템 요구사항 및 성능',
        privacyFirstProcessing: '개인정보 보호 우선 처리',
        privacyFirstDesc: 'Easy Sheets Divider는 로컬 컴퓨터의 리소스를 사용하여 웹 브라우저에서 완전히 실행됩니다. 귀하의 데이터는 절대 컴퓨터를 떠나지 않습니다 - 모든 처리가 로컬에서 이루어져 완전한 개인정보 보호와 보안을 보장합니다.',
        performanceFactors: '성능 요인',
        performanceFactorsDesc: '처리 속도는 컴퓨터의 사양에 따라 달라집니다:',
        component: '구성 요소',
        impactOnPerformance: '성능에 미치는 영향',
        recommendation: '권장사항',
        cpu: 'CPU',
        cpuImpact: '더 빠른 프로세서가 큰 파일을 더 빠르게 처리합니다',
        cpuRecommendation: '현대적인 멀티코어 프로세서',
        ram: 'RAM',
        ramImpact: '더 많은 메모리로 더 큰 파일을 처리할 수 있습니다',
        ramRecommendation: '큰 파일(50MB+)의 경우 8GB+',
        browser: '브라우저',
        browserImpact: '현대적인 브라우저가 JavaScript 성능을 최적화합니다',
        browserRecommendation: 'Chrome, Firefox, Safari 또는 Edge (최신 버전)',
        performanceTip: '성능 팁',
        performanceTipDesc: '큰 파일을 처리하기 전에 불필요한 브라우저 탭과 애플리케이션을 닫아 최적의 성능을 위한 시스템 리소스를 확보하세요.',

        // Application Overview Section
        applicationOverview: '애플리케이션 개요',
        whatIsExcelCompartmentalizer: 'Easy Sheets Divider란 무엇인가요?',
        whatIsDesc: 'Easy Sheets Divider는 큰 엑셀 파일을 작고 관리하기 쉬운 스프레드시트로 분할하는 강력한 브라우저 기반 도구입니다. 데이터 정리, 파일 크기 줄이기, 스프레드시트 성능 향상에 완벽합니다.',
        supportedFileFormats: '지원되는 파일 형식',
        excelFiles: '엑셀 파일',
        excelFilesDesc: '.xlsx 및 .xls 형식\n모든 엑셀 버전 지원',
        csvFiles: 'CSV 파일',
        csvFilesDesc: '쉼표로 구분된 값\n범용 호환성',
        openOfficeFiles: 'OpenOffice',
        openOfficeFilesDesc: '.ods 형식\nLibreOffice Calc 파일',
        googleSheetsFiles: 'Google Sheets',
        googleSheetsFilesDesc: '내보낸 Google Sheets\n먼저 엑셀로 다운로드',
        keyFeatures: '주요 기능',
        multipleSplittingMethods: '다중 분할 방법: 워크시트별, 행 수별 또는 파일 크기별',
        batchProcessing: '일괄 처리: 여러 파일을 동시에 처리',
        formatConversion: '형식 변환: 엑셀, CSV 또는 OpenOffice 형식으로 출력',
        organizedDownloads: '정리된 다운로드: 개별 파일 또는 ZIP 아카이브',
        realTimeProgress: '실시간 진행률: 처리 중 실시간 업데이트',
        privacyFirst: '개인정보 보호 우선: 모든 처리가 로컬에서 발생',

        // Usage Instructions Section
        howToUseExcelCompartmentalizer: 'Easy Sheets Divider 사용 방법',
        step1ChooseProcessingMode: '1단계: 처리 모드 선택',
        step1Desc: '애플리케이션 상단에서 처리 모드를 선택하세요:',
        singleFileModeDesc: '단일 파일 모드: 상세한 옵션으로 한 번에 하나의 파일 처리',
        multiFileModeDesc: '다중 파일 모드: 동일한 설정으로 여러 파일을 일괄 처리',
        step2UploadFiles: '2단계: 파일 업로드',
        dragDrop: '드래그 앤 드롭: 파일을 업로드 영역에 직접 드래그',
        clickToBrowse: '클릭하여 찾아보기: 업로드 영역을 클릭하여 컴퓨터에서 파일 선택',
        fileValidation: '파일 검증: 지원되는 파일 형식만 허용됩니다',
        queueManagement: '대기열 관리: 다중 파일 모드에서 파일이 처리 대기열에 추가됩니다',
        step3ChooseSplittingMethod: '3단계: 분할 방법 선택',
        byWorksheetsTitle: '워크시트별',
        byWorksheetsMethodDesc: '엑셀 파일의 각 워크시트에 대해 별도의 파일을 생성합니다. 여러 시트가 있는 파일에 완벽합니다.',
        byRowCountTitle: '행 수별',
        byRowCountMethodDesc: '지정된 행 수로 데이터를 파일로 분할합니다. 대용량 데이터셋에 이상적입니다.',
        byFileSizeTitle: '파일 크기별',
        byFileSizeMethodDesc: '목표 크기 제한 하에서 파일을 생성합니다. 이메일 첨부 파일이나 시스템 제한에 훌륭합니다.',
        step4ConfigureOptions: '4단계: 옵션 구성',
        option: '옵션',
        description: '설명',
        outputFormatOption: '출력 형식',
        outputFormatDesc: '엑셀(.xlsx), CSV, OpenOffice(.ods) 또는 모든 형식 선택',
        outputFormatRecommendation: '호환성을 위해 엑셀, 단순함을 위해 CSV',
        includeHeadersOption: '헤더 포함',
        includeHeadersOptionDesc: '각 분할된 파일에 열 헤더 추가',
        includeHeadersRecommendation: '데이터 명확성을 위해 항상 권장',
        namingScheme: '명명 체계',
        namingSchemeDesc: '설명적 이름 또는 번호가 매겨진 파일',
        namingSchemeRecommendation: '쉬운 식별을 위해 설명적',
        step5StartProcessing: '5단계: 처리 시작',
        reviewSettings: '설정 검토: 분할 방법과 옵션을 다시 확인',
        clickProcess: '처리 클릭: 분할 작업 시작',
        monitorProgress: '진행률 모니터링: 실시간 진행률 업데이트 관찰',
        waitForCompletion: '완료 대기: 처리 시간은 파일 크기와 복잡성에 따라 다름',
        step6DownloadResults: '6단계: 결과 다운로드',
        individualDownloads: '개별 다운로드',
        individualDownloadsDesc: '각 결과 옆의 다운로드 버튼을 사용하여 특정 파일을 한 번에 하나씩 다운로드합니다.',
        batchZipDownload: '일괄 ZIP 다운로드',
        batchZipDownloadDesc: '처리 요약이 포함된 정리된 ZIP 아카이브로 모든 파일을 다운로드합니다.',

        // Performance Tips Section
        performanceTipsBestPractices: '성능 팁 및 모범 사례',
        optimizeProcessingSpeed: '처리 속도 최적화',
        closeUnnecessaryTabs: '불필요한 브라우저 탭과 애플리케이션 닫기',
        useLatestBrowser: '웹 브라우저의 최신 버전 사용',
        processOffPeak: '컴퓨터 사용량이 적은 시간에 파일 처리',
        considerSplittingLarge: '매우 큰 파일(100MB+)을 더 작은 청크로 분할하는 것을 고려',
        largeFileWarning: '대용량 파일 경고',
        largeFileWarningDesc: '100MB를 초과하는 파일은 처리하는 데 몇 분이 걸릴 수 있으며 상당한 시스템 리소스가 필요합니다. 매우 큰 파일을 처리하기 전에 충분한 여유 메모리가 있는지 확인하세요.',

        // Troubleshooting Section
        troubleshootingTitle: '문제 해결',
        commonIssues: '일반적인 문제',
        problem: '문제',
        possibleCause: '가능한 원인',
        solution: '해결책',
        fileWontUpload: '파일이 업로드되지 않음',
        unsupportedFileFormat: '지원되지 않는 파일 형식',
        ensureFileFormat: '파일이 .xlsx, .xls, .csv 또는 .ods 형식인지 확인',
        processingSlow: '처리가 느림',
        largeFileOrLimitedResources: '큰 파일 크기 또는 제한된 시스템 리소스',
        closeOtherApps: '다른 애플리케이션 닫기, 먼저 작은 파일 시도',
        browserCrashes: '브라우저 충돌',
        insufficientMemory: '큰 파일에 대한 메모리 부족',
        restartBrowser: '브라우저 재시작, 다른 탭 닫기, 작은 파일 시도',
        downloadFails: '다운로드 실패',
        browserDownloadRestrictions: '브라우저 다운로드 제한',
        checkBrowserSettings: '브라우저 설정 확인, 이 사이트에서 다운로드 허용',
        needMoreHelp: '더 많은 도움이 필요하신가요?',
        needMoreHelpDesc: '계속 문제가 발생하면 페이지를 새로 고치고 다시 시작해 보세요. 대부분의 문제는 브라우저를 재시작하거나 다른 브라우저를 시도하면 해결됩니다.',

        // Support Development Content
        supportTitle: '개발 지원',
        supportSubtitle: '이 도구를 모든 사람에게 무료, 빠르고 광고 없이 유지하는 데 도움을 주세요',
        supportDescription: '이 도구를 모든 사람에게 무료, 빠르고 광고 없이 유지하는 데 도움을 주세요',
        supportHeroTitle: '이 엑셀 처리 도구를 무료로 유지하는 데 도움을 주세요',
        supportHeroDesc: '이 Easy Sheets Divider는 커뮤니티를 위해 전문가들이 개발하고 유지 관리합니다. 여러분의 지원은 새로운 기능, 더 나은 성능, 그리고 엑셀 처리 작업을 위한 향상된 기능으로 이 무료 리소스를 계속 개선하는 데 도움이 됩니다.',
        continuousDevelopment: '지속적인 개발',
        serverCosts: '서버 및 처리 비용',
        communitySupport: '커뮤니티 지원',
        creditDebitCard: '신용/체크카드',
        securePayment: 'PayPal을 통한 안전한 결제 처리',
        donateWithPayPal: 'PayPal로 기부하기',
        acceptedPaymentMethods: '허용되는 결제 방법:',
        scanPayPalQR: '또는 PayPal QR 코드를 스캔하세요:',
        scanWithMobile: '모바일 기기로 스캔',
        secureSSL: '안전한 SSL 암호화 거래',
        questionsOrFeedback: '질문이나 피드백이 있으신가요?',
        feedbackDesc: '새로운 기능에 대한 아이디어가 있거나 버그를 발견하셨나요? 여러분의 의견을 듣고 싶습니다!',
        sendFeedback: '피드백 보내기',
        cryptocurrency: '암호화폐',
        cryptoDesc: '직접 암호화폐 기부 - 수수료 없음, 최대 효과',
        bitcoin: '비트코인 (BTC)',
        ethereum: '이더리움 (ETH)',
        solana: '솔라나 (SOL)',
        copy: '복사',
        scanToSend: '전송하려면 스캔',
        verifyAddresses: '전송하기 전에 항상 주소를 확인하세요',
        thankYouTitle: '지원해 주셔서 감사합니다!',
        thankYouDesc: '크기에 관계없이 모든 기부는 커뮤니티를 위해 이 도구를 유지하고 개선하는 데 도움이 됩니다. 여러분의 지원은 정확하고 최신의 엑셀 처리 리소스를 완전히 무료로 계속 제공할 수 있도록 보장합니다.',
        developedByProfessionals: '전문가가 개발하고, 전문가를 위한',

        // About Section
        aboutThisTool: '이 도구 정보',
        aboutDescription: '워크시트, 열 값, 행 수 또는 파일 크기별로 Excel, CSV, OpenOffice 및 Google Sheets 파일을 분할합니다. 모든 처리는 브라우저에서 이루어지며 - 데이터가 컴퓨터를 떠나지 않습니다.',
        sheetJS: 'SheetJS',
        clientSide: '클라이언트 측',
        privacyFirst: '개인정보 보호 우선',

        // Main Content
        splitResults: '5단계 처리 결과',
        uploadFileToBegin: '분할을 시작하려면 파일을 업로드하세요',
        selectProcessingMode: '처리 모드를 선택하고 파일을 업로드하여 시작하세요',

        // Status Messages
        excelFileLoaded: '엑셀 파일이 성공적으로 로드되었습니다. 사이드바에서 분할 옵션을 구성하세요.',
        csvFileLoaded: 'CSV 파일이 성공적으로 로드되었습니다. 사이드바에서 분할 옵션을 구성하세요.',
        odsFileLoaded: 'OpenOffice Calc 파일이 성공적으로 로드되었습니다. 사이드바에서 분할 옵션을 구성하세요.',
        googleSheetsLoaded: 'Google Sheets 파일이 성공적으로 로드되었습니다. 사이드바에서 분할 옵션을 구성하세요.',
        errorLoadingFile: '파일 로드 중 오류가 발생했습니다. 다시 시도해 주세요.',
        processingFile: '파일 처리 중... 잠시 기다려 주세요.',
        splitComplete: '분할 완료!',
        filesCreated: '파일이 생성되었습니다.',
        fileLoadedConfigure: '파일 로드됨 - 옵션을 구성하고 분할하세요',
        uploadMultipleFiles: '일괄 처리를 시작하려면 여러 파일을 업로드하세요',
        filesInQueue: '파일이 대기열에 있습니다',
        filesCreatedFrom: '파일이 생성됨',
        sourceFiles: '소스 파일',

        // Footer
        copyrightText: '© 2025 Easy Sheets Divider | 개인정보 보호 우선 파일 처리',
        privacyFirstProcessing: '개인정보 보호 우선 파일 처리',

        // Common UI Elements
        loading: '로딩 중...',
        pleaseWait: '잠시 기다려 주세요...',
        success: '성공',
        error: '오류',
        warning: '경고',
        info: '정보',

        // Enhanced Drag & Drop Content
        dropFilesHere: '여기에 파일을 놓으세요',
        validFiles: '유효한 파일',
        invalidFiles: '유효하지 않은 파일',
        queuePosition: '대기열 위치',
        selectedFiles: '선택된 파일',
        clear: '지우기',
        totalFiles: '총 파일 수',
        totalSize: '총 크기',
        validFilesCount: '유효한 파일',
        andMore: '...그리고 더',
        invalidFile: '유효하지 않은 파일',
        unsupportedFormat: '지원되지 않는 형식',
        unknownError: '알 수 없는 오류',
        someFilesInvalid: '일부 파일이 유효하지 않아 건너뛰었습니다',
        filesAdded: '파일이 성공적으로 추가되었습니다',

        // Conditional Splitting Content
        conditionalSplitting: '조건부 분할',
        conditionalSplittingDesc: '셀 값, 날짜 범위 또는 숫자 임계값과 같은 특정 조건에 따라 파일 분할',
        addCondition: '조건 추가',
        addNew: '새로 추가',
        conditionType: '조건 유형',
        cellValue: '셀 값',
        dateRange: '날짜 범위',
        numericalThreshold: '숫자 임계값',
        textContains: '텍스트 포함',
        regexMatch: '정규식 일치',
        targetColumn: '대상 열',
        selectColumn: '열 선택...',
        operator: '연산자',
        equals: '같음',
        notEquals: '같지 않음',
        contains: '포함',
        notContains: '포함하지 않음',
        startsWith: '시작함',
        endsWith: '끝남',
        greaterThan: '보다 큼',
        lessThan: '보다 작음',
        greaterEqual: '크거나 같음',
        lessEqual: '작거나 같음',
        between: '사이',
        notBetween: '사이가 아님',
        value: '값',
        secondValue: '두 번째 값',
        dateFormat: '날짜 형식',
        saveCondition: '조건 저장',
        activeConditions: '활성 조건',
        noConditionsAdded: '아직 조건이 추가되지 않았습니다. 조건부 분할을 활성화하려면 조건을 추가하세요.',
        previewSplit: '분할 미리보기',
        executeSplit: '분할 실행',
        pleaseCompleteCondition: '모든 필수 필드를 완성해 주세요',
        pleaseEnterSecondValue: '범위 조건에 대한 두 번째 값을 입력해 주세요',
        enableConditionalSplitting: '조건부 분할 활성화',
        conditionalSplittingHint: '셀 값, 날짜 또는 조건에 따라 분할',

        // Progress Modal Content
        processingFile: '파일 처리 중',
        progress: '진행률',
        timeRemaining: '남은 시간',
        currentOperation: '현재 작업',
        chunksProcessed: '처리된 청크',
        memoryUsage: '메모리 사용량',
        bytesProcessed: '처리된 바이트',
        processingSpeed: '처리 속도',
        pause: '일시정지',
        resume: '재개',
        cancel: '취소',
        initializing: '초기화 중...',
        readingFile: '파일 읽는 중...',
        processingData: '데이터 처리 중...',
        parsingExcel: '엑셀 파일 분석 중...',
        splittingData: '데이터 분할 중...',
        generatingFiles: '파일 생성 중...',
        memoryWarning: '메모리 사용량이 높습니다',
        memoryCritical: '메모리 사용량이 위험 수준입니다 - 처리가 일시정지되었습니다',
        largeFileLoaded: '대용량 파일이 점진적 로딩을 사용하여 성공적으로 로드되었습니다',
        errorProcessingData: '파일 데이터 처리 중 오류'
    }
};

// Language management system
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('easySheetsLanguage') || 'en';
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸', nativeName: 'English' },
            'es': { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
            'fr': { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
            'de': { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
            'ko': { name: 'Korean', flag: '🇰🇷', nativeName: '한국어' }
        };
        this.initializeLanguageSystem();
    }

    initializeLanguageSystem() {
        this.createLanguageDropdowns();
        this.applyLanguage(this.currentLanguage);
    }

    createLanguageDropdowns() {
        // Create main header language dropdown
        this.createMainLanguageDropdown();
    }

    createMainLanguageDropdown() {
        const headerActions = document.querySelector('.header-actions');
        if (!headerActions) return;

        const languageDropdown = document.createElement('div');
        languageDropdown.className = 'language-dropdown';
        languageDropdown.innerHTML = `
            <button class="language-button" id="languageButton">
                <span class="language-flag">${this.supportedLanguages[this.currentLanguage].flag}</span>
                <span class="language-name">${this.supportedLanguages[this.currentLanguage].nativeName}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="language-menu" id="languageMenu">
                ${Object.entries(this.supportedLanguages).map(([code, lang]) => `
                    <div class="language-option ${code === this.currentLanguage ? 'active' : ''}" data-lang="${code}">
                        <span class="language-flag">${lang.flag}</span>
                        <span class="language-name">${lang.nativeName}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Insert before help button
        const helpButton = headerActions.querySelector('.help-button');
        headerActions.insertBefore(languageDropdown, helpButton);

        this.setupLanguageDropdownEvents();
    }

    setupLanguageDropdownEvents() {
        const languageButton = document.getElementById('languageButton');
        const languageMenu = document.getElementById('languageMenu');

        if (!languageButton || !languageMenu) return;

        // Toggle dropdown
        languageButton.addEventListener('click', (e) => {
            e.stopPropagation();
            languageMenu.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageMenu.classList.remove('show');
        });

        // Handle language selection
        languageMenu.addEventListener('click', (e) => {
            const option = e.target.closest('.language-option');
            if (option) {
                const selectedLang = option.dataset.lang;
                this.changeLanguage(selectedLang);
                languageMenu.classList.remove('show');
            }
        });
    }

    changeLanguage(languageCode) {
        if (!this.supportedLanguages[languageCode]) return;

        this.currentLanguage = languageCode;
        localStorage.setItem('easySheetsLanguage', languageCode);

        this.applyLanguage(languageCode);
        this.updateLanguageButton();
    }

    updateLanguageButton() {
        const languageButton = document.getElementById('languageButton');
        if (languageButton) {
            const flag = languageButton.querySelector('.language-flag');
            const name = languageButton.querySelector('.language-name');

            if (flag) flag.textContent = this.supportedLanguages[this.currentLanguage].flag;
            if (name) name.textContent = this.supportedLanguages[this.currentLanguage].nativeName;
        }

        // Update active state in dropdown
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
        });
    }

    applyLanguage(languageCode) {
        const t = translations[languageCode] || translations['en'];

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (t[key]) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });

        // Update placeholder text
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.dataset.translatePlaceholder;
            if (t[key]) {
                element.placeholder = t[key];
            }
        });

        // Update document title
        document.title = t.appTitle || 'Easy Sheets Divider';
    }

    t(key) {
        const t = translations[this.currentLanguage] || translations['en'];
        return t[key] || key;
    }

    // Force refresh all translations
    refreshTranslations() {
        this.applyLanguage(this.currentLanguage);
    }
}

// Easy Sheets Divider App
class EasySheetsApp {
    constructor() {
        this.workbook = null;
        this.fileName = '';
        this.splitFiles = [];
        this.isProcessing = false;
        this.processingStartTime = null;
        this.shouldCancel = false;
        this.estimatedDuration = 0;
        this.totalRows = 0;
        this.fileSize = 0;
        this.actualProcessingTimes = []; // Store historical data for learning
        this.lastProgressUpdate = 0;
        this.processingSpeedSamples = [];

        // Multi-file processing properties
        this.multiFileQueue = [];
        this.multiFileResults = [];
        this.isMultiProcessing = false;
        this.processingMode = 'single';
        this.multiProcessingStartTime = 0;
        this.multiProcessingSpeedSamples = [];
        this.multiLastProgressUpdate = 0;

        // Initialize language manager
        this.languageManager = new LanguageManager();

        // Initialize memory manager
        this.memoryManager = new MemoryManager();

        // Initialize progressive loader
        this.progressiveLoader = new ProgressiveLoader(this.memoryManager, this.languageManager);

        // Initialize conditional splitter
        this.conditionalSplitter = new ConditionalSplitter(this.languageManager);

        // Initialize enhanced drag & drop
        this.enhancedDragDrop = new EnhancedDragDrop(this, this.languageManager);

        // Make app instance globally available for modal functions
        window.easySheetsApp = this;
        window.conditionalSplitter = this.conditionalSplitter;

        this.initializeEventListeners();
        this.setupMemoryMonitoring();
        this.initializeMultiFileProcessing();
        this.initializeProcessingModes();

        // Check download compatibility
        this.checkDownloadCompatibility();

        // Force language application after initialization
        setTimeout(() => {
            this.languageManager.applyLanguage(this.languageManager.currentLanguage);
        }, 100);

        console.log('Easy Sheets Divider initialized successfully', {
            processingMode: this.processingMode,
            multiFileQueue: this.multiFileQueue.length,
            startButtonExists: !!document.getElementById('startBatchProcessingButton'),
            downloadCompatible: this.checkDownloadCompatibility()
        });
    }

    // Setup memory monitoring
    setupMemoryMonitoring() {
        if (this.memoryManager) {
            this.memoryManager.setCallbacks({
                onWarning: (stats) => {
                    this.showMemoryWarning(stats);
                },
                onCritical: (stats) => {
                    this.handleCriticalMemory(stats);
                },
                onUpdate: (stats) => {
                    this.updateMemoryDisplay(stats);
                }
            });
        }

        if (this.progressiveLoader) {
            this.progressiveLoader.setCallbacks({
                onProgress: (progress) => {
                    this.handleProgressUpdate(progress);
                },
                onComplete: (result) => {
                    this.handleProcessingComplete(result);
                },
                onError: (error) => {
                    this.handleProcessingError(error);
                }
            });
        }
    }

    // Show memory warning notification
    showMemoryWarning(stats) {
        const message = this.languageManager.translate('memoryWarning') || 'Memory usage is high';
        this.showNotification(message, 'warning');
        console.warn('Memory warning:', stats);
    }

    // Handle critical memory situation
    handleCriticalMemory(stats) {
        const message = this.languageManager.translate('memoryCritical') || 'Critical memory usage - processing paused';
        this.showNotification(message, 'error');
        console.error('Critical memory:', stats);

        // Pause any ongoing processing
        if (this.progressiveLoader && this.progressiveLoader.state.isLoading) {
            this.progressiveLoader.pauseProcessing();
        }
    }

    // Update memory display in UI
    updateMemoryDisplay(stats) {
        // Update any memory indicators in the UI
        const memoryIndicators = document.querySelectorAll('.memory-indicator');
        memoryIndicators.forEach(indicator => {
            indicator.textContent = `${Math.round(stats.percentage)}%`;

            // Color coding
            if (stats.percentage >= 80) {
                indicator.className = 'memory-indicator critical';
            } else if (stats.percentage >= 60) {
                indicator.className = 'memory-indicator warning';
            } else {
                indicator.className = 'memory-indicator normal';
            }
        });
    }

    // Handle progress updates
    handleProgressUpdate(progress) {
        // Progress is handled by the ProgressiveLoader UI
        console.log('Processing progress:', progress.percentage + '%');
    }

    // Handle processing completion
    handleProcessingComplete(result) {
        console.log('Processing completed:', result);
        // Continue with existing processing logic
    }

    // Handle processing errors
    handleProcessingError(error) {
        console.error('Processing error:', error);
        this.showNotification(error.message, 'error');
    }

    initializeEventListeners() {
        // Processing mode selection
        const modeRadios = document.querySelectorAll('input[name="processingMode"]');
        modeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => this.handleModeChange(e.target.value));
        });

        // File input and drag & drop
        const fileInput = document.getElementById('fileInput');
        const dropArea = document.getElementById('dropArea');

        if (fileInput && dropArea) {
            console.log('Initializing file upload event listeners');

            fileInput.addEventListener('change', (e) => this.handleFileSelect(e));

            dropArea.addEventListener('dragover', (e) => this.handleDragOver(e));
            dropArea.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            dropArea.addEventListener('drop', (e) => this.handleDrop(e));

            // Add click handler for drop area
            dropArea.addEventListener('click', (e) => {
                console.log('Drop area clicked, triggering file input. Processing mode:', this.processingMode);
                // Ensure multiple attribute is set correctly based on processing mode
                fileInput.multiple = (this.processingMode === 'multi');
                console.log('File input multiple attribute set to:', fileInput.multiple);
                fileInput.click();
            });

            console.log('File upload event listeners initialized successfully');
        } else {
            console.error('File input or drop area elements not found:', {
                fileInput: !!fileInput,
                dropArea: !!dropArea
            });
        }
        
        // Split method radio buttons
        const splitMethodRadios = document.querySelectorAll('input[name="splitMethod"]');
        splitMethodRadios.forEach(radio => {
            radio.addEventListener('change', () => this.handleSplitMethodChange());
        });
        
        // Split button
        document.getElementById('splitButton').addEventListener('click', () => this.splitFile());
        
        // Reset button
        document.getElementById('resetButton').addEventListener('click', () => this.reset());

        // Clear file button (with confirmation for manual clear)
        document.getElementById('clearFileButton').addEventListener('click', () => this.clearFileWithConfirmation());

        // Cancel button
        document.getElementById('cancelButton').addEventListener('click', () => this.cancelProcessing());

        // Preview button
        document.getElementById('previewButton').addEventListener('click', () => this.showPreview());

        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => this.toggleSidebar());

        // Completion modal buttons
        document.getElementById('viewResultsButton').addEventListener('click', () => this.closeCompletionModal());
        document.getElementById('dismissNotificationButton').addEventListener('click', () => this.closeCompletionModal());
        
        // Download all button
        document.getElementById('downloadAllButton').addEventListener('click', () => this.downloadAllFiles());

        // Help button
        document.getElementById('helpButton').addEventListener('click', () => {
            openHelpGuideModal();
        });
    }

    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('dropArea').classList.add('dragover');
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('dropArea').classList.remove('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('dropArea').classList.remove('dragover');

        const files = e.dataTransfer.files;
        console.log('Drop event triggered:', {
            fileCount: files.length,
            processingMode: this.processingMode,
            files: Array.from(files).map(f => ({ name: f.name, size: f.size, type: f.type }))
        });

        if (files.length > 0) {
            if (this.processingMode === 'multi') {
                console.log('Handling multi-file drop');
                this.handleMultiFileSelect(files);
            } else {
                console.log('Handling single-file drop');
                this.processFile(files[0]);
            }
        } else {
            console.warn('No files in drop event');
        }
    }

    handleFileSelect(e) {
        const files = e.target.files;
        console.log('File select event triggered:', {
            fileCount: files.length,
            processingMode: this.processingMode,
            files: Array.from(files).map(f => ({ name: f.name, size: f.size, type: f.type }))
        });

        if (files.length > 0) {
            if (this.processingMode === 'multi') {
                console.log('Handling multi-file selection');
                this.handleMultiFileSelect(files);
            } else {
                console.log('Handling single-file selection');
                this.processFile(files[0]);
            }
        } else {
            console.warn('No files selected');
        }
    }

    handleMultiFileSelect(files) {
        console.log('Multi-file select handler called:', {
            fileCount: files.length,
            currentQueueLength: this.multiFileQueue.length
        });

        if (!files || files.length === 0) {
            console.warn('No files provided to multi-file select handler');
            return;
        }

        // Convert FileList to Array and validate files
        const fileArray = Array.from(files);
        const validFiles = [];
        const invalidFiles = [];

        fileArray.forEach(file => {
            console.log('Validating file:', { name: file.name, size: file.size, type: file.type });

            if (this.isValidFile(file)) {
                // Check if file is already in queue
                const existingFile = this.multiFileQueue.find(item =>
                    item.name === file.name && item.size === file.size
                );

                if (!existingFile) {
                    validFiles.push(file);
                } else {
                    console.log('File already in queue:', file.name);
                }
            } else {
                invalidFiles.push(file.name);
            }
        });

        // Show warning for invalid files
        if (invalidFiles.length > 0) {
            const message = `Invalid files detected:\n${invalidFiles.join('\n')}\n\nOnly valid spreadsheet files will be added to the queue.`;
            console.warn('Invalid files detected:', invalidFiles);
            alert(message);
        }

        // Add valid files to queue
        if (validFiles.length > 0) {
            console.log('Adding valid files to queue:', validFiles.map(f => f.name));

            validFiles.forEach(file => {
                this.multiFileQueue.push({
                    file: file,
                    name: file.name,
                    size: file.size,
                    format: this.getFileFormat(file),
                    status: 'queued',
                    workbook: null,
                    results: []
                });
            });

            console.log('Multi-file queue updated:', {
                totalFiles: this.multiFileQueue.length,
                newFiles: validFiles.length
            });

            // Update UI
            this.displayFileQueue();
            this.updateSidebarForMode('multi');
            this.updateMainContentForMode('multi');
            this.updateMultiFileUI();

            // Ensure multi-file split method options are visible
            this.handleMultiSplitMethodChange();

            // Show success notification
            const fileText = validFiles.length === 1 ? 'file' : 'files';
            this.showBriefNotification(`✅ ${validFiles.length} ${fileText} added to queue`);
        } else {
            console.log('No valid files to add to queue');
        }
    }

    async processFile(file) {
        console.log('Processing file:', {
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified
        });

        if (!this.isValidFile(file)) {
            const fileExtension = file.name ? file.name.split('.').pop().toLowerCase() : 'unknown';
            const errorMessage = `Invalid file type: .${fileExtension}\n\nPlease select a valid file:\n• Excel files (.xlsx, .xls)\n• CSV files (.csv)\n• OpenOffice files (.ods)`;
            console.error('File validation failed:', errorMessage);
            alert(errorMessage);
            return;
        }

        // Clear any existing data before processing new file
        if (this.workbook) {
            console.log('Clearing existing workbook data');
            this.clearFile();
        }

        this.fileName = file.name.replace(/\.[^/.]+$/, ""); // Remove extension
        this.fileSize = file.size; // Capture actual file size

        console.log('File processing started:', {
            fileName: this.fileName,
            fileSize: this.fileSize,
            format: this.getFileFormat(file)
        });

        // Load historical processing data
        this.loadHistoricalData();

        // Check if file is large enough to use progressive loading
        const useLargeFileProcessing = file.size > 50 * 1024 * 1024; // 50MB threshold

        if (useLargeFileProcessing && this.progressiveLoader) {
            try {
                console.log('Using progressive loading for large file');
                await this.processLargeFile(file);
            } catch (error) {
                console.error('Progressive loading failed, falling back to standard processing:', error);
                this.processStandardFile(file);
            }
        } else {
            this.processStandardFile(file);
        }
    }

    async processLargeFile(file) {
        try {
            // Validate memory requirements
            if (this.memoryManager) {
                this.memoryManager.validateFileSize(file.size);
            }

            // Use progressive loader
            const result = await this.progressiveLoader.loadFile(file, {
                format: this.getFileFormat(file),
                fileName: this.fileName
            });

            // Process the loaded data
            await this.processLoadedData(result, file);

        } catch (error) {
            console.error('Large file processing error:', error);
            throw error;
        }
    }

    processStandardFile(file) {
        this.showUploadIndicator(true);

        // Handle different file formats
        const fileFormat = this.getFileFormat(file);
        console.log('Detected file format:', fileFormat);

        switch (fileFormat) {
            case 'csv':
                this.processCSVFile(file);
                break;
            case 'ods':
                this.processODSFile(file);
                break;
            case 'gsheet':
                this.processGoogleSheetsFile(file);
                break;
            default:
                this.processExcelFile(file);
                break;
        }
    }

    async processLoadedData(result, file) {
        try {
            // Convert the loaded data back to workbook format
            const data = new Uint8Array(result.data);
            this.workbook = XLSX.read(data, { type: 'array' });

            this.displayFileInfo(file);
            this.populateSheetOptions();
            this.populateColumnOptions();
            this.showOptionsSection();
            this.updateContentStatus('Large file loaded successfully using progressive loading. Configure split options in the sidebar.', 'largeFileLoaded');

            // Show success notification
            this.showBriefNotification(`✅ Large file loaded: ${file.name} (${result.chunks} chunks processed)`);

        } catch (error) {
            console.error('Error processing loaded data:', error);
            this.updateContentStatus('Error processing file data. Please try again.', 'errorProcessingData');
            throw error;
        }
    }

    processExcelFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                this.workbook = XLSX.read(data, { type: 'array' });
                this.displayFileInfo(file);
                this.populateSheetOptions();
                this.populateColumnOptions();
                this.showOptionsSection();
                this.updateContentStatus('Excel file loaded successfully. Configure split options in the sidebar.', 'excelFileLoaded');

                // Show success notification
                this.showBriefNotification(`✅ Excel file loaded: ${file.name}`);
            } catch (error) {
                alert('Error reading Excel file: ' + error.message);
                this.updateContentStatus('Error loading file. Please try again.', 'errorLoadingFile');
            } finally {
                this.showUploadIndicator(false);
            }
        };
        reader.readAsArrayBuffer(file);
    }

    processCSVFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csvText = e.target.result;

                // Parse CSV data
                const csvData = this.parseCSV(csvText);

                // Convert CSV to workbook format for compatibility
                this.workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils.aoa_to_sheet(csvData);
                XLSX.utils.book_append_sheet(this.workbook, worksheet, 'CSV Data');

                this.displayFileInfo(file);
                this.populateSheetOptions();
                this.populateColumnOptions();
                this.showOptionsSection();
                this.updateContentStatus('CSV file loaded successfully. Configure split options in the sidebar.', 'csvFileLoaded');

                // Show success notification
                this.showBriefNotification(`✅ CSV file loaded: ${file.name}`);
            } catch (error) {
                alert('Error reading CSV file: ' + error.message);
                this.updateContentStatus('Error loading file. Please try again.', 'errorLoadingFile');
            } finally {
                this.showUploadIndicator(false);
            }
        };
        reader.readAsText(file, 'UTF-8');
    }

    processODSFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                this.workbook = XLSX.read(data, { type: 'array' });
                this.displayFileInfo(file);
                this.populateSheetOptions();
                this.populateColumnOptions();
                this.showOptionsSection();
                this.updateContentStatus('OpenOffice Calc file loaded successfully. Configure split options in the sidebar.', 'odsFileLoaded');

                // Show success notification
                this.showBriefNotification(`✅ OpenOffice file loaded: ${file.name}`);
            } catch (error) {
                alert('Error reading OpenOffice file: ' + error.message);
                this.updateContentStatus('Error loading file. Please try again.', 'errorLoadingFile');
            } finally {
                this.showUploadIndicator(false);
            }
        };
        reader.readAsArrayBuffer(file);
    }

    processGoogleSheetsFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // Google Sheets files are typically exported as Excel format
                const data = new Uint8Array(e.target.result);
                this.workbook = XLSX.read(data, { type: 'array' });
                this.displayFileInfo(file);
                this.populateSheetOptions();
                this.populateColumnOptions();
                this.showOptionsSection();
                this.updateContentStatus('Google Sheets file loaded successfully. Configure split options in the sidebar.', 'googleSheetsLoaded');

                // Show success notification
                this.showBriefNotification(`✅ Google Sheets file loaded: ${file.name}`);
            } catch (error) {
                alert('Error reading Google Sheets file: ' + error.message);
                this.updateContentStatus('Error loading file. Please try again.', 'errorLoadingFile');
            } finally {
                this.showUploadIndicator(false);
            }
        };
        reader.readAsArrayBuffer(file);
    }

    isValidFile(file) {
        // Check file object validity
        if (!file || !file.name) {
            if (this.debugMode) {
                console.log('Invalid file object');
            }
            return false;
        }

        // Get file extension
        const fileName = file.name.toLowerCase();
        const hasValidExtension = fileName.endsWith('.xlsx') || fileName.endsWith('.xls') || fileName.endsWith('.csv') ||
                                 fileName.endsWith('.ods') || fileName.endsWith('.gsheet') || fileName.endsWith('.fods');

        // Enhanced MIME type checking for Chrome/Edge compatibility
        const validTypes = [
            // Excel types
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.ms-excel', // .xls
            'application/excel',
            'application/x-excel',
            'application/x-msexcel',
            'application/msexcel',
            'application/x-ms-excel',
            'application/vnd.ms-office', // Sometimes used by browsers
            // CSV types
            'text/csv', // Standard CSV MIME type
            'application/csv', // Alternative CSV MIME type
            'text/comma-separated-values', // Alternative CSV MIME type
            'text/plain', // Sometimes used for CSV files
            // OpenOffice/LibreOffice types
            'application/vnd.oasis.opendocument.spreadsheet', // .ods
            'application/vnd.oasis.opendocument.spreadsheet-flat-xml', // .fods
            // Google Sheets types
            'application/vnd.google-apps.spreadsheet', // Google Sheets
            'application/x-vnd.oasis.opendocument.spreadsheet', // Alternative ODS
            // Generic types (common in drag/drop)
            '', // Empty MIME type (common in drag/drop)
            'application/octet-stream' // Generic binary (fallback)
        ];

        const hasValidMimeType = validTypes.includes(file.type);

        // Browser-specific validation adjustments
        let isValid = hasValidExtension || hasValidMimeType;

        // Chrome/Edge sometimes don't provide MIME types for dragged files
        if ((this.browserInfo && (this.browserInfo.isChrome || this.browserInfo.isEdge)) && !file.type) {
            isValid = hasValidExtension; // Rely on extension for Chrome/Edge drag/drop
        }

        // Additional validation: check file size is reasonable
        if (isValid && file.size > 0) {
            // Files should be at least a few bytes
            if (file.size < 10) {
                isValid = false;
                if (this.debugMode) {
                    console.log('File too small to be valid');
                }
            }
        }

        if (this.debugMode) {
            console.log(`File validation:`, {
                name: file.name,
                type: file.type || 'empty',
                size: file.size,
                extensionValid: hasValidExtension,
                mimeValid: hasValidMimeType,
                overallValid: isValid,
                browser: this.browserInfo ? (this.browserInfo.isChrome ? 'Chrome' : this.browserInfo.isEdge ? 'Edge' : 'Other') : 'Unknown'
            });
        }

        return isValid;
    }

    // Keep backward compatibility
    isValidExcelFile(file) {
        return this.isValidFile(file);
    }

    // Check if file is CSV
    isCSVFile(file) {
        if (!file || !file.name) return false;
        const fileName = file.name.toLowerCase();
        return fileName.endsWith('.csv') ||
               file.type === 'text/csv' ||
               file.type === 'application/csv' ||
               file.type === 'text/comma-separated-values';
    }

    // Check if file is OpenOffice/LibreOffice
    isODSFile(file) {
        if (!file || !file.name) return false;
        const fileName = file.name.toLowerCase();
        return fileName.endsWith('.ods') || fileName.endsWith('.fods') ||
               file.type === 'application/vnd.oasis.opendocument.spreadsheet' ||
               file.type === 'application/vnd.oasis.opendocument.spreadsheet-flat-xml' ||
               file.type === 'application/x-vnd.oasis.opendocument.spreadsheet';
    }

    // Check if file is Google Sheets
    isGoogleSheetsFile(file) {
        if (!file || !file.name) return false;
        const fileName = file.name.toLowerCase();
        return fileName.endsWith('.gsheet') ||
               file.type === 'application/vnd.google-apps.spreadsheet';
    }

    // Get file format type
    getFileFormat(file) {
        if (this.isCSVFile(file)) return 'csv';
        if (this.isODSFile(file)) return 'ods';
        if (this.isGoogleSheetsFile(file)) return 'gsheet';
        return 'excel'; // Default to Excel for .xlsx, .xls
    }

    // Get display name for file format
    getFileTypeDisplayName(format) {
        switch (format) {
            case 'csv': return 'CSV';
            case 'ods': return 'OpenOffice Calc';
            case 'gsheet': return 'Google Sheets';
            case 'excel': return 'Excel';
            default: return 'Spreadsheet';
        }
    }

    // Parse CSV text into array of arrays
    parseCSV(csvText) {
        const lines = [];
        let currentLine = [];
        let currentField = '';
        let inQuotes = false;
        let i = 0;

        while (i < csvText.length) {
            const char = csvText[i];
            const nextChar = csvText[i + 1];

            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    // Escaped quote
                    currentField += '"';
                    i += 2;
                    continue;
                } else {
                    // Toggle quote state
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                // Field separator
                currentLine.push(currentField);
                currentField = '';
            } else if ((char === '\n' || char === '\r') && !inQuotes) {
                // Line separator
                currentLine.push(currentField);
                if (currentLine.length > 0 && !(currentLine.length === 1 && currentLine[0] === '')) {
                    lines.push(currentLine);
                }
                currentLine = [];
                currentField = '';

                // Skip \r\n combination
                if (char === '\r' && nextChar === '\n') {
                    i++;
                }
            } else {
                // Regular character
                currentField += char;
            }

            i++;
        }

        // Add final field and line if not empty
        if (currentField !== '' || currentLine.length > 0) {
            currentLine.push(currentField);
            if (currentLine.length > 0 && !(currentLine.length === 1 && currentLine[0] === '')) {
                lines.push(currentLine);
            }
        }

        return lines;
    }

    displayFileInfo(file) {
        const fileInfo = document.getElementById('fileInfo');
        const fileActions = document.getElementById('fileActions');
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        const sheetCount = this.workbook.SheetNames.length;

        // Get row count for the first sheet
        const firstSheet = this.workbook.Sheets[this.workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(firstSheet['!ref'] || 'A1:A1');
        const rowCount = range.e.r + 1;
        const colCount = range.e.c + 1;

        const fileFormat = this.getFileFormat(file);
        const fileType = this.getFileTypeDisplayName(fileFormat);
        const dataLabel = (fileFormat === 'csv') ? 'Rows/Columns' : 'Worksheets';
        const dataValue = (fileFormat === 'csv') ? `${rowCount} rows, ${colCount} columns` : sheetCount;

        fileInfo.innerHTML = `
            <strong>File:</strong> ${file.name}<br>
            <strong>Type:</strong> ${fileType}<br>
            <strong>Size:</strong> ${fileSize} MB<br>
            <strong>${dataLabel}:</strong> ${dataValue}
        `;
        fileInfo.classList.add('show');
        fileActions.style.display = 'block';
    }

    populateSheetOptions() {
        const sheetList = document.getElementById('sheetList');
        sheetList.innerHTML = '';
        
        this.workbook.SheetNames.forEach((sheetName, index) => {
            const worksheet = this.workbook.Sheets[sheetName];
            const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:A1');
            const rowCount = range.e.r + 1;
            
            const sheetItem = document.createElement('div');
            sheetItem.className = 'sheet-item';
            sheetItem.innerHTML = `
                <input type="checkbox" id="sheet_${index}" value="${sheetName}" checked>
                <label for="sheet_${index}">
                    <strong>${sheetName}</strong><br>
                    <small>${rowCount} rows</small>
                </label>
            `;
            sheetList.appendChild(sheetItem);
        });
    }

    populateColumnOptions() {
        const columnSelect = document.getElementById('columnSelect');
        columnSelect.innerHTML = '<option value="">Select a column...</option>';

        if (this.workbook.SheetNames.length > 0) {
            const firstSheet = this.workbook.Sheets[this.workbook.SheetNames[0]];
            const range = XLSX.utils.decode_range(firstSheet['!ref'] || 'A1:A1');

            // Get headers from first row
            for (let col = range.s.c; col <= range.e.c; col++) {
                const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
                const cell = firstSheet[cellAddress];
                const headerValue = cell ? cell.v : `Column ${XLSX.utils.encode_col(col)}`;

                const option = document.createElement('option');
                option.value = col;
                option.textContent = headerValue;
                columnSelect.appendChild(option);
            }
        }

        // Also populate conditional splitter columns
        if (this.conditionalSplitter) {
            this.conditionalSplitter.populateColumnOptions(this.workbook);
        }
    }

    showOptionsSection() {
        document.getElementById('optionsSection').style.display = 'block';
        document.getElementById('outputSection').style.display = 'block';
        document.getElementById('outputPrefix').value = this.fileName;
    }

    showUploadIndicator(show) {
        const fileMessage = document.getElementById('fileMessage');
        const uploadIndicator = document.getElementById('uploadIndicator');

        console.log('Upload indicator:', show ? 'showing' : 'hiding');

        if (show) {
            if (fileMessage) fileMessage.style.display = 'none';
            if (uploadIndicator) uploadIndicator.style.display = 'flex';
        } else {
            if (fileMessage) fileMessage.style.display = 'flex';
            if (uploadIndicator) uploadIndicator.style.display = 'none';
        }
    }

    updateContentStatus(message, translationKey = null) {
        const contentStatus = document.getElementById('contentStatus');
        if (translationKey && this.languageManager) {
            contentStatus.textContent = this.languageManager.t(translationKey);
        } else {
            contentStatus.textContent = message;
        }
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('collapsed');

        // On mobile, toggle open class instead
        if (window.innerWidth <= 480) {
            sidebar.classList.toggle('open');
        }
    }

    showCompletionNotification() {
        // Play notification sound
        this.playNotificationSound();

        // Show completion modal
        const modal = document.getElementById('completionModal');
        const processingTime = this.processingStartTime ?
            ((Date.now() - this.processingStartTime) / 1000).toFixed(1) : '0';

        // Update completion stats
        document.getElementById('completionFileCount').textContent = this.splitFiles.length;
        document.getElementById('completionTime').textContent = this.formatTime(parseInt(processingTime));

        // Update completion message based on file count
        const message = this.splitFiles.length === 1 ?
            'Your file has been successfully processed.' :
            `Your file has been successfully split into ${this.splitFiles.length} files.`;
        document.getElementById('completionMessage').textContent = message;

        // Show modal with animation
        modal.style.display = 'block';

        // Auto-dismiss after 10 seconds if user doesn't interact
        setTimeout(() => {
            if (modal.style.display === 'block') {
                this.closeCompletionModal();
            }
        }, 10000);

        // Show browser notification if permission granted
        this.showBrowserNotification();
    }

    playNotificationSound() {
        try {
            const audio = document.getElementById('completionSound');
            if (audio) {
                // Create a simple success sound using Web Audio API as fallback
                this.createSuccessSound();
            }
        } catch (error) {
            console.log('Could not play notification sound:', error);
        }
    }

    createSuccessSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Create a pleasant success sound (C major chord)
            const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
            const duration = 0.3;

            frequencies.forEach((freq, index) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                oscillator.type = 'sine';

                // Fade in and out
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

                oscillator.start(audioContext.currentTime + index * 0.1);
                oscillator.stop(audioContext.currentTime + duration + index * 0.1);
            });
        } catch (error) {
            console.log('Could not create success sound:', error);
        }
    }

    showBrowserNotification() {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                new Notification('Excel Compartmentalizer', {
                    body: `Processing complete! ${this.splitFiles.length} files created.`,
                    icon: 'img/excel-icon.svg',
                    tag: 'excel-split-complete'
                });
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        new Notification('Excel Compartmentalizer', {
                            body: `Processing complete! ${this.splitFiles.length} files created.`,
                            icon: 'img/excel-icon.svg',
                            tag: 'excel-split-complete'
                        });
                    }
                });
            }
        }
    }

    closeCompletionModal() {
        document.getElementById('completionModal').style.display = 'none';
    }

    getEstimationAccuracy() {
        if (this.actualProcessingTimes.length === 0) return null;

        // Calculate accuracy of recent estimates
        const recentEstimates = this.actualProcessingTimes.slice(-10);
        const accuracyRatios = recentEstimates.map(record => {
            const ratio = record.actualTime / record.estimatedTime;
            return Math.abs(1 - ratio); // Deviation from perfect accuracy (1.0)
        });

        const avgDeviation = accuracyRatios.reduce((sum, ratio) => sum + ratio, 0) / accuracyRatios.length;
        const accuracy = Math.max(0, (1 - avgDeviation) * 100); // Convert to percentage

        return {
            accuracy: Math.round(accuracy),
            sampleSize: recentEstimates.length,
            avgDeviation: avgDeviation
        };
    }

    displayEstimationFeedback() {
        const accuracy = this.getEstimationAccuracy();
        if (accuracy && accuracy.sampleSize >= 3) {
            console.log(`Time estimation accuracy: ${accuracy.accuracy}% (based on ${accuracy.sampleSize} recent files)`);

            // Could add UI feedback here if desired
            if (accuracy.accuracy < 70) {
                console.log('Time estimates are being recalibrated based on your system performance...');
            }
        }
    }

    startProcessing() {
        this.isProcessing = true;
        this.shouldCancel = false;
        this.processingStartTime = Date.now();

        // Initialize time estimation
        this.updateTimeEstimate(0);

        // Display estimation feedback for debugging/improvement
        this.displayEstimationFeedback();

        // Update UI
        document.getElementById('splitButton').disabled = true;
        document.getElementById('splitButton').textContent = 'Processing...';
        document.getElementById('cancelButton').style.display = 'inline-block';
        document.getElementById('headerProgress').style.display = 'block';

        // Hide results if visible
        document.getElementById('processingSummary').style.display = 'none';
        document.getElementById('resultsControls').style.display = 'none';
        document.getElementById('resultsList').innerHTML = '';

        // Update content status
        this.updateContentStatus('Processing file... Please wait.', 'processingFile');
    }

    endProcessing() {
        this.isProcessing = false;
        this.shouldCancel = false;

        // Record actual processing time for learning
        if (this.processingStartTime) {
            const actualTime = (Date.now() - this.processingStartTime) / 1000;
            this.recordProcessingTime(actualTime);
        }

        // Update UI
        document.getElementById('splitButton').disabled = false;
        document.getElementById('splitButton').textContent = this.languageManager.t('splitFile');
        document.getElementById('cancelButton').style.display = 'none';

        // Hide progress after delay
        setTimeout(() => {
            if (!this.isProcessing) {
                document.getElementById('headerProgress').style.display = 'none';
            }
        }, 2000);
    }

    cancelProcessing() {
        this.shouldCancel = true;
        this.updateProgress(0, 'Cancelling operation...');
        setTimeout(() => {
            this.endProcessing();
            alert('Operation cancelled by user');
        }, 500);
    }

    updateProgress(percentage, message, details = '') {
        document.getElementById('progressFill').style.width = percentage + '%';
        document.getElementById('progressText').textContent = message;
        document.getElementById('progressDetails').textContent = details;

        // Update time estimate with progress percentage
        if (this.processingStartTime) {
            const elapsedSeconds = Math.floor((Date.now() - this.processingStartTime) / 1000);
            this.updateTimeEstimate(elapsedSeconds, percentage);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    estimateProcessingTime() {
        if (!this.workbook) return 0;

        // Analyze file complexity
        const fileAnalysis = this.analyzeFileComplexity();

        // Get base estimation using improved algorithm
        const baseEstimate = this.calculateBaseEstimate(fileAnalysis);

        // Apply split method complexity
        const methodMultiplier = this.getSplitMethodMultiplier();

        // Apply browser performance factor
        const performanceFactor = this.getBrowserPerformanceFactor();

        // Calculate final estimate with bounds
        let estimatedSeconds = baseEstimate * methodMultiplier * performanceFactor;

        // Apply historical learning if available
        if (this.actualProcessingTimes.length > 0) {
            estimatedSeconds = this.applyHistoricalLearning(estimatedSeconds, fileAnalysis);
        }

        // Apply realistic bounds
        estimatedSeconds = this.applyEstimationBounds(estimatedSeconds, fileAnalysis);

        this.estimatedDuration = Math.round(estimatedSeconds);
        return this.estimatedDuration;
    }

    analyzeFileComplexity() {
        let totalRows = 0;
        let totalCells = 0;
        let totalSheets = this.workbook.SheetNames.length;
        let maxColumns = 0;
        let populatedCells = 0;

        this.workbook.SheetNames.forEach(sheetName => {
            const worksheet = this.workbook.Sheets[sheetName];
            if (worksheet['!ref']) {
                const range = XLSX.utils.decode_range(worksheet['!ref']);
                const rows = range.e.r + 1;
                const cols = range.e.c + 1;
                totalRows += rows;
                totalCells += rows * cols;
                maxColumns = Math.max(maxColumns, cols);

                // Count populated cells (approximate)
                Object.keys(worksheet).forEach(key => {
                    if (key.match(/^[A-Z]+[0-9]+$/)) {
                        populatedCells++;
                    }
                });
            }
        });

        this.totalRows = totalRows;

        // Estimate file size if not available
        if (!this.fileSize) {
            this.fileSize = populatedCells * 50; // Rough estimate: 50 bytes per populated cell
        }

        return {
            totalRows,
            totalCells,
            totalSheets,
            maxColumns,
            populatedCells,
            fileSize: this.fileSize,
            density: populatedCells / Math.max(totalCells, 1), // Data density ratio
            complexity: this.calculateComplexityScore(totalRows, maxColumns, totalSheets, populatedCells)
        };
    }

    calculateComplexityScore(rows, cols, sheets, populatedCells) {
        // Complexity score from 1 (simple) to 10 (very complex)
        let score = 1;

        // Row complexity
        if (rows > 50000) score += 3;
        else if (rows > 10000) score += 2;
        else if (rows > 1000) score += 1;

        // Column complexity
        if (cols > 100) score += 2;
        else if (cols > 50) score += 1;

        // Sheet complexity
        if (sheets > 10) score += 2;
        else if (sheets > 5) score += 1;

        // Data density complexity
        const density = populatedCells / (rows * cols * sheets);
        if (density > 0.8) score += 1;

        return Math.min(score, 10);
    }

    calculateBaseEstimate(analysis) {
        // Improved base estimation algorithm (in seconds)

        // File size based estimation (primary factor)
        let sizeBasedTime = 0;
        if (analysis.fileSize < 100000) { // < 100KB
            sizeBasedTime = 0.5 + (analysis.fileSize / 100000) * 1.5; // 0.5-2s
        } else if (analysis.fileSize < 1000000) { // < 1MB
            sizeBasedTime = 2 + ((analysis.fileSize - 100000) / 900000) * 3; // 2-5s
        } else if (analysis.fileSize < 10000000) { // < 10MB
            sizeBasedTime = 5 + ((analysis.fileSize - 1000000) / 9000000) * 10; // 5-15s
        } else { // > 10MB
            sizeBasedTime = 15 + ((analysis.fileSize - 10000000) / 10000000) * 20; // 15-35s+
        }

        // Row-based adjustment
        let rowFactor = 1;
        if (analysis.totalRows > 100000) rowFactor = 1.5;
        else if (analysis.totalRows > 50000) rowFactor = 1.3;
        else if (analysis.totalRows > 10000) rowFactor = 1.1;

        // Complexity adjustment
        const complexityFactor = 0.8 + (analysis.complexity / 10) * 0.4; // 0.8 - 1.2

        // Sheet count adjustment
        const sheetFactor = Math.max(1, 1 + (analysis.totalSheets - 1) * 0.1);

        return sizeBasedTime * rowFactor * complexityFactor * sheetFactor;
    }

    getSplitMethodMultiplier() {
        const selectedMethod = document.querySelector('input[name="splitMethod"]:checked').value;
        const outputFormat = document.querySelector('input[name="outputFormat"]:checked')?.value || 'xlsx';

        let baseMultiplier;
        switch (selectedMethod) {
            case 'bySheet':
                baseMultiplier = 0.8; // Fastest - just extracting existing sheets
                break;
            case 'byRowCount':
                baseMultiplier = 1.0; // Moderate - sequential processing
                break;
            case 'byColumn':
                baseMultiplier = 1.4; // More complex - data grouping required
                break;
            case 'byFileSize':
                baseMultiplier = 1.8; // Most complex - iterative size checking
                break;
            default:
                baseMultiplier = 1.0;
        }

        // Output format adjustment
        let formatMultiplier = 1.0;
        if (outputFormat === 'csv') {
            formatMultiplier = 0.7; // CSV is faster to generate
        } else if (outputFormat === 'both') {
            formatMultiplier = 1.6; // Both formats take longer
        }

        return baseMultiplier * formatMultiplier;
    }

    getBrowserPerformanceFactor() {
        // Estimate browser performance based on available indicators
        let performanceFactor = 1.0;

        // Check hardware concurrency (CPU cores)
        if (navigator.hardwareConcurrency) {
            if (navigator.hardwareConcurrency >= 8) performanceFactor *= 0.8;
            else if (navigator.hardwareConcurrency >= 4) performanceFactor *= 0.9;
            else if (navigator.hardwareConcurrency <= 2) performanceFactor *= 1.2;
        }

        // Check available memory (if supported)
        if (navigator.deviceMemory) {
            if (navigator.deviceMemory >= 8) performanceFactor *= 0.9;
            else if (navigator.deviceMemory <= 4) performanceFactor *= 1.1;
        }

        // Check if running on mobile
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            performanceFactor *= 1.3; // Mobile devices are generally slower
        }

        return Math.max(0.6, Math.min(1.5, performanceFactor)); // Bound between 0.6x and 1.5x
    }

    applyHistoricalLearning(estimate, analysis) {
        if (this.actualProcessingTimes.length < 3) return estimate;

        // Find similar historical processing times
        const similarProcesses = this.actualProcessingTimes.filter(record => {
            const sizeDiff = Math.abs(record.fileSize - analysis.fileSize) / analysis.fileSize;
            const rowDiff = Math.abs(record.totalRows - analysis.totalRows) / analysis.totalRows;
            return sizeDiff < 0.5 && rowDiff < 0.5; // Within 50% similarity
        });

        if (similarProcesses.length > 0) {
            // Calculate average accuracy ratio from similar processes
            const accuracyRatios = similarProcesses.map(record => record.actualTime / record.estimatedTime);
            const avgAccuracyRatio = accuracyRatios.reduce((sum, ratio) => sum + ratio, 0) / accuracyRatios.length;

            // Apply learning with dampening to avoid overcorrection
            const learningFactor = Math.min(0.3, similarProcesses.length * 0.1);
            return estimate * (1 + (avgAccuracyRatio - 1) * learningFactor);
        }

        return estimate;
    }

    applyEstimationBounds(estimate, analysis) {
        // Set realistic minimum and maximum bounds
        let minTime = 1; // Minimum 1 second
        let maxTime = 300; // Maximum 5 minutes for most files

        // Adjust bounds based on file characteristics
        if (analysis.fileSize > 50000000) { // > 50MB
            maxTime = 600; // 10 minutes for very large files
        } else if (analysis.fileSize > 10000000) { // > 10MB
            maxTime = 180; // 3 minutes for large files
        }

        if (analysis.totalRows > 100000) {
            maxTime = Math.max(maxTime, 240); // At least 4 minutes for very large datasets
        }

        // Small file minimum
        if (analysis.fileSize < 10000 && analysis.totalRows < 100) {
            minTime = 0.5;
            maxTime = Math.min(maxTime, 10);
        }

        return Math.max(minTime, Math.min(maxTime, estimate));
    }

    recordProcessingTime(actualTime) {
        // Store processing time for future learning
        if (this.workbook && this.estimatedDuration > 0) {
            const analysis = this.analyzeFileComplexity();
            this.actualProcessingTimes.push({
                fileSize: analysis.fileSize,
                totalRows: analysis.totalRows,
                complexity: analysis.complexity,
                estimatedTime: this.estimatedDuration,
                actualTime: actualTime,
                timestamp: Date.now()
            });

            // Keep only recent records (last 20)
            if (this.actualProcessingTimes.length > 20) {
                this.actualProcessingTimes = this.actualProcessingTimes.slice(-20);
            }

            // Store in localStorage for persistence
            try {
                localStorage.setItem('easySheetsProcessingTimes', JSON.stringify(this.actualProcessingTimes));
            } catch (e) {
                // Ignore localStorage errors
            }
        }
    }

    loadHistoricalData() {
        // Load historical processing times from localStorage
        try {
            const stored = localStorage.getItem('easySheetsProcessingTimes');
            if (stored) {
                this.actualProcessingTimes = JSON.parse(stored);
                // Remove old records (older than 30 days)
                const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
                this.actualProcessingTimes = this.actualProcessingTimes.filter(record => record.timestamp > thirtyDaysAgo);
            }
        } catch (e) {
            this.actualProcessingTimes = [];
        }
    }

    updateTimeEstimate(elapsedSeconds, progressPercentage = 0) {
        const timeEstimateEl = document.getElementById('timeEstimate');
        if (!timeEstimateEl) return;

        if (elapsedSeconds === 0) {
            // Show initial estimate
            const estimate = this.estimateProcessingTime();
            if (estimate > 0) {
                timeEstimateEl.textContent = `Est. ${this.formatTime(estimate)}`;
            } else {
                timeEstimateEl.textContent = 'Calculating...';
            }
            this.lastProgressUpdate = 0;
            this.processingSpeedSamples = [];
        } else {
            // Calculate dynamic remaining time based on actual progress
            const remainingTime = this.calculateDynamicRemainingTime(elapsedSeconds, progressPercentage);

            if (remainingTime > 0) {
                timeEstimateEl.textContent = `${this.formatTime(remainingTime)} remaining`;
            } else if (progressPercentage > 95) {
                timeEstimateEl.textContent = 'Finalizing...';
            } else {
                timeEstimateEl.textContent = 'Almost done...';
            }
        }
    }

    calculateDynamicRemainingTime(elapsedSeconds, progressPercentage) {
        // Collect processing speed samples
        if (progressPercentage > this.lastProgressUpdate && progressPercentage > 5) {
            const progressDelta = progressPercentage - this.lastProgressUpdate;
            const timeDelta = elapsedSeconds - (this.processingSpeedSamples.length > 0 ?
                this.processingSpeedSamples[this.processingSpeedSamples.length - 1].elapsedTime : 0);

            if (timeDelta > 0) {
                this.processingSpeedSamples.push({
                    progressPercentage,
                    elapsedTime: elapsedSeconds,
                    speed: progressDelta / timeDelta // progress per second
                });

                // Keep only recent samples (last 10)
                if (this.processingSpeedSamples.length > 10) {
                    this.processingSpeedSamples = this.processingSpeedSamples.slice(-10);
                }
            }

            this.lastProgressUpdate = progressPercentage;
        }

        // Calculate remaining time based on recent processing speed
        if (this.processingSpeedSamples.length >= 2 && progressPercentage > 10) {
            // Use weighted average of recent speeds (more weight to recent samples)
            let weightedSpeed = 0;
            let totalWeight = 0;

            this.processingSpeedSamples.forEach((sample, index) => {
                const weight = index + 1; // More recent samples get higher weight
                weightedSpeed += sample.speed * weight;
                totalWeight += weight;
            });

            const avgSpeed = weightedSpeed / totalWeight;
            const remainingProgress = 100 - progressPercentage;

            if (avgSpeed > 0) {
                const dynamicRemaining = remainingProgress / avgSpeed;

                // Blend with original estimate for stability
                const originalRemaining = Math.max(0, this.estimatedDuration - elapsedSeconds);
                const blendFactor = Math.min(0.7, progressPercentage / 100); // More weight to dynamic as progress increases

                return Math.round(dynamicRemaining * blendFactor + originalRemaining * (1 - blendFactor));
            }
        }

        // Fallback to original estimate
        return Math.max(0, this.estimatedDuration - elapsedSeconds);
    }

    formatTime(seconds) {
        if (seconds < 60) {
            return `${seconds}s`;
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
        } else {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return `${hours}h ${minutes}m`;
        }
    }

    handleSplitMethodChange() {
        const selectedMethod = document.querySelector('input[name="splitMethod"]:checked').value;

        // Hide all option details
        document.getElementById('sheetOptions').style.display = 'none';
        document.getElementById('columnOptions').style.display = 'none';
        document.getElementById('rowCountOptions').style.display = 'none';
        document.getElementById('fileSizeOptions').style.display = 'none';

        // Show relevant option details
        switch (selectedMethod) {
            case 'bySheet':
                document.getElementById('sheetOptions').style.display = 'block';
                break;
            case 'byColumn':
                document.getElementById('columnOptions').style.display = 'block';
                break;
            case 'byRowCount':
                document.getElementById('rowCountOptions').style.display = 'block';
                break;
            case 'byFileSize':
                document.getElementById('fileSizeOptions').style.display = 'block';
                break;
        }
    }

    async splitFile() {
        if (this.isProcessing) return;

        const selectedMethod = document.querySelector('input[name="splitMethod"]:checked').value;
        const outputPrefix = document.getElementById('outputPrefix').value || this.fileName;

        this.startProcessing();
        this.splitFiles = [];

        try {
            this.updateProgress(0, 'Initializing split operation...');
            await this.delay(100); // Allow UI to update

            switch (selectedMethod) {
                case 'bySheet':
                    await this.splitBySheet(outputPrefix);
                    break;
                case 'byColumn':
                    await this.splitByColumn(outputPrefix);
                    break;
                case 'byRowCount':
                    await this.splitByRowCount(outputPrefix);
                    break;
                case 'byFileSize':
                    await this.splitByFileSize(outputPrefix);
                    break;
            }

            if (!this.shouldCancel) {
                this.updateProgress(100, 'Split operation completed successfully!');
                await this.delay(500);
                this.showResults();
            }
        } catch (error) {
            this.updateProgress(0, 'Error: ' + error.message);
            setTimeout(() => alert('Error splitting file: ' + error.message), 100);
        } finally {
            this.endProcessing();
        }
    }

    splitBySheet(prefix) {
        const selectedSheets = Array.from(document.querySelectorAll('#sheetList input[type="checkbox"]:checked'))
            .map(cb => cb.value);
        const outputFormat = document.querySelector('input[name="outputFormat"]:checked')?.value || 'xlsx';

        selectedSheets.forEach(sheetName => {
            const newWorkbook = XLSX.utils.book_new();
            const worksheet = this.workbook.Sheets[sheetName];
            XLSX.utils.book_append_sheet(newWorkbook, worksheet, sheetName);

            this.createOutputFiles(newWorkbook, `${prefix}_${sheetName}`, outputFormat, `Sheet: ${sheetName}`);
        });
    }

    // Create output files in specified format(s)
    createOutputFiles(workbook, baseName, outputFormat, info) {
        const formats = outputFormat === 'all' ? ['xlsx', 'csv', 'ods', 'gsheet'] : [outputFormat];

        formats.forEach(format => {
            const { fileName, fileData } = this.generateFileInFormat(workbook, baseName, format);
            this.splitFiles.push({
                name: fileName,
                data: fileData,
                info: info,
                format: format
            });
        });
    }

    // Generate file in specific format
    generateFileInFormat(workbook, baseName, format) {
        let fileName, fileData, bookType;

        switch (format) {
            case 'csv':
                fileName = `${baseName}.csv`;
                // Convert first sheet to CSV
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                fileData = XLSX.utils.sheet_to_csv(firstSheet);
                break;

            case 'ods':
                fileName = `${baseName}.ods`;
                bookType = 'ods';
                fileData = XLSX.write(workbook, { bookType: bookType, type: 'array' });
                break;

            case 'gsheet':
                // Google Sheets format - export as Excel for compatibility
                fileName = `${baseName}_GoogleSheets.xlsx`;
                bookType = 'xlsx';
                fileData = XLSX.write(workbook, { bookType: bookType, type: 'array' });
                break;

            case 'xlsx':
            default:
                fileName = `${baseName}.xlsx`;
                bookType = 'xlsx';
                fileData = XLSX.write(workbook, { bookType: bookType, type: 'array' });
                break;
        }

        return { fileName, fileData };
    }

    splitByColumn(prefix) {
        const columnIndex = parseInt(document.getElementById('columnSelect').value);
        const includeHeaders = document.getElementById('includeHeadersCheck').checked;
        const outputFormat = document.querySelector('input[name="outputFormat"]:checked')?.value || 'xlsx';

        if (isNaN(columnIndex)) {
            throw new Error('Please select a column to split by');
        }

        // For now, split the first sheet by column values
        const firstSheetName = this.workbook.SheetNames[0];
        const worksheet = this.workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) return;

        const headers = jsonData[0];
        const dataRows = jsonData.slice(1);

        // Group rows by column value
        const groups = {};
        dataRows.forEach(row => {
            const groupKey = row[columnIndex] || 'Empty';
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(row);
        });

        // Create separate files for each group
        Object.keys(groups).forEach(groupKey => {
            const newWorkbook = XLSX.utils.book_new();
            const groupData = includeHeaders ? [headers, ...groups[groupKey]] : groups[groupKey];
            const newWorksheet = XLSX.utils.aoa_to_sheet(groupData);

            XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

            this.createOutputFiles(newWorkbook, `${prefix}_${this.sanitizeFileName(groupKey)}`, outputFormat,
                `Group: ${groupKey} (${groups[groupKey].length} rows)`);
        });
    }

    splitByRowCount(prefix) {
        const rowsPerFile = parseInt(document.getElementById('rowsPerFile').value);
        const includeHeaders = document.getElementById('includeHeadersRowCheck').checked;
        const outputFormat = document.querySelector('input[name="outputFormat"]:checked')?.value || 'xlsx';

        if (isNaN(rowsPerFile) || rowsPerFile < 1) {
            throw new Error('Please enter a valid number of rows per file');
        }

        // Split the first sheet by row count
        const firstSheetName = this.workbook.SheetNames[0];
        const worksheet = this.workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) return;

        const headers = jsonData[0];
        const dataRows = jsonData.slice(1);

        let fileIndex = 1;
        for (let i = 0; i < dataRows.length; i += rowsPerFile) {
            const chunk = dataRows.slice(i, i + rowsPerFile);
            const newWorkbook = XLSX.utils.book_new();
            const chunkData = includeHeaders ? [headers, ...chunk] : chunk;
            const newWorksheet = XLSX.utils.aoa_to_sheet(chunkData);

            XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

            this.createOutputFiles(newWorkbook, `${prefix}_part${fileIndex}`, outputFormat,
                `Rows ${i + 1}-${Math.min(i + rowsPerFile, dataRows.length)} (${chunk.length} rows)`);

            fileIndex++;
        }
    }

    async splitByFileSize(prefix) {
        const maxFileSize = parseFloat(document.getElementById('maxFileSize').value);
        const fileSizeUnit = document.getElementById('fileSizeUnit').value;
        const includeHeaders = document.getElementById('includeHeadersSizeCheck').checked;

        if (isNaN(maxFileSize) || maxFileSize <= 0) {
            throw new Error('Please enter a valid file size limit');
        }

        this.updateProgress(10, 'Reading Excel data...');
        await this.delay(100);

        // Convert to bytes with safety margin (85% of target to account for estimation errors)
        const maxSizeBytes = this.convertToBytes(maxFileSize, fileSizeUnit) * 0.85;

        // Split the first sheet by file size
        const firstSheetName = this.workbook.SheetNames[0];
        const worksheet = this.workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) return;

        this.updateProgress(20, 'Analyzing data structure...');
        await this.delay(100);

        const headers = jsonData[0];
        const dataRows = jsonData.slice(1);
        const totalRows = dataRows.length;

        let fileIndex = 1;
        let currentChunk = [];
        let processedRows = 0;

        // Estimate header size if including headers
        const headerSize = includeHeaders ? this.estimateRowSize(headers) : 0;

        for (let i = 0; i < dataRows.length; i++) {
            if (this.shouldCancel) return;

            const row = dataRows[i];
            const rowSize = this.estimateRowSize(row);

            // Check if adding this row would exceed the size limit
            const chunkSize = headerSize + this.estimateChunkSize(currentChunk) + rowSize;

            if (chunkSize > maxSizeBytes && currentChunk.length > 0) {
                // Create file with current chunk
                this.updateProgress(
                    20 + (processedRows / totalRows) * 60,
                    `Creating file ${fileIndex}...`,
                    `Processing ${currentChunk.length} rows`
                );

                await this.createFileSizeFileAsync(currentChunk, headers, includeHeaders, prefix, fileIndex, maxFileSize, fileSizeUnit);
                fileIndex++;
                currentChunk = [];
                await this.delay(50); // Allow UI updates
            }

            currentChunk.push(row);
            processedRows++;

            // Update progress every 100 rows
            if (i % 100 === 0) {
                this.updateProgress(
                    20 + (processedRows / totalRows) * 60,
                    `Processing data...`,
                    `${processedRows} of ${totalRows} rows processed`
                );
                await this.delay(10);
            }

            // Safety check: if a single row is too large, create a file anyway
            if (currentChunk.length === 1 && (headerSize + this.estimateRowSize(row)) > maxSizeBytes) {
                await this.createFileSizeFileAsync(currentChunk, headers, includeHeaders, prefix, fileIndex, maxFileSize, fileSizeUnit);
                fileIndex++;
                currentChunk = [];
            }
        }

        // Create file for remaining rows
        if (currentChunk.length > 0 && !this.shouldCancel) {
            this.updateProgress(85, `Creating final file ${fileIndex}...`);
            await this.createFileSizeFileAsync(currentChunk, headers, includeHeaders, prefix, fileIndex, maxFileSize, fileSizeUnit);
        }

        this.updateProgress(95, 'Finalizing files...');
        await this.delay(200);
    }

    convertToBytes(size, unit) {
        const units = {
            'KB': 1024,
            'MB': 1024 * 1024,
            'GB': 1024 * 1024 * 1024
        };
        return size * (units[unit] || 1);
    }

    estimateRowSize(row) {
        // More accurate estimation for Excel/CSV files
        let size = 0;
        if (Array.isArray(row)) {
            row.forEach(cell => {
                if (cell !== null && cell !== undefined) {
                    const cellStr = String(cell);
                    // Excel overhead: ~20 bytes per cell + content (XML tags, formatting)
                    // CSV overhead: ~2 bytes per cell (comma/quote) + content
                    size += cellStr.length * 2 + 20; // UTF-16 + overhead
                }
            });
            // Add row overhead (XML tags, formatting, etc.)
            size += 60; // Row overhead for Excel format
        }
        return size;
    }

    estimateChunkSize(chunk) {
        return chunk.reduce((total, row) => total + this.estimateRowSize(row), 0);
    }

    async createFileSizeFileAsync(chunk, headers, includeHeaders, prefix, fileIndex, maxSize, unit) {
        const outputFormat = document.querySelector('input[name="outputFormat"]:checked').value;
        const namingScheme = document.querySelector('input[name="namingScheme"]:checked').value;

        const chunkData = includeHeaders ? [headers, ...chunk] : chunk;
        const newWorkbook = XLSX.utils.book_new();
        const newWorksheet = XLSX.utils.aoa_to_sheet(chunkData);
        XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

        // Create files based on output format
        if (outputFormat === 'all') {
            // Create all formats
            await this.createFormatFile(newWorkbook, prefix, fileIndex, maxSize, unit, chunk.length, namingScheme, 'xlsx');
            await this.createFormatFile(newWorkbook, prefix, fileIndex, maxSize, unit, chunk.length, namingScheme, 'csv');
            await this.createFormatFile(newWorkbook, prefix, fileIndex, maxSize, unit, chunk.length, namingScheme, 'ods');
            await this.createFormatFile(newWorkbook, prefix, fileIndex, maxSize, unit, chunk.length, namingScheme, 'gsheet');
        } else {
            await this.createFormatFile(newWorkbook, prefix, fileIndex, maxSize, unit, chunk.length, namingScheme, outputFormat);
        }

        await this.delay(10); // Allow UI updates
    }

    async createFormatFile(workbook, prefix, fileIndex, maxSize, unit, rowCount, namingScheme, format) {
        const fileName = this.generateFileName(prefix, fileIndex, maxSize, unit, rowCount, namingScheme, this.getFileExtension(format));
        let fileData, mimeType;

        switch (format) {
            case 'csv':
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                fileData = new TextEncoder().encode(XLSX.utils.sheet_to_csv(firstSheet));
                mimeType = 'text/csv';
                break;

            case 'ods':
                fileData = XLSX.write(workbook, { bookType: 'ods', type: 'array' });
                mimeType = 'application/vnd.oasis.opendocument.spreadsheet';
                break;

            case 'gsheet':
                // Google Sheets format - export as Excel for compatibility
                fileData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;

            case 'xlsx':
            default:
                fileData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
        }

        // Calculate actual file size
        let actualSizeBytes = 0;
        if (fileData instanceof ArrayBuffer) {
            actualSizeBytes = fileData.byteLength;
        } else if (fileData instanceof Uint8Array) {
            actualSizeBytes = fileData.length;
        } else if (typeof fileData === 'string') {
            actualSizeBytes = new Blob([fileData]).size;
        } else {
            actualSizeBytes = fileData.length || 0;
        }

        const actualSizeKB = (actualSizeBytes / 1024).toFixed(1);
        const actualSizeMB = (actualSizeBytes / 1024 / 1024).toFixed(2);
        const actualSizeDisplay = actualSizeBytes >= 1024 * 1024 ? `${actualSizeMB}MB` : `${actualSizeKB}KB`;

        this.splitFiles.push({
            name: fileName,
            data: fileData,
            format: format,
            size: actualSizeBytes,
            mimeType: mimeType,
            info: `Target: ${maxSize}${unit}, Actual: ${actualSizeDisplay} (${rowCount} rows)`
        });
    }

    getFileExtension(format) {
        switch (format) {
            case 'csv': return 'csv';
            case 'ods': return 'ods';
            case 'gsheet': return 'xlsx'; // Google Sheets exported as Excel
            case 'xlsx':
            default: return 'xlsx';
        }
    }

    async createExcelFile(data, prefix, fileIndex, maxSize, unit, rowCount, namingScheme) {
        const newWorkbook = XLSX.utils.book_new();
        const newWorksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

        const fileName = this.generateFileName(prefix, fileIndex, maxSize, unit, rowCount, namingScheme, 'xlsx');
        const fileData = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });

        // Calculate actual file size properly
        let actualSizeBytes = 0;
        if (fileData instanceof ArrayBuffer) {
            actualSizeBytes = fileData.byteLength;
        } else if (fileData instanceof Uint8Array) {
            actualSizeBytes = fileData.length;
        } else if (Array.isArray(fileData)) {
            actualSizeBytes = fileData.length;
        } else {
            actualSizeBytes = new Blob([fileData]).size;
        }

        const actualSizeKB = (actualSizeBytes / 1024).toFixed(1);
        const actualSizeMB = (actualSizeBytes / 1024 / 1024).toFixed(2);

        // Format size display based on size
        const actualSizeDisplay = actualSizeBytes >= 1024 * 1024 ? `${actualSizeMB}MB` : `${actualSizeKB}KB`;

        this.splitFiles.push({
            name: fileName,
            data: fileData,
            format: 'xlsx',
            size: actualSizeBytes,
            info: `Target: ${maxSize}${unit}, Actual: ${actualSizeDisplay} (${rowCount} rows)`
        });
    }

    async createCSVFile(data, prefix, fileIndex, maxSize, unit, rowCount, namingScheme) {
        const csvContent = data.map(row =>
            row.map(cell => {
                const cellStr = String(cell || '');
                // Escape quotes and wrap in quotes if contains comma, quote, or newline
                if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
                    return '"' + cellStr.replace(/"/g, '""') + '"';
                }
                return cellStr;
            }).join(',')
        ).join('\n');

        const fileName = this.generateFileName(prefix, fileIndex, maxSize, unit, rowCount, namingScheme, 'csv');
        const fileData = new TextEncoder().encode(csvContent);

        // Calculate actual file size properly
        let actualSizeBytes = 0;
        if (fileData instanceof ArrayBuffer) {
            actualSizeBytes = fileData.byteLength;
        } else if (fileData instanceof Uint8Array) {
            actualSizeBytes = fileData.length;
        } else if (typeof fileData === 'string') {
            actualSizeBytes = new Blob([fileData]).size;
        } else {
            actualSizeBytes = fileData.length || 0;
        }

        const actualSizeKB = (actualSizeBytes / 1024).toFixed(1);
        const actualSizeMB = (actualSizeBytes / 1024 / 1024).toFixed(2);

        // Format size display based on size
        const actualSizeDisplay = actualSizeBytes >= 1024 * 1024 ? `${actualSizeMB}MB` : `${actualSizeKB}KB`;

        this.splitFiles.push({
            name: fileName,
            data: fileData,
            format: 'csv',
            size: actualSizeBytes,
            info: `Target: ${maxSize}${unit}, Actual: ${actualSizeDisplay} (${rowCount} rows)`
        });
    }

    generateFileName(prefix, fileIndex, maxSize, unit, rowCount, namingScheme, extension) {
        if (namingScheme === 'descriptive') {
            return `${prefix}_${maxSize}${unit}_${rowCount}rows_part${fileIndex}.${extension}`;
        } else {
            return `${prefix}_part${fileIndex}.${extension}`;
        }
    }

    createFileSizeFile(chunk, headers, includeHeaders, prefix, fileIndex, maxSize, unit) {
        // Legacy method for backward compatibility
        return this.createFileSizeFileAsync(chunk, headers, includeHeaders, prefix, fileIndex, maxSize, unit);
    }

    sanitizeFileName(name) {
        return name.toString().replace(/[^a-z0-9]/gi, '_').toLowerCase();
    }

    showResults() {
        // Update processing summary
        this.updateProcessingSummary();

        // Show summary and controls
        document.getElementById('processingSummary').style.display = 'block';
        document.getElementById('resultsControls').style.display = 'flex';

        // Update results list
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = '';

        this.splitFiles.forEach((file, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const formatBadge = file.format ? `<span class="format-badge ${file.format}">${file.format.toUpperCase()}</span>` : '';

            resultItem.innerHTML = `
                <div class="result-info">
                    <div class="result-name">${file.name} ${formatBadge}</div>
                    <div class="result-details">${file.info}</div>
                </div>
                <button class="download-button" onclick="app.downloadFile(${index})">
                    Download
                </button>
            `;
            resultsList.appendChild(resultItem);
        });

        const splitCompleteMsg = `${this.languageManager.t('splitComplete')} ${this.splitFiles.length} ${this.languageManager.t('filesCreated')}`;
        this.updateContentStatus(splitCompleteMsg);

        // Show completion notification
        setTimeout(() => {
            this.showCompletionNotification();
        }, 500); // Small delay to let the UI update
    }

    updateProcessingSummary() {
        const processingTime = this.processingStartTime ?
            ((Date.now() - this.processingStartTime) / 1000).toFixed(1) : '0';

        let totalSize = 0;
        this.splitFiles.forEach(file => {
            if (file.size) {
                // Use the stored size property
                totalSize += file.size;
            } else if (file.data) {
                // Fallback to calculating from data
                if (file.data instanceof ArrayBuffer) {
                    totalSize += file.data.byteLength;
                } else if (file.data instanceof Uint8Array) {
                    totalSize += file.data.length;
                } else if (typeof file.data === 'string') {
                    totalSize += new Blob([file.data]).size;
                } else {
                    totalSize += file.data.length || 0;
                }
            }
        });

        const totalSizeMB = totalSize > 0 ? (totalSize / 1024 / 1024).toFixed(2) : '0.00';
        const avgSizeMB = this.splitFiles.length > 0 && totalSize > 0 ?
            (totalSize / this.splitFiles.length / 1024 / 1024).toFixed(2) : '0.00';

        document.getElementById('filesCreatedCount').textContent = this.splitFiles.length;
        document.getElementById('totalSizeValue').textContent = `${totalSizeMB} MB`;
        document.getElementById('processingTimeValue').textContent = this.formatTime(parseInt(processingTime));
        document.getElementById('avgFileSizeValue').textContent = `${avgSizeMB} MB`;
    }

    showPreview() {
        const previewContent = document.getElementById('previewContent');

        let previewHTML = `
            <div class="preview-summary">
                <h3>Split Results Summary</h3>
                <p><strong>Total Files:</strong> ${this.splitFiles.length}</p>
                <p><strong>Processing Time:</strong> ${this.formatTime(parseInt((Date.now() - this.processingStartTime) / 1000))}</p>
            </div>

            <table class="preview-table">
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Format</th>
                        <th>Size</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.splitFiles.forEach(file => {
            let sizeDisplay = 'Unknown';

            if (file.size) {
                // Use the stored size property
                const sizeKB = (file.size / 1024).toFixed(1);
                const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                sizeDisplay = file.size >= 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`;
            } else if (file.data) {
                // Fallback to calculating from data
                let dataSize = 0;
                if (file.data instanceof ArrayBuffer) {
                    dataSize = file.data.byteLength;
                } else if (file.data instanceof Uint8Array) {
                    dataSize = file.data.length;
                } else if (typeof file.data === 'string') {
                    dataSize = new Blob([file.data]).size;
                } else {
                    dataSize = file.data.length || 0;
                }
                const sizeKB = (dataSize / 1024).toFixed(1);
                const sizeMB = (dataSize / 1024 / 1024).toFixed(2);
                sizeDisplay = dataSize >= 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`;
            }

            const format = file.format || 'xlsx';

            previewHTML += `
                <tr>
                    <td>${file.name}</td>
                    <td><span class="format-badge ${format}">${format.toUpperCase()}</span></td>
                    <td>${sizeDisplay}</td>
                    <td>${file.info}</td>
                </tr>
            `;
        });

        previewHTML += `
                </tbody>
            </table>
        `;

        previewContent.innerHTML = previewHTML;
        document.getElementById('previewModal').style.display = 'block';

        // Add close functionality
        const closeBtn = document.querySelector('#previewModal .close-button');
        closeBtn.onclick = () => {
            document.getElementById('previewModal').style.display = 'none';
        };

        window.onclick = (event) => {
            const modal = document.getElementById('previewModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    downloadFile(index) {
        const file = this.splitFiles[index];

        if (!file) {
            alert('File not found. Please refresh and try again.');
            return;
        }

        try {
            let mimeType = file.mimeType;

            // Enhanced MIME type detection
            if (!mimeType) {
                switch (file.format) {
                    case 'csv':
                        mimeType = 'text/csv';
                        break;
                    case 'ods':
                        mimeType = 'application/vnd.oasis.opendocument.spreadsheet';
                        break;
                    case 'xls':
                        mimeType = 'application/vnd.ms-excel';
                        break;
                    case 'gsheet':
                    case 'xlsx':
                    default:
                        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                        break;
                }
            }

            // Create blob and trigger download
            const blob = new Blob([file.data], { type: mimeType });
            saveAs(blob, file.name);

            // Track download analytics
            this.trackDownloadAnalytics('individual', 1, this.formatFileSize(blob.size));

            // Log download for analytics
            console.log('📥 Individual file downloaded:', {
                fileName: file.name,
                fileSize: blob.size,
                mimeType: mimeType,
                fileFormat: file.format,
                timestamp: new Date().toISOString()
            });

            // Show brief success notification
            this.showBriefNotification(`✅ Downloaded: ${file.name}`);

        } catch (error) {
            console.error('Download error:', error);
            alert('Error downloading file: ' + error.message);
        }
    }

    showBriefNotification(message) {
        // Show a brief notification that auto-dismisses
        const notification = document.createElement('div');
        notification.className = 'brief-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            font-weight: 500;
            font-size: 0.9rem;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    async downloadAllFiles() {
        if (this.splitFiles.length === 0) return;
        
        const zip = new JSZip();
        
        this.splitFiles.forEach(file => {
            zip.file(file.name, file.data);
        });
        
        try {
            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, `${this.fileName}_split_files.zip`);
        } catch (error) {
            alert('Error creating ZIP file: ' + error.message);
        }
    }

    clearFile() {
        // Clear file without confirmation for seamless upload experience
        this.performClear();
    }

    clearFileWithConfirmation() {
        // Show confirmation dialog (for manual clear button)
        if (confirm('Are you sure you want to clear the current file? This will remove all uploaded data and reset the form.')) {
            this.performClear();

            // Show success feedback
            this.showClearFeedback();
        }
    }

    performClear() {
        // Clear workbook data
        this.workbook = null;
        this.fileName = '';
        this.splitFiles = [];
        this.fileSize = 0;
        this.estimatedDuration = 0;
        this.totalRows = 0;
        this.lastProgressUpdate = 0;
        this.processingSpeedSamples = [];

        // Reset file input
        document.getElementById('fileInput').value = '';

        // Hide file info and actions
        document.getElementById('fileInfo').classList.remove('show');
        document.getElementById('fileActions').style.display = 'none';

        // Hide sections
        document.getElementById('optionsSection').style.display = 'none';
        document.getElementById('outputSection').style.display = 'none';
        document.getElementById('processingSummary').style.display = 'none';
        document.getElementById('resultsControls').style.display = 'none';
        document.getElementById('headerProgress').style.display = 'none';

        // Clear form data
        this.clearFormData();

        // Reset split method display
        this.handleSplitMethodChange();

        // Update content status
        this.updateContentStatus('Upload a file to begin splitting', 'uploadFileToBegin');

        // Clear results list
        document.getElementById('resultsList').innerHTML = '';
    }

    clearFormData() {
        // Reset radio buttons
        document.querySelector('input[name="splitMethod"][value="bySheet"]').checked = true;

        // Clear text inputs
        document.getElementById('outputPrefix').value = '';
        document.getElementById('rowsPerFile').value = '1000';
        document.getElementById('maxFileSize').value = '10';

        // Reset select elements
        document.getElementById('fileSizeUnit').value = 'MB';

        // Reset checkboxes
        document.getElementById('includeHeadersCheck').checked = true;
        document.getElementById('includeHeadersRowCheck').checked = true;
        document.getElementById('includeHeadersSizeCheck').checked = true;

        // Clear sheet list
        document.getElementById('sheetList').innerHTML = '';

        // Clear column select
        const columnSelect = document.getElementById('columnSelect');
        columnSelect.innerHTML = '<option value="">Select a column...</option>';
    }

    showClearFeedback() {
        // Create temporary success message
        const dropArea = document.getElementById('dropArea');
        const originalContent = dropArea.innerHTML;

        dropArea.innerHTML = `
            <div class="file-message">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span style="color: #38a169; font-weight: 500;">File cleared successfully!</span>
            </div>
        `;

        // Restore original content after 2 seconds
        setTimeout(() => {
            dropArea.innerHTML = originalContent;
        }, 2000);
    }

    reset() {
        this.performClear();
    }

    // Multi-File Processing Methods
    initializeMultiFileProcessing() {
        // Note: Multi-file upload uses the same upload area as single-file mode
        // The main file input and drop area handle both modes based on this.processingMode
        console.log('Multi-file processing initialized - using shared upload area');

        // Multi-file control buttons
        const addMoreButton = document.getElementById('addMoreFilesButton');
        const clearQueueButton = document.getElementById('clearQueueButton');
        const startBatchButton = document.getElementById('startBatchProcessingButton');
        const cancelBatchButton = document.getElementById('cancelBatchProcessingButton');
        const downloadAllMultiButton = document.getElementById('downloadAllMultiButton');
        const clearMultiResultsButton = document.getElementById('clearMultiResultsButton');

        // Conditional splitting checkbox
        const enableConditionalSplitting = document.getElementById('enableConditionalSplitting');

        if (addMoreButton) {
            addMoreButton.addEventListener('click', () => {
                console.log('Add More Files button clicked - triggering file selection');
                // Use the main file input since multiFileInput doesn't exist
                const fileInput = document.getElementById('fileInput');
                if (fileInput) {
                    // Ensure it's set to multiple for multi-file mode
                    fileInput.multiple = true;
                    console.log('File input found, triggering click with multiple=true');
                    fileInput.click();
                } else {
                    console.error('File input not found for Add More Files button');
                }
            });
        } else {
            console.warn('Add More Files button not found in DOM');
        }

        if (clearQueueButton) {
            clearQueueButton.addEventListener('click', () => {
                this.clearMultiFileQueue();
            });
        }

        if (startBatchButton) {
            startBatchButton.addEventListener('click', () => {
                this.startBatchProcessing();
            });
        }

        if (cancelBatchButton) {
            cancelBatchButton.addEventListener('click', () => {
                this.cancelBatchProcessing();
            });
        }

        if (downloadAllMultiButton) {
            downloadAllMultiButton.addEventListener('click', () => {
                this.downloadAllMultiFiles();
            });
        }

        if (clearMultiResultsButton) {
            clearMultiResultsButton.addEventListener('click', () => {
                this.clearMultiFileResults();
            });
        }

        // Conditional splitting checkbox
        if (enableConditionalSplitting) {
            enableConditionalSplitting.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.conditionalSplitter.show();
                } else {
                    this.conditionalSplitter.hide();
                }
            });
        }

        // Multi-file split method change
        const multiSplitMethodRadios = document.querySelectorAll('input[name="multiSplitMethod"]');
        multiSplitMethodRadios.forEach(radio => {
            radio.addEventListener('change', () => this.handleMultiSplitMethodChange());
        });

        // Initialize multi-file UI state
        this.updateMultiFileUI();
    }



    addFilesToQueue(files) {
        files.forEach(file => {
            const fileItem = {
                id: Date.now() + Math.random(),
                file: file,
                name: file.name,
                size: file.size,
                format: this.getFileFormat(file),
                status: 'queued',
                workbook: null,
                error: null
            };
            this.multiFileQueue.push(fileItem);
        });

        this.updateMultiFileUI();
        this.displayFileQueue();
    }

    displayFileQueue() {
        const queueList = document.getElementById('fileQueueList');
        if (!queueList) return;

        queueList.innerHTML = '';

        this.multiFileQueue.forEach((fileItem, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item';

            const statusClass = fileItem.status === 'error' ? 'error' :
                               fileItem.status === 'processing' ? 'processing' :
                               fileItem.status === 'completed' ? 'completed' : 'queued';

            // Create download button for completed files
            const downloadButton = fileItem.status === 'completed' && fileItem.results && fileItem.results.length > 0 ?
                `<button class="queue-item-download" onclick="app.downloadFileResults(${index})" title="Download results for this file">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span class="download-count">${fileItem.results.length}</span>
                </button>` : '';

            queueItem.innerHTML = `
                <div class="queue-item-info">
                    <div class="queue-item-name">
                        <i class="${this.getFileTypeIcon(fileItem.format)}"></i>
                        ${fileItem.name}
                    </div>
                    <div class="queue-item-details">
                        ${this.getFileTypeDisplayName(fileItem.format)} • ${(fileItem.size / 1024 / 1024).toFixed(2)} MB
                        ${fileItem.status === 'completed' && fileItem.results ? ` • ${fileItem.results.length} files created` : ''}
                    </div>
                    ${fileItem.error ? `<div class="queue-item-error">${fileItem.error}</div>` : ''}
                    ${fileItem.currentStep ? `<div class="queue-item-step">${fileItem.currentStep}</div>` : ''}
                </div>
                <div class="queue-item-actions">
                    <div class="queue-item-status ${statusClass}">
                        ${this.getStatusDisplay(fileItem.status)}
                    </div>
                    ${downloadButton}
                    <button class="queue-item-remove" onclick="app.removeFromQueue(${index})" title="Remove">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `;
            queueList.appendChild(queueItem);
        });
    }

    getStatusDisplay(status) {
        switch (status) {
            case 'queued': return 'Queued';
            case 'processing': return 'Processing...';
            case 'completed': return 'Completed';
            case 'error': return 'Error';
            default: return 'Unknown';
        }
    }

    removeFromQueue(index) {
        if (this.isMultiProcessing) {
            alert('Cannot remove files while processing. Please cancel the batch operation first.');
            return;
        }

        this.multiFileQueue.splice(index, 1);
        this.updateMultiFileUI();
        this.displayFileQueue();
    }

    clearMultiFileQueue() {
        if (this.isMultiProcessing) {
            alert('Cannot clear queue while processing. Please cancel the batch operation first.');
            return;
        }

        this.multiFileQueue = [];
        this.multiFileResults = [];
        this.updateMultiFileUI();
        this.displayFileQueue();
    }

    updateMultiFileUI() {
        const fileQueueSection = document.getElementById('fileQueueSection');
        const multiOptionsSection = document.getElementById('multiOptionsSection');
        const multiResultsSection = document.getElementById('multiResultsSection');

        const hasFiles = this.multiFileQueue.length > 0;
        const hasResults = this.multiFileResults.length > 0;
        const hasCompletedFiles = this.multiFileQueue.some(file => file.status === 'completed');
        const isMultiMode = this.processingMode === 'multi';

        console.log('Multi-file UI update:', {
            isMultiMode,
            hasFiles,
            hasResults,
            hasCompletedFiles,
            queueLength: this.multiFileQueue.length,
            resultsLength: this.multiFileResults.length
        });

        if (fileQueueSection) {
            fileQueueSection.style.display = (isMultiMode && hasFiles) ? 'block' : 'none';
        }

        if (multiResultsSection) {
            // Show results section if we have results OR completed files (even if results not yet displayed)
            multiResultsSection.style.display = (isMultiMode && (hasResults || hasCompletedFiles)) ? 'block' : 'none';
        }

        // Update sidebar options for multi-file mode
        if (multiOptionsSection) {
            multiOptionsSection.style.display = (isMultiMode && hasFiles) ? 'block' : 'none';
        }

        // Update button states
        const startButton = document.getElementById('startBatchProcessingButton');
        const cancelButton = document.getElementById('cancelBatchProcessingButton');
        const downloadAllMultiButton = document.getElementById('downloadAllMultiButton');
        const clearMultiResultsButton = document.getElementById('clearMultiResultsButton');

        // Debug logging
        console.log('Multi-file UI update:', {
            isMultiMode,
            hasFiles,
            hasResults,
            queueLength: this.multiFileQueue.length,
            isProcessing: this.isMultiProcessing,
            startButtonExists: !!startButton
        });

        if (startButton) {
            const shouldEnable = isMultiMode && hasFiles && !this.isMultiProcessing;
            startButton.disabled = !shouldEnable;
            startButton.style.display = (isMultiMode && !this.isMultiProcessing) ? 'block' : 'none';

            // Additional visual feedback
            if (shouldEnable) {
                startButton.classList.remove('disabled');
                startButton.style.opacity = '1';
            } else {
                startButton.classList.add('disabled');
                startButton.style.opacity = '0.6';
            }

            console.log('Start button state:', {
                disabled: startButton.disabled,
                display: startButton.style.display,
                shouldEnable
            });
        } else {
            console.warn('Start batch processing button not found in DOM');
        }

        if (cancelButton) {
            cancelButton.style.display = (isMultiMode && this.isMultiProcessing) ? 'block' : 'none';
        }

        if (downloadAllMultiButton) {
            downloadAllMultiButton.disabled = this.multiFileResults.length === 0;
        }

        if (clearMultiResultsButton) {
            clearMultiResultsButton.disabled = this.multiFileResults.length === 0;
        }

        // Update content status
        const multiContentStatus = document.getElementById('multiContentStatus');
        if (multiContentStatus) {
            if (hasResults) {
                multiContentStatus.textContent = `${this.multiFileResults.length} ${this.languageManager.t('filesCreatedFrom')} ${this.multiFileQueue.length} ${this.languageManager.t('sourceFiles')}`;
            } else if (hasFiles) {
                multiContentStatus.textContent = `${this.multiFileQueue.length} ${this.languageManager.t('filesInQueue')}`;
            } else {
                multiContentStatus.textContent = this.languageManager.t('uploadMultipleFiles');
            }
        }
    }

    handleMultiSplitMethodChange() {
        const selectedMethod = document.querySelector('input[name="multiSplitMethod"]:checked')?.value;

        const rowCountOptions = document.getElementById('multiRowCountOptions');
        const fileSizeOptions = document.getElementById('multiFileSizeOptions');

        if (rowCountOptions) {
            rowCountOptions.style.display = selectedMethod === 'byRowCount' ? 'block' : 'none';
        }

        if (fileSizeOptions) {
            fileSizeOptions.style.display = selectedMethod === 'byFileSize' ? 'block' : 'none';
        }
    }

    async startBatchProcessing() {
        console.log('Starting batch processing...', {
            queueLength: this.multiFileQueue.length,
            processingMode: this.processingMode,
            isMultiProcessing: this.isMultiProcessing
        });

        if (this.multiFileQueue.length === 0) {
            alert('No files in queue to process.');
            return;
        }

        if (this.processingMode !== 'multi') {
            alert('Please switch to Multi-File mode to use batch processing.');
            return;
        }

        if (this.isMultiProcessing) {
            alert('Batch processing is already in progress.');
            return;
        }

        this.isMultiProcessing = true;
        this.multiProcessingStartTime = Date.now();
        this.multiProcessingSpeedSamples = [];
        this.multiLastProgressUpdate = Date.now();

        console.log('Batch processing started successfully');
        this.updateMultiFileUI();
        this.showMultiFileProgress(true);

        try {
            for (let i = 0; i < this.multiFileQueue.length; i++) {
                const fileItem = this.multiFileQueue[i];

                // Update progress display - starting file
                this.updateMultiFileProgress(i + 1, fileItem.name, false);

                fileItem.status = 'processing';
                fileItem.currentStep = 'Loading file...';
                this.displayFileQueue();

                const fileStartTime = Date.now();

                try {
                    // Process the file with detailed status updates
                    await this.processMultiFile(fileItem);
                    fileItem.status = 'completed';
                    fileItem.currentStep = 'Completed';

                    // Calculate processing speed for this file
                    const fileProcessingTime = Date.now() - fileStartTime;
                    this.updateMultiProcessingSpeed(fileProcessingTime, fileItem.name);

                    console.log(`✅ Processed file: ${fileItem.name} in ${this.formatTime(fileProcessingTime / 1000)}`);

                } catch (error) {
                    console.error(`❌ Error processing file ${fileItem.name}:`, error);
                    fileItem.status = 'error';
                    fileItem.error = error.message;
                    fileItem.currentStep = 'Error';
                }

                this.displayFileQueue();

                // Update final progress for this file
                this.updateMultiFileProgress(i + 1, fileItem.name, true);

                // Small delay to allow UI updates
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            this.showMultiFileProgress(false);
            this.showMultiFileCompletionNotification();
            this.displayMultiFileResults();

        } catch (error) {
            this.showMultiFileProgress(false);
            alert('Batch processing failed: ' + error.message);
        } finally {
            this.isMultiProcessing = false;
            this.updateMultiFileUI();
        }
    }

    async processMultiFile(fileItem) {
        return new Promise(async (resolve, reject) => {
            try {
                // Update progress details with enhanced status
                this.setFileProcessingStep(fileItem.name, 'Loading file...');

                // Load the workbook if not already loaded
                if (!fileItem.workbook) {
                    await this.loadMultiFileWorkbook(fileItem);
                }

                if (!fileItem.workbook) {
                    throw new Error('Failed to load workbook');
                }

                // Update progress details
                this.setFileProcessingStep(fileItem.name, 'Analyzing data structure...');

                // Get processing options
                const splitMethod = document.querySelector('input[name="multiSplitMethod"]:checked')?.value || 'bySheet';
                const outputFormat = document.querySelector('input[name="multiOutputFormat"]:checked')?.value || 'xlsx';
                const namingScheme = document.querySelector('input[name="multiNamingScheme"]:checked')?.value || 'descriptive';

                // Create a temporary array to store split files for this file
                const originalSplitFiles = [...this.splitFiles];
                this.splitFiles = []; // Clear to collect only this file's results

                // Set up file prefix
                const prefix = fileItem.name.replace(/\.[^/.]+$/, ""); // Remove extension

                // Update progress details with split method
                const splitMethodName = this.getSplitMethodDisplayName(splitMethod);
                this.setFileProcessingStep(fileItem.name, `Splitting by ${splitMethodName}...`);

                // Process based on split method
                switch (splitMethod) {
                    case 'bySheet':
                        await this.processMultiFileBySheet(fileItem, prefix, outputFormat);
                        break;
                    case 'byRowCount':
                        await this.processMultiFileByRowCount(fileItem, prefix, outputFormat);
                        break;
                    case 'byFileSize':
                        await this.processMultiFileByFileSize(fileItem, prefix, outputFormat);
                        break;
                    default:
                        await this.processMultiFileBySheet(fileItem, prefix, outputFormat);
                        break;
                }

                // Update progress details
                this.setFileProcessingStep(fileItem.name, 'Finalizing output files...');

                // Store results for this file
                fileItem.results = [...this.splitFiles];
                this.multiFileResults.push(...this.splitFiles);

                // Restore original split files and add new ones
                this.splitFiles = [...originalSplitFiles, ...fileItem.results];

                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    updateMultiFileProgressDetails(message) {
        // Use the existing progress details element
        const progressDetails = document.getElementById('progressDetails');
        if (progressDetails) {
            progressDetails.textContent = message;
        }

        // Also log for debugging
        console.log(`Progress: ${message}`);
    }

    async loadMultiFileWorkbook(fileItem) {
        return new Promise((resolve, reject) => {
            const file = fileItem.file;
            const fileFormat = this.getFileFormat(file);

            if (fileFormat === 'csv') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const csvText = e.target.result;
                        const csvData = this.parseCSV(csvText);

                        fileItem.workbook = XLSX.utils.book_new();
                        const worksheet = XLSX.utils.aoa_to_sheet(csvData);
                        XLSX.utils.book_append_sheet(fileItem.workbook, worksheet, 'CSV Data');

                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                };
                reader.onerror = () => reject(new Error('Failed to read CSV file'));
                reader.readAsText(file, 'UTF-8');
            } else {
                // Handle Excel, ODS, and Google Sheets files
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = new Uint8Array(e.target.result);
                        fileItem.workbook = XLSX.read(data, { type: 'array' });
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                };
                reader.onerror = () => reject(new Error(`Failed to read ${this.getFileTypeDisplayName(fileFormat)} file`));
                reader.readAsArrayBuffer(file);
            }
        });
    }

    async processMultiFileBySheet(fileItem, prefix, outputFormat) {
        const workbook = fileItem.workbook;

        // Process all sheets
        workbook.SheetNames.forEach(sheetName => {
            const newWorkbook = XLSX.utils.book_new();
            const worksheet = workbook.Sheets[sheetName];
            XLSX.utils.book_append_sheet(newWorkbook, worksheet, sheetName);

            this.createOutputFiles(newWorkbook, `${prefix}_${sheetName}`, outputFormat, `Sheet: ${sheetName}`);
        });
    }

    async processMultiFileByRowCount(fileItem, prefix, outputFormat) {
        const workbook = fileItem.workbook;
        const rowsPerFile = parseInt(document.getElementById('multiRowsPerFile')?.value) || 1000;
        const includeHeaders = document.getElementById('multiIncludeHeaders')?.checked !== false;

        // Process the first sheet by row count
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) return;

        const headers = jsonData[0];
        const dataRows = jsonData.slice(1);

        let fileIndex = 1;
        for (let i = 0; i < dataRows.length; i += rowsPerFile) {
            const chunk = dataRows.slice(i, i + rowsPerFile);
            const newWorkbook = XLSX.utils.book_new();
            const chunkData = includeHeaders ? [headers, ...chunk] : chunk;
            const newWorksheet = XLSX.utils.aoa_to_sheet(chunkData);

            XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

            this.createOutputFiles(newWorkbook, `${prefix}_part${fileIndex}`, outputFormat,
                `Rows ${i + 1}-${Math.min(i + rowsPerFile, dataRows.length)} (${chunk.length} rows)`);

            fileIndex++;
        }
    }

    async processMultiFileByFileSize(fileItem, prefix, outputFormat) {
        const workbook = fileItem.workbook;
        const maxFileSize = parseFloat(document.getElementById('multiMaxFileSize')?.value) || 5;
        const fileSizeUnit = document.getElementById('multiFileSizeUnit')?.value || 'MB';
        const includeHeaders = document.getElementById('multiIncludeHeadersSize')?.checked !== false;

        // Convert to bytes
        let maxSizeBytes = maxFileSize;
        switch (fileSizeUnit) {
            case 'KB':
                maxSizeBytes *= 1024;
                break;
            case 'MB':
                maxSizeBytes *= 1024 * 1024;
                break;
            case 'GB':
                maxSizeBytes *= 1024 * 1024 * 1024;
                break;
        }

        // Process the first sheet by file size
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) return;

        const headers = jsonData[0];
        const dataRows = jsonData.slice(1);

        let currentChunk = [];
        let fileIndex = 1;
        const headerSize = includeHeaders ? this.estimateRowSize(headers) : 0;

        for (const row of dataRows) {
            const rowSize = this.estimateRowSize(row);
            const currentChunkSize = this.estimateChunkSize(currentChunk) + headerSize;

            if (currentChunk.length > 0 && (currentChunkSize + rowSize) > maxSizeBytes) {
                // Create file with current chunk
                await this.createMultiFileSizeFile(currentChunk, headers, includeHeaders, prefix, fileIndex, maxFileSize, fileSizeUnit, outputFormat);
                fileIndex++;
                currentChunk = [];
            }

            currentChunk.push(row);
        }

        // Create file for remaining rows
        if (currentChunk.length > 0) {
            await this.createMultiFileSizeFile(currentChunk, headers, includeHeaders, prefix, fileIndex, maxFileSize, fileSizeUnit, outputFormat);
        }
    }

    async createMultiFileSizeFile(chunk, headers, includeHeaders, prefix, fileIndex, maxSize, unit, outputFormat) {
        const chunkData = includeHeaders ? [headers, ...chunk] : chunk;
        const newWorkbook = XLSX.utils.book_new();
        const newWorksheet = XLSX.utils.aoa_to_sheet(chunkData);
        XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Data');

        this.createOutputFiles(newWorkbook, `${prefix}_part${fileIndex}`, outputFormat,
            `Target: ${maxSize}${unit} (${chunk.length} rows)`);
    }

    cancelBatchProcessing() {
        this.isMultiProcessing = false;
        this.updateMultiFileUI();
        this.showMultiFileProgress(false);

        // Reset processing status
        this.multiFileQueue.forEach(fileItem => {
            if (fileItem.status === 'processing') {
                fileItem.status = 'queued';
            }
        });

        this.displayFileQueue();
    }

    showMultiFileCompletionNotification() {
        // Play notification sound
        this.playNotificationSound();

        // Calculate comprehensive processing stats
        const totalProcessingTime = this.multiProcessingStartTime ?
            (Date.now() - this.multiProcessingStartTime) / 1000 : 0;
        const totalFiles = this.multiFileResults.length;
        const sourceFiles = this.multiFileQueue.length;
        const processingStats = this.getProcessingStatistics();
        const totalSize = this.calculateMultiFilesTotalSize();

        // Create enhanced completion message
        const formattedTime = this.formatTime(totalProcessingTime);
        const message = `🎉 Batch Processing Completed Successfully!\n\n` +
                       `📊 Processing Summary:\n` +
                       `✅ Source files processed: ${sourceFiles}\n` +
                       `📁 Split files created: ${totalFiles}\n` +
                       `💾 Total output size: ${totalSize}\n` +
                       `⏱️ Total processing time: ${formattedTime}\n` +
                       `📈 Average time per file: ${processingStats.average}\n` +
                       `⚡ Fastest file: ${processingStats.fastest}\n` +
                       `🐌 Slowest file: ${processingStats.slowest}\n\n` +
                       `Your files are ready for download in the results section below.`;

        alert(message);

        // Show enhanced browser notification if permission granted
        if (Notification.permission === 'granted') {
            new Notification('Excel Compartmentalizer - Batch Complete! 🎉', {
                body: `Successfully created ${totalFiles} files from ${sourceFiles} sources in ${formattedTime}`,
                icon: 'favicon.ico',
                tag: 'batch-complete',
                requireInteraction: true
            });
        }

        // Update final progress display
        this.updateMultiFileProgress(sourceFiles, 'All files', true);

        // Scroll to results section
        const resultsSection = document.getElementById('multiResultsSection');
        if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Log completion statistics
        console.log('🎉 Batch processing completed:', {
            sourceFiles,
            totalFiles,
            totalSize,
            processingTime: formattedTime,
            stats: processingStats
        });
    }

    showMultiFileProgress(show) {
        // Use the existing header progress element for multi-file processing
        const headerProgress = document.getElementById('headerProgress');
        if (headerProgress) {
            headerProgress.style.display = show ? 'block' : 'none';
        }

        // Initialize progress for multi-file processing
        if (show) {
            this.initializeMultiFileProgressDisplay();
        }
    }

    initializeMultiFileProgressDisplay() {
        // Reset progress bar
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }

        // Set initial progress text
        const progressText = document.getElementById('progressText');
        if (progressText) {
            progressText.textContent = 'Initializing batch processing...';
        }

        // Set initial time estimate
        const timeEstimate = document.getElementById('timeEstimate');
        if (timeEstimate) {
            timeEstimate.textContent = 'Calculating time estimate...';
        }

        // Set initial progress details
        const progressDetails = document.getElementById('progressDetails');
        if (progressDetails) {
            progressDetails.textContent = 'Preparing to process multiple files...';
        }
    }

    updateMultiFileProgress(currentIndex, fileName, completed = false) {
        const totalFiles = this.multiFileQueue.length;
        const progressPercentage = Math.min((currentIndex / totalFiles) * 100, 100);

        // Update progress bar using existing element
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }

        // Update progress text with enhanced messaging
        const progressText = document.getElementById('progressText');
        if (progressText) {
            if (completed && currentIndex === totalFiles) {
                progressText.textContent = '✅ Batch processing completed successfully';
            } else if (completed) {
                progressText.textContent = `✅ Completed: ${this.truncateFileName(fileName, 25)}`;
            } else {
                progressText.textContent = `🔄 Processing: ${this.truncateFileName(fileName, 25)}`;
            }
        }

        // Update progress details with comprehensive information
        const progressDetails = document.getElementById('progressDetails');
        if (progressDetails) {
            if (completed && currentIndex === totalFiles) {
                const totalTime = this.getMultiProcessingTime();
                const avgTime = this.calculateAverageProcessingTime();
                progressDetails.textContent = `All ${totalFiles} files processed in ${totalTime} • Avg: ${avgTime} per file`;
            } else {
                const fileSize = this.getFileSizeDisplay(fileName);
                progressDetails.textContent = `File ${currentIndex} of ${totalFiles} • ${progressPercentage.toFixed(1)}% complete${fileSize ? ` • ${fileSize}` : ''}`;
            }
        }

        // Update time estimate with enhanced accuracy
        this.updateMultiFileTimeEstimate(currentIndex, totalFiles);

        // Update individual file progress if within a file
        this.updateCurrentFileProgress(fileName);
    }

    truncateFileName(fileName, maxLength) {
        if (fileName.length <= maxLength) return fileName;
        const extension = fileName.split('.').pop();
        const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
        const truncatedName = nameWithoutExt.substring(0, maxLength - extension.length - 4) + '...';
        return `${truncatedName}.${extension}`;
    }

    getFileSizeDisplay(fileName) {
        const fileItem = this.multiFileQueue.find(item => item.name === fileName);
        if (fileItem && fileItem.size) {
            const sizeInMB = (fileItem.size / 1024 / 1024).toFixed(1);
            return `${sizeInMB} MB`;
        }
        return null;
    }

    calculateAverageProcessingTime() {
        if (this.multiProcessingSpeedSamples.length === 0) return '0s';

        const totalTime = this.multiProcessingSpeedSamples.reduce((sum, time) => sum + time, 0);
        const avgTime = totalTime / this.multiProcessingSpeedSamples.length;
        return this.formatTime(avgTime / 1000);
    }

    updateCurrentFileProgress(fileName) {
        // This method can be enhanced to show sub-progress within individual files
        // For now, it provides a hook for future enhancements
        const currentStep = this.getCurrentProcessingStep(fileName);
        if (currentStep) {
            // Could update a secondary progress indicator here
            console.log(`Current step for ${fileName}: ${currentStep}`);
        }
    }

    getCurrentProcessingStep(fileName) {
        // Return the current processing step for the given file
        const fileItem = this.multiFileQueue.find(item => item.name === fileName);
        return fileItem ? fileItem.currentStep : null;
    }

    updateMultiFileProgressWithStatus(currentIndex, fileName, status, completed = false) {
        // Enhanced progress update with detailed status
        const totalFiles = this.multiFileQueue.length;
        const progressPercentage = Math.min((currentIndex / totalFiles) * 100, 100);

        // Update progress bar
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }

        // Update progress text with status
        const progressText = document.getElementById('progressText');
        if (progressText) {
            const truncatedName = this.truncateFileName(fileName, 20);
            if (completed) {
                progressText.textContent = `✅ ${truncatedName}: ${status}`;
            } else {
                progressText.textContent = `🔄 ${truncatedName}: ${status}`;
            }
        }

        // Update detailed progress information
        const progressDetails = document.getElementById('progressDetails');
        if (progressDetails) {
            const fileSize = this.getFileSizeDisplay(fileName);
            const sizeInfo = fileSize ? ` • ${fileSize}` : '';
            progressDetails.textContent = `File ${currentIndex} of ${totalFiles} • ${progressPercentage.toFixed(1)}% complete${sizeInfo} • ${status}`;
        }

        // Update time estimates
        this.updateMultiFileTimeEstimate(currentIndex, totalFiles);
    }

    setFileProcessingStep(fileName, step) {
        // Set the current processing step for a specific file
        const fileItem = this.multiFileQueue.find(item => item.name === fileName);
        if (fileItem) {
            fileItem.currentStep = step;
            this.updateMultiFileProgressDetails(`${step} for ${this.truncateFileName(fileName, 30)}`);
        }
    }

    getSplitMethodDisplayName(method) {
        // Return user-friendly names for split methods
        switch (method) {
            case 'bySheet':
                return 'worksheets';
            case 'byRowCount':
                return 'row count';
            case 'byFileSize':
                return 'file size';
            default:
                return 'worksheets';
        }
    }

    showDownloadProgress(show, message = 'Preparing download...') {
        // Show/hide download progress in the header progress area
        const headerProgress = document.getElementById('headerProgress');
        const progressText = document.getElementById('progressText');
        const progressDetails = document.getElementById('progressDetails');
        const progressFill = document.getElementById('progressFill');
        const timeEstimate = document.getElementById('timeEstimate');

        if (headerProgress) {
            headerProgress.style.display = show ? 'block' : 'none';
        }

        if (show) {
            if (progressText) {
                progressText.textContent = '📦 ' + message;
            }
            if (progressDetails) {
                progressDetails.textContent = 'Please wait while we prepare your files...';
            }
            if (progressFill) {
                progressFill.style.width = '100%';
            }
            if (timeEstimate) {
                timeEstimate.textContent = 'Download in progress...';
            }
        }
    }

    showDownloadCompletionNotification(fileCount, totalSize, filename) {
        // Show completion notification for download
        const message = `📦 Download Complete!\n\n` +
                       `✅ ${fileCount} files downloaded\n` +
                       `💾 Total size: ${totalSize}\n` +
                       `📁 Archive: ${filename}\n\n` +
                       `Files are organized by source file in separate folders.\n` +
                       `Check your Downloads folder for the ZIP archive.`;

        alert(message);

        // Show browser notification if permission granted
        if (Notification.permission === 'granted') {
            new Notification('Excel Compartmentalizer - Download Complete! 📦', {
                body: `${fileCount} files (${totalSize}) downloaded successfully`,
                icon: 'favicon.ico',
                tag: 'download-complete',
                requireInteraction: false
            });
        }

        // Log completion
        console.log('📦 Download completed:', {
            fileCount,
            totalSize,
            filename,
            timestamp: new Date().toISOString()
        });
    }

    updateMultiFileTimeEstimate(currentIndex, totalFiles) {
        const timeEstimate = document.getElementById('timeEstimate');
        if (!timeEstimate) return;

        const now = Date.now();
        const elapsedTime = now - this.multiProcessingStartTime;
        const elapsedSeconds = elapsedTime / 1000;

        if (currentIndex === 0) {
            timeEstimate.textContent = 'Calculating time estimate...';
            return;
        }

        // Enhanced time estimation using multiple factors
        let estimatedRemainingTime = 0;

        if (this.multiProcessingSpeedSamples.length > 0) {
            // Use rolling average of recent processing times for better accuracy
            const recentSamples = this.multiProcessingSpeedSamples.slice(-3); // Last 3 files
            const avgRecentTime = recentSamples.reduce((sum, time) => sum + time, 0) / recentSamples.length;
            const remainingFiles = totalFiles - currentIndex;
            estimatedRemainingTime = (avgRecentTime * remainingFiles) / 1000;
        } else {
            // Fallback to simple average
            const avgTimePerFile = elapsedTime / currentIndex;
            const remainingFiles = totalFiles - currentIndex;
            estimatedRemainingTime = (avgTimePerFile * remainingFiles) / 1000;
        }

        // Apply accuracy adjustment (account for processing variations)
        const accuracyFactor = this.calculateAccuracyFactor(currentIndex, totalFiles);
        estimatedRemainingTime *= accuracyFactor;

        // Format time estimates
        const elapsedFormatted = this.formatTime(elapsedSeconds);
        const remainingFormatted = this.formatTime(estimatedRemainingTime);

        if (currentIndex === totalFiles) {
            timeEstimate.textContent = `✅ Completed in ${elapsedFormatted}`;
        } else {
            const progressPercent = ((currentIndex / totalFiles) * 100).toFixed(0);
            timeEstimate.textContent = `⏱️ ${elapsedFormatted} elapsed • ~${remainingFormatted} remaining (${progressPercent}%)`;
        }
    }

    calculateAccuracyFactor(currentIndex, totalFiles) {
        // Adjust time estimates based on processing progress
        // Early in processing: be more conservative (factor > 1)
        // Later in processing: be more accurate (factor closer to 1)

        const progressRatio = currentIndex / totalFiles;

        if (progressRatio < 0.2) {
            // First 20% - be conservative
            return 1.3;
        } else if (progressRatio < 0.5) {
            // 20-50% - moderate adjustment
            return 1.15;
        } else if (progressRatio < 0.8) {
            // 50-80% - slight adjustment
            return 1.05;
        } else {
            // 80%+ - high accuracy
            return 1.0;
        }
    }

    updateMultiProcessingSpeed(fileProcessingTime, fileName = null) {
        // Keep track of processing speeds for better time estimation
        this.multiProcessingSpeedSamples.push(fileProcessingTime);

        // Keep only the last 5 samples for rolling average
        if (this.multiProcessingSpeedSamples.length > 5) {
            this.multiProcessingSpeedSamples.shift();
        }

        // Log processing speed for debugging and optimization
        if (fileName) {
            const speedInSeconds = fileProcessingTime / 1000;
            console.log(`File "${fileName}" processed in ${this.formatTime(speedInSeconds)}`);
        }

        // Update processing statistics
        this.updateProcessingStatistics(fileProcessingTime);
    }

    updateProcessingStatistics(fileProcessingTime) {
        // Track min, max, and average processing times
        if (!this.processingStats) {
            this.processingStats = {
                min: fileProcessingTime,
                max: fileProcessingTime,
                total: fileProcessingTime,
                count: 1
            };
        } else {
            this.processingStats.min = Math.min(this.processingStats.min, fileProcessingTime);
            this.processingStats.max = Math.max(this.processingStats.max, fileProcessingTime);
            this.processingStats.total += fileProcessingTime;
            this.processingStats.count++;
        }
    }

    getProcessingStatistics() {
        if (!this.processingStats || this.processingStats.count === 0) {
            return {
                average: '0s',
                fastest: '0s',
                slowest: '0s'
            };
        }

        const avgTime = this.processingStats.total / this.processingStats.count;
        return {
            average: this.formatTime(avgTime / 1000),
            fastest: this.formatTime(this.processingStats.min / 1000),
            slowest: this.formatTime(this.processingStats.max / 1000)
        };
    }

    formatTime(seconds) {
        // Handle edge cases
        if (seconds < 0) return '0s';
        if (seconds === 0) return '0s';

        if (seconds < 60) {
            // For times under 1 minute, show seconds with 1 decimal place if under 10s
            if (seconds < 10) {
                return `${seconds.toFixed(1)}s`;
            } else {
                return `${Math.round(seconds)}s`;
            }
        } else if (seconds < 3600) {
            // For times under 1 hour, show mm:ss format
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.round(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        } else {
            // For times over 1 hour, show h:mm format
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return `${hours}:${minutes.toString().padStart(2, '0')}`;
        }
    }

    displayMultiFileResults() {
        const resultsList = document.getElementById('multiResultsList');
        if (!resultsList) return;

        resultsList.innerHTML = '';

        if (this.multiFileResults.length === 0) {
            resultsList.innerHTML = '<p class="no-results">No files have been processed yet.</p>';
            return;
        }

        // Add batch processing summary
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'multi-processing-summary';
        summaryDiv.innerHTML = `
            <div class="summary-grid">
                <div class="summary-card">
                    <span class="summary-label">Source Files</span>
                    <span class="summary-value">${this.multiFileQueue.length}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Files Created</span>
                    <span class="summary-value">${this.multiFileResults.length}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Total Size</span>
                    <span class="summary-value">${this.calculateMultiFilesTotalSize()}</span>
                </div>
                <div class="summary-card">
                    <span class="summary-label">Processing Time</span>
                    <span class="summary-value">${this.getMultiProcessingTime()}</span>
                </div>
            </div>
            <div class="batch-download-section">
                <div class="download-options">
                    <button id="downloadAllMultiBatch" class="primary-button download-all-button" onclick="app.downloadAllMultiFiles()">
                        <i class="fas fa-download"></i>
                        Download All Files (ZIP)
                    </button>
                    <button id="clearResultsAfterDownload" class="secondary-button clear-after-download" onclick="app.clearMultiFileResults()">
                        <i class="fas fa-trash-alt"></i>
                        Clear Results
                    </button>
                </div>
                <div class="download-info">
                    <p class="download-note">
                        <i class="fas fa-info-circle"></i>
                        Download all ${this.multiFileResults.length} files (${this.calculateMultiFilesTotalSize()}) as an organized ZIP archive
                    </p>
                    <p class="download-details">Files will be grouped by source file in separate folders with processing summary included</p>
                </div>
            </div>
        `;
        resultsList.appendChild(summaryDiv);

        // Group results by original file
        const groupedResults = {};
        this.multiFileQueue.forEach(fileItem => {
            if (fileItem.results && fileItem.results.length > 0) {
                groupedResults[fileItem.name] = fileItem.results;
            }
        });

        Object.keys(groupedResults).forEach(fileName => {
            const results = groupedResults[fileName];

            // Create file group header
            const fileGroup = document.createElement('div');
            fileGroup.className = 'multi-file-group';

            const fileHeader = document.createElement('div');
            fileHeader.className = 'multi-file-header';
            fileHeader.innerHTML = `
                <h4>${fileName}</h4>
                <span class="file-count">${results.length} files created</span>
            `;
            fileGroup.appendChild(fileHeader);

            // Create results list for this file
            const fileResults = document.createElement('div');
            fileResults.className = 'multi-file-results';

            results.forEach((file, index) => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item multi-result-item';

                const formatBadge = file.format ? `<span class="format-badge ${file.format}">${file.format.toUpperCase()}</span>` : '';
                const globalIndex = this.splitFiles.indexOf(file);

                // Calculate file size for display
                const fileSize = file.data ? this.formatFileSize(file.data.length || file.data.byteLength || 0) : 'Unknown';

                // Get file type icon
                const fileIcon = this.getFileTypeIcon(file.format);

                resultItem.innerHTML = `
                    <div class="result-info">
                        <div class="result-header">
                            <div class="result-name">
                                <i class="${fileIcon}"></i>
                                ${file.name} ${formatBadge}
                            </div>
                            <div class="result-size">${fileSize}</div>
                        </div>
                        <div class="result-details">${file.info}</div>
                        <div class="result-meta">
                            <span class="creation-time">Created: ${new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <div class="result-actions">
                        <button class="download-button primary" onclick="app.downloadFile(${globalIndex})" title="Download this file">
                            <i class="fas fa-download"></i>
                            Download
                        </button>
                    </div>
                `;
                fileResults.appendChild(resultItem);
            });

            fileGroup.appendChild(fileResults);
            resultsList.appendChild(fileGroup);
        });

        // Update multi-file UI to show results
        this.updateMultiFileUI();
    }

    calculateMultiFilesTotalSize() {
        let totalBytes = 0;
        this.multiFileResults.forEach(file => {
            if (file.size) {
                totalBytes += file.size;
            } else if (file.data) {
                totalBytes += file.data.length || file.data.byteLength || 0;
            }
        });

        if (totalBytes >= 1024 * 1024) {
            return `${(totalBytes / 1024 / 1024).toFixed(1)} MB`;
        } else if (totalBytes >= 1024) {
            return `${(totalBytes / 1024).toFixed(1)} KB`;
        } else {
            return `${totalBytes} bytes`;
        }
    }

    getMultiProcessingTime() {
        if (this.multiProcessingStartTime) {
            const processingTime = (Date.now() - this.multiProcessingStartTime) / 1000;
            return this.formatTime(processingTime);
        }
        return '0s';
    }

    getProcessingStatistics() {
        // Calculate processing statistics for batch summary
        const completedFiles = this.multiFileQueue.filter(file => file.status === 'completed');

        if (completedFiles.length === 0) {
            return {
                average: '0s',
                fastest: '0s',
                slowest: '0s'
            };
        }

        // Calculate processing times (mock data since we don't track individual times)
        const totalTime = this.multiProcessingStartTime ?
            (Date.now() - this.multiProcessingStartTime) / 1000 : 0;

        const averageTime = totalTime / completedFiles.length;
        const fastestTime = averageTime * 0.7; // Estimate
        const slowestTime = averageTime * 1.3; // Estimate

        return {
            average: this.formatTime(averageTime),
            fastest: this.formatTime(fastestTime),
            slowest: this.formatTime(slowestTime)
        };
    }

    calculateMultiFilesTotalSize() {
        // Calculate total size of all multi-file results
        let totalBytes = 0;

        this.multiFileResults.forEach(file => {
            if (file.data) {
                totalBytes += file.data.length || file.data.byteLength || 0;
            }
        });

        return this.formatFileSize(totalBytes);
    }

    async downloadAllMultiFiles() {
        if (this.multiFileResults.length === 0) {
            alert('No files to download. Please process some files first.');
            return;
        }

        // Show download preparation message
        this.showDownloadProgress(true, 'Preparing download...');

        try {
            // Calculate total size for user information
            const totalSize = this.calculateMultiFilesTotalSize();
            const fileCount = this.multiFileResults.length;

            // Confirm download with user
            const confirmMessage = `📦 Batch Download Confirmation\n\n` +
                                 `Files to download: ${fileCount}\n` +
                                 `Total size: ${totalSize}\n` +
                                 `Organization: Grouped by source file\n\n` +
                                 `Continue with download?`;

            if (!confirm(confirmMessage)) {
                this.showDownloadProgress(false);
                return;
            }

            // Create organized ZIP structure
            const zip = new JSZip();

            // Add batch processing summary
            const summaryData = this.generateBatchSummary();
            zip.file('BATCH_PROCESSING_SUMMARY.txt', summaryData);

            // Group files by original source file
            const groupedFiles = this.groupFilesBySource();

            // Add files to ZIP with organized folder structure
            Object.keys(groupedFiles).forEach(sourceFileName => {
                const files = groupedFiles[sourceFileName];
                const folderName = this.sanitizeFileName(sourceFileName.replace(/\.[^/.]+$/, ''));

                files.forEach(file => {
                    const filePath = `${folderName}/${file.name}`;
                    zip.file(filePath, file.data);
                });
            });

            // Update progress
            this.showDownloadProgress(true, 'Creating ZIP archive...');

            // Generate ZIP with progress tracking
            const content = await zip.generateAsync({
                type: 'blob',
                compression: 'DEFLATE',
                compressionOptions: { level: 6 }
            }, (metadata) => {
                const progress = Math.round(metadata.percent);
                this.showDownloadProgress(true, `Creating ZIP archive... ${progress}%`);
            });

            // Create download filename with timestamp
            const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
            const filename = `Excel_Compartmentalizer_Batch_${timestamp}.zip`;

            // Update progress
            this.showDownloadProgress(true, 'Starting download...');

            // Trigger download
            saveAs(content, filename);

            // Track download analytics
            this.trackDownloadAnalytics('batch', fileCount, totalSize);

            // Show completion notification
            this.showDownloadCompletionNotification(fileCount, totalSize, filename);

        } catch (error) {
            console.error('Download error:', error);
            alert('Error creating download: ' + error.message);
        } finally {
            // Hide progress after a delay
            setTimeout(() => this.showDownloadProgress(false), 2000);
        }
    }

    groupFilesBySource() {
        // Group multi-file results by their original source file
        const grouped = {};

        this.multiFileQueue.forEach(fileItem => {
            if (fileItem.results && fileItem.results.length > 0) {
                grouped[fileItem.name] = fileItem.results;
            }
        });

        return grouped;
    }

    generateBatchSummary() {
        // Generate a comprehensive summary of the batch processing
        const processingStats = this.getProcessingStatistics();
        const totalSize = this.calculateMultiFilesTotalSize();
        const processingTime = this.getMultiProcessingTime();
        const timestamp = new Date().toISOString();

        const summary = `EXCEL COMPARTMENTALIZER - BATCH PROCESSING SUMMARY
Generated: ${timestamp}
========================================================

PROCESSING OVERVIEW:
- Source files processed: ${this.multiFileQueue.length}
- Split files created: ${this.multiFileResults.length}
- Total output size: ${totalSize}
- Processing time: ${processingTime}
- Average time per file: ${processingStats.average}
- Fastest file: ${processingStats.fastest}
- Slowest file: ${processingStats.slowest}

FILE BREAKDOWN:
${this.generateFileBreakdown()}

PROCESSING METHODS USED:
${this.generateProcessingMethodsSummary()}

========================================================
Excel Compartmentalizer - Professional File Processing
Visit: https://github.com/your-repo for updates
`;

        return summary;
    }

    generateFileBreakdown() {
        // Generate detailed breakdown of processed files
        let breakdown = '';

        this.multiFileQueue.forEach((fileItem, index) => {
            const fileSize = fileItem.size ? `(${(fileItem.size / 1024 / 1024).toFixed(2)} MB)` : '';
            const resultCount = fileItem.results ? fileItem.results.length : 0;

            breakdown += `${index + 1}. ${fileItem.name} ${fileSize}\n`;
            breakdown += `   Status: ${fileItem.status}\n`;
            breakdown += `   Files created: ${resultCount}\n`;

            if (fileItem.results && fileItem.results.length > 0) {
                fileItem.results.forEach((result, resultIndex) => {
                    breakdown += `   - ${result.name} (${result.info})\n`;
                });
            }

            breakdown += '\n';
        });

        return breakdown;
    }

    generateProcessingMethodsSummary() {
        // Summarize the processing methods used
        const methods = new Set();

        this.multiFileQueue.forEach(fileItem => {
            if (fileItem.results && fileItem.results.length > 0) {
                // Determine method based on file info
                const firstResult = fileItem.results[0];
                if (firstResult.info.includes('Sheet:')) {
                    methods.add('Split by Worksheets');
                } else if (firstResult.info.includes('Rows')) {
                    methods.add('Split by Row Count');
                } else if (firstResult.info.includes('Target:')) {
                    methods.add('Split by File Size');
                }
            }
        });

        return Array.from(methods).join(', ') || 'Unknown';
    }

    sanitizeFileName(fileName) {
        // Remove or replace invalid characters for file/folder names
        return fileName.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_');
    }

    formatFileSize(bytes) {
        // Format file size in human-readable format
        if (bytes === 0) return '0 B';

        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    getFileTypeIcon(format) {
        // Return appropriate icon class for file format
        switch (format) {
            case 'xlsx':
            case 'xls':
                return 'fas fa-file-excel';
            case 'csv':
                return 'fas fa-file-csv';
            case 'ods':
                return 'fas fa-file-alt';
            case 'gsheet':
                return 'fab fa-google-drive';
            default:
                return 'fas fa-file';
        }
    }

    trackDownloadAnalytics(type, fileCount, totalSize) {
        // Track download analytics for optimization and debugging
        const analytics = {
            type: type, // 'individual' or 'batch'
            fileCount: fileCount,
            totalSize: totalSize,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            browser: this.getBrowserInfo()
        };

        // Store in localStorage for analytics
        try {
            const existingAnalytics = JSON.parse(localStorage.getItem('easySheetsAnalytics') || '[]');
            existingAnalytics.push(analytics);

            // Keep only last 100 entries
            if (existingAnalytics.length > 100) {
                existingAnalytics.splice(0, existingAnalytics.length - 100);
            }

            localStorage.setItem('easySheetsAnalytics', JSON.stringify(existingAnalytics));
        } catch (error) {
            console.warn('Could not store download analytics:', error);
        }

        console.log('📊 Download Analytics:', analytics);
    }

    getBrowserInfo() {
        // Get browser information for compatibility tracking
        const userAgent = navigator.userAgent;

        if (userAgent.includes('Chrome')) {
            return 'Chrome';
        } else if (userAgent.includes('Firefox')) {
            return 'Firefox';
        } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
            return 'Safari';
        } else if (userAgent.includes('Edge')) {
            return 'Edge';
        } else {
            return 'Unknown';
        }
    }

    checkDownloadCompatibility() {
        // Check browser compatibility for downloads
        const compatibility = {
            blob: typeof Blob !== 'undefined',
            saveAs: typeof saveAs !== 'undefined',
            jszip: typeof JSZip !== 'undefined',
            fileReader: typeof FileReader !== 'undefined'
        };

        const isCompatible = Object.values(compatibility).every(Boolean);

        if (!isCompatible) {
            console.warn('Download compatibility issues detected:', compatibility);

            const missingFeatures = Object.entries(compatibility)
                .filter(([key, value]) => !value)
                .map(([key]) => key);

            alert(`Download functionality may not work properly in this browser.\nMissing features: ${missingFeatures.join(', ')}\n\nPlease try using Chrome, Firefox, Safari, or Edge.`);
        }

        return isCompatible;
    }

    async downloadFileResults(queueIndex) {
        const fileItem = this.multiFileQueue[queueIndex];

        if (!fileItem || !fileItem.results || fileItem.results.length === 0) {
            alert('No results available for this file.');
            return;
        }

        console.log('Downloading results for file:', fileItem.name, 'Results count:', fileItem.results.length);

        try {
            if (fileItem.results.length === 1) {
                // Single file - direct download
                const file = fileItem.results[0];
                this.downloadSingleFile(file);

                // Show success notification
                this.showBriefNotification(`✅ Downloaded: ${file.name}`);
            } else {
                // Multiple files - create ZIP
                this.showDownloadProgress(true, 'Preparing download...');

                const zip = new JSZip();
                const sourceFileName = fileItem.name.replace(/\.[^/.]+$/, '');

                // Add all result files to ZIP
                fileItem.results.forEach(file => {
                    zip.file(file.name, file.data);
                });

                // Add summary file
                const summaryData = this.generateSingleFileSummary(fileItem);
                zip.file(`${sourceFileName}_SUMMARY.txt`, summaryData);

                this.showDownloadProgress(true, 'Creating ZIP archive...');

                // Generate ZIP
                const content = await zip.generateAsync({
                    type: 'blob',
                    compression: 'DEFLATE',
                    compressionOptions: { level: 6 }
                }, (metadata) => {
                    const progress = Math.round(metadata.percent);
                    this.showDownloadProgress(true, `Creating ZIP... ${progress}%`);
                });

                // Create filename with timestamp
                const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
                const filename = `${sourceFileName}_Results_${timestamp}.zip`;

                this.showDownloadProgress(true, 'Starting download...');

                // Download ZIP
                saveAs(content, filename);

                // Show success notification
                const totalSize = this.calculateFileItemSize(fileItem);
                this.showBriefNotification(`✅ Downloaded: ${fileItem.results.length} files (${totalSize})`);

                // Track analytics
                this.trackDownloadAnalytics('individual_batch', fileItem.results.length, totalSize);
            }
        } catch (error) {
            console.error('Error downloading file results:', error);
            alert('Error downloading files: ' + error.message);
        } finally {
            setTimeout(() => this.showDownloadProgress(false), 2000);
        }
    }

    downloadSingleFile(file) {
        try {
            // Create blob and download
            const blob = new Blob([file.data], {
                type: this.getMimeType(file.format)
            });

            saveAs(blob, file.name);

            // Track analytics
            const fileSize = this.formatFileSize(file.data.length || file.data.byteLength || 0);
            this.trackDownloadAnalytics('individual_single', 1, fileSize);

        } catch (error) {
            console.error('Error downloading single file:', error);
            alert('Error downloading file: ' + error.message);
        }
    }

    generateSingleFileSummary(fileItem) {
        const timestamp = new Date().toISOString();
        const totalSize = this.calculateFileItemSize(fileItem);

        const summary = `EXCEL COMPARTMENTALIZER - FILE PROCESSING SUMMARY
Generated: ${timestamp}
========================================================

SOURCE FILE:
- Name: ${fileItem.name}
- Size: ${(fileItem.size / 1024 / 1024).toFixed(2)} MB
- Format: ${this.getFileTypeDisplayName(fileItem.format)}
- Status: ${fileItem.status}

PROCESSING RESULTS:
- Files created: ${fileItem.results.length}
- Total output size: ${totalSize}
- Processing method: ${this.getProcessingMethodFromResults(fileItem.results)}

FILE BREAKDOWN:
${fileItem.results.map((file, index) =>
    `${index + 1}. ${file.name} (${file.info})`
).join('\n')}

========================================================
Excel Compartmentalizer - Professional File Processing
`;

        return summary;
    }

    calculateFileItemSize(fileItem) {
        let totalBytes = 0;
        if (fileItem.results) {
            fileItem.results.forEach(file => {
                if (file.data) {
                    totalBytes += file.data.length || file.data.byteLength || 0;
                }
            });
        }
        return this.formatFileSize(totalBytes);
    }

    getProcessingMethodFromResults(results) {
        if (!results || results.length === 0) return 'Unknown';

        const firstResult = results[0];
        if (firstResult.info.includes('Sheet:')) {
            return 'Split by Worksheets';
        } else if (firstResult.info.includes('Rows')) {
            return 'Split by Row Count';
        } else if (firstResult.info.includes('Target:')) {
            return 'Split by File Size';
        }
        return 'Custom Processing';
    }

    getMimeType(format) {
        switch (format) {
            case 'xlsx':
                return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            case 'xls':
                return 'application/vnd.ms-excel';
            case 'csv':
                return 'text/csv';
            case 'ods':
                return 'application/vnd.oasis.opendocument.spreadsheet';
            default:
                return 'application/octet-stream';
        }
    }

    clearMultiFileResults() {
        if (confirm('Are you sure you want to clear all batch processing results?')) {
            this.multiFileResults = [];
            this.multiFileQueue.forEach(fileItem => {
                fileItem.results = [];
                fileItem.status = 'queued';
            });

            // Remove multi-file results from main split files array
            this.splitFiles = this.splitFiles.filter(file =>
                !this.multiFileResults.includes(file)
            );

            this.displayMultiFileResults();
            this.displayFileQueue();
            this.updateMultiFileUI();

            // Show success notification
            this.showBriefNotification('✅ All results cleared');
        }
    }



    // Processing Mode Management
    initializeProcessingModes() {
        // Initialize with single file mode
        this.handleModeChange('single');
    }

    handleModeChange(mode) {
        this.processingMode = mode;

        // Update file input to handle multiple files for multi-file mode
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.multiple = (mode === 'multi');
        }

        // Update upload text
        this.updateUploadText();

        // Update sidebar sections visibility
        this.updateSidebarForMode(mode);

        // Update main content
        this.updateMainContentForMode(mode);

        // Update multi-file UI if switching to multi mode
        if (mode === 'multi') {
            this.updateMultiFileUI();
        }

        // Note: Removed automatic clearing when switching modes to allow seamless uploads
        // Users can manually clear data using the clear buttons if needed
    }

    updateUploadText() {
        const uploadText = document.getElementById('uploadText');
        if (uploadText) {
            if (this.processingMode === 'multi') {
                uploadText.textContent = this.languageManager.t('dropMultipleFiles');
            } else {
                uploadText.textContent = this.languageManager.t('dropOrClick');
            }
        }

        const uploadIndicatorText = document.getElementById('uploadIndicatorText');
        if (uploadIndicatorText) {
            if (this.processingMode === 'multi') {
                uploadIndicatorText.textContent = 'Loading files...';
            } else {
                uploadIndicatorText.textContent = 'Reading...';
            }
        }
    }

    updateSidebarForMode(mode) {
        const optionsSection = document.getElementById('optionsSection');
        const outputSection = document.getElementById('outputSection');
        const multiOptionsSection = document.getElementById('multiOptionsSection');

        if (mode === 'single') {
            // Show single file sections when file is loaded
            if (optionsSection) optionsSection.style.display = this.workbook ? 'block' : 'none';
            if (outputSection) outputSection.style.display = this.workbook ? 'block' : 'none';

            // Hide multi-file sections
            if (multiOptionsSection) multiOptionsSection.style.display = 'none';
        } else if (mode === 'multi') {
            // Hide single file sections
            if (optionsSection) optionsSection.style.display = 'none';
            if (outputSection) outputSection.style.display = 'none';

            // Show multi-file sections when files are loaded
            if (multiOptionsSection) multiOptionsSection.style.display = this.multiFileQueue.length > 0 ? 'block' : 'none';
        }
    }

    updateMainContentForMode(mode) {
        const contentTitle = document.getElementById('contentTitle');
        const contentStatus = document.getElementById('contentStatus');

        if (contentTitle) {
            contentTitle.textContent = mode === 'multi' ? this.languageManager.t('batchProcessingResults') : this.languageManager.t('splitResults');
        }

        if (contentStatus) {
            if (mode === 'multi') {
                contentStatus.textContent = this.multiFileQueue.length > 0 ?
                    `${this.multiFileQueue.length} ${this.languageManager.t('filesInQueue')}` :
                    this.languageManager.t('uploadMultipleFiles');
            } else {
                contentStatus.textContent = this.workbook ?
                    this.languageManager.t('fileLoadedConfigure') :
                    this.languageManager.t('uploadFileToBegin');
            }
        }
    }
}

// Function to open donation modal
function openDonationWindow() {
    // Get the language manager from the global app instance
    const app = window.easySheetsApp;
    const langManager = app ? app.languageManager : null;

    // Create modal if it doesn't exist
    let modal = document.getElementById('donationModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'donationModal';
        modal.className = 'modal donation-modal';
        document.body.appendChild(modal);
    }

    // Get current language info
    const currentLang = langManager ? langManager.currentLanguage : 'en';
    const supportedLanguages = langManager ? langManager.supportedLanguages : {
        'en': { name: 'English', flag: '🇺🇸', nativeName: 'English' }
    };

    const donationHTML = `
        <div class="modal-content donation-modal-content">
            <div class="modal-header">
                <div class="modal-header-left">
                    <h2>💝 <span data-translate="supportTitle">Support Development</span></h2>
                </div>
                <div class="modal-header-right">
                    <div class="modal-language-dropdown">
                        <button class="modal-language-button" id="donationLanguageButton">
                            <span class="language-flag">${supportedLanguages[currentLang].flag}</span>
                            <span class="language-name">${supportedLanguages[currentLang].nativeName}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="language-menu" id="donationLanguageMenu">
                            ${Object.entries(supportedLanguages).map(([code, lang]) => `
                                <div class="language-option ${code === currentLang ? 'active' : ''}" data-lang="${code}">
                                    <span class="language-flag">${lang.flag}</span>
                                    <span class="language-name">${lang.nativeName}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <span class="close-button" onclick="closeDonationModal()">&times;</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="donation-content">
                    <div class="header-description">
                        <p data-translate="supportDescription">Help keep this tool free, fast, and ad-free for everyone</p>
                    </div>

                    <div class="primary-section">
                        <div class="primary-section-content">
                            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px;">
                                <i class="fas fa-shield-alt" style="color: #bfdbfe; font-size: 1.2rem;"></i>
                                <h3 style="margin: 0; font-size: 1.2rem; font-weight: 700;" data-translate="supportHeroTitle">Help Keep This Excel Processing Tool Free</h3>
                            </div>
                            <p style="margin-bottom: 20px; font-size: 0.95rem; line-height: 1.6; color: #bfdbfe;" data-translate="supportHeroDesc">This Excel Compartmentalizer is developed and maintained by professionals for the community. Your support helps us continue improving this free resource with new features, better performance, and enhanced functionality for Excel processing operations.</p>

                            <div class="feature-grid">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="fas fa-code"></i>
                                    </div>
                                    <h4 data-translate="continuousDevelopment">Continuous Development</h4>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="fas fa-server"></i>
                                    </div>
                                    <h4 data-translate="serverCosts">Server & Processing Costs</h4>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <h4 data-translate="communitySupport">Community Support</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="payment-columns">
                        <div class="payment-section">
                            <h3>
                                <i class="fas fa-credit-card" style="color: #10b981;"></i>
                                <span data-translate="creditDebitCard">Credit/Debit Card</span>
                            </h3>
                            <p data-translate="securePayment">Secure payment processing via PayPal</p>

                            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                <input type="hidden" name="hosted_button_id" value="AJAY9AFD52PZA" />
                                <button type="submit" class="paypal-section-button">
                                    <i class="fab fa-paypal"></i>
                                    <span data-translate="donateWithPayPal">Donate with PayPal</span>
                                </button>
                            </form>

                            <div class="payment-methods-info">
                                <p style="margin-bottom: 12px;" data-translate="acceptedPaymentMethods">Accepted Payment Methods:</p>
                                <div class="payment-badges">
                                    <div class="payment-badge visa">VISA</div>
                                    <div class="payment-badge mc">MC</div>
                                    <div class="payment-badge amex">AMEX</div>
                                    <div class="payment-badge disc">DISC</div>
                                    <div class="payment-badge paypal">PayPal</div>
                                </div>
                            </div>

                            <div class="qr-section">
                                <p data-translate="scanPayPalQR">Or scan PayPal QR code:</p>
                                <img src="PayPal_QR.png" alt="PayPal Donation QR Code" class="qr-image">
                                <p class="qr-caption" data-translate="scanWithMobile">Scan with mobile device</p>
                            </div>

                            <div class="security-note">
                                <i class="fas fa-shield-alt"></i>
                                <span data-translate="secureSSL">Secure SSL encrypted transactions</span>
                            </div>

                            <div class="feedback-section">
                                <h3 data-translate="questionsOrFeedback">Questions or Feedback?</h3>
                                <p data-translate="feedbackDesc">Have ideas for new features or found a bug? We'd love to hear from you!</p>
                                <button class="feedback-button" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSeliZ1KlR0tB-z_XBi6o5bRR5Nu0YyRQdAyYi8UqTNZFu1H-A/viewform?usp=dialog', '_blank')">
                                    <i class="fas fa-external-link-alt"></i>
                                    <span data-translate="sendFeedback">Send Feedback</span>
                                </button>
                            </div>
                        </div>

                        <div class="payment-section">
                            <h3>
                                <i class="fab fa-bitcoin" style="color: #f7931a;"></i>
                                <span data-translate="cryptocurrency">Cryptocurrency</span>
                            </h3>
                            <p data-translate="cryptoDesc">Direct crypto donations - no fees, maximum impact</p>

                            <div class="crypto-card">
                                <div class="crypto-header">
                                    <div class="crypto-name">
                                        <i class="fab fa-bitcoin" style="color: #f7931a;"></i>
                                        <span data-translate="bitcoin">Bitcoin (BTC)</span>
                                    </div>
                                    <button class="copy-btn" onclick="copyToClipboard('38eqZXL2acxCSvm6JmSaP2rijdPWC5fpTK')">
                                        <span data-translate="copy">Copy</span>
                                    </button>
                                </div>
                                <div class="crypto-address" onclick="selectAddress(this)" title="Click to select address">38eqZXL2acxCSvm6JmSaP2rijdPWC5fpTK</div>
                                <div class="crypto-qr">
                                    <img src="BTC_QR.png" alt="Bitcoin QR Code" class="qr-image-small">
                                    <p class="qr-caption-small" data-translate="scanToSend">Scan to send</p>
                                </div>
                            </div>

                            <div class="crypto-card">
                                <div class="crypto-header">
                                    <div class="crypto-name">
                                        <i class="fab fa-ethereum" style="color: #627eea;"></i>
                                        <span data-translate="ethereum">Ethereum (ETH)</span>
                                    </div>
                                    <button class="copy-btn" onclick="copyToClipboard('0xD3348Bb9eB3cFEC613B7c53Bd4f5756bCD8EDfD3')">
                                        <span data-translate="copy">Copy</span>
                                    </button>
                                </div>
                                <div class="crypto-address" onclick="selectAddress(this)" title="Click to select address">0xD3348Bb9eB3cFEC613B7c53Bd4f5756bCD8EDfD3</div>
                                <div class="crypto-qr">
                                    <img src="ETH_QR.png" alt="Ethereum QR Code" class="qr-image-small">
                                    <p class="qr-caption-small" data-translate="scanToSend">Scan to send</p>
                                </div>
                            </div>

                            <div class="crypto-card">
                                <div class="crypto-header">
                                    <div class="crypto-name">
                                        <i class="fas fa-coins" style="color: #9333ea;"></i>
                                        <span data-translate="solana">Solana (SOL)</span>
                                    </div>
                                    <button class="copy-btn" onclick="copyToClipboard('5pwjzhcNHvGfR7uUsmHwDEdgr13rC5raj9d85rs1tmnk')">
                                        <span data-translate="copy">Copy</span>
                                    </button>
                                </div>
                                <div class="crypto-address" onclick="selectAddress(this)" title="Click to select address">5pwjzhcNHvGfR7uUsmHwDEdgr13rC5raj9d85rs1tmnk</div>
                                <div class="crypto-qr">
                                    <img src="SOL_QR.png" alt="Solana QR Code" class="qr-image-small">
                                    <p class="qr-caption-small" data-translate="scanToSend">Scan to send</p>
                                </div>
                            </div>

                            <div class="security-note">
                                <i class="fas fa-info-circle"></i>
                                <span data-translate="verifyAddresses">Always verify addresses before sending</span>
                            </div>
                        </div>
                    </div>

                    <div class="thank-you">
                        <h3>💙 <span data-translate="thankYouTitle">Thank You for Your Support!</span></h3>
                        <p data-translate="thankYouDesc">Every donation, no matter the size, helps us maintain and improve this tool for the community. Your support ensures we can continue providing accurate, up-to-date Excel processing resources, completely free of charge.</p>
                        <div class="professional-note">
                            <i class="fas fa-shield-alt"></i>
                            <span data-translate="developedByProfessionals">Developed by professionals, for professionals</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.innerHTML = donationHTML;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Setup language dropdown functionality
    setupModalLanguageDropdown('donationLanguageButton', 'donationLanguageMenu');

    // Apply current language translations
    if (langManager) {
        langManager.applyLanguage(langManager.currentLanguage);
    }

    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeDonationModal();
        }
    });

    // Add keyboard support for closing with Escape key
    const handleKeyDown = function(e) {
        if (e.key === 'Escape') {
            closeDonationModal();
            document.removeEventListener('keydown', handleKeyDown);
        }
    };
    document.addEventListener('keydown', handleKeyDown);
}

// Function to setup modal language dropdown
function setupModalLanguageDropdown(buttonId, menuId) {
    const languageButton = document.getElementById(buttonId);
    const languageMenu = document.getElementById(menuId);

    if (!languageButton || !languageMenu) return;

    // Toggle dropdown
    languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageMenu.classList.remove('show');
    });

    // Handle language selection
    languageMenu.addEventListener('click', (e) => {
        const option = e.target.closest('.language-option');
        if (option) {
            const selectedLang = option.dataset.lang;
            const app = window.easySheetsApp;
            if (app && app.languageManager) {
                app.languageManager.changeLanguage(selectedLang);
                // Update modal language button
                updateModalLanguageButton(buttonId, selectedLang);
                // Update active state in dropdown
                updateModalLanguageOptions(menuId, selectedLang);
            }
            languageMenu.classList.remove('show');
        }
    });
}

// Function to update modal language button
function updateModalLanguageButton(buttonId, languageCode) {
    const app = window.easySheetsApp;
    if (!app || !app.languageManager) return;

    const languageButton = document.getElementById(buttonId);
    if (languageButton) {
        const flag = languageButton.querySelector('.language-flag');
        const name = languageButton.querySelector('.language-name');

        if (flag) flag.textContent = app.languageManager.supportedLanguages[languageCode].flag;
        if (name) name.textContent = app.languageManager.supportedLanguages[languageCode].nativeName;
    }
}

// Function to update modal language options
function updateModalLanguageOptions(menuId, languageCode) {
    const languageMenu = document.getElementById(menuId);
    if (languageMenu) {
        const options = languageMenu.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === languageCode);
        });
    }
}

// Function to close donation modal
function closeDonationModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Remove keyboard listener
        document.removeEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDonationModal();
            }
        });
    }
}

// Function to open help guide modal
function openHelpGuideModal() {
    // Get the language manager from the global app instance
    const app = window.easySheetsApp;
    const langManager = app ? app.languageManager : null;

    // Create modal if it doesn't exist
    let modal = document.getElementById('helpGuideModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'helpGuideModal';
        modal.className = 'modal help-guide-modal';
        document.body.appendChild(modal);
    }

    // Get current language info
    const currentLang = langManager ? langManager.currentLanguage : 'en';
    const supportedLanguages = langManager ? langManager.supportedLanguages : {
        'en': { name: 'English', flag: '🇺🇸', nativeName: 'English' }
    };

    const helpHTML = `
        <div class="modal-content help-guide-modal-content">
            <div class="modal-header">
                <div class="modal-header-left">
                    <h2>📚 <span data-translate="helpTitle">Excel Compartmentalizer User Guide</span></h2>
                </div>
                <div class="modal-header-right">
                    <div class="modal-language-dropdown">
                        <button class="modal-language-button" id="helpLanguageButton">
                            <span class="language-flag">${supportedLanguages[currentLang].flag}</span>
                            <span class="language-name">${supportedLanguages[currentLang].nativeName}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="language-menu" id="helpLanguageMenu">
                            ${Object.entries(supportedLanguages).map(([code, lang]) => `
                                <div class="language-option ${code === currentLang ? 'active' : ''}" data-lang="${code}">
                                    <span class="language-flag">${lang.flag}</span>
                                    <span class="language-name">${lang.nativeName}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <span class="close-button" onclick="closeHelpGuideModal()">&times;</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="help-guide-content">
                    <div class="header-description">
                        <p data-translate="helpSubtitle">Your complete guide to splitting large Excel files into smaller, manageable spreadsheets</p>

                        <div class="quick-nav">
                            <a href="#system-requirements" class="nav-button" data-translate="systemRequirements">System Requirements</a>
                            <a href="#overview" class="nav-button" data-translate="overview">Overview</a>
                            <a href="#usage" class="nav-button" data-translate="usage">How to Use</a>
                            <a href="#performance" class="nav-button" data-translate="performance">Performance Tips</a>
                            <a href="#troubleshooting" class="nav-button" data-translate="troubleshooting">Troubleshooting</a>
                        </div>
                    </div>

                    <!-- System Requirements Section -->
                    <div class="guide-section" id="system-requirements">
                        <div class="section-header">
                            <i class="fas fa-desktop"></i>
                            <h3 data-translate="systemRequirementsPerformance">System Requirements & Performance</h3>
                        </div>
                        <div class="section-content">
                            <div class="subsection">
                                <h4><i class="fas fa-shield-alt"></i><span data-translate="privacyFirstProcessing">Privacy-First Processing</span></h4>
                                <p data-translate="privacyFirstDesc">Excel Compartmentalizer runs entirely in your web browser using your local computer's resources. <strong>Your data never leaves your computer</strong> - all processing happens locally, ensuring complete privacy and security.</p>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-microchip"></i><span data-translate="performanceFactors">Performance Factors</span></h4>
                                <p data-translate="performanceFactorsDesc">Processing speed depends on your computer's specifications:</p>
                                <table class="info-table">
                                    <tr>
                                        <th data-translate="component">Component</th>
                                        <th data-translate="impactOnPerformance">Impact on Performance</th>
                                        <th data-translate="recommendation">Recommendation</th>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="cpu">CPU</strong></td>
                                        <td data-translate="cpuImpact">Faster processors handle large files more quickly</td>
                                        <td data-translate="cpuRecommendation">Modern multi-core processor</td>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="ram">RAM</strong></td>
                                        <td data-translate="ramImpact">More memory allows processing of larger files</td>
                                        <td data-translate="ramRecommendation">8GB+ for large files (50MB+)</td>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="browser">Browser</strong></td>
                                        <td data-translate="browserImpact">Modern browsers optimize JavaScript performance</td>
                                        <td data-translate="browserRecommendation">Chrome, Firefox, Safari, or Edge (latest versions)</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="tip-box">
                                <h4><i class="fas fa-lightbulb"></i><span data-translate="performanceTip">Performance Tip</span></h4>
                                <p data-translate="performanceTipDesc">Close unnecessary browser tabs and applications before processing large files to free up system resources for optimal performance.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Application Overview Section -->
                    <div class="guide-section" id="overview">
                        <div class="section-header">
                            <i class="fas fa-info-circle"></i>
                            <h3 data-translate="applicationOverview">Application Overview</h3>
                        </div>
                        <div class="section-content">
                            <div class="subsection">
                                <h4><i class="fas fa-file-excel"></i><span data-translate="whatIsExcelCompartmentalizer">What is Excel Compartmentalizer?</span></h4>
                                <p data-translate="whatIsDesc">Excel Compartmentalizer is a powerful, browser-based tool that splits large Excel files into smaller, more manageable spreadsheets. Perfect for organizing data, reducing file sizes, and improving spreadsheet performance.</p>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-file-alt"></i><span data-translate="supportedFileFormats">Supported File Formats</span></h4>
                                <div class="feature-grid">
                                    <div class="feature-card">
                                        <h5><i class="fas fa-file-excel"></i><span data-translate="excelFiles">Excel Files</span></h5>
                                        <p data-translate="excelFilesDesc">.xlsx and .xls formats<br>All Excel versions supported</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fas fa-file-csv"></i><span data-translate="csvFiles">CSV Files</span></h5>
                                        <p data-translate="csvFilesDesc">Comma-separated values<br>Universal compatibility</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fas fa-file-alt"></i><span data-translate="openOfficeFiles">OpenOffice</span></h5>
                                        <p data-translate="openOfficeFilesDesc">.ods format<br>LibreOffice Calc files</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fab fa-google-drive"></i><span data-translate="googleSheetsFiles">Google Sheets</span></h5>
                                        <p data-translate="googleSheetsFilesDesc">Exported Google Sheets<br>Download as Excel first</p>
                                    </div>
                                </div>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-cogs"></i><span data-translate="keyFeatures">Key Features</span></h4>
                                <ul class="feature-list">
                                    <li><i class="fas fa-check"></i><span data-translate="multipleSplittingMethods">Multiple Splitting Methods: By worksheets, row count, or file size</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="batchProcessing">Batch Processing: Process multiple files simultaneously</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="formatConversion">Format Conversion: Output to Excel, CSV, or OpenOffice formats</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="organizedDownloads">Organized Downloads: Individual files or ZIP archives</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="realTimeProgress">Real-time Progress: Live updates during processing</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="privacyFirst">Privacy-First: All processing happens locally</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Usage Instructions Section -->
                    <div class="guide-section" id="usage">
                        <div class="section-header">
                            <i class="fas fa-play-circle"></i>
                            <h3 data-translate="howToUseExcelCompartmentalizer">How to Use Excel Compartmentalizer</h3>
                        </div>
                        <div class="section-content">
                            <div class="subsection">
                                <h4><i class="fas fa-toggle-on"></i><span data-translate="step1ChooseProcessingMode">Step 1: Choose Processing Mode</span></h4>
                                <p data-translate="step1Desc">Select your processing mode at the top of the application:</p>
                                <ul class="simple-list">
                                    <li data-translate="singleFileModeDesc"><strong>Single-File Mode:</strong> Process one file at a time with detailed options</li>
                                    <li data-translate="multiFileModeDesc"><strong>Multi-File Mode:</strong> Batch process multiple files with the same settings</li>
                                </ul>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-upload"></i><span data-translate="step2UploadFiles">Step 2: Upload Your Files</span></h4>
                                <ol class="step-list">
                                    <li data-translate="dragDrop"><strong>Drag & Drop:</strong> Drag files directly onto the upload area</li>
                                    <li data-translate="clickToBrowse"><strong>Click to Browse:</strong> Click the upload area to select files from your computer</li>
                                    <li data-translate="fileValidation"><strong>File Validation:</strong> Only supported file formats will be accepted</li>
                                    <li data-translate="queueManagement"><strong>Queue Management:</strong> In multi-file mode, files are added to a processing queue</li>
                                </ol>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-cut"></i><span data-translate="step3ChooseSplittingMethod">Step 3: Choose Splitting Method</span></h4>
                                <div class="feature-grid">
                                    <div class="feature-card">
                                        <h5><i class="fas fa-table"></i><span data-translate="byWorksheetsTitle">By Worksheets</span></h5>
                                        <p data-translate="byWorksheetsMethodDesc">Creates separate files for each worksheet in your Excel file. Perfect for files with multiple sheets.</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fas fa-list-ol"></i><span data-translate="byRowCountTitle">By Row Count</span></h5>
                                        <p data-translate="byRowCountMethodDesc">Splits data into files with a specified number of rows. Ideal for large datasets.</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fas fa-weight-hanging"></i><span data-translate="byFileSizeTitle">By File Size</span></h5>
                                        <p data-translate="byFileSizeMethodDesc">Creates files under a target size limit. Great for email attachments or system limitations.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-cog"></i><span data-translate="step4ConfigureOptions">Step 4: Configure Options</span></h4>
                                <table class="info-table">
                                    <tr>
                                        <th data-translate="option">Option</th>
                                        <th data-translate="description">Description</th>
                                        <th data-translate="recommendation">Recommendation</th>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="outputFormatOption">Output Format</strong></td>
                                        <td data-translate="outputFormatDesc">Choose Excel (.xlsx), CSV, OpenOffice (.ods), or All Formats</td>
                                        <td data-translate="outputFormatRecommendation">Excel for compatibility, CSV for simplicity</td>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="includeHeadersOption">Include Headers</strong></td>
                                        <td data-translate="includeHeadersOptionDesc">Add column headers to each split file</td>
                                        <td data-translate="includeHeadersRecommendation">Always recommended for data clarity</td>
                                    </tr>
                                    <tr>
                                        <td><strong data-translate="namingScheme">Naming Scheme</strong></td>
                                        <td data-translate="namingSchemeDesc">Descriptive names or numbered files</td>
                                        <td data-translate="namingSchemeRecommendation">Descriptive for easy identification</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-play"></i><span data-translate="step5StartProcessing">Step 5: Start Processing</span></h4>
                                <ol class="step-list">
                                    <li data-translate="reviewSettings"><strong>Review Settings:</strong> Double-check your splitting method and options</li>
                                    <li data-translate="clickProcess"><strong>Click Process:</strong> Start the splitting operation</li>
                                    <li data-translate="monitorProgress"><strong>Monitor Progress:</strong> Watch real-time progress updates</li>
                                    <li data-translate="waitForCompletion"><strong>Wait for Completion:</strong> Processing time varies by file size and complexity</li>
                                </ol>
                            </div>

                            <div class="subsection">
                                <h4><i class="fas fa-download"></i><span data-translate="step6DownloadResults">Step 6: Download Results</span></h4>
                                <div class="feature-grid">
                                    <div class="feature-card">
                                        <h5><i class="fas fa-file-download"></i><span data-translate="individualDownloads">Individual Downloads</span></h5>
                                        <p data-translate="individualDownloadsDesc">Download specific files one at a time using the download buttons next to each result.</p>
                                    </div>
                                    <div class="feature-card">
                                        <h5><i class="fas fa-file-archive"></i><span data-translate="batchZipDownload">Batch ZIP Download</span></h5>
                                        <p data-translate="batchZipDownloadDesc">Download all files in an organized ZIP archive with processing summaries included.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Performance Tips Section -->
                    <div class="guide-section" id="performance">
                        <div class="section-header">
                            <i class="fas fa-tachometer-alt"></i>
                            <h3 data-translate="performanceTipsBestPractices">Performance Tips & Best Practices</h3>
                        </div>
                        <div class="section-content">
                            <div class="subsection">
                                <h4><i class="fas fa-rocket"></i><span data-translate="optimizeProcessingSpeed">Optimize Processing Speed</span></h4>
                                <ul class="feature-list">
                                    <li><i class="fas fa-check"></i><span data-translate="closeUnnecessaryTabs">Close unnecessary browser tabs and applications</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="useLatestBrowser">Use the latest version of your web browser</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="processOffPeak">Process files during off-peak computer usage</span></li>
                                    <li><i class="fas fa-check"></i><span data-translate="considerSplittingLarge">Consider splitting very large files (100MB+) in smaller chunks</span></li>
                                </ul>
                            </div>

                            <div class="warning-box">
                                <h4><i class="fas fa-exclamation-triangle"></i><span data-translate="largeFileWarning">Large File Warning</span></h4>
                                <p data-translate="largeFileWarningDesc">Files over 100MB may take several minutes to process and require significant system resources. Ensure you have adequate free memory before processing very large files.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Troubleshooting Section -->
                    <div class="guide-section" id="troubleshooting">
                        <div class="section-header">
                            <i class="fas fa-tools"></i>
                            <h3 data-translate="troubleshootingTitle">Troubleshooting</h3>
                        </div>
                        <div class="section-content">
                            <div class="subsection">
                                <h4><i class="fas fa-question-circle"></i><span data-translate="commonIssues">Common Issues</span></h4>
                                <table class="info-table">
                                    <tr>
                                        <th data-translate="problem">Problem</th>
                                        <th data-translate="possibleCause">Possible Cause</th>
                                        <th data-translate="solution">Solution</th>
                                    </tr>
                                    <tr>
                                        <td data-translate="fileWontUpload">File won't upload</td>
                                        <td data-translate="unsupportedFileFormat">Unsupported file format</td>
                                        <td data-translate="ensureFileFormat">Ensure file is .xlsx, .xls, .csv, or .ods format</td>
                                    </tr>
                                    <tr>
                                        <td data-translate="processingSlow">Processing is slow</td>
                                        <td data-translate="largeFileOrLimitedResources">Large file size or limited system resources</td>
                                        <td data-translate="closeOtherApps">Close other applications, try smaller files first</td>
                                    </tr>
                                    <tr>
                                        <td data-translate="browserCrashes">Browser crashes</td>
                                        <td data-translate="insufficientMemory">Insufficient memory for large files</td>
                                        <td data-translate="restartBrowser">Restart browser, close other tabs, try smaller files</td>
                                    </tr>
                                    <tr>
                                        <td data-translate="downloadFails">Download fails</td>
                                        <td data-translate="browserDownloadRestrictions">Browser download restrictions</td>
                                        <td data-translate="checkBrowserSettings">Check browser settings, allow downloads from this site</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="tip-box">
                                <h4><i class="fas fa-lightbulb"></i><span data-translate="needMoreHelp">Need More Help?</span></h4>
                                <p data-translate="needMoreHelpDesc">If you continue experiencing issues, try refreshing the page and starting over. Most problems are resolved by restarting the browser or trying a different browser.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.innerHTML = helpHTML;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Setup language dropdown functionality
    setupModalLanguageDropdown('helpLanguageButton', 'helpLanguageMenu');

    // Apply current language translations
    if (langManager) {
        langManager.applyLanguage(langManager.currentLanguage);
    }

    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeHelpGuideModal();
        }
    });

    // Add keyboard support for closing with Escape key
    const handleKeyDown = function(e) {
        if (e.key === 'Escape') {
            closeHelpGuideModal();
            document.removeEventListener('keydown', handleKeyDown);
        }
    };
    document.addEventListener('keydown', handleKeyDown);
}

// Function to close help guide modal
function closeHelpGuideModal() {
    const modal = document.getElementById('helpGuideModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Remove keyboard listener
        document.removeEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeHelpGuideModal();
            }
        });
    }
}












// Add modal CSS to the document
const modalCSS = `
/* Donation Modal Styles */
.donation-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(4px);
}

.donation-modal-content {
    background: #1e293b;
    border-radius: 16px;
    width: 90%;
    max-width: 1000px;
    height: 75vh;
    max-height: 75vh;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
}

.modal-header {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%);
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px 16px 0 0;
    flex-shrink: 0;
}

.modal-header h2 {
    color: white;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
}

.close-button {
    color: white;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.2);
}

.modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 0;
}

.donation-content {
    padding: 24px;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header-description {
    text-align: center;
    margin-bottom: 24px;
}

.header-description p {
    color: #94a3b8;
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
}

.primary-section {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%);
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    text-align: center;
    color: white;
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
    position: relative;
    overflow: hidden;
}

.primary-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(217, 70, 239, 0.1) 100%);
    pointer-events: none;
}

.primary-section-content {
    position: relative;
    z-index: 1;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 20px;
}

.feature-item {
    text-align: center;
}

.feature-icon {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
}

.feature-icon i {
    font-size: 1.2rem;
    color: #bfdbfe;
}

.feature-item h4 {
    font-size: 0.8rem;
    margin: 0;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.2;
}

.payment-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;
}

.payment-section {
    background: #334155;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #475569;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.payment-section h3 {
    font-size: 1.1rem;
    margin-bottom: 12px;
    color: #ffffff;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.payment-section p {
    color: #cbd5e1;
    margin-bottom: 16px;
    font-size: 0.9rem;
    line-height: 1.5;
}

.paypal-section-button {
    background: #0070ba;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0, 112, 186, 0.3);
}

.paypal-section-button:hover {
    background: #005ea6;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 112, 186, 0.4);
}

.payment-badges {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.payment-badge {
    padding: 3px 6px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 0.65rem;
}

.payment-badge.visa { background: #ffffff; color: #1a365d; }
.payment-badge.mc { background: #eb001b; color: white; }
.payment-badge.amex { background: #006fcf; color: white; }
.payment-badge.disc { background: #ff6000; color: white; }
.payment-badge.paypal { background: #0070ba; color: white; }

.qr-image {
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
}

.qr-image-small {
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
}

.qr-caption {
    font-size: 0.7rem;
    color: #94a3b8;
    margin-top: 6px;
    text-align: center;
}

.qr-caption-small {
    font-size: 0.65rem;
    color: #94a3b8;
    margin-top: 4px;
    text-align: center;
}

.qr-section {
    text-align: center;
    margin-bottom: 16px;
    padding: 8px 0;
}

.qr-section p {
    font-size: 0.8rem;
    margin-bottom: 8px;
    color: #94a3b8;
}

.crypto-qr {
    text-align: center;
    margin-bottom: 12px;
    padding: 8px 0;
}

.crypto-card {
    background: #1e293b;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #334155;
    margin-bottom: 12px;
}

.crypto-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    gap: 10px;
}

.crypto-name {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    color: #ffffff;
    font-size: 0.85rem;
}

.crypto-address {
    background: #0f172a;
    padding: 10px;
    border-radius: 6px;
    font-family: 'Courier New', Consolas, monospace;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow-x: auto;
    margin-bottom: 10px;
    color: #ffffff;
    border: 1px solid #1e293b;
    min-height: 18px;
    line-height: 1.2;
    cursor: text;
    user-select: all;
    transition: all 0.2s ease;
    word-break: break-all;
}

.crypto-address::-webkit-scrollbar {
    height: 3px;
}

.crypto-address::-webkit-scrollbar-track {
    background: #1e293b;
    border-radius: 2px;
}

.crypto-address::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 2px;
}

.crypto-address::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}

.crypto-address:hover {
    background: #1e293b;
    border-color: #3b82f6;
    transition: all 0.2s ease;
}

.copy-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 60px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.copy-btn:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.copy-btn:active {
    transform: translateY(0);
}

.copy-btn.copying {
    background: #10b981 !important;
    transform: scale(1.05) !important;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4) !important;
    animation: copyPulse 0.3s ease-out;
}

@keyframes copyPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1.05); }
}

.security-note {
    font-size: 0.75rem;
    color: #94a3b8;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 12px;
}

.feedback-section {
    background: #1e293b;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #334155;
    margin-top: 16px;
}

.feedback-section h3 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #ffffff;
    font-weight: 600;
}

.feedback-section p {
    color: #94a3b8;
    margin-bottom: 12px;
    font-size: 0.85rem;
}

.feedback-button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 6px;
}

.feedback-button:hover {
    background: #2563eb;
}

.thank-you {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    padding: 20px;
    border-radius: 12px;
    margin-top: 20px;
    text-align: center;
    color: white;
    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
}

.thank-you h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.thank-you p {
    font-size: 0.9rem;
    margin: 0 0 12px 0;
    opacity: 0.95;
    line-height: 1.5;
    font-weight: 400;
}

.professional-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.85rem;
    opacity: 0.9;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .donation-modal-content {
        width: 95%;
        height: 85vh;
        max-height: 85vh;
    }

    .modal-header {
        padding: 16px 20px;
    }

    .modal-header h2 {
        font-size: 1.3rem;
    }

    .donation-content {
        padding: 20px;
    }

    .payment-columns {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .crypto-header {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    }

    .crypto-name {
        justify-content: center;
        margin-bottom: 6px;
    }

    .copy-btn {
        width: 100%;
        min-width: auto;
        height: 40px;
    }

    .crypto-address {
        font-size: 0.7rem;
        padding: 8px;
        word-break: break-all;
        white-space: normal;
    }

    .payment-badges {
        gap: 4px;
    }

    .payment-badge {
        font-size: 0.6rem;
        padding: 2px 4px;
    }
}

@media (max-width: 480px) {
    .donation-modal-content {
        width: 98%;
        height: 90vh;
        max-height: 90vh;
    }

    .modal-header h2 {
        font-size: 1.1rem;
    }

    .donation-content {
        padding: 16px;
    }

    .payment-section {
        padding: 16px;
    }
}

/* Help Guide Modal Styles */
.help-guide-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(4px);
}

.help-guide-modal-content {
    background: #1e293b;
    border-radius: 16px;
    width: 90%;
    max-width: 1000px;
    height: 75vh;
    max-height: 75vh;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
}

.help-guide-content {
    padding: 24px;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    scroll-behavior: smooth;
}

.quick-nav {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 16px;
}

.nav-button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;
}

.nav-button:hover {
    background: #2563eb;
    transform: translateY(-1px);
}

.guide-section {
    background: #334155;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid #475569;
}

.section-header {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%);
    color: white;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-header h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
}

.section-header i {
    font-size: 1.3rem;
}

.section-content {
    padding: 20px;
}

.subsection {
    margin-bottom: 20px;
}

.subsection:last-child {
    margin-bottom: 0;
}

.subsection h4 {
    color: #ffffff;
    font-size: 1.1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
}

.subsection h4 i {
    color: #3b82f6;
    font-size: 1rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 16px 0;
}

.feature-card {
    background: #1e293b;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #334155;
}

.feature-card h5 {
    color: #ffffff;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 600;
}

.feature-card i {
    color: #3b82f6;
    font-size: 0.9rem;
}

.feature-card p {
    color: #cbd5e1;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-list li {
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #ffffff;
    font-size: 0.95rem;
}

.feature-list i {
    color: #48bb78;
    margin-top: 2px;
    font-size: 0.8rem;
}

.simple-list {
    margin-left: 16px;
    color: #ffffff;
}

.simple-list li {
    margin-bottom: 6px;
    font-size: 0.95rem;
}

.step-list {
    counter-reset: step-counter;
    list-style: none;
    padding: 0;
    margin: 0;
}

.step-list li {
    counter-increment: step-counter;
    margin-bottom: 12px;
    padding: 12px;
    background: #1e293b;
    border-radius: 6px;
    border-left: 3px solid #3b82f6;
    position: relative;
    color: #ffffff;
    font-size: 0.95rem;
}

.step-list li::before {
    content: counter(step-counter);
    position: absolute;
    left: -10px;
    top: 12px;
    background: #3b82f6;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
}

.tip-box {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
}

.tip-box h4 {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 600;
}

.tip-box p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.warning-box {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: white;
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
}

.warning-box h4 {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 600;
}

.warning-box p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.info-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.9rem;
}

.info-table th,
.info-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #475569;
    color: #ffffff;
}

.info-table th {
    background: #1e293b;
    font-weight: 600;
    color: #ffffff;
}

.info-table td {
    background: #334155;
}

/* Mobile Responsive for Help Guide Modal */
@media (max-width: 768px) {
    .help-guide-modal-content {
        width: 95%;
        height: 85vh;
        max-height: 85vh;
    }

    .help-guide-content {
        padding: 20px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .quick-nav {
        gap: 6px;
    }

    .nav-button {
        font-size: 0.75rem;
        padding: 5px 10px;
    }

    .section-header {
        padding: 14px 16px;
    }

    .section-header h3 {
        font-size: 1.1rem;
    }

    .section-content {
        padding: 16px;
    }

    .info-table {
        font-size: 0.8rem;
    }

    .info-table th,
    .info-table td {
        padding: 8px;
    }
}

@media (max-width: 480px) {
    .help-guide-modal-content {
        width: 98%;
        height: 90vh;
        max-height: 90vh;
    }

    .help-guide-content {
        padding: 16px;
    }

    .section-header h3 {
        font-size: 1rem;
    }

    .section-content {
        padding: 12px;
    }
}
`;

// Add the CSS to the document
if (!document.getElementById('donation-modal-styles')) {
    const style = document.createElement('style');
    style.id = 'donation-modal-styles';
    style.textContent = modalCSS;
    document.head.appendChild(style);
}

// Add copy and select functions to window for modal use
window.copyToClipboard = function(text) {
    const button = event.target;
    const originalText = button.textContent;
    const originalClasses = button.className;

    // Find the corresponding address element
    const cryptoCard = button.closest('.crypto-card');
    const addressElement = cryptoCard ? cryptoCard.querySelector('.crypto-address') : null;

    // Prevent multiple clicks during animation
    if (button.classList.contains('copying')) {
        return;
    }

    // Modern clipboard API with fallback
    const copyText = async () => {
        try {
            // Try modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback for older browsers or non-HTTPS
                return fallbackCopy(text);
            }
        } catch (err) {
            console.warn('Clipboard API failed, using fallback:', err);
            return fallbackCopy(text);
        }
    };

    const fallbackCopy = (text) => {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            return successful;
        } catch (err) {
            console.error('Fallback copy failed:', err);
            return false;
        }
    };

    // Execute copy operation
    copyText().then((success) => {
        if (success) {
            // Success feedback for button
            button.textContent = '✓ Copied!';
            button.classList.add('copying');

            // Success feedback for address element
            if (addressElement) {
                const originalBg = addressElement.style.backgroundColor;
                const originalBorder = addressElement.style.borderColor;
                addressElement.style.backgroundColor = '#10b981';
                addressElement.style.borderColor = '#059669';
                addressElement.style.transform = 'scale(1.02)';

                setTimeout(() => {
                    addressElement.style.backgroundColor = originalBg || '#0f172a';
                    addressElement.style.borderColor = originalBorder || '#1e293b';
                    addressElement.style.transform = 'scale(1)';
                }, 1000);
            }

            setTimeout(() => {
                button.textContent = originalText;
                button.className = originalClasses;
            }, 2500);
        } else {
            // Error feedback for button
            button.textContent = '✗ Failed';
            button.style.background = '#ef4444';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 2000);
        }
    }).catch((err) => {
        console.error('Copy operation failed:', err);
        button.textContent = '✗ Failed';
        button.style.background = '#ef4444';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
};

window.selectAddress = function(element) {
    // Select the text content of the address
    if (window.getSelection && document.createRange) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        // Visual feedback
        element.style.backgroundColor = '#3b82f6';
        element.style.color = '#ffffff';

        setTimeout(() => {
            element.style.backgroundColor = '#0f172a';
            element.style.color = '#ffffff';
        }, 1000);
    } else if (document.selection && document.body.createTextRange) {
        // Fallback for older IE
        const range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    }
};

// Register Service Worker for Chrome PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('Service Worker registered successfully:', registration.scope);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('New version available. Refresh to update.');
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Global function for mode switching (if needed from HTML)
function switchMode(mode) {
    if (window.app) {
        window.app.handleModeChange(mode);
    }
}

// Initialize the application
const app = new EasySheetsApp();

// Expose testing functions to global scope for console access
window.app = app;
window.easySheetsApp = app;
window.runDiagnostics = () => app.runDiagnostics();
window.refreshTranslations = () => app.languageManager.refreshTranslations();
window.enableDebugMode = () => app.enableDebugMode();
window.disableDebugMode = () => app.disableDebugMode();

// Chrome-specific optimizations
if (app.browserInfo && app.browserInfo.isChrome) {
    console.log('Chrome detected - optimizations enabled');

    // Enable Chrome-specific features
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
            console.log(`Storage quota: ${Math.round(estimate.quota / 1024 / 1024)}MB`);
            console.log(`Storage usage: ${Math.round(estimate.usage / 1024 / 1024)}MB`);
        });
    }
}

console.log('Easy Sheets Divider loaded. Available console commands:');
console.log('- runDiagnostics() - Run comprehensive diagnostics');
console.log('- enableDebugMode() - Enable detailed logging');
console.log('- disableDebugMode() - Disable detailed logging');
