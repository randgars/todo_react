const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 8080;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect('mongodb://localhost:27017/todoapi', (err) => {
  if (err) {
    return console.log(err)
  }
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('Server started on ' + port);
  });
})

