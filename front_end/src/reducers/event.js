import {
  GET_EVENTS,
  SET_EVENT,
  DELETE_EVENT,
  GET_EDITABLE_EVENT,
  PUT_EVENT
} from '../actions/const';

const initialState = {
  eventsArray: [],
  editableEvent: null
};

export default function eventReducers(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {...state, eventsArray: action.events};

    case SET_EVENT:
      return {...state, eventsArray: action.events};

    case DELETE_EVENT:
      return {...state, eventsArray: action.events};

    case GET_EDITABLE_EVENT:
      return {...state, editableEvent: action.event};

    case PUT_EVENT:
      return {...state, editableEvent: null, eventsArray: action.events};

    default:
      return state;
  }
}
