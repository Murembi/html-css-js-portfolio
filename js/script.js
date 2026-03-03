// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email');
            return;
        }
        
        console.log('Form submitted:', data);
        alert('Thank you for contacting me! I will get back to you soon.');
        this.reset();
    });
}