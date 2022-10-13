'use strict'

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send('<h1>Proof of Life</h1>');
});


app.listen(PORT, () => {
  console.log('App is listening on port :: ' + PORT);
});
