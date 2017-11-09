const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
  db.get().collection('notes').find().toArray(function (err, docs) {
    cb(err, docs)
  })
}

exports.findById = function (id, cb) {
  const objectId = { '_id': new ObjectID(id) };
  db.get().collection('notes').findOne(objectId, function  (err, item) {
    cb(err, item)
  })
}
  
exports.create = function (item, cb) {
  db.get().collection('notes').insert(item, function  (err, result) {
    cb(err, result)
  })
}

exports.update = function (id, newData, cb) {
  const objectId = { '_id': new ObjectID(id) };
  db.get().collection('notes').updateOne(objectId, newData, function  (err, result) {
    cb(err, result)
  })
}

exports.delete = function (id, cb) {
  const objectId = { '_id': new ObjectID(id) };
  db.get().collection('notes').deleteOne(objectId, function  (err, result) {
    cb(err, result)
  })
}