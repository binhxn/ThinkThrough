import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ThoughtScreen3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sup</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 200,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

export default ThoughtScreen3;
