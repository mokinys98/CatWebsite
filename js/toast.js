document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show the toast message
        showToast("Ačiū, gavome jūsų informaciją!");

        // Optional: Clear form fields
        form.reset();
    });

    function showToast(message) {
        // Create a toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Show the toast with animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');

            // Remove the toast element after hiding it
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 500);
        }, 3000);
    }
});
