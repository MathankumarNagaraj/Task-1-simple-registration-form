document.getElementById('registrationForm').addEventListener('input', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const submitBtn = document.getElementById('submitBtn');

    let isValid = true;

    // Name validation
    if (name === '') {
        nameError.textContent = 'Name cannot be empty';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation (simple pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Enable/disable submit button
    submitBtn.disabled = !isValid;
});