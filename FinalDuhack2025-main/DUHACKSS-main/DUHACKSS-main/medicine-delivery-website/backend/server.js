const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Load databases
const medicines = JSON.parse(fs.readFileSync('./backend/database.json'));
const users = JSON.parse(fs.readFileSync('./backend/users.json'));
const orders = JSON.parse(fs.readFileSync('./backend/orders.json'));
const blogPosts = JSON.parse(fs.readFileSync('./backend/blog.json'));
const reviews = JSON.parse(fs.readFileSync('./backend/reviews.json'));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    res.json({ success: false, message: 'Username already exists' });
  } else {
    users.push({ username, password });
    fs.writeFileSync('./backend/users.json', JSON.stringify(users));
    res.json({ success: true });
  }
});

// Get medicines
app.get('/medicines', (req, res) => {
  res.json(medicines);
});

// Get blog posts
app.get('/blog', (req, res) => {
  res.json(blogPosts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});