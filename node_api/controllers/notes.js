const Notes = require('../models/notes');

exports.all = function (req, res) {
  Notes.all(function (err, items) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(items)
  })
}

exports.findById = function (req, res) {
  Notes.findById(req.params.id, function (err, item) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(item)
  })
}

exports.create = function (req, res) {
  const data = {
    noteValue: req.body.noteValue,
    color: req.body.color,
    noteTitle: req.body.noteTitle
  };
  Notes.create(data, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(data);
  })
}

exports.update = function (req, res) {
  const id = req.params.id;
  Notes.findById(id, function (err, item) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    for (let key in req.body) {
      item[key] = req.body[key]
    }

    Notes.update(id, item, function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500)
      }
      res.send(item);
    })
  })
}

exports.delete = function (req, res) {
  Notes.delete(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.sendStatus(200);
  })
}