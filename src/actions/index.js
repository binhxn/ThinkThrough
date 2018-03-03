import {
  LOG_HELLO,
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4
} from './types';

export const logHello = () => {
  return {
    type: LOG_HELLO
  };
};

export const updateAnswer1 = answer1 => {
  return {
    type: UPDATE_ANSWER_1,
    answer1
  };
};
