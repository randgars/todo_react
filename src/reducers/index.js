import { combineReducers } from 'redux';
import note from './note'
import event from './event'

const reducers = {
  event
};
const combined = combineReducers(reducers);
module.exports = combined;
