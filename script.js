// Select the login form and the gallery container
const loginForm = document.getElementById('login-form');
const galleryContainer = document.getElementById('gallery-container');

// Password to be checked
const correctPassword = '06072023';

// Function to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the password entered by the user
    const enteredPassword = document.getElementById('password').value.trim();

    if (enteredPassword === correctPassword) {
        // If the password is correct, show the gallery
        galleryContainer.classList.remove('hidden');
        galleryContainer.classList.add('visible');
    } else {
        // If the password is incorrect, show an alert
        alert('Incorrect password! Please try again.');
    }
});
