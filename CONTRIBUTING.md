# Contributing to Easy Sheets Divider

Thank you for your interest in contributing to Easy Sheets Divider! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
1. **Check existing issues** first to avoid duplicates
2. **Use the bug report template** when creating new issues
3. **Provide detailed information**:
   - Browser version and operating system
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Sample files (if applicable, ensure no sensitive data)
   - Console error messages or screenshots

### Suggesting Features
1. **Check existing feature requests** to avoid duplicates
2. **Use the feature request template**
3. **Provide clear use cases** and benefits
4. **Consider implementation complexity** and user impact

### Code Contributions

#### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/easy-sheets-divider.git
   cd easy-sheets-divider
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Guidelines

##### Code Style
- **JavaScript**: Use ES6+ features, consistent indentation (4 spaces)
- **HTML**: Semantic markup, proper accessibility attributes
- **CSS**: BEM methodology, consistent naming conventions
- **Comments**: Clear, concise documentation for complex logic

##### File Organization
```
├── index.html          # Main application file
├── css/
│   └── style.css       # All styles
├── js/
│   ├── app.js          # Main application logic
│   ├── memory-manager.js
│   ├── progressive-loader.js
│   ├── conditional-splitter.js
│   └── enhanced-drag-drop.js
├── img/                # Images and icons
├── manifest.json       # PWA manifest
└── security-config.js  # Security configuration
```

##### Testing
- **Manual Testing**: Test on multiple browsers and devices
- **File Format Testing**: Verify with various Excel, CSV, and ODS files
- **Performance Testing**: Test with large files (50MB+)
- **Accessibility Testing**: Ensure keyboard navigation and screen reader compatibility

##### Security Considerations
- **Client-Side Only**: Maintain privacy-first architecture
- **Input Validation**: Validate all user inputs
- **XSS Prevention**: Sanitize any dynamic content
- **CSP Compliance**: Ensure all code follows Content Security Policy

#### Translation Contributions

We welcome translations for additional languages!

##### Adding a New Language
1. **Add language to translations object** in `js/app.js`
2. **Translate all keys** maintaining context and technical accuracy
3. **Add language option** to language selector
4. **Test thoroughly** to ensure all UI elements are translated
5. **Update README** with new language support

##### Translation Guidelines
- **Maintain technical accuracy** for spreadsheet terminology
- **Keep UI text concise** to fit interface constraints
- **Use formal tone** appropriate for professional tools
- **Test on mobile devices** to ensure text fits properly

#### Pull Request Process

1. **Ensure your code follows** the style guidelines
2. **Test thoroughly** across different browsers and file types
3. **Update documentation** if needed
4. **Create a clear PR description**:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Any breaking changes or considerations

5. **Link related issues** using keywords (fixes #123, closes #456)

##### PR Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Tested with various file formats and sizes
- [ ] No console errors or warnings
- [ ] Documentation updated (if applicable)
- [ ] Translations updated (if UI changes)

## 🛠️ Development Setup

### Prerequisites
- Modern web browser (Chrome 80+, Firefox 75+, Safari 13+)
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development
1. **Clone and setup**:
   ```bash
   git clone https://github.com/your-username/easy-sheets-divider.git
   cd easy-sheets-divider
   ```

2. **For Chrome development** (recommended):
   ```bash
   # Create a batch file or use directly
   chrome --allow-file-access-from-files --disable-web-security index.html
   ```

3. **Using a local server** (alternative):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # Then visit http://localhost:8000
   ```

### Debugging
- **Browser DevTools**: Use Console, Network, and Performance tabs
- **File Processing**: Add console.log statements for debugging
- **Memory Issues**: Monitor memory usage in DevTools
- **Performance**: Use Performance tab for large file processing

## 📋 Code of Conduct

### Our Standards
- **Be respectful** and inclusive
- **Provide constructive feedback**
- **Focus on the issue**, not the person
- **Help others learn** and grow

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or inflammatory comments
- Personal attacks
- Publishing private information

## 🏷️ Issue Labels

- **bug**: Something isn't working correctly
- **enhancement**: New feature or improvement
- **documentation**: Documentation improvements
- **good first issue**: Good for newcomers
- **help wanted**: Extra attention needed
- **translation**: Translation-related issues
- **performance**: Performance improvements
- **security**: Security-related issues

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: For security issues or private matters

## 🙏 Recognition

Contributors will be recognized in:
- **README.md**: Contributors section
- **Release notes**: For significant contributions
- **GitHub**: Contributor graphs and statistics

Thank you for helping make Easy Sheets Divider better for everyone! 🎉
