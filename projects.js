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
        // Add hover effect for tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Add click effect for project cards
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.closest('.project-link')) return;
            
            // Add pulse effect
            this.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.click();
            }
        });
    });
}



function handleProjectLinks() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add click animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 100);
            
            // Handle different link types
            const icon = this.querySelector('i');
            if (icon) {
                const iconName = icon.getAttribute('data-lucide');
                
                if (iconName === 'external-link') {
                    console.log('Opening live demo...');
                    // window.open('demo-url', '_blank');
                } else if (iconName === 'github') {
                    console.log('Opening GitHub repository...');
                    // window.open('github-url', '_blank');
                }
            }
        });
        

        // Add hover sound effect (optional)
        link.addEventListener('mouseenter', function() {
            // You can add a subtle sound effect here
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}


// Add parallax effect to project images
document.addEventListener('scroll', function() {
    const projectImages = document.querySelectorAll('.project-image img');
    const scrolled = window.pageYOffset;
    
    projectImages.forEach((img, index) => {
        const rate = scrolled * -0.5;
        img.style.transform = `translateY(${rate}px)`;
    });
});


// Add view all button interaction
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.view-all-btn');
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading animation
            const icon = this.querySelector('i');
            icon.style.animation = 'spin 1s linear infinite';
            
            setTimeout(() => {
                icon.style.animation = '';
                console.log('Redirecting to projects page...');
                // window.location.href = '/projects';
            }, 1000);
        });
    }
});


// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);