import { LOG_HELLO } from '../actions/types';

const INITIAL_STATE = {
  title: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_HELLO:
      return { ...state, title: 'SUP' };
    default:
      return state;
  }
};
