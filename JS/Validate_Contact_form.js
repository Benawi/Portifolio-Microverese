/* The below code is selecting the form element from the DOM. */
const form = document.querySelector('form');
const emailInput = document.getElementById('user_email');

form.addEventListener('submit', (event) => {
 /* The below code is a regular expression that checks if the email is valid. */
const emailRegex = /[A-Z]/;
// Amin writes this code
    if (emailRegex.test(emailInput.value)) {
      document.getElementById('email_message').classList.toggle('disabled');
      event.preventDefault();
    } else if (!document.getElementById('email_message').className === 'email-message disabled') {
      document.getElementById('email_message').classList.toggle('disabled');
    }
});