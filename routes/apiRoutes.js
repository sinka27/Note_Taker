// Dependencies
const fs = require("fs");
const apiRouter = require("express").Router();
// const path = require('path');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

const uuid = require('../helpers/uuid');


// GET Route for retrieving all the notes
apiRouter.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting a note
apiRouter.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (req.body) {
    // Variable for the object will save
    const newNote = {
        title,
        text,
        id: uuid()+uuid(),
    };
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.json('Error in adding new Note');
  }
});




module.exports = apiRouter;
