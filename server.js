const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes in routes folder
app.use(require('./routes'));



//open connection
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});