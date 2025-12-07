# Portfolio Website

A modern, futuristic personal portfolio website built with React, Three.js, and Tailwind CSS. Features stunning 3D visuals, smooth animations, and a fully responsive design.

## 🚀 Features

- **3D Visuals**: Interactive Three.js scenes with mouse-driven animations
- **Modern Design**: Glassmorphism UI with neon glow effects
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Full keyboard navigation and ARIA support
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Dark/Light Mode**: Theme toggle with localStorage persistence

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Routing**: React Router DOM
- **SEO**: React Helmet Async

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourname/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
  ` npm run dev`
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Hostinger
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your hosting directory
3. Configure your domain settings

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:

- `src/components/Hero.tsx` - Update name and bio
- `src/components/About.tsx` - Update about section and stats
- `src/components/Experience.tsx` - Update work experience and education
- `src/components/Projects.tsx` - Replace with your actual projects
- `src/components/ContactForm.tsx` - Update contact information

### 2. 3D Models
Replace placeholder 3D models in `src/components/Hero3D.tsx`:

```typescript
// Replace the placeholder geometry with your GLTF model
const { scene } = useGLTF('/path/to/your/model.gltf')
```

**Recommended 3D Model Sources:**
- [Sketchfab](https://sketchfab.com) - Free and paid models
- [Poly Haven](https://polyhaven.com) - Free CC0 models
- [Mixamo](https://www.mixamo.com) - Free character animations
- [Three.js Examples](https://threejs.org/examples) - Built-in geometries

### 3. Images and Assets
Replace placeholder images in the `public` folder:

- `public/og-image.jpg` - Open Graph image (1200x630px)
- `public/twitter-image.jpg` - Twitter card image (1200x600px)
- `public/favicon.ico` - Website favicon
- Project images in `src/components/Projects.tsx`

### 4. Colors and Theme
Customize colors in `tailwind.config.cjs`:

```javascript
colors: {
  deepCharcoal: '#0f1724',
  softSlate: '#111827',
  neonCyan: '#00E5C4',    // Your primary color
  mutedViolet: '#8B5CF6', // Your secondary color
  softWhite: '#F8FAFC',
}
```

### 5. Contact Form Backend
Set up a backend endpoint for the contact form:

```typescript
// In src/components/ContactForm.tsx
const onSubmit = async (data: ContactFormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  // Handle response
}
```

**Backend Options:**
- **Vercel Functions**: Serverless API routes
- **Netlify Functions**: Serverless functions
- **Node.js/Express**: Traditional backend
- **Form Services**: Formspree, Netlify Forms, EmailJS

## 📱 Performance Optimization

### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Features
- ✅ Lazy loading for 3D models
- ✅ Code splitting with dynamic imports
- ✅ Image optimization with WebP/AVIF
- ✅ Tree shaking for unused code
- ✅ Gzip compression
- ✅ CDN-ready static assets

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero3D.tsx      # Three.js 3D scene
│   ├── Navbar.tsx      # Navigation component
│   ├── ProjectCard.tsx # Project display card
│   ├── ProjectModal.tsx # Project detail modal
│   ├── Skills.tsx      # Skills visualization
│   ├── Timeline.tsx   # Experience timeline
│   ├── ContactForm.tsx # Contact form
│   ├── CustomCursor.tsx # Custom cursor effect
│   └── ...
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── utils/              # Utility functions
│   └── index.ts       # Animation variants & helpers
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 SEO Best Practices

### Meta Tags
- Title tags optimized for each page
- Meta descriptions under 160 characters
- Open Graph tags for social sharing
- Twitter Card optimization
- Structured data (JSON-LD)

### Performance
- Core Web Vitals optimization
- Image lazy loading
- Font optimization
- Critical CSS inlining

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Color contrast compliance

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Manual Testing Checklist
- [ ] Responsive design on all devices
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] 3D scenes load properly
- [ ] Animations are smooth
- [ ] Contact form validation
- [ ] Theme toggle functionality

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update personal information
- [ ] Replace placeholder images
- [ ] Add real project data
- [ ] Configure contact form backend
- [ ] Test on multiple devices
- [ ] Verify SEO meta tags
- [ ] Check performance scores
- [ ] Test accessibility features

## 📊 Analytics Integration

### Privacy-First Analytics
Consider using privacy-focused analytics:

- **Plausible**: Privacy-focused analytics
- **Fathom**: Simple, privacy-focused
- **Google Analytics 4**: Traditional option
- **Custom Analytics**: Self-hosted solution

### Implementation
```html
<!-- Add to index.html -->
<script defer data-domain="yourname.com" src="https://plausible.io/js/script.js"></script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for React integration
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

If you have any questions or need help customizing this portfolio:

- 📧 Email: hello@yourname.com
- 💬 Twitter: [@yourname](https://twitter.com/yourname)
- 💼 LinkedIn: [yourname](https://linkedin.com/in/yourname)

---

**Built with ❤️ using React, Three.js, and modern web technologies.**
