import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import { HeaderStyles } from '../components/HeaderStyles';

class NextScreen3 extends Component {
  static navigationOptions = () => HeaderStyles('NextScreen3', 'Home');

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>NextScreen3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NextScreen3;
