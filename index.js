function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.querySelector('.eye-icon');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.add('eye-icon-visible');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('eye-icon-visible');
  }
}
function validateForm() {
    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
    const fnameError = document.getElementById('fname-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
  
    let hasErrors = false;
  
    // Check if all fields are filled in
    if (fnameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === '') {
      hasErrors = true;
      fnameError.textContent = 'Please fill in all fields';
      emailError.textContent = 'Please fill in all fields';
      passwordError.textContent = 'Please fill in all fields';
      confirmPasswordError.textContent = 'Please fill in all fields';
    } else {
      // Validate full name
      if (fnameInput.value.trim() === '') {
        fnameError.textContent = 'Please enter your full name';
        hasErrors = true;
      } else {
        fnameError.textContent = '';
      }
  
      // Validate email
      if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        hasErrors = true;
      } else {
        emailError.textContent = '';
      }
  
      // Validate password
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter a password';
        hasErrors = true;
      } else {
        passwordError.textContent = '';
      }
  
      // Validate confirm password
      if (confirmPasswordInput.value.trim() === '' || confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Please enter the same password';
        hasErrors = true;
      } else {
        confirmPasswordError.textContent = '';
      }
    }
  
    return !hasErrors;
  }
  
  // Call the validateForm function when the form is submitted
  document.querySelector('form').addEventListener('submit', (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  }
);

function validateFormLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    let hasErrors = false;
  
    // Check if all fields are filled in
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      hasErrors = true;
      emailError.textContent = 'Please fill in all fields';
      passwordError.textContent = 'Please fill in all fields';
    } else {
      // Validate email
      if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        hasErrors = true;
      } else {
        emailError.textContent = '';
      }
  
      // Validate password
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter a password';
        hasErrors = true;
      } else {
        passwordError.textContent = '';
      }
    }
  
    return !hasErrors;
  }
  const loginButton = document.querySelector('input[type="submit"]');
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateFormLogin()) {
      return;
    }
    // If validation passes, submit the form
    document.querySelector('form').submit();
  });

const fnameInput = document.getElementById('fname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const fnameIcon = document.querySelector('i.fa.fa-user.icon');
const emailIcon1 = document.querySelector('i.fa.fa-envelope.icon');
const passwordIcon1 = document.querySelector('i.fa.fa-key.icon');

// Add event listeners to the input fields
fnameInput.addEventListener('input', () => {
  if (fnameInput.value.trim() !== '') {
    fnameIcon.classList.add('hide-icon');
  } else {
    fnameIcon.classList.remove('hide-icon');
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() !== '') {
    emailIcon1.classList.add('hide-icon');
  } else {
    emailIcon1.classList.remove('hide-icon');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.trim() !== '') {
    passwordIcon1.classList.add('hide-icon');
  } else {
    passwordIcon1.classList.remove('hide-icon');
  }
});
confirmPasswordInput.addEventListener('input', () => {
});
const signUpButton = document.querySelector('input[type="submit"]');
const emailIcon = document.querySelector('i.fa.fa-envelope.icon');
const passwordIcon = document.querySelector('i.fa.fa-key.icon');
signUpButton.addEventListener('click', () => {
  emailIcon.classList.add('active');
  passwordIcon.classList.add('active');
});
