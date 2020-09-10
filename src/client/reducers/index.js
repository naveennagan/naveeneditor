import { combineReducers } from 'redux';
import home from './home';
import string from './string';

const rootReducer = combineReducers({
  home,
  string
})

export default rootReducer;