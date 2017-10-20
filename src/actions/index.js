import {
  addNote,
  deleteNote,
  setNoteValue,
  setNoteColor,
  setNoteTitle,
  getNotes,
} from './note';

import {
  addEvent
} from './event';

const actions = {
  addNote,
  deleteNote,
  setNoteColor,
  setNoteValue,
  setNoteTitle,
  getNotes,
  addEvent
};
module.exports = actions;
