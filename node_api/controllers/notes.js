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
  const note = {
    text: req.body.body,
    title: req.body.title
  };
  Notes.create(note, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.send(note);
  })
}

exports.update = function (req, res) {
  const note = {
    text: req.body.body,
    title: req.body.title
  };
  Notes.update(req.params.id, note, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500)
    }
    res.sendStatus(200);
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