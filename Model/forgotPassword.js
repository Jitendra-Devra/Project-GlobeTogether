// References to modals and elements
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');

// Open the Forgot Password Modal when the link is clicked
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    forgotPasswordModal.style.display = 'flex'; // Show the modal
});

// Close the Forgot Password Modal
closeForgotPasswordModal.addEventListener('click', () => {
    forgotPasswordModal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none'; // Close the modal if clicked outside
    }
});

// Handle form submission
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById('email').value;
    // Here you can make an AJAX request to your server to handle the reset
    
    alert('Instructions to reset your password have been sent to ' + email);
    forgotPasswordModal.style.display = 'none'; // Close the modal after submission
});
