import { combineReducers } from 'redux';
import ThoughtReducer from './ThoughtReducer';

export default combineReducers({
  thoughts: ThoughtReducer
});
