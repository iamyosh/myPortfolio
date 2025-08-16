// Projects Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Animate project cards on scroll
    animateProjectCards();
    
    // Add project card interactions
    addProjectInteractions();
    
    // Handle project link clicks
    handleProjectLinks();
    
    // Add parallax effect
    applyParallax();
});

function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200); // Stagger animation
                
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
    });
}

function addProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => tag.style.transform = 'scale(1.05)');
            tag.addEventListener('mouseleave', () => tag.style.transform = 'scale(1)');
        });
        
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-link')) return;
            card.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => card.style.transform = 'translateY(-10px)', 150);
        });
        
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') card.click();
        });
    });
}

function handleProjectLinks() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            link.style.transform = 'scale(1.2)';
            setTimeout(() => link.style.transform = 'scale(1.1)', 100);
            
            const icon = link.querySelector('i');
            if (icon) {
                const iconName = icon.getAttribute('data-lucide');
                if (iconName === 'external-link') console.log('Opening live demo...');
                else if (iconName === 'github') console.log('Opening GitHub repository...');
            }
        });
        
        link.addEventListener('mouseenter', () => link.style.transform = 'scale(1.1) rotate(5deg)');
        link.addEventListener('mouseleave', () => link.style.transform = 'scale(1)');
    });
}

// Parallax effect using CSS variable
function applyParallax() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        projectImages.forEach(img => {
            const rate = scrolled * -0.5;
            img.style.setProperty('--parallax', `${rate}px`);
        });
    };

    // updateParallax();
    // document.addEventListener('scroll', updateParallax);
}

// View all button
document.addEventListener('DOMContentLoaded', () => {
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (!viewAllBtn) return;
    
    viewAllBtn.addEventListener('click', () => {
        const icon = viewAllBtn.querySelector('i');
        icon.style.animation = 'spin 1s linear infinite';
        setTimeout(() => {
            icon.style.animation = '';
            console.log('Redirecting to projects page...');
        }, 1000);
    });
});

// Spin animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
