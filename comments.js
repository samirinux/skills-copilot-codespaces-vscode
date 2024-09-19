// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Importing the comments array from the comments.js file
const comments = require('./comments.js');

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});