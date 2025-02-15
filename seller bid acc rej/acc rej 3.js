document.addEventListener("DOMContentLoaded", () => {
    const dynamicContent = document.getElementById("dynamicContent");
    const radioButtons = document.getElementsByName("acceptBid");
  
    // Function to render Accept Bid content
    function loadAcceptContent() {
      dynamicContent.innerHTML = `
        <div class="action-form">
          <p>Share your contact info:</p>
          <input type="text" placeholder="Enter your contact details here...">
          <button class="accept-btn">Accept Bid</button>
        </div>
      `;
    }
  
    // Function to render Reject Bid content
    function loadRejectContent() {
      dynamicContent.innerHTML = `
        <div class="action-form">
          <p>Do you like to share the reason for rejecting the bid?</p>
          <textarea placeholder="Enter your reason here..."></textarea>
          <button class="reject-btn">Reject Bid</button>
        </div>
      `;
    }
  
    // Event listener for radio button change
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.value === "yes") {
          loadAcceptContent();
        } else if (event.target.value === "no") {
          loadRejectContent();
        }
      });
    });
  
    // Load default Accept content on page load
    loadAcceptContent();
  });
  