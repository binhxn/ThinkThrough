import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header } from '../components/Header';

class NextPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Sup page two</Text>
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

export default NextPage;
