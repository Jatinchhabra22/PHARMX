// Signup Functionality
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Signup successful! Please login.');
          closeSignup();
        } else {
          document.getElementById('signup-error').innerText = data.message || 'Signup failed';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }