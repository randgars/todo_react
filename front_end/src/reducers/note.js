import {
  GET_NOTES_SUCCESS, GET_NOTES_FAILURE,
  ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE,
  DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILURE,
  SET_NOTE_TITLE_SUCCESS, SET_NOTE_TITLE_FAILURE,
  SET_NOTE_VALUE_SUCCESS, SET_NOTE_VALUE_FAILURE,
  SET_NOTE_COLOR_SUCCESS, SET_NOTE_COLOR_FAILURE
} from '../actions/const';

const initialState = {
  notesArray: null,
  error: null
};

export default function noteReducers(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES_SUCCESS:
      return {...state, notesArray: action.notes, error: null };
    case GET_NOTES_FAILURE:
      return {...state, error: action.error};

    case ADD_NOTE_SUCCESS:
      return {...state, error: null, notesArray: state.notesArray};
    case ADD_NOTE_FAILURE:
      return {...state, error: action.error};

    case DELETE_NOTE_SUCCESS:
      return {...state, error: null};
    case DELETE_NOTE_FAILURE:
      return {...state, error: action.error};

    case SET_NOTE_TITLE_SUCCESS:
      return {...state, error: null};
    case SET_NOTE_TITLE_FAILURE:
      return {...state, error: action.error};

    case SET_NOTE_VALUE_SUCCESS:
      return {...state, error: null};
    case SET_NOTE_VALUE_FAILURE:
      return {...state, error: action.error};

    case SET_NOTE_COLOR_SUCCESS:
      return {...state, error: null};
    case SET_NOTE_COLOR_FAILURE:
      return {...state, error: action.error};

    default:
      return state;
  }
}
