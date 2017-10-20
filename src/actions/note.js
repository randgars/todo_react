import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_NOTE_TITLE,
  SET_NOTE_VALUE,
  SET_NOTE_COLOR,
  GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTES_FAILURE
} from './const';

import axios from 'axios';

export function getNotes() {
  return (dispatch) => {
    dispatch({ type: GET_NOTES_REQUEST });
    const url = '../mock/notes.json';
    axios.get(url).then(
      (response) => {
        dispatch({ type: GET_NOTES_SUCCESS, notes: response.data });
      },
      (err) => {
        dispatch({ type: GET_NOTES_FAILURE });
      }
    )
    .catch((err) => {
      window.console.error(err);
    });
  };
}

export function addNote(key) {
  return { type: ADD_NOTE, note: { noteKey: key, noteValue: '', color: {r: 255, g: 255, b: 255, a: 1}, noteTitle: 'Note' } };
}

export function setNoteTitle(key, title) {
  return { type: SET_NOTE_TITLE, note: { noteKey: key, noteTitle: title } };
}

export function setNoteValue(key, value) {
  return { type: SET_NOTE_VALUE, note: { noteKey: key, noteValue: value } };
}

export function setNoteColor(key, bgColor) {
  return { type: SET_NOTE_COLOR, note: { noteKey: key, color: bgColor } };
}

export function deleteNote(key) {
  return { type: DELETE_NOTE, note: { noteKey: key } };
}