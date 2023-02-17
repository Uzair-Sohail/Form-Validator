const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // Get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirm_passwordValue = confirm_password.value.trim();
  
  let valid = true;
  
  // Check the username
  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    valid = false;
  } else {
    setSuccessFor(username);
  }
  
  // Check the email
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    valid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
    valid = false;
  } else {
    setSuccessFor(email);
  }
  
  // Check the password
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    valid = false;
  } else {
    setSuccessFor(password);
  }
  
  // Check the confirm password
  if (confirm_passwordValue === '') {
    setErrorFor(confirm_password, 'Confirm password cannot be blank');
    valid = false;
  } else if (passwordValue !== confirm_passwordValue) {
    setErrorFor(confirm_password, 'Passwords do not match');
    valid = false;
  } else {
    setSuccessFor(confirm_password);
  }
  
  if (valid) {
    form.submit();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control';
}

function isEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
