lucide.createIcons();

// hover effects for skill categories
document.addEventListener('DOMContentLoaded', function() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

//Enhanced animateSkillBars()
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.dataset.targetWidth || entry.target.style.width;
                if (targetWidth) {
                    // Trigger animation by changing width (CSS transition handles the rest)
                    entry.target.style.width = targetWidth; 
                    // Unobserve to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// Call the function (keep this)
animateSkillBars();
