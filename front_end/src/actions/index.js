import {
  addNote,
  deleteNote,
  setNoteValue,
  setNoteColor,
  setNoteTitle,
  getNotes
} from './note';

import {
  setEvent,
  getEvents,
  deleteEvent,
  getEditableEvent,
  editEvent
} from './event';

const actions = {
  addNote,
  deleteNote,
  setNoteColor,
  setNoteValue,
  setNoteTitle,
  getNotes,
  setEvent,
  getEvents,
  deleteEvent,
  getEditableEvent,
  editEvent
};
module.exports = actions;
