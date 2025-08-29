// Blog Posts Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Animate blog cards on scroll
    animateBlogCards();
    
    // Add blog card interactions
    addBlogInteractions();
    
    // Handle read more button clicks
    handleReadMoreButtons();
    
    // Add tag interactions
    addTagInteractions();
});

function animateBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Stagger animation
                
                observer.unobserve(entry.target);
            }
        });

        }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    blogCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function addBlogInteractions() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        // Add click effect for blog cards
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a button or link
            if (e.target.closest('.read-more-btn') || e.target.closest('.tag')) return;
            
            // Add pulse effect
            this.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
            
            // Navigate to full article (placeholder)
            console.log('Opening blog post...');
        });

        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add hover effect for blog images
        const blogImage = card.querySelector('.blog-image img');
        if (blogImage) {
            card.addEventListener('mouseenter', function() {
                blogImage.style.transform = 'scale(1.1) rotate(1deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                blogImage.style.transform = 'scale(1.1)';
            });
        }
    });
}


function handleReadMoreButtons() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add click animation
            const icon = this.querySelector('i');
            icon.style.transform = 'translateX(10px) scale(1.2)';
            
            setTimeout(() => {
                icon.style.transform = 'translateX(3px)';
                console.log('Navigating to full article...');
                // window.location.href = 'article-url';
            }, 200);
        });
        
        // Add hover animation for the arrow
        btn.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.animation = 'bounceX 0.6s ease infinite alternate';
        });
        
        btn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.animation = '';
        });
    });
}



function addTagInteractions() {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add selection effect
            this.style.transform = 'scale(1.1)';
            this.style.background = 'rgba(79, 70, 229, 0.3)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 200);
            
            // Filter by tag (placeholder)
            console.log(`Filtering by tag: ${this.textContent}`);
        });
        
        // Add hover sound effect simulation
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Add reading progress indicator
function addReadingProgress() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            width: 0%;
            transition: width 0.3s ease;
        `;
        
        card.style.position = 'relative';
        card.appendChild(progressBar);
        
        // Simulate reading progress on hover
        card.addEventListener('mouseenter', function() {
            progressBar.style.width = '100%';
        });
        
        card.addEventListener('mouseleave', function() {
            progressBar.style.width = '0%';
        });
    });
}

// Add view all blogs button interaction
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.view-all-blogs-btn');
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading animation
            const icon = this.querySelector('i');
            const originalTransform = icon.style.transform;
            icon.style.animation = 'spin 1s linear infinite';
            
            setTimeout(() => {
                icon.style.animation = '';
                icon.style.transform = originalTransform;
                console.log('Redirecting to blog page...');
                // window.location.href = '/blog';
            }, 1000);
        });
    }
});

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    addReadingProgress();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes bounceX {
        from { transform: translateX(3px); }
        to { transform: translateX(8px); }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .reading-progress {
        z-index: 1;
    }
`;
document.head.appendChild(style);