// Payment Functionality
function processPayment() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
  
    fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardNumber, expiryDate, cvv }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Payment successful!');
        } else {
          alert('Payment failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }