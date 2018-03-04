import React, { Component } from 'react';
import { Text } from 'react-native';

import { MAIN_COLOR } from '../constants';

const ThoughtResponse = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = {
  text: {
    color: MAIN_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
};

export { ThoughtResponse };
