const fs = require("fs")
// db.json file will be used to store and retrieve notes using the fs module
const db = "..db/db.json"
const util = require('util');
const { request } = require("express");


// Exports function to use on different files
module.exports = function (app) {
    const userNotes = []
    // API GET Requests
    const asyncWriteFile = util.promisify(fs.writeFile)
    app.get("/api/notes", function (req, res) {
        fs.readFile(db, "utf8", function (err, data) {
            userNotes = (JSON.parse(data));
            console.log(userNotes)
            if (err) throw err;
            //Do operation on data that generates data
            return userNotes;
        });
        res.json(db);
    });


    app.post("/api/notes", (req, res) => {
        console.log(req.body)
        asyncWriteFile(db, JSON.stringify(req.body), function (err, data) {
            userNotes.push(data)
            if (err) console.log(err);
            res.json(userNotes)
        });
    });
}
