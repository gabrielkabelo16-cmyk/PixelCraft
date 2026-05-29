# PixelCraft Digital

A professional cyberpunk-themed digital products e-commerce website built with HTML5, CSS3, and JavaScript.

![Project Preview](assets/images/hero.jpg)

## Overview

PixelCraft Digital is an online retail platform providing affordable digital products for students, freelancers, and small businesses. The website features a modern techy aesthetic with animated particle backgrounds, neon glow effects, glassmorphism cards, and full interactivity.

## Live Demo

Open `index.html` in a web browser or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8080

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero section and product overview |
| About | `pages/about.html` | Company mission, vision, and values |
| Products | `pages/products.html` | Product catalog with shopping cart |
| Services | `pages/services.html` | Service offerings |
| Contact | `pages/contact.html` | Contact information |
| Enquiry | `pages/enquiry.html` | Customer enquiry form |

## Features

### Visual Design
- Animated particle canvas background with mouse interaction
- Cyberpunk neon color palette (cyan, blue, purple, pink, green)
- Glassmorphism cards with backdrop-filter blur
- Neon glow effects on hover
- Animated grid overlay and scanline effects
- Gradient text headings
- Glitch text effect on hover

### Interactive Features
- Mobile responsive hamburger menu
- Scroll reveal animations
- Typing effect for tech-style text
- Shopping cart with LocalStorage persistence
- Form validation with real-time feedback
- Toast notification system
- Back to top button
- Active navigation highlighting

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support (`prefers-reduced-motion`)
- High contrast support (`prefers-contrast`)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Interactivity, form validation, cart |
| Google Fonts | Orbitron, Rajdhani, JetBrains Mono |
| Canvas API | Particle background animation |
| LocalStorage API | Shopping cart persistence |
| Intersection Observer | Scroll-triggered animations |

## Project Structure

```
PixelCraft-Digital/
├── index.html
├── README.md
├── assets/
│   ├── styles.css
│   ├── scripts.js
│   └── images/
│       └── hero.jpg
└── pages/
    ├── about.html
    ├── products.html
    ├── services.html
    ├── contact.html
    └── enquiry.html
```

## File Details

### HTML Files (8 total)
- **index.html** - Homepage with hero section, product cards, contact preview
- **pages/about.html** - About Us with mission, vision, values cards
- **pages/products.html** - Product catalog with 3 items and cart functionality
- **pages/services.html** - Services overview with 3 service cards
- **pages/contact.html** - Contact info with email, phone, location
- **pages/enquiry.html** - Form with name, email, message fields and validation

### CSS (assets/styles.css)
- CSS Custom Properties for theming
- Glassmorphism and neon glow effects
- Responsive grid and flexbox layouts
- 3 breakpoints: desktop (1200px), tablet (768px), mobile (480px)
- Print styles and accessibility media queries

### JavaScript (assets/scripts.js)
- Particle canvas system (100 particles, mouse interaction)
- Mobile menu toggle
- Scroll reveal animations (Intersection Observer)
- Form validation with regex
- Shopping cart (LocalStorage)
- Notification system
- Back to top button
- Typing effect
- Glitch effect
- Console easter egg

## CSS Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Neon Cyan | `#00f0ff` | Primary accent, links |
| Neon Blue | `#0080ff` | Secondary accent |
| Neon Purple | `#b829dd` | Tertiary accent |
| Neon Pink | `#ff2a6d` | Errors, emphasis |
| Neon Green | `#05ffa1` | Success, validation |
| Background | `#050508` | Page background |
| Card BG | `#0f0f1a` | Card backgrounds |
| Text Primary | `#e0e0ff` | Body text |
| Text Secondary | `#8a8ab5` | Secondary text |

### Typography
- **Headings**: Orbitron (Google Fonts) - weights 400-900
- **Body**: Rajdhani (Google Fonts) - weights 300-700
- **Code/Tags**: JetBrains Mono (Google Fonts) - weights 400-600

### Spacing Scale
- `xs`: 0.5rem
- `sm`: 1rem
- `md`: 1.5rem
- `lg`: 2.5rem
- `xl`: 4rem
- `2xl`: 6rem

## Responsive Breakpoints

| Name | Width | Changes |
|------|-------|---------|
| Desktop XL | > 1400px | Increased padding |
| Desktop | 1200px | Default layout |
| Tablet | 768px | Mobile menu, 1-column grid |
| Mobile | 480px | Smaller fonts, full-width buttons |

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |
| Chrome Mobile | 90+ |
| Safari iOS | 14+ |
| Samsung Internet | 15+ |

## Accessibility (WCAG 2.1)

| Feature | Level |
|---------|-------|
| Keyboard Navigation | A |
| Focus Indicators | AA |
| Color Contrast (4.5:1) | AA |
| Semantic HTML | A |
| ARIA Labels | A |
| Alt Text | A |
| Reduced Motion | AAA |
| High Contrast | AAA |

## Installation

1. Download or clone the repository
2. Ensure the folder structure is maintained exactly as shown
3. Open `index.html` in a browser OR use a local server (recommended)

```bash
# Using VS Code Live Server extension
# Right-click index.html -> Open with Live Server

# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8080
```

## Troubleshooting

### CSS/JS not loading
Use a local server instead of opening files directly. Browsers block external resources when using `file://` protocol.

### Fonts not loading
Check internet connection. Google Fonts load from Google's CDN. For offline use, download fonts locally.

### Particle canvas lagging
- Close other browser tabs
- The canvas pauses automatically when switching tabs
- Disable via `prefers-reduced-motion` system setting

### Cart not persisting
Ensure browser cookies and local storage are enabled. Some private browsing modes block LocalStorage.

## Credits

### Fonts
- [Orbitron](https://fonts.google.com/specimen/Orbitron) - Google Fonts
- [Rajdhani](https://fonts.google.com/specimen/Rajdhani) - Google Fonts
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) - Google Fonts

### References
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [W3C HTML5 & CSS3 Specs](https://www.w3.org)
- [JavaScript.info](https://javascript.info)

## License

Copyright 2026 PixelCraft Digital. All rights reserved.

This project was created for educational purposes. Unauthorized copying or distribution is prohibited without permission.

## Contact

- **Email**: info@pixelcraftdigital.co.za
- **Phone**: 078 027 9904
- **Location**: South Africa

---

**Version**: 1.0.0  
**Date**: May 2026  
**Developer**: PixelCraft Digital Team
