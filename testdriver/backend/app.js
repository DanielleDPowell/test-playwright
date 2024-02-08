// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Sending a response
});

// Starting the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
