// Login Functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful!');
          closeLogin();
        } else {
          document.getElementById('login-error').innerText = 'Invalid username or password';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }