// Reviews and Ratings Functionality
let reviews = [];

// Fetch reviews from the backend
function loadReviews() {
  fetch('/reviews')
    .then((response) => response.json())
    .then((data) => {
      reviews = data;
      displayReviews(reviews); // Display all reviews initially
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Display reviews in the UI
function displayReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = reviews
    .map(
      (review) => `
      <div class="review-card">
        <h3>${review.medicine}</h3>
        <p>Rating: ${'⭐'.repeat(review.rating)}</p>
        <p>${review.review}</p>
        <p><em>By: ${review.user}</em></p>
      </div>
    `
    )
    .join('');
}

// Submit a new review
function submitReview() {
  const medicine = document.getElementById('review-medicine').value;
  const rating = document.getElementById('review-rating').value;
  const reviewText = document.getElementById('review-text').value;
  const user = 'Anonymous'; // Replace with logged-in user's name

  if (!medicine || !rating || !reviewText) {
    alert('Please fill out all fields.');
    return;
  }

  const newReview = {
    medicine,
    rating: parseInt(rating),
    review: reviewText,
    user,
  };

  fetch('/submit-review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReview),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Review submitted successfully!');
        loadReviews(); // Reload reviews
      } else {
        alert('Failed to submit review.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Add event listener for review submission
document.getElementById('submit-review-btn').addEventListener('click', submitReview);

// Load reviews on page load
window.onload = loadReviews;