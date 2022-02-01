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



module.exports = apiRouter;
