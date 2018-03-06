import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { THOUGHT_TEXT_COLOR } from '../helpers/constants';

const ThoughtText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = {
  text: {
    color: THOUGHT_TEXT_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
};

export { ThoughtText };
