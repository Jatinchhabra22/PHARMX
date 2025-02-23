// Smooth scrolling
function scrollToServices() {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Login Modal
  function openLogin() {
    document.getElementById('login-modal').style.display = 'block';
  }
  
  function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
  }
  
  // Signup Modal
  function openSignup() {
    document.getElementById('signup-modal').style.display = 'block';
  }
  
  function closeSignup() {
    document.getElementById('signup-modal').style.display = 'none';
  }
  
  // Dashboard Modal
  function openDashboard() {
    document.getElementById('dashboard-modal').style.display = 'block';
    loadDashboard();
  }
  
  function closeDashboard() {
    document.getElementById('dashboard-modal').style.display = 'none';
  }
  
  // Add to Cart
  function addToCart(medicine) {
    alert(`${medicine} added to cart!`);
  }