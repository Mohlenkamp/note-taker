const fs = require('fs');
const path = require('path');


// function filterByQuery(query, animalsArray) {
//   let personalityTraitsArray = [];
//   let filteredResults = animalsArray;
//   if (query.personalityTraits) {
//     if (typeof query.personalityTraits === 'string') {
//       personalityTraitsArray = [query.personalityTraits];
//     } else {
//       personalityTraitsArray = query.personalityTraits;
//     }
//     console.log(personalityTraitsArray);
//     personalityTraitsArray.forEach(trait => {
//       filteredResults = filteredResults.filter(
//         animal => animal.personalityTraits.indexOf(trait) !== -1
//       );
//     });
//   }
//   if (query.diet) {
//     filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
//   }
//   if (query.species) {
//     filteredResults = filteredResults.filter(animal => animal.species === query.species);
//   }
//   if (query.name) {
//     filteredResults = filteredResults.filter(animal => animal.name === query.name);
//   }
//   return filteredResults;
// }

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function removeNote(notesArray, id){

    var index = notesArray.indexOf(id);
    if (id > -1) {
      notesArray.splice(index, 1);
    }
    return notesArray;
  }

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
    //filterByQuery,
    findById,
    removeNote,
    createNewNote,
    validateNote
  };
