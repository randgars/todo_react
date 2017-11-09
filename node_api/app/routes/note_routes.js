const ObjectID = require('mongodb').ObjectID;
const notesController = require('../../controllers/notes')

module.exports = function(app, db) {
  app.get('/notes', notesController.all);

  app.get('/notes/:id', notesController.findById);

  app.post('/notes', notesController.create);

  app.put('/notes/:id', notesController.update);

  app.delete('/notes/:id', notesController.delete);
};