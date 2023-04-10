const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    const validateRegex = /[A-Z]/;
  
    if (validateRegex.test(emailInput.value)) {
      document.getElementById('email_message').classList.toggle('disabled');
      event.preventDefault();
    } else if (!document.getElementById('email_message').className === 'email-message disabled') {
      document.getElementById('email_message').classList.toggle('disabled');
    }
  });