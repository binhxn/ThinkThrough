import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const ThoughtText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = {
  text: {
    color: '#FF9100',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
};

export { ThoughtText };
