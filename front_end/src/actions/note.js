import {
  ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE,
  DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILURE,
  SET_NOTE_TITLE_REQUEST, SET_NOTE_TITLE_SUCCESS, SET_NOTE_TITLE_FAILURE,
  SET_NOTE_VALUE_REQUEST, SET_NOTE_VALUE_SUCCESS, SET_NOTE_VALUE_FAILURE,
  SET_NOTE_COLOR_REQUEST, SET_NOTE_COLOR_SUCCESS, SET_NOTE_COLOR_FAILURE,
  GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTES_FAILURE
} from './const';

import axios from 'axios'

export function getNotes() {
  return (dispatch) => {
    dispatch({ type: GET_NOTES_REQUEST });
    axios.get('http://localhost:8080/notes')
      .then(res => {
        dispatch({ type: GET_NOTES_SUCCESS, notes: res.data });
      },
      err => {
        dispatch({ type: GET_NOTES_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}

export function addNote() {
  return (dispatch) => {
    const data = {
      noteValue: '',
      color: {r: 255, g: 255, b: 255, a: 1},
      noteTitle: 'Note'
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch({ type: ADD_NOTE_REQUEST });
    axios.post('http://localhost:8080/notes/add', data, config)
      .then(res => {
        dispatch({ type: ADD_NOTE_SUCCESS });
        dispatch(getNotes())
      },
      err => {
        dispatch({ type: ADD_NOTE_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}

export function setNoteTitle(id, title) {
  return (dispatch) => {
    const data = {
      noteTitle: title
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch({ type: SET_NOTE_TITLE_REQUEST });
    axios.put(`http://localhost:8080/notes/update/${id}`, data, config)
      .then(res => {
        dispatch({ type: SET_NOTE_TITLE_SUCCESS });
        dispatch(getNotes())
      },
      err => {
        dispatch({ type: SET_NOTE_TITLE_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}

export function setNoteValue(id, value) {
  return (dispatch) => {
    const data = {
      noteValue: value
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch({ type: SET_NOTE_VALUE_REQUEST });
    axios.put(`http://localhost:8080/notes/update/${id}`, data, config)
      .then(res => {
        dispatch({ type: SET_NOTE_VALUE_SUCCESS });
        dispatch(getNotes())
      },
      err => {
        dispatch({ type: SET_NOTE_VALUE_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}

export function setNoteColor(id, bgColor) {
  return (dispatch) => {
    const data = {
      color: bgColor
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch({ type: SET_NOTE_COLOR_REQUEST });
    axios.put(`http://localhost:8080/notes/update/${id}`, data, config)
      .then(res => {
        dispatch({ type: SET_NOTE_COLOR_SUCCESS });
        dispatch(getNotes())
      },
      err => {
        dispatch({ type: SET_NOTE_COLOR_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}

export function deleteNote(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_NOTE_REQUEST });
    axios.delete(`http://localhost:8080/notes/delete/${id}`)
      .then(res => {
        dispatch({ type: DELETE_NOTE_SUCCESS });
        dispatch(getNotes())
      },
      err => {
        dispatch({ type: DELETE_NOTE_FAILURE, error: err });
      })
      .catch(err => {
        window.console.log(err)
      })
  };
}