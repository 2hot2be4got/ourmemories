// Get elements
const passwordForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const galleryContainer = document.getElementById('gallery-container');
const galleryMonths = document.querySelectorAll('.gallery-month');
const loginContainer = document.getElementById('login-container');

// Password check
const correctPassword = '06072023';

passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Hide login after successful login
        loginContainer.style.display = 'none';
        
        galleryContainer.classList.add('visible');

        // Show the first gallery by default
        showGallery('gallery-oct2022');
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Function to show a specific gallery
function showGallery(monthId) {
    galleryMonths.forEach(month => {
        month.classList.remove('visible');
    });

    const selectedMonth = document.getElementById(monthId);
    if (selectedMonth) {
        selectedMonth.classList.add('visible');
    }
}
