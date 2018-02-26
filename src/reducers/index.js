import { combineReducers } from 'redux';
import ThoughtReducer from './ThoughtReducer';

export default combineReducers({
  thought: ThoughtReducer
});
