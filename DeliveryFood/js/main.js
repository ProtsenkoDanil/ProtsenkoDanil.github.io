// Open Modal on Button Click
document.getElementById('openAuthModalButton').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'block';  // Show modal
});

// Close Modal Functionality
function closeModal() {
    document.getElementById('authModal').style.display = 'none';  // Hide modal
}

// Close modal listener
document.getElementById('closeModalButton').addEventListener('click', function() {
    closeModal();  // Close modal
});

// Validate form and handle login
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Get input values
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();

    // Reset error styling
    document.getElementById('login').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    let valid = true;

    // Validate fields
    if (!login || !emailRegex.test(login)) {
        document.getElementById('login').classList.add('error');
        valid = false;
    }
    if (!password) {
        document.getElementById('password').classList.add('error');
        valid = false;
    }

    if (valid) {
        // Store username in localStorage
        localStorage.setItem('username', login);

        // Update UI to reflect logged-in state
        document.querySelector('.user-name').textContent = login;
        document.querySelector('.user-name').style.display = 'inline';  // Make user name visible
        document.getElementById('openAuthModalButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline-block';

        closeModal();

        // Clear input value on login
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
    } else {
        // Show prompt for empty fields
        alert('Заповніть усі поля.');
    }
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear username from localStorage
    localStorage.removeItem('username');

    // Reset UI to logged-out state
    document.querySelector('.user-name').textContent = '';
    document.querySelector('.user-name').style.display = 'none';  // Hide user name
    document.getElementById('openAuthModalButton').style.display = 'inline-block';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
});

// Check if username exists in localStorage on page load
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.querySelector('.user-name').textContent = username;
        document.querySelector('.user-name').style.display = 'inline';
        document.getElementById('openAuthModalButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline-block';
    }
};

