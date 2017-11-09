import { combineReducers } from 'redux';
import note from './note'
import event from './event'

const reducers = {
  event,
  note
};
const combined = combineReducers(reducers);
module.exports = combined;
