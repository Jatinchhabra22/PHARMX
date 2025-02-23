// AI Doctor Chatbot Functionality
function sendMessage() {
    const input = document.getElementById('chatbot-input').value;
    const chatbox = document.getElementById('chatbot-messages');
  
    // Display user message
    chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  
    // Simulate AI response (replace with actual API call)
    fetch('/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        chatbox.innerHTML += `<p><strong>AI Doctor:</strong> ${data.response}</p>`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    // Clear input
    document.getElementById('chatbot-input').value = '';
  }