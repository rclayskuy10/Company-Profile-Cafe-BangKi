// ============================================
// CAFÉ AROMA - JAVASCRIPT
// Modern Interactive Features
// ============================================

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ============================================
// ACTIVE NAV LINK
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ============================================
// MENU FILTER (for menu.html)
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            // Center clicked button di mobile
            if (window.innerWidth <= 968) {
                const menuFilters = button.parentElement;
                const containerWidth = menuFilters.clientWidth;
                const btnLeft = button.offsetLeft;
                const btnWidth = button.offsetWidth;
                const scrollPosition = btnLeft - (containerWidth / 2) + (btnWidth / 2);
                
                menuFilters.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }

            // Auto scroll ke section pertama yang muncul (smooth untuk mobile)
            setTimeout(() => {
                const firstVisibleItem = document.querySelector('.menu-item[style*="display: block"]');
                if (firstVisibleItem && window.innerWidth <= 968) {
                    const filterHeight = document.querySelector('.menu-filters').offsetHeight;
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const scrollPosition = firstVisibleItem.offsetTop - filterHeight - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        });
    });

    // Horizontal scroll indicator untuk mobile (jika ada lebih banyak filter)
    const menuFilters = document.querySelector('.menu-filters');
    if (menuFilters && window.innerWidth <= 968) {
        // Check if scrolled to end
        const checkScrollEnd = () => {
            const isScrolledToEnd = menuFilters.scrollLeft + menuFilters.clientWidth >= menuFilters.scrollWidth - 5;
            if (isScrolledToEnd) {
                menuFilters.classList.add('scrolled-end');
            } else {
                menuFilters.classList.remove('scrolled-end');
            }
        };
        
        menuFilters.addEventListener('scroll', checkScrollEnd);
        
        // Initial check
        setTimeout(checkScrollEnd, 100);
        
        // Center active filter button on page load
        setTimeout(() => {
            const activeBtn = menuFilters.querySelector('.filter-btn.active');
            if (activeBtn) {
                const containerWidth = menuFilters.clientWidth;
                const btnLeft = activeBtn.offsetLeft;
                const btnWidth = activeBtn.offsetWidth;
                const scrollPosition = btnLeft - (containerWidth / 2) + (btnWidth / 2);
                
                menuFilters.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }, 200);
    }
}

// ============================================
// GALLERY LIGHTBOX (for gallery.html)
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-content img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let galleryImages = [];

if (galleryItems.length > 0) {
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        galleryImages.push(img.src);

        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.classList.add('active');
        lightboxImg.src = galleryImages[currentImageIndex];
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    // Event Listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
}

// ============================================
// CONTACT FORM VALIDATION (for contact.html)
// ============================================
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert('Mohon isi semua field!');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Success message
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// AUTO UPDATE COPYRIGHT YEAR
// ============================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8B7355, #D4A574);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(-5px)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0)';
});

// ============================================
// PARALLAX EFFECT FOR HERO SECTIONS
// ============================================
const heroSections = document.querySelectorAll('.hero, .menu-hero, .gallery-hero, .about-hero, .contact-hero');

window.addEventListener('scroll', () => {
    heroSections.forEach(hero => {
        const scrolled = window.scrollY;
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroTop + heroHeight) {
            const parallaxSpeed = 0.5;
            hero.style.backgroundPositionY = `${(scrolled - heroTop) * parallaxSpeed}px`;
        }
    });
});

// ============================================
// TYPING EFFECT FOR HERO SUBTITLE (Optional)
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);
}

console.log('🎨 Café Aroma Website Loaded Successfully!');

// ============================================
// MOBILE VIEWPORT HEIGHT FIX
// ============================================
// Fix for mobile browsers where 100vh includes address bar
function setVhVariable() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVhVariable();
window.addEventListener('resize', setVhVariable);
window.addEventListener('orientationchange', setVhVariable);

// ============================================
// TOUCH SWIPE DETECTION FOR MOBILE MENU
// ============================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navMenu || !hamburger) return;
    
    // Swipe left to close menu (when menu is open)
    if (navMenu.classList.contains('active') && touchStartX - touchEndX > swipeThreshold) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Swipe right to open menu (from left edge)
    if (!navMenu.classList.contains('active') && 
        touchStartX < 50 && 
        touchEndX - touchStartX > swipeThreshold) {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// DETECT DEVICE TYPE
// ============================================
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTablet() {
    return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
}

// Add device class to body
if (isMobile()) {
    document.body.classList.add('mobile-device');
}

if (isTablet()) {
    document.body.classList.add('tablet-device');
}

// ============================================
// OPTIMIZE IMAGES FOR MOBILE
// ============================================
if (isMobile() && 'loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}