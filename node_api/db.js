const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
};

exports.connect = function (url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url)
    .then(db => {
      state.db = db;
      done();
    },
    err => {
      done(err)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.get = function () {
  return state.db;
}