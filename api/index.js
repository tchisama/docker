// Import the express module
const express = require('express');
const cors = require("cors")

// Create an instance of the express application
const app = express();
app.use(cors())

// Define a route for the root path
app.get('/', (req, res) => {
  // Send a "Hello, World!" response
  res.send('Hello, World!');
});

// Set the server to listen on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
