import {
  GET_NOTES_SUCCESS,
  ADD_NOTE,
  DELETE_NOTE,
  SET_NOTE_VALUE,
  SET_NOTE_COLOR,
  SET_NOTE_TITLE
} from '../actions/const';

const initialState = {
  notesArray: []
};

export default function noteReducers(state = initialState, action) {
  let tempNotesArray = [];
  switch (action.type) {
    case GET_NOTES_SUCCESS:
      return {...state, notesArray: action.notes};

    case ADD_NOTE:
      return {...state, notesArray: [...state.notesArray, action.note]};

    case SET_NOTE_TITLE:
      tempNotesArray = Object.assign([], state.notesArray);
      for (let i = 0; i < tempNotesArray.length; i++) {
        if (tempNotesArray[i].noteKey === action.note.noteKey) {
          tempNotesArray[i].noteTitle = action.note.noteTitle;
        }
      }
      return {...state, notesArray: tempNotesArray};

    case SET_NOTE_VALUE:
      tempNotesArray = Object.assign([], state.notesArray);
      for (let i = 0; i < tempNotesArray.length; i++) {
        if (tempNotesArray[i].noteKey === action.note.noteKey) {
          tempNotesArray[i].noteValue = action.note.noteValue;
        }
      }
      return {...state, notesArray: tempNotesArray};

    case SET_NOTE_COLOR:
      tempNotesArray = Object.assign([], state.notesArray);
      for (let i = 0; i < tempNotesArray.length; i++) {
        if (tempNotesArray[i].noteKey === action.note.noteKey) {
          tempNotesArray[i].color = action.note.color;
        }
      }
      return {...state, notesArray: tempNotesArray};

    case DELETE_NOTE:
      tempNotesArray = Object.assign([], state.notesArray);
      for (let i = 0; i < tempNotesArray.length; i++) {
        if (tempNotesArray[i].noteKey === action.note.noteKey) {
          tempNotesArray.splice(i, 1);
        }
      }
      return {...state, notesArray: tempNotesArray};

    default:
      return state;
  }
}
