// JavaScript for Carousel
let currentIndex = 0;

// Get all carousel items and buttons
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to show the current item
function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) {
            item.classList.add("active");
        }
    });
}

// Add event listeners to buttons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

// Auto-play carousel (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}, 5000); // Change every 5 seconds
