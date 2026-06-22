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
| Contact | `pages/contact.html` | Contact information and general message form |
| Enquiry | `pages/enquiry.html` | Customer enquiry form for services, products, volunteering, or sponsorship |

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
- Accordion, tab, and modal components
- Interactive gallery with lightbox for enlarged image viewing
- Animated transitions using CSS and JavaScript

### Dynamic Content
- JavaScript-driven dynamic loading of posts and product listings
- Search functionality with filtering and sorting on the Products and Services pages
- Advanced DOM manipulation for dynamic page updates

## JavaScript Enhancements

### 2.1 Interactive Elements
- **Accordions, Tabs, and Modals** — Implemented using vanilla JavaScript to enhance user experience without external frameworks.
- **Interactive Maps** — Location-based features powered by Leaflet.js (or Mapbox/OpenLayers) for displaying business location.
- **Animations and Transitions** — Smooth CSS and JavaScript animations for page elements, hover states, and state changes.
- **Advanced DOM Manipulation** — Dynamic content injection, element creation, and event delegation for highly interactive pages.
- **Image Gallery with Lightbox** — Click-to-expand image gallery allowing users to view product and portfolio images in a larger overlay.

### 2.2 Dynamic Content
- **Dynamic Loading** — JavaScript fetches and renders content such as product listings and blog posts dynamically.
- **Search, Filter, and Sort** — Real-time search with filtering and sorting capabilities on the Products, Services, and Events pages.

## Search Engine Optimization (SEO)

### 3.1 On-Page SEO
- **Keyword Research** — Relevant keywords (e.g., "digital products", "cyberpunk design", "affordable software") identified and incorporated naturally into page content.
- **Title Tags and Meta Descriptions** — Compelling, unique `<title>` and `<meta name="description">` tags for every page.
- **Header Tags** — Semantic heading hierarchy (H1 → H2 → H3) used to structure content across all pages.
- **Image Optimisation** — Descriptive file names and meaningful `alt` text for all images.
- **URL Structure** — Clean, descriptive URLs (e.g., `/pages/products.html`, `/pages/contact.html`).
- **Internal Linking** — Relevant cross-links between pages to improve navigation and crawlability.
- **Mobile-Friendliness** — Fully responsive design ensuring optimal experience on all screen sizes.

### 3.2 Off-Page SEO
- **Backlinks** — Strategy in place to build high-quality backlinks from relevant tech and design websites.
- **Social Media** — Website promoted on social media platforms to drive traffic and engagement.
- **Local SEO** — Optimised for local search (South Africa-based business) where applicable.

### 3.3 Technical SEO
- **Robots.txt** — `robots.txt` file created to instruct search engine crawlers on which pages to index.
- **Sitemap.xml** — XML sitemap generated to help search engines understand and crawl the website structure.
- **Page Speed** — Optimised loading speed through image compression, minified assets, and efficient code.

## Form Functionality and Validation

### 4.1 HTML Forms

#### Enquiry Form (`pages/enquiry.html`)
- Allows users to enquire about services, products, volunteering, or sponsorship opportunities.
- Once input is validated, the form processes the submission and presents the user with a response related to cost, availability, or another relevant aspect.
- Fields include: Name, Email, Subject (dropdown), Message (textarea), and relevant enquiry type selection.

#### Contact Form (`pages/contact.html`)
- Allows users to submit general messages to the organisation.
- Requests basic contact information, message type, and a full message body.
- Upon validation, the information is compiled into an email format, and the user is able to send the email to the recipient stated in the code.

### Form Elements
- Appropriate HTML5 form elements used: `<input>`, `<textarea>`, `<select>`, `<button>`, etc.

### Form Validation
- **HTML5 Validation** — Built-in validation attributes (`required`, `type="email"`, `minlength`, `pattern`, etc.).
- **JavaScript Validation** — Custom regex-based validation for phone numbers, dates, character lengths, and format-specific inputs.
- **Error Handling** — Real-time error messages displayed to users when form data is invalid.

### Form Submission
- HTML `form` element's `action` attribute specifies the URL where form data is sent.
- **AJAX Form Submission** — Asynchronous form submission using AJAX for a smoother user experience without full page reloads.

## GitHub Repository

### Commit Changes
- All code changes are regularly committed to the repository using descriptive, meaningful commit messages.
- Commit history reflects incremental development and feature implementation.

### Update README.md
- This document is kept up-to-date with new information pertinent to all project parts.
- **Changelog** — Contains new entries and entries related to feedback edits made from previous project parts.
- **References** — Updated list of references and resources used during development.

