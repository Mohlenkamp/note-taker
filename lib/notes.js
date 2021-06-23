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
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
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
