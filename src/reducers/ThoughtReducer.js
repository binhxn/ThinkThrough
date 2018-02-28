import { LOG_HELLO } from '../actions/types';

const INITIAL_STATE = {
  title: ''
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
    default:
      return state;
  }
};