### Push to Remote Repository
- Local changes are regularly pushed to the remote GitHub repository to ensure version control and backup.

## Submission and Publishing Requirements

- **HTML Files** — All updated website files submitted to the remote repository.
- **GitHub Repository Link** — Repository link submitted to the Learning Management System.
- **Deployment** — Website deployed on a free hosting platform. Supported platforms include:
  - [Netlify](https://www.netlify.com/)
  - [GitHub Pages](https://pages.github.com/)
  - [Vercel](https://vercel.com/)
  - Other free platforms of choice

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Interactivity, form validation, cart, dynamic content |
| Google Fonts | Orbitron, Rajdhani, JetBrains Mono |
| Canvas API | Particle background animation |
| LocalStorage API | Shopping cart persistence |
| Intersection Observer | Scroll-triggered animations |
| Leaflet.js | Interactive maps |
| AJAX/Fetch API | Asynchronous form submission and dynamic content loading |

## Project Structure

```
PixelCraft-Digital/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
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

### HTML Files (6 total)
- **index.html** — Homepage with hero section, product cards, contact preview
- **pages/about.html** — About Us with mission, vision, values cards
- **pages/products.html** — Product catalog with dynamic listings, search/filter, and cart functionality
- **pages/services.html** — Services overview with dynamic service cards and search
- **pages/contact.html** — Contact info with general message form and email composition
- **pages/enquiry.html** — Enquiry form with validation for services, products, volunteering, or sponsorship

### CSS (`assets/styles.css`)
- CSS Custom Properties for theming
- Glassmorphism and neon glow effects
- Responsive grid and flexbox layouts
- 3 breakpoints: desktop (1200px), tablet (768px), mobile (480px)
- Print styles and accessibility media queries

### JavaScript (`assets/scripts.js`)
- Particle canvas system (100 particles, mouse interaction)
- Mobile menu toggle
- Scroll reveal animations (Intersection Observer)
- Form validation with regex (HTML5 + JavaScript)
- AJAX form submission
- Shopping cart (LocalStorage)
- Notification system (toast messages)
- Back to top button
- Typing effect
- Glitch effect
- Accordion, tab, and modal components
- Dynamic content loading and search/filter/sort
- Lightbox gallery
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
- **Headings**: Orbitron (Google Fonts) — weights 400-900
- **Body**: Rajdhani (Google Fonts) — weights 300-700
- **Code/Tags**: JetBrains Mono (Google Fonts) — weights 400-600

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

### Form submission not working
- Verify that the `action` attribute in forms points to a valid endpoint
- For AJAX submissions, ensure JavaScript is enabled and check the browser console for errors
- CORS policies may affect form submissions when testing locally

## Changelog

### Version 1.1.0 (June 2026)
- Added interactive elements: accordions, tabs, modals, lightbox gallery
- Implemented dynamic content loading and search/filter/sort functionality
- Added SEO features: robots.txt, sitemap.xml, meta tags, semantic headings
- Enhanced form validation with HTML5 and JavaScript regex
- Added AJAX form submission for enquiry and contact forms
- Updated README with assignment requirements and project documentation
- Added deployment instructions for Netlify, GitHub Pages, and Vercel

### Version 1.0.0 (May 2026)
- Initial release with core website functionality
- Particle background, glassmorphism design, shopping cart
- Basic form validation and responsive layout

## References

### Fonts
- [Orbitron](https://fonts.google.com/specimen/Orbitron) — Google Fonts
- [Rajdhani](https://fonts.google.com/specimen/Rajdhani) — Google Fonts
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Google Fonts

### Libraries & Tools
- [Leaflet.js](https://leafletjs.com/) — Interactive maps
- [MDN Web Docs](https://developer.mozilla.org) — Web development reference
- [CSS-Tricks](https://css-tricks.com) — CSS techniques and guides
- [W3C HTML5 & CSS3 Specs](https://www.w3.org) — Web standards
- [JavaScript.info](https://javascript.info) — JavaScript tutorials

## License

Copyright 2026 PixelCraft Digital. All rights reserved.

This project was created for educational purposes. Unauthorized copying or distribution is prohibited without permission.

## Contact

- **Email**: info@pixelcraftdigital.co.za
- **Phone**: 078 027 9904
- **Location**: South Africa

---

**Version**: 1.1.0  
**Date**: June 2026  
**Developer**: PixelCraft Digital Team
