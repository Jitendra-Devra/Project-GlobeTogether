// Modal Open/Close Logic

// Login Modal
const loginBtn = document.getElementById('profileBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

// Signup Modal
const signupModal = document.getElementById('signupModal');
const closeSignupModal = document.getElementById('closeSignupModal');

// Links to switch between modals
const openSignupLink = document.getElementById('openSignup'); // "Sign Up" in Login Modal
const switchToLogin = document.getElementById('switchToLogin'); // "Login" in Signup Modal

// ===== Login Modal Logic =====
// Open the Login Modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

// Close the Login Modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// ===== Signup Modal Logic =====
// Open the Signup Modal from Login Modal
openSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none'; // Hide login modal
    signupModal.style.display = 'flex'; // Show signup modal
});

// Close the Signup Modal
closeSignupModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Switch Back to Login Modal
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none'; // Hide signup modal
    loginModal.style.display = 'flex'; // Show login modal
});

// ===== Close Modals When Clicking Outside =====
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

