const router = require('express').Router();
const { filterByQuery, findById, createNewNote, removeNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
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
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete('/notes/:id', (req, res) => {
    // TODO:
  const id = req.params.id
  res.json(removeNote(req.body, id))
    // get note based on id param
    // req.body.id = findById(req.params.id, notes);
  
    // if (!validateNote(req.body)) {
    //   res.status(400).send('The note is not properly formatted.');
    // } else {
    //   const note = createNewNote(req.body, notes);
    //   res.json(note);
    // }
  });

module.exports = router;
