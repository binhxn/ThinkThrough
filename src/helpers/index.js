// Helper functions
export const replacePerspective = currentThought => {
  let thought = currentThought.toLowerCase().split(' ');
  const perspectiveObj = {
    my: 'your',
    me: 'you',
    myself: 'yourself', // Prettier defaults to single quotes :(
    i: 'you',
    "i'll": "you'll",
    "i'm": 'you are'
  };

  // loop through words and replace first-person view
  // with second-person view
  return thought
    .map(word => {
      if (perspectiveObj.hasOwnProperty(word)) {
        return perspectiveObj[word];
      } else {
        return word;
      }
    })
    .join(' ');
};
