import {
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4,
  UPDATE_EMOTION,
  CONCAT_THOUGHT,
  ADD_THOUGHT
} from '../actions/types';

const INITIAL_STATE = {
  thoughts: [],
  finalThoughts: '',
  emotion: '',
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
      return { ...state, answer2: action.answer2 };

    case UPDATE_ANSWER_3:
      return { ...state, answer3: action.answer3 };

    case UPDATE_ANSWER_4:
      return { ...state, answer4: action.answer4 };

    case UPDATE_EMOTION:
      return { ...state, emotion: action.emotion };

    case CONCAT_THOUGHT:
      return { ...state, finalThoughts: action.thought };

    case ADD_THOUGHT:
      return {
        ...state,
        // Pushes object to array immutably
        thoughts: state.thoughts.concat({
          thought: action.thought,
          date: action.date
        })
      };

    default:
      return state;
  }
};
