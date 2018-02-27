import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NextPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Sup page two</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default NextPage;
