import {
  LOG_HELLO,
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  thoughts: [],
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_HELLO:
      let titles = [
        'SUP BITCH',
        'YA FEEL ME',
        'THATS RIGHT SON',
        'POTATO',
        'MEOWMEOW'
      ];
      let randomTitle = titles[Math.floor(Math.random() * titles.length)];

      return { ...state, title: randomTitle };

    case UPDATE_ANSWER_1:
      return { ...state, answer1: action.answer1 };

    default:
      return state;
  }
};
