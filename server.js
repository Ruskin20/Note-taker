// Dependencies
const express = require('express');

// Port
const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connects "public" folder to server.js
app.use(express.static('public'));

// Routes
require('./routes/ApiRoutes')(app);
require('./routes/HtmlRoutes')(app);

//Port Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
