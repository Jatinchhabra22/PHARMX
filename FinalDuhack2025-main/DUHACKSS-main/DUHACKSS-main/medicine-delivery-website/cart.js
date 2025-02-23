// Cart Functionality
let cart = [];

function addToCart(medicine) {
  cart.push(medicine);
  alert(`${medicine} added to cart!`);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.map((item) => `<li>${item}</li>`).join('');
}