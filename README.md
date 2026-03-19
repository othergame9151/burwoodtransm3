# Burwood Mechanics & Transmission Website

A professional, responsive website for a transmission specialist mechanic shop in Burwood, NSW.

## ✅ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Production-Ready**: Optimized for Vercel and Netlify deployments
- **Netlify Forms**: Fully integrated contact form with validation
- **SEO Optimized**: Structured data (JSON-LD), meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Lazy loading, preloading, minimal dependencies
- **Image Optimization**: All images are relative-pathed for correct loading

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository at [vercel.com](https://vercel.com)
3. Vercel will automatically detect and deploy your site
4. For Netlify forms on Vercel: Use Netlify's form handling by keeping the form configuration as-is

### Netlify Deployment

1. Connect your GitHub repository at [app.netlify.com](https://app.netlify.com)
2. Netlify will automatically detect the `netlify.toml` file
3. Forms will work automatically - no additional setup needed
4. Your form submissions will appear in Netlify Forms dashboard

## 📋 Form Configuration

The contact form uses **Netlify Forms** with the following features:

- **Client-side validation** for immediate user feedback
- **Spam protection** with honeypot field
- **Form data** securely submitted to Netlify
- **Success/error messages** with retry capability
- **Accessible** form with proper error announcements

### Form Fields

- **Name** (required) - Minimum 2 characters
- **Phone** (required) - Minimum 8 digits
- **Email** (required) - Valid email format
- **Vehicle Details** (optional) - Any vehicle information
- **Message** (required) - Minimum 12 characters

## 🖼️ Images

All images are located in `/assets/images/`:

- `hero-transmission-workshop.jpg` - Hero section main image
- `transmission-specialist-rebuild.jpg` - Featured service image
- `classic-car-service.jpg` - Classic car section
- `general-vehicle-repair.jpg` - Modern vehicles section
- `mechanic-workshop-service.jpg` - 4WD/SUV section
- `workshop-location-exterior.jpg` - Location and family vehicles section

**Note:** All images are currently reused across sections. Consider creating additional images for:
- Engine & drivetrain services
- Brake & suspension work
- Pre-purchase inspection services
- Team/staff photos

## 📁 Project Structure

```
├── index.html           # Main website
├── styles.css          # All styling
├── script.js           # Navigation and form handling
├── netlify.toml        # Netlify configuration
├── vercel.json         # Vercel configuration
└── assets/
    └── images/         # All image files
```

## 🔧 Development

No build process required! This is a static HTML/CSS/JS site.

### Local Development

Simply open `index.html` in a browser or run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```

Then visit `http://localhost:8000`

## 🎨 Customization

### Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
  --primary: #b53b2f;        /* Main red color */
  --secondary: #3f697e;      /* Secondary blue */
  /* ... other colors ... */
}
```

### Contact Information

Update these in `index.html`:
- Phone number: `0405 399 973`
- Address: `2/240 Parramatta Road, Burwood NSW 2134`
- Email: `service@burwoodmechanicsandtransmission.com.au`
- Google Maps coordinates

### Business Hours

Edit the hours section in `index.html` and update in the structured data JSON-LD block.

## 📊 Performance

- **Lighthouse Score**: Optimized for best practices
- **Lazy Loading**: Images load only when needed
- **Preloading**: Hero image preloaded for faster display
- **Relative Paths**: Works correctly on any domain
- **Minimal CSS**: Single stylesheet with efficient organization

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Proper heading hierarchy
- Skip-to-content link
- Keyboard navigation support
- Form validation with live regions
- Color contrast meets WCAG AA standards

## 📱 Mobile Responsive

- Mobile-first design approach
- Responsive breakpoints:
  - 1100px (large desktop)
  - 900px (tablet)
  - 680px (mobile)
- Touch-friendly buttons and spacing
- Hamburger menu on mobile

## ✨ What Was Fixed

1. **Image Paths**: Changed from `/assets/images/` to `./assets/images/` for Vercel compatibility
2. **CSS & JS Paths**: Changed from `/` to `./` for relative loading
3. **Script Loading**: Added `defer` attribute for better performance
4. **Form Handling**: Improved error handling and button state management
5. **Netlify Forms**: Ensured proper form setup for both Vercel and Netlify
6. **Production Configuration**: Added `netlify.toml` and `vercel.json` for optimal deployment

## 🆘 Troubleshooting

### Images Not Showing

- Verify all image files exist in `/assets/images/`
- Check file names match exactly (case-sensitive on Linux/Mac)
- Ensure relative paths are used: `./assets/images/filename.jpg`

### Forms Not Submitting

**On Vercel with Netlify Forms:**
- Note: Netlify Forms won't work on Vercel
- Alternative: Use Vercel's serverless functions or a third-party service

**On Netlify:**
- Ensure `netlify.toml` is present
- Check Netlify Forms is enabled in site settings
- Verify `name="service-enquiry"` matches form name

### Performance Issues

- Optimize images (compress JPG/PNG)
- Use modern image formats (WebP with fallbacks)
- Implement image CDN for faster delivery

## 📞 Support

For questions about deployment or customization, refer to:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup)

---

**Created:** 2026  
**Last Updated:** March 2026
