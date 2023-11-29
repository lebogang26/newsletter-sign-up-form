function validateForm() {
    // Reset messages
    document.getElementById('success-message').classList.add('hidden');
    document.getElementById('error-message').classList.add('hidden');
  
    // Get the email input value
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
  
    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      showError('Please enter your email.');
    } else if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
    } else {
      showSuccess(email);
    }
  }
  
  function showError(message) {
    var errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.classList.remove('hidden');
  }
  
  function showSuccess(email) {
    var successMessageElement = document.getElementById('success-message');
    var submittedEmailElement = document.getElementById('submitted-email');
    submittedEmailElement.textContent = email;
    successMessageElement.classList.remove('hidden');
  }
  