# Deployment Guide - Easy Sheets Divider

This guide provides step-by-step instructions for deploying Easy Sheets Divider to GitHub Pages and other platforms.

## 🚀 Quick Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your computer
- Basic familiarity with Git commands

### Step 1: Create GitHub Repository
1. **Log in to GitHub** and click "New repository"
2. **Repository name**: `easy-sheets-divider` (or your preferred name)
3. **Description**: "Privacy-first web app for splitting large spreadsheet files"
4. **Visibility**: Public (required for free GitHub Pages)
5. **Initialize**: Don't add README, .gitignore, or license (we have them)
6. **Click "Create repository"**

### Step 2: Upload Your Files
```bash
# Navigate to your Easy Sheets Divider Public directory
cd "C:\Users\Desktop Computer\Documents\augment-projects\Excel Compartmentalizer App\Easy Sheets Divider Public"

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Easy Sheets Divider v1.0"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR-USERNAME/easy-sheets-divider.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Deploy from a branch
5. **Branch**: Select "main" and "/ (root)"
6. **Click "Save"**

### Step 4: Access Your App
- **URL**: `https://YOUR-USERNAME.github.io/easy-sheets-divider`
- **Wait 5-10 minutes** for initial deployment
- **Check deployment status** in Actions tab

## 🔧 Configuration Updates

### Update Repository URLs
Before deploying, update these files with your actual GitHub information:

#### README.md
```markdown
# Replace placeholders:
- your-github-username → YOUR-USERNAME
- your-email@example.com → YOUR-EMAIL
- your-paypal → YOUR-PAYPAL-USERNAME
- your-bitcoin-address → YOUR-BITCOIN-ADDRESS
```

#### package.json
```json
{
  "repository": {
    "url": "git+https://github.com/YOUR-USERNAME/easy-sheets-divider.git"
  },
  "homepage": "https://YOUR-USERNAME.github.io/easy-sheets-divider",
  "bugs": {
    "url": "https://github.com/YOUR-USERNAME/easy-sheets-divider/issues"
  }
}
```

### Update Donation Information
Replace placeholder donation information in:
- QR code images (BTC_QR.png, ETH_QR.png, SOL_QR.png, PayPal_QR.png)
- Donation addresses in the application
- PayPal links and cryptocurrency addresses

## 🌐 Alternative Deployment Options

### Netlify
1. **Create Netlify account** at netlify.com
2. **Connect GitHub repository**
3. **Build settings**: 
   - Build command: (leave empty)
   - Publish directory: (leave empty or "./")
4. **Deploy site**

### Vercel
1. **Create Vercel account** at vercel.com
2. **Import GitHub repository**
3. **Framework preset**: Other
4. **Deploy**

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

### Custom Domain Setup

#### GitHub Pages with Custom Domain
1. **Add CNAME file** to repository root:
   ```
   yourdomain.com
   ```
2. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```
3. **Enable HTTPS** in repository settings

#### SSL Certificate
GitHub Pages automatically provides SSL certificates for custom domains.

## 🔒 Security Considerations

### Content Security Policy
The app includes strict CSP headers. If you modify external resources:

```javascript
// Update security-config.js
const CSP_POLICY = "default-src 'self'; script-src 'self' 'unsafe-inline' https://your-cdn.com";
```

### HTTPS Enforcement
- GitHub Pages automatically enforces HTTPS
- Update any HTTP links to HTTPS
- Test all external resources work with HTTPS

## 📊 Analytics Setup (Optional)

### Google Analytics
1. **Create GA4 property**
2. **Add tracking code** to index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Privacy-Compliant Analytics
Consider privacy-focused alternatives:
- Plausible Analytics
- Simple Analytics
- Fathom Analytics

## 🚨 Troubleshooting

### Common Issues

#### 404 Error on GitHub Pages
- **Check repository name** matches URL
- **Verify index.html** is in root directory
- **Wait 10-15 minutes** for propagation

#### CSS/JS Not Loading
- **Check file paths** are relative (no leading slash)
- **Verify case sensitivity** in file names
- **Check browser console** for errors

#### Large File Processing Issues
- **Memory limitations** on some hosting platforms
- **Consider service worker** for better performance
- **Add file size warnings** for users

### Performance Optimization

#### Enable Compression
Most platforms automatically enable gzip compression for static files.

#### CDN Configuration
External libraries are loaded from CDNs for better performance:
- SheetJS from cdnjs.cloudflare.com
- Font Awesome from cdnjs.cloudflare.com
- JSZip from cdnjs.cloudflare.com

#### Caching Headers
GitHub Pages automatically sets appropriate caching headers.

## 📈 Monitoring

### GitHub Actions
The included workflow automatically:
- Validates file integrity
- Runs basic tests
- Deploys on successful push to main
- Provides deployment summaries

### Uptime Monitoring
Consider setting up monitoring with:
- UptimeRobot
- Pingdom
- StatusCake

## 🔄 Updates and Maintenance

### Regular Updates
1. **Update dependencies** in CDN links
2. **Monitor security advisories**
3. **Test with new browser versions**
4. **Update documentation**

### Version Control
- **Tag releases**: `git tag v1.0.0`
- **Semantic versioning**: MAJOR.MINOR.PATCH
- **Changelog**: Document changes in releases

## 📞 Support

### Deployment Issues
- **GitHub Pages Status**: status.github.com
- **GitHub Community**: github.community
- **Documentation**: docs.github.com/pages

### Application Issues
- **Create GitHub Issue**: Use issue templates
- **Provide details**: Browser, file types, error messages
- **Include logs**: Browser console output

---

**Ready to deploy?** Follow the Quick Deployment steps above to get your Easy Sheets Divider live in minutes! 🚀
