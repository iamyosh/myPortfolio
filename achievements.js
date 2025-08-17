// Achievements Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Animate achievement cards on scroll
    animateAchievementCards();
    
    // Add click handlers for achievement cards
    addAchievementClickHandlers();
});

function animateAchievementCards() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
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
       
    achievementCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function addAchievementClickHandlers() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse effect when clicked
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
            
            // You can add more functionality here, like opening a modal
            // with more details about the achievement
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Add floating animation to achievement icons
document.addEventListener('DOMContentLoaded', function() {
    const achievementIcons = document.querySelectorAll('.achievement-icon');
    
    achievementIcons.forEach((icon, index) => {
        // Add subtle floating animation with different delays
        icon.style.animation = `float ${3 + (index % 2)}s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.5}s`;
    });
});

// Add CSS animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);