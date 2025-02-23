// Blog Functionality
function loadBlogPosts() {
    fetch('/blog')
      .then((response) => response.json())
      .then((data) => {
        const blogPosts = document.getElementById('blog-posts');
        blogPosts.innerHTML = data
          .map(
            (post) => `
            <div class="blog-post">
              <h3>${post.title}</h3>
              <img src="${post.image}" alt="${post.title}">
              <p>${post.content}</p>
            </div>
          `
          )
          .join('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Load blog posts on page load
  window.onload = loadBlogPosts;