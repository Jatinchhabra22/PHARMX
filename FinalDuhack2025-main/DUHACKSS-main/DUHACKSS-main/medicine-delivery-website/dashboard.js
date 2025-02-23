// Dashboard Functionality
function loadDashboard() {
    fetch('/dashboard')
      .then((response) => response.json())
      .then((data) => {
        const orderHistory = document.getElementById('order-history');
        const savedAddresses = document.getElementById('saved-addresses');
  
        orderHistory.innerHTML = data.orders
          .map((order) => `<p>Order ID: ${order.id}, Status: ${order.status}</p>`)
          .join('');
  
        savedAddresses.innerHTML = data.addresses
          .map((address) => `<p>${address}</p>`)
          .join('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }