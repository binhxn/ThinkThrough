import {
  UPDATE_ANSWER_1,
  UPDATE_ANSWER_2,
  UPDATE_ANSWER_3,
  UPDATE_ANSWER_4,
  UPDATE_EMOTION,
  CONCAT_THOUGHT,
  ADD_THOUGHT
} from './types';

export const updateAnswer1 = answer1 => {
  return {
    type: UPDATE_ANSWER_1,
    answer1: answer1.toLowerCase().trim()
  };
};

export const updateAnswer2 = answer2 => {
  return {
    type: UPDATE_ANSWER_2,
    answer2: answer2.toLowerCase().trim()
  };
};

export const updateAnswer3 = answer3 => {
  return {
    type: UPDATE_ANSWER_3,
    answer3: answer3.toLowerCase().trim()
  };
};

export const updateAnswer4 = answer4 => {
  return {
    type: UPDATE_ANSWER_4,
    answer4: answer4.toLowerCase().trim()
  };
};

export const updateEmotion = emotion => {
  return {
    type: UPDATE_EMOTION,
    emotion: emotion.toLowerCase()
  };
};

export const concatThought = thought => {
  return {
    type: CONCAT_THOUGHT,
    thought
  };
};

// REFACTOR LATER
export const addThought = thought => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let period = 'AM';

  if (hours > 12) {
    hours = hours - 12;
    period = 'PM';
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // savedDate = `${day}/${month}/${year}`;
  date = `${hours}:${minutes} ${period}`;

  return {
    type: ADD_THOUGHT,
    thought,
    date
  };
};
