// Medicine Database Functionality
let medicines = [];

// Fetch medicines from the backend
function loadMedicines() {
  fetch('/medicines')
    .then((response) => response.json())
    .then((data) => {
      medicines = data;
      displayMedicines(medicines); // Display all medicines initially
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Display medicines in the UI
function displayMedicines(medicines) {
  const medicineList = document.getElementById('medicine-list');
  medicineList.innerHTML = medicines
    .map(
      (medicine) => `
      <div class="medicine-card">
        <img src="${medicine.image}" alt="${medicine.name}">
        <h3>${medicine.name}</h3>
        <p>Price: ₹${medicine.price}</p>
        <p>Category: ${medicine.category}</p>
        <button onclick="addToCart('${medicine.name}')">Add to Cart</button>
      </div>
    `
    )
    .join('');
}

// Search medicines by name or category
function searchMedicines() {
  const searchTerm = document.getElementById('search-medicine').value.toLowerCase();
  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchTerm) ||
      medicine.category.toLowerCase().includes(searchTerm)
  );
  displayMedicines(filteredMedicines);
}

// Add event listener for search input
document.getElementById('search-medicine').addEventListener('input', searchMedicines);

// Load medicines on page load
window.onload = loadMedicines;