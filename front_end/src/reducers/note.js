import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  SET_NOTE_VALUE,
  SET_NOTE_COLOR,
  SET_NOTE_TITLE
} from '../actions/const';

const initialState = {
  notesArray: null
};

export default function noteReducers(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {...state, notesArray: action.notes};

    case ADD_NOTE:
      return {...state, notesArray: action.notes};

    case SET_NOTE_TITLE:
      return {...state, notesArray: action.notes};

    case SET_NOTE_VALUE:
      return {...state, notesArray: action.notes};

    case SET_NOTE_COLOR:
      return {...state, notesArray: action.notes};

    case DELETE_NOTE:
      return {...state, notesArray: action.notes};

    default:
      return state;
  }
}
