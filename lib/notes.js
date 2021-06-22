const fs = require('fs');
const path = require('path');





function createNewNote(body, notesArray) {
    // adding a new note
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../data/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  }

  function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
      return false;
    }
    if (!animal.species || typeof animal.species !== 'string') {
      return false;
    }
    if (!animal.diet || typeof animal.diet !== 'string') {
      return false;
    }
    if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
      return false;
    }
    return true;
  }

  module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
  };
