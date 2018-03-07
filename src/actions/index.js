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
    answer1: answer1.toLowerCase()
  };
};

export const updateAnswer2 = answer2 => {
  return {
    type: UPDATE_ANSWER_2,
    answer2: answer2.toLowerCase()
  };
};

export const updateAnswer3 = answer3 => {
  return {
    type: UPDATE_ANSWER_3,
    answer3: answer3.toLowerCase()
  };
};

export const updateAnswer4 = answer4 => {
  return {
    type: UPDATE_ANSWER_4,
    answer4: answer4.toLowerCase()
  };
};

export const updateEmotion = emotion => {
  return {
    type: UPDATE_EMOTION,
    emotion: emotion.toLowerCase()
  };
};
