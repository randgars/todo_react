import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_NOTE_TITLE,
  SET_NOTE_VALUE,
  SET_NOTE_COLOR,
  GET_NOTES
} from './const';

export function getNotes() {
  return (dispatch) => {
    let notesArray = localStorage.getItem('notes');
    if (!notesArray) {
      notesArray = localStorage.setItem('notes', '[]')
    }
    dispatch({ type: GET_NOTES, notes: JSON.parse(notesArray) });
  };
}

export function addNote(key) {
  return (dispatch) => {
    const note = {
      noteKey: key,
      noteValue: '',
      color: {r: 255, g: 255, b: 255, a: 1},
      noteTitle: 'Note'
    }
    const notesArray = JSON.parse(localStorage.getItem('notes'));
    notesArray.push(note);
    localStorage.setItem('notes', JSON.stringify(notesArray))
    dispatch({ type: ADD_NOTE, notes: notesArray });
  };
}

export function setNoteTitle(key, title) {
  return (dispatch) => {
    const notesArray = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].noteKey === key) {
        notesArray[i].noteTitle = title;
      }
    }
    localStorage.setItem('notes', JSON.stringify(notesArray))
    dispatch({ type: SET_NOTE_TITLE, notes: notesArray });
  };
}

export function setNoteValue(key, value) {
  return (dispatch) => {
    const notesArray = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].noteKey === key) {
        notesArray[i].noteValue = value;
      }
    }
    localStorage.setItem('notes', JSON.stringify(notesArray))
    dispatch({ type: SET_NOTE_VALUE, notes: notesArray });
  };
}

export function setNoteColor(key, bgColor) {
  return (dispatch) => {
    const notesArray = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].noteKey === key) {
        notesArray[i].color = bgColor;
      }
    }
    localStorage.setItem('notes', JSON.stringify(notesArray))
    dispatch({ type: SET_NOTE_COLOR, notes: notesArray });
  };
}

export function deleteNote(key) {
  return (dispatch) => {
    const notesArray = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].noteKey === key) {
        notesArray.splice(i, 1);
      }
    }
    localStorage.setItem('notes', JSON.stringify(notesArray))
    dispatch({ type: DELETE_NOTE, notes: notesArray });
  };
}