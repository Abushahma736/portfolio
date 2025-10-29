# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
- **Pros**: Zero-config, automatic deployments, great performance
- **Free Tier**: Yes, with generous limits
- **Setup Time**: 2 minutes

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

**Configuration:**
- Uses `vercel.json` for SPA routing
- Automatic HTTPS and CDN
- Preview deployments for PRs

### 2. Netlify
- **Pros**: Great for static sites, form handling
- **Free Tier**: Yes, with form submissions
- **Setup Time**: 3 minutes

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `dist` folder
4. Configure custom domain

**Configuration:**
- Uses `netlify.toml` for redirects
- Form handling with Netlify Forms
- Branch deployments

### 3. GitHub Pages
- **Pros**: Free hosting, integrated with GitHub
- **Free Tier**: Yes, public repositories only
- **Setup Time**: 5 minutes

**Steps:**
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automated builds
3. Configure custom domain

## 🔧 Manual Deployment

### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

### Upload to Hosting
1. Upload contents of `dist/` folder to your hosting provider
2. Configure web server for SPA routing
3. Set up custom domain and SSL

## 🌐 Custom Domain Setup

### DNS Configuration
```
Type: A Record
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

### SSL Certificate
- Most hosting providers offer free SSL
- Let's Encrypt for custom setups
- Automatic renewal recommended

## 📊 Performance Optimization

### Before Deployment
- [ ] Optimize images (WebP/AVIF)
- [ ] Enable gzip compression
- [ ] Set up CDN
- [ ] Configure caching headers
- [ ] Test Lighthouse scores

### Monitoring
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI

## 🔍 SEO Setup

### Meta Tags
Update in `index.html`:
```html
<title>Your Name - Full-Stack Developer</title>
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name - Full-Stack Developer">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

### Sitemap
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 📈 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking code to `index.html`
3. Configure goals and conversions

### Privacy-Focused Alternatives
- **Plausible**: Simple, privacy-focused
- **Fathom**: Clean, GDPR compliant
- **Simple Analytics**: Minimal tracking

## 🔒 Security Considerations

### Headers
Configure security headers:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';">
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (18+ recommended)
- Clear `node_modules` and reinstall
- Verify all dependencies are installed

**3D Models Not Loading:**
- Check file paths in `Hero3D.tsx`
- Ensure models are in `public` folder
- Verify CORS settings

**Animations Not Working:**
- Check Framer Motion imports
- Verify animation variants are defined
- Test on different browsers

**Performance Issues:**
- Enable lazy loading
- Optimize images
- Use React.memo for components
- Check bundle size

### Support
- Check browser console for errors
- Test on different devices
- Verify network connectivity
- Review hosting provider logs

## 📋 Deployment Checklist

Before going live:

- [ ] Test on multiple devices and browsers
- [ ] Verify all links work correctly
- [ ] Check contact form functionality
- [ ] Test 3D scenes load properly
- [ ] Validate HTML and CSS
- [ ] Check Lighthouse scores
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Enable SSL certificate
- [ ] Test page speed
- [ ] Verify SEO meta tags
- [ ] Check accessibility compliance

## 🎉 Post-Deployment

### Monitor Performance
- Set up uptime monitoring
- Track Core Web Vitals
- Monitor user engagement
- Check error rates

### Regular Updates
- Keep dependencies updated
- Refresh content regularly
- Add new projects
- Update skills and experience

### Backup Strategy
- Version control with Git
- Regular database backups (if applicable)
- Document configuration changes
- Keep deployment scripts updated
