// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#' || !href) {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (window.history && window.history.pushState) {
                    window.history.pushState(null, null, href);
                }
            }
        });
    });
}

// Mobile hamburger menu toggle
function initMobileMenu() {
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuButton || !navMenu) {
        console.log('Menu toggle or nav menu not found - skipping mobile menu initialization');
        return;
    }

    menuButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        menuButton.classList.toggle('active');

        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('click', function(e) {
        if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });

    menuButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}

// Image lazy loading with Intersection Observer
function initLazyLoading() {
    const images = document.querySelectorAll('img[src]');

    if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver not supported - images will load normally');
        return;
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        root: null,
        rootMargin: '50px',
        threshold: 0.01
    });

    images.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            imageObserver.observe(img);
        }
    });
}

// Active page highlighting in navigation
function initActivePageHighlighting() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage ||
            (currentPage === '' && linkPath === 'index.html') ||
            (currentPage === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Keyboard accessibility support
function initKeyboardAccessibility() {
    const focusableElements = document.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                this.classList.add('keyboard-focus');
            }
        });

        element.addEventListener('mousedown', function() {
            this.classList.remove('keyboard-focus');
        });

        element.addEventListener('blur', function() {
            this.classList.remove('keyboard-focus');
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const menuButton = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (menuButton && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                menuButton.focus();
            }
        }
    });
}

// Initialize all features on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initSmoothScrolling();
        console.log('Smooth scrolling initialized');
    } catch (error) {
        console.error('Error initializing smooth scrolling:', error);
    }

    try {
        initMobileMenu();
        console.log('Mobile menu initialized');
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }

    try {
        initLazyLoading();
        console.log('Lazy loading initialized');
    } catch (error) {
        console.error('Error initializing lazy loading:', error);
    }

    try {
        initActivePageHighlighting();
        console.log('Active page highlighting initialized');
    } catch (error) {
        console.error('Error initializing active page highlighting:', error);
    }

    try {
        initKeyboardAccessibility();
        console.log('Keyboard accessibility initialized');
    } catch (error) {
        console.error('Error initializing keyboard accessibility:', error);
    }
});

// Handle window resize for mobile menu
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (window.innerWidth >= 768) {
            const menuButton = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (menuButton && navMenu) {
                navMenu.classList.remove('active');
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    }, 250);
});
