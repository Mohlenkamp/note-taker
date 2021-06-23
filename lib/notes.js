
const { v4: uuidv4 } = require('uuid');  // unique id generator
const fs = require('fs');  // file system
const path = require('path');  // dir path


function findById(id, notes) {
  const result = notes.filter(note => note.id === id)[0];
  return result;
}

function removeNote(notes, id){
  let result = notes;
  // I tried using findIndex and indexOf but neither would work
  // so I resorted to doing it the hard way.

for (let i = notes.length - 1; i >= 0; --i) {
  if (notes[i].id === id) {
    //console.log("found match at i = " + i)
    result = notes.splice(i,1);
    //console.log(result)
  }
}  // Now write new array back to db.json
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)  // add 2 spaces to make it more readable
    );
    return notes
}


function createNewNote(body, notes) {
  // adding a new note
    notes.push(body);
  // save it to file
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)  // add 2 spaces to make it more readable
    );
    return notes;
  }

  function validateNote(note) {
    // tests to make sure note has a title, and some text
    // if (!note.id){
    //   return false
    // }
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
       return true;
  }

  module.exports = {
    findById,
    removeNote,
    createNewNote,
    validateNote
  };
