// Get elements
const openSigninBtn = document.getElementById('openSigninBtn');
const signinPopup = document.getElementById('signinPopup');
const closeBtn = document.querySelector('.close-btn');

// Show the pop-up
openSigninBtn.addEventListener('click', () => {
  signinPopup.style.display = 'flex';
});
// Assuming you have jQuery included
$(document).ready(function() {
  $("#sign-in-button").click(function() {
    // Add your sign-in logic here, including verification check
    // If verification is successful, hide the popup and show the message:
    $("#verification-popup").hide();
    $("#verification-message").show();
  });

  $("#resend-verification-button").click(function() {
    // Add your logic to resend the verification email here
  });
});

// Close the pop-up
closeBtn.addEventListener('click', () => {
  signinPopup.style.display = 'none';
});
function showEmailVerificationPopup(event) {
  event.preventDefault(); // Prevent form submission
  
  // Replace Sign-In content with Email Verification content
  const signinPopup = document.getElementById('signinPopup');
  signinPopup.innerHTML = `
    <div class="popup-content">
      <button class="close-btn">&times;</button>
      <h2>Email Verification Required</h2>
      <p>
        To complete your registration, we’ve sent a verification link to your email.
      </p>
      <p>
        Didn’t receive the email? 
        <a href="#" id="resendEmailLink">Resend verification email</a>
        <button class="language-btn" onclick="window.location.href='file:///C:/Users/User/Desktop/Codes/home_page/home.html'">OK</button>
      </p>
    </div>
  `;

  // Add event listeners for the new UI
  document.querySelector('.close-btn').addEventListener('click', () => {
    signinPopup.style.display = 'none';
  });

  document.getElementById('resendEmailLink').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Verification email resent!');
  });
}
