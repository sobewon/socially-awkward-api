const express = require('express');
const app = express();
const db = require('./config/connection')
const PORT = process.env.PORT || 3001;

//use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes in routes folder
app.use(require('./routes'));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});