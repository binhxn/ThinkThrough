// Helper functions
export const replacePerspective = currentThought => {
  let thought = currentThought.toLowerCase().split(' ');
  const perspectiveObj = {
    "i'll": "you'll",
    "i'm": "you're",
    my: 'your',
    me: 'you',
    myself: 'yourself', // Prettier defaults to single quotes :(
    i: 'you'
  };

  // TODO: Find why it's not converting contracted words
  // loop through words and replace first-person view
  // with second-person view
  return thought
    .map(word => {
      if (perspectiveObj.hasOwnProperty(word)) {
        return perspectiveObj[word];
      } else if (word === "i'm") {
        // fallback due to unknown error
        return "you're";
      } else if (word === "i'll") {
        // fallback due to unknown error
        return "you'll";
      } else {
        return word;
      }
    })
    .join(' ');
};
