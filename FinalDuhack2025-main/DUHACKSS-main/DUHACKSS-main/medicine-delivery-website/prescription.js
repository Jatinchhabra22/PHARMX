// Prescription Upload Functionality
function uploadPrescription() {
    const fileInput = document.getElementById('prescription-file');
    const file = fileInput.files[0];
  
    const formData = new FormData();
    formData.append('prescription', file);
  
    fetch('/upload-prescription', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Prescription uploaded successfully!');
        } else {
          alert('Failed to upload prescription.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }