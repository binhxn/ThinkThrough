import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -20,
    marginBottom: 10
  }
});

export { ErrorMessage };
