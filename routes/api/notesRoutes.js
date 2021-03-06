const router = require('express').Router();
const { filterByQuery, findById, createNewNote, removeNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');  // unique id generator

router.get('/notes', (req, res) => {
  // just displaying all of the notes, so we don't filter
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.status(400).send('The note was not found.');
  }
});

router.post('/notes', (req, res) => {
  // set id based on uuid random number
  req.body.id = uuidv4();   
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    //console.log("send to create new note")
    createNewNote(req.body, notes);
    res.json(notes);
  }
});

router.delete('/notes/:id', (req, res) => {
    // Remove a note when the trash can is clicked
  const id = req.params.id
  res.json(removeNote(notes, id))
  });

module.exports = router;
