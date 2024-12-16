// Open the sign-up pop-up
document.getElementById('openSignupBtn').addEventListener('click', () => {
  document.getElementById('signupPopup').style.display = 'flex';
});

// Close the pop-up
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('signupPopup').style.display = 'none';
});
