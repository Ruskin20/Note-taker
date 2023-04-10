
//The Path module provides a way of working with directories and file paths.
const path = require("path")
// Adding routes
module.exports = function (app) {

    app.get("/", (req, res) => {
        res.sendFile((path.join)(__dirname, "..public/index.html"));
    });

    // respond with "notes.html" when a GET request is made to the homepage
    app.get("/notes", (req, res) => {
        res.sendFile((path.join)(__dirname, "../public/notes.html"));
    });
    //Return to home if no route is found
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}