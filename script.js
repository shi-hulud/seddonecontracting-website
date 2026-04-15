document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successDiv = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Disable button during submission
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Collect form data
      const formData = new FormData(form);
      
      try {
        // Submit to Formspree
        const response = await fetch('https://formspree.io/f/xnjlnjkd', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Show success message
          successDiv.style.display = 'block';
          form.style.display = 'none';
          
          // Scroll to success message
          successDiv.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert('There was an error sending your message. Please try again.');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      } catch (error) {
        alert('There was an error sending your message. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});
