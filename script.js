// Contact form handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.querySelector('input[placeholder="Your Name"]').value,
        email: this.querySelector('input[placeholder="Your Email"]').value,
        message: this.querySelector('textarea').value
    };
    
    // For now, just show a confirmation
    // Later we'll integrate with a backend service
    alert(`Thanks ${formData.name}! We'll be in touch at ${formData.email}`);
    
    // Reset form
    this.reset();
});

// Smooth scroll for navigation links (already handled by CSS scroll-behavior)
// but we can add active link highlighting
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
