document.querySelector('.sell-item-btn').addEventListener('click', () => {
    alert('Sell Item button clicked!');
  });
  
// Handle file upload interaction
document.querySelector('.upload-box').addEventListener('click', () => {
    document.querySelector('.file-input').click();
  });
  
  // File preview functionality
  document.querySelector('.file-input').addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`${files.length} file(s) selected for upload.`);
    } else {
      alert('No files selected.');
    }
  });
  
  // Clear all form inputs
  document.querySelector('.btn.clear').addEventListener('click', () => {
    document.getElementById('add-listing-form').reset();
    alert('All fields cleared!');
  });
  
  // OK button click functionality
  document.querySelector('.btn.red').addEventListener('click', () => {
    const form = document.getElementById('add-listing-form');
    if (form.checkValidity()) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  });
  
  // Currently no dynamic behavior, but script.js is ready for future enhancements
console.log('Orders Received Page Loaded');

document.querySelector('.add-range-btn').addEventListener('click', function () {
    const rangeGroup = document.querySelector('.range-group');
    const newRange = document.createElement('div');
    newRange.className = 'range';
  
    newRange.innerHTML = `
      <label>Price</label>
      <input type="number" placeholder="From">
      <span>KG</span>
      <span>TO</span>
      <input type="number" placeholder="To">
      <span>KG</span>
      <span>Rs</span>
      <input type="number" placeholder="Price">
      <button type="button" class="ok-btn">OK</button>
    `;
  
    rangeGroup.appendChild(newRange);
  });
  