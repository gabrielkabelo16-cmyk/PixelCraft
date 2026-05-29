/**
 * PixelCraft Digital - Interactive Scripts
 * Features: Mobile menu, smooth scroll, form validation, animations, cart functionality
 */

(function() {
    'use strict';

    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    function initMobileMenu() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Create menu toggle button if it doesn't exist
        let menuToggle = document.querySelector('.menu-toggle');
        if (!menuToggle) {
            menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '☰';

            const header = document.querySelector('header');
            if (header) {
                header.querySelector('.container')?.appendChild(menuToggle);
            }
        }

        const navList = nav.querySelector('ul');

        menuToggle.addEventListener('click', function() {
            const isOpen = navList.classList.toggle('open');
            this.setAttribute('aria-expanded', isOpen);
            this.innerHTML = isOpen ? '✕' : '☰';

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, targetId);

                    // Set focus for accessibility
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    // ============================================
    // SCROLL-BASED ANIMATIONS (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections and articles
        document.querySelectorAll('section, article, form, address').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScroll = 0;
        const scrollThreshold = 100;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > scrollThreshold) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ============================================
    // FORM VALIDATION & ENHANCEMENTS
    // ============================================
    function initForms() {
        document.querySelectorAll('form').forEach(form => {
            // Real-time validation
            form.querySelectorAll('input, textarea').forEach(field => {
                field.addEventListener('blur', validateField);
                field.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        validateField.call(this);
                    }
                });
            });

            // Form submission
            form.addEventListener('submit', function(e) {
                let isValid = true;

                this.querySelectorAll('input, textarea').forEach(field => {
                    if (!validateField.call(field)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    e.preventDefault();

                    // Focus first error
                    const firstError = this.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                    }
                } else {
                    // Show loading state
                    const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
                    if (submitBtn) {
                        const originalText = submitBtn.value || submitBtn.textContent;
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = 'Sending... ⏳';

                        // For mailto forms, restore after delay
                        if (form.getAttribute('action')?.includes('mailto')) {
                            setTimeout(() => {
                                submitBtn.disabled = false;
                                submitBtn.innerHTML = originalText;
                                showNotification('Opening your email client...', 'info');
                            }, 1500);
                        }
                    }
                }
            });
        });
    }

    function validateField() {
        const field = this;
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Remove previous error state
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) existingError.remove();

        // Check required
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        // Phone validation (if pattern exists)
        if (field.type === 'tel' && value) {
            const phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phonePattern.test(value)) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
        }

        if (!isValid) {
            field.classList.add('error');
            field.style.borderColor = 'var(--error)';

            const errorMsg = document.createElement('span');
            errorMsg.className = 'field-error';
            errorMsg.style.cssText = 'color: var(--error); font-size: 0.85rem; margin-top: 4px; display: block;';
            errorMsg.textContent = message;
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
        } else {
            field.style.borderColor = 'var(--success)';
        }

        return isValid;
    }

    // ============================================
    // SHOPPING CART FUNCTIONALITY (Products Page)
    // ============================================
    function initCart() {
        const cartForm = document.querySelector('form:has(input[type="checkbox"][name="product"])');
        if (!cartForm) return;

        // Load cart from localStorage
        let cart = JSON.parse(localStorage.getItem('pixelcraft_cart') || '[]');
        updateCartUI();

        // Handle checkbox changes
        cartForm.querySelectorAll('input[type="checkbox"][name="product"]').forEach(checkbox => {
            // Check if already in cart
            if (cart.includes(checkbox.value)) {
                checkbox.checked = true;
            }

            checkbox.addEventListener('change', function() {
                const productValue = this.value;
                const productName = this.closest('article')?.querySelector('h3')?.textContent || 'Product';

                if (this.checked) {
                    if (!cart.includes(productValue)) {
                        cart.push(productValue);
                    }
                    showNotification(`${productName} added to cart!`, 'success');
                } else {
                    cart = cart.filter(item => item !== productValue);
                    showNotification(`${productName} removed from cart`, 'info');
                }

                localStorage.setItem('pixelcraft_cart', JSON.stringify(cart));
                updateCartUI();
            });
        });

        // Form submission for cart
        cartForm.addEventListener('submit', function(e) {
            if (cart.length === 0) {
                e.preventDefault();
                showNotification('Please select at least one product', 'warning');
                return;
            }

            showNotification(`Proceeding with ${cart.length} item(s)`, 'success');
        });

        function updateCartUI() {
            // Remove existing cart indicator
            const existingIndicator = document.querySelector('.cart-indicator');
            if (existingIndicator) existingIndicator.remove();

            if (cart.length > 0) {
                const indicator = document.createElement('div');
                indicator.className = 'cart-indicator';
                indicator.innerHTML = `🛒 Cart: ${cart.length} item(s)`;
                indicator.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                    color: white;
                    padding: 12px 20px;
                    border-radius: 50px;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                    font-weight: 600;
                    z-index: 9999;
                    cursor: pointer;
                    animation: fadeInUp 0.3s ease;
                `;

                indicator.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });

                document.body.appendChild(indicator);
            }
        }
    }

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.pixel-notification');
        if (existing) existing.remove();

        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#6366f1'
        };

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const notification = document.createElement('div');
        notification.className = 'pixel-notification';
        notification.innerHTML = `${icons[type]} ${message}`;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 14px 24px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeInUp 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ============================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ============================================
    function initActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('nav a').forEach(link => {
            const linkPage = link.getAttribute('href')?.split('/').pop();
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === '/' && linkPage === 'index.html')) {
                link.style.cssText = `
                    color: white !important;
                    background-color: rgba(99, 102, 241, 0.3) !important;
                    font-weight: 700 !important;
                `;
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    function initBackToTop() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 48px;
            height: 48px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        document.body.appendChild(button);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        }, { passive: true });

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ============================================
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Escape to close mobile menu
            if (e.key === 'Escape') {
                const navList = document.querySelector('nav ul');
                const menuToggle = document.querySelector('.menu-toggle');
                if (navList?.classList.contains('open')) {
                    navList.classList.remove('open');
                    menuToggle?.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '☰';
                    document.body.style.overflow = '';
                }
            }
        });
    }

    // ============================================
    // INITIALIZE EVERYTHING
    // ============================================
    function init() {
        initMobileMenu();
        initSmoothScroll();
        initScrollAnimations();
        initHeaderScroll();
        initForms();
        initCart();
        initActiveNav();
        initBackToTop();
        initLazyLoading();
        initKeyboardNav();

        console.log('🎨 PixelCraft Digital scripts loaded successfully!');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();