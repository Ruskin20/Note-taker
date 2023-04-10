
const path = require("path");
const newNotes = require("../db/db.json");
const fs = require("fs");
const uniqID = require("uniqid");

const app = require('express').Router();

//ROUTING
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(newNotes);
    });

    app.post("/api/notes", (req, res) => {
        req.body.id = uniqID();
        const notE = req.body;
        console.log("You added the following note", newNotes);
        newNotes.push(notE);
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(newNotes)
        );
        res.json(notE);
    });

    app.delete("/api/notes/:id", function (req, res) {
        const id = req.params.id;
        for (i = 0; i < newNotes.length; i++) {
            if (newNotes[i].id === id) {
                newNotes.splice(i, 1);
            }
        }
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(newNotes)
        );
        res.send(newNotes);
    });
};
