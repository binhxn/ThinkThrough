import {
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4,
  UPDATE_EMOTION
} from './types';

export const updateAnswer1 = answer1 => {
  return {
    type: UPDATE_ANSWER_1,
    answer1
  };
};

export const updateAnswer2 = answer2 => {
  return {
    type: UPDATE_ANSWER_2,
    answer2
  };
};

export const updateAnswer3 = answer3 => {
  return {
    type: UPDATE_ANSWER_3,
    answer3
  };
};

export const updateAnswer4 = answer4 => {
  return {
    type: UPDATE_ANSWER_4,
    answer4
  };
};

export const updateEmotion = emotion => {
  return {
    type: UPDATE_EMOTION,
    emotion
  };
};
