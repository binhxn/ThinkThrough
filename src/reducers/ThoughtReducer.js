import {
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4
} from '../actions/types';

const INITIAL_STATE = {
  thoughts: [],
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ANSWER_1:
      return { ...state, answer1: action.answer1 };

    case UPDATE_ANSWER_2:
      return { ...state, answer1: action.answer2 };

    case UPDATE_ANSWER_3:
      return { ...state, answer1: action.answer3 };

    case UPDATE_ANSWER_4:
      return { ...state, answer1: action.answer4 };

    default:
      return state;
  }
};
