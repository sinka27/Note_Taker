// Dependencies
const express = require('express');

const path = require('path');
// Point Server to the route files
const api = require('./routes/htmlRoutes.js');

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({extended:true}));
// Parse incoming JSON data
app.use(express.json());

app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});