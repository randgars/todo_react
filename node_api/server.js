const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect('mongodb://localhost:27017/testapi', (err) => {
  if (err) {
    return console.log(err)
  }
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('Server started on ' + port);
  });
})

