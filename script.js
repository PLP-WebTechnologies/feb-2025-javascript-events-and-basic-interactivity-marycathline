const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const greeting = document.getElementById('greeting');
const interactiveText = document.getElementById('interactiveText');
const toggleButton = document.getElementById('toggleButton');

// Form Validation
form.addEventListener('submit', function(event) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert('Form submitted successfully!'); // Replace with your actual submission logic
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Interactive Elements
interactiveText.addEventListener('mouseover', function() {
    greeting.textContent = 'You are hovering!';
});

interactiveText.addEventListener('mouseout', function() {
    greeting.textContent = 'Hover over the text below!';
});

toggleButton.addEventListener('click', function() {
    interactiveText.classList.toggle('highlight');
});