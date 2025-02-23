// Order Tracking Functionality
function trackOrder(orderId) {
    fetch(`/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => {
        const orderStatus = document.getElementById('order-status');
        orderStatus.innerHTML = `<p>Order ID: ${data.id}</p><p>Status: ${data.status}</p>`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }