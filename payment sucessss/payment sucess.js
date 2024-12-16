const popup = document.getElementById('emailVerificationPopup');
const closeBtn = document.querySelector('.close-btn');
const resendEmailLink = document.getElementById('resendEmailLink');

// Close pop-up
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Resend email link functionality
resendEmailLink.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Verification email resent!');
});