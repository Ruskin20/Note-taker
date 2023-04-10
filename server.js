const express = require('express');
const fs = require('fs');
const path = require('path');

// Port
const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/ApiRoutes')(app);
require('./routes/HtmlRoutes')(app);

//Port Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
