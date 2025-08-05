// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Navigation functionality
let isMenuOpen = false;
let activeSection = 'hero';

// Scroll detection and navigation updates
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navigation');
    const isScrolled = window.scrollY > 50;
    
    if (isScrolled) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Update active section
    updateActiveSection();
});

function updateActiveSection() {
    const sections = ['hero', 'about', 'skills', 'achievements', 'projects', 'blogs', 'contact'];
    const navHeight = 80;
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= navHeight && rect.bottom > navHeight) {
                if (activeSection !== section) {
                    activeSection = section;
                    updateNavActiveStates();
                }
                break;
            }
        }
    }
}

function updateNavActiveStates() {
    // Update desktop nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${activeSection}`) {
            item.classList.add('active');
        }
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    // Close mobile menu if open
    if (isMenuOpen) {
        toggleMobileMenu();
    }
}


function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.add('active');
        toggleButton.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu.classList.remove('active');
        toggleButton.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    lucide.createIcons();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Image upload functionality
function handleImageUpload(event, imageId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = document.getElementById(imageId);
            if (image) {
                image.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}

// Resume functionality
function handleViewResume() {
    // Open resume in new tab (replace with actual resume URL)
    window.open('/resume.pdf', '_blank');
}

function handleDownloadResume() {
    // Create download link (replace with actual resume URL)
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Show success message (replace with actual form handling)
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Animate skill progress bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();

     // Add click event listeners for navigation
    document.querySelectorAll('.nav-item, .mobile-nav-item, .footer-link').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
});


// Typing animation for hero h1
function typeWriter(element, text, speed, i = 0) {
    if (!element) return;
    element.textContent = text.substring(0, i);
    if (i <= text.length) {
        setTimeout(() => typeWriter(element, text, speed, i + 1), speed);
    }
}


// Run typing animation when page loads
document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector("#home h1");
  const originalText = heading.textContent;
  typeWriter(heading, originalText, 100);
});
