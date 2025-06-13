# Easy Sheets Divider

A powerful, privacy-first web application for splitting large Excel, CSV, OpenOffice, and Google Sheets files into smaller, manageable spreadsheets. All processing happens locally in your browser - your data never leaves your computer.

## 🚀 Features

### Core Functionality
- **Multiple File Formats**: Support for Excel (.xlsx, .xls), CSV, OpenOffice (.ods), and Google Sheets
- **Flexible Splitting Methods**: 
  - By worksheets (separate files for each sheet)
  - By row count (specify rows per file)
  - By file size (target file size limits)
  - By column values (conditional splitting)
- **Batch Processing**: Process multiple files simultaneously
- **Format Conversion**: Output to Excel, CSV, OpenOffice, or all formats

### Privacy & Security
- **100% Client-Side Processing**: No data uploaded to servers
- **TLS 1.3 Security**: Enterprise-grade encryption
- **Privacy-First Design**: Your data stays on your device
- **No Registration Required**: Use immediately without accounts

### User Experience
- **Multi-Language Support**: English, Spanish, French, German, Korean
- **Mobile-Responsive**: Works on desktop, tablet, and mobile devices
- **Real-Time Progress**: Live updates during processing
- **Drag & Drop Interface**: Easy file uploads
- **Download Management**: Individual files or organized ZIP archives

## 🌐 Live Demo

Visit the live application: [Easy Sheets Divider](https://your-github-username.github.io/easy-sheets-divider)

## 📱 Quick Start

1. **Select Processing Mode**: Choose single-file or multi-file batch processing
2. **Upload Files**: Drag and drop or click to browse for your spreadsheet files
3. **Choose Split Method**: Select how you want to divide your files
4. **Configure Options**: Set output format, naming scheme, and other preferences
5. **Process**: Click to start splitting your files
6. **Download**: Get individual files or download all as a ZIP archive

## 🛠️ Installation

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Access your app at `https://your-username.github.io/easy-sheets-divider`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/easy-sheets-divider.git

# Navigate to the project directory
cd easy-sheets-divider

# Open index.html in your browser
# For Chrome with local file access:
chrome --allow-file-access-from-files index.html
```

### Option 3: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then visit http://localhost:8000
```

## 📋 System Requirements

### Browser Compatibility
- **Chrome**: Version 80+ (Recommended)
- **Firefox**: Version 75+
- **Safari**: Version 13+
- **Edge**: Version 80+

### Performance Recommendations
- **RAM**: 8GB+ for large files (50MB+)
- **CPU**: Modern multi-core processor
- **Storage**: Sufficient free space for output files

### File Size Limits
- **Maximum File Size**: 500MB per file
- **Recommended**: Files under 100MB for optimal performance
- **Batch Processing**: Up to 50 files simultaneously

## 🔧 Technical Details

### Built With
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**: 
  - [SheetJS](https://sheetjs.com/) - Excel/CSV processing
  - [JSZip](https://stuk.github.io/jszip/) - ZIP file creation
  - [FileSaver.js](https://github.com/eligrey/FileSaver.js/) - File downloads
- **Security**: TLS 1.3, CSP headers, XSS protection
- **PWA**: Service Worker, Web App Manifest

### Architecture
- **Client-Side Only**: No backend servers required
- **Progressive Web App**: Installable on mobile devices
- **Memory Management**: Efficient handling of large files
- **Modular Design**: Separate modules for different functionalities

## 📖 User Guide

### Splitting Methods

#### By Worksheets
Creates separate files for each worksheet in your Excel file. Perfect for files with multiple sheets that need to be distributed separately.

#### By Row Count
Splits data into files with a specified number of rows. Ideal for large datasets that need to be broken into manageable chunks.
- Set rows per file (default: 1000)
- Option to include headers in each file

#### By File Size
Creates files under a target size limit. Great for email attachments or system limitations.
- Set target size in KB, MB, or GB
- Automatic size optimization

#### By Column Values (Conditional Splitting)
Advanced feature for splitting based on cell values, dates, or custom conditions.
- Filter by specific column values
- Date range splitting
- Custom conditional logic

### Output Options

#### File Formats
- **Excel (.xlsx)**: Best for compatibility
- **CSV (.csv)**: Universal format, smaller file size
- **OpenOffice (.ods)**: Open source alternative
- **All Formats**: Generate files in all supported formats

#### Naming Schemes
- **Simple**: Sequential numbering (file_1, file_2, etc.)
- **Descriptive**: Meaningful names based on content

## 🌍 Multi-Language Support

The application supports five languages with complete translations:

- 🇺🇸 **English** (Default)
- 🇪🇸 **Spanish** (Español)
- 🇫🇷 **French** (Français)
- 🇩🇪 **German** (Deutsch)
- 🇰🇷 **Korean** (한국어)

Language settings are automatically saved and persist across browser sessions.

## 🔒 Privacy & Security

### Data Protection
- **No Server Upload**: Files are processed entirely in your browser
- **No Data Collection**: We don't collect, store, or transmit your data
- **Local Processing**: All operations happen on your device
- **Secure Connections**: TLS 1.3 encryption for all external resources

### Security Features
- Content Security Policy (CSP) headers
- XSS protection
- Frame protection
- Secure referrer policy
- HTTPS enforcement

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Reporting Issues
- Use the [Issues](https://github.com/your-username/easy-sheets-divider/issues) tab
- Provide detailed reproduction steps
- Include browser and file information
- Attach sample files if possible (ensure no sensitive data)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💝 Support Development

If you find this tool useful, consider supporting its development:

- ⭐ Star this repository
- 🐛 Report bugs and suggest features
- 💰 [Support via PayPal](https://paypal.me/your-paypal)
- ₿ Bitcoin: `your-bitcoin-address`

## 📞 Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/your-username/easy-sheets-divider/issues)
- **Email**: your-email@example.com
- **Feedback Form**: Available in the application

## 🙏 Acknowledgments

- [SheetJS Community](https://sheetjs.com/) for excellent spreadsheet processing
- [Font Awesome](https://fontawesome.com/) for icons
- [CDN providers](https://cdnjs.com/) for reliable library hosting
- All contributors and users who provide feedback

---

**Easy Sheets Divider** - Making large spreadsheets manageable, one split at a time. 📊✂️
