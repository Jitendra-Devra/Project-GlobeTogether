// Modal Open/Close Logic
const loginBtn = document.getElementById('profileBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

// Open the modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

// Close the modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
