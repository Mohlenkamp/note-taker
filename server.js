// John Mohlenkamp
// Assignment 11: Note Taker
// 
//

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db.json');

const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});