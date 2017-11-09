import {
  SET_EVENT,
  GET_EVENTS,
  PUT_EVENT,
  DELETE_EVENT,
  GET_EDITABLE_EVENT
} from './const';

import history from '../sources/history';
import moment from 'moment';

function convertToDate(events) {
  const eventsArray = events;
  if (eventsArray.length !== 0) {
    for (let i = 0; i < eventsArray.length; i++) {
      eventsArray[i].start = new Date(eventsArray[i].start)
      eventsArray[i].end = new Date(eventsArray[i].end)
    }
  }
  return eventsArray;
}

export function getEvents() {
  return (dispatch) => {
    let eventsArray = localStorage.getItem('events');
    if (!eventsArray) {
      eventsArray = localStorage.setItem('events', '[]')
    }
    eventsArray = JSON.parse(eventsArray);
    eventsArray = convertToDate(eventsArray);
    dispatch({ type: GET_EVENTS, events: eventsArray });
  };
}

export function setEvent(eventObj) {
  return (dispatch) => {
    const event = {
      id: Math.random().toString(36).substr(2, 9),
      title: eventObj.title,
      allDay: eventObj.allDay,
      start: eventObj.start,
      end: eventObj.end
    }
    let eventsArray = JSON.parse(localStorage.getItem('events'));
    eventsArray.push(event);
    localStorage.setItem('events', JSON.stringify(eventsArray))
    history.push('/events');
    eventsArray = convertToDate(eventsArray);
    dispatch({ type: SET_EVENT, events: eventsArray });
  };
}

export function deleteEvent(eventId) {
  return (dispatch) => {
    let eventsArray = JSON.parse(localStorage.getItem('events'));
    for (let i = 0; i < eventsArray.length; i++) {
      if (eventsArray[i].id === eventId) {
        eventsArray.splice(i, 1)
      }
    }
    localStorage.setItem('events', JSON.stringify(eventsArray))
    eventsArray = convertToDate(eventsArray);
    dispatch({ type: DELETE_EVENT, events: eventsArray });
  };
}

export function getEditableEvent(eventId) {
  return (dispatch) => {
    const eventsArray = JSON.parse(localStorage.getItem('events'));
    let event;
    for (let i = 0; i < eventsArray.length; i++) {
      if (eventsArray[i].id === eventId) {
        event = eventsArray[i];
      }
    }

    const startDate = moment(event.start).format('MM/DD/YYYY')
    const endDate = moment(event.end).format('MM/DD/YYYY')

    const newEvent = {
      id: eventId,
      title: event.title,
      allDay: event.allDay,
      startDate: startDate,
      endDate: endDate
    }
    dispatch({ type: GET_EDITABLE_EVENT, event: newEvent });
  };
}

export function editEvent(event) {
  return (dispatch) => {
    let eventsArray = JSON.parse(localStorage.getItem('events'));
    for (let i = 0; i < eventsArray.length; i++) {
      if (eventsArray[i].id === event.id) {
        eventsArray[i].title = event.title;
        eventsArray[i].allDay = event.allDay;
        eventsArray[i].start = event.start;
        eventsArray[i].end = event.end;
      }
    }
    debugger
    localStorage.setItem('events', JSON.stringify(eventsArray))
    history.push('/events');
    eventsArray = convertToDate(eventsArray);
    dispatch({ type: PUT_EVENT, events: eventsArray });
  };
}