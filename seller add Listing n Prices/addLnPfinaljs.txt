// DOM Elements
const addPricesBtn = document.getElementById('addPricesBtn');
const addPricesSection = document.getElementById('add-prices-section');

// Load Add Prices Section Dynamically
addPricesBtn.addEventListener('click', () => {
  if (!addPricesSection.innerHTML) {
    fetch('seller add price.html')
      .then(response => response.text())
      .then(data => {
        addPricesSection.innerHTML = data;
        attachPriceRangeHandlers();
      })
      .catch(error => console.error('Error loading Add Prices Section:', error));
  }
});

// Add functionality to handle dynamic price ranges inside the Add Prices Section
function attachPriceRangeHandlers() {
  const addRangeBtn = document.querySelector('.add-range-btn');
  const rangeGroup = document.querySelector('.range-group');

  addRangeBtn.addEventListener('click', () => {
    const newRange = document.createElement('div');
    newRange.className = 'range';
    newRange.innerHTML = `
      <label>Price</label>
      <input type="number" name="price_from[]" placeholder="From" required>
      <span>KG</span>
      <span>TO</span>
      <input type="number" name="price_to[]" placeholder="To" required>
      <span>KG</span>
      <span>Rs</span>
      <input type="number" name="range_price[]" placeholder="Price" required>
    `;
    rangeGroup.appendChild(newRange);
  });
}
