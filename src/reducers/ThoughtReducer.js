import { LOG_HELLO } from '../actions/types';

const INITIAL_STATE = {
  text: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_HELLO:
      return { ...state, text: 'SUP' };
    default:
      return state;
  }
};
