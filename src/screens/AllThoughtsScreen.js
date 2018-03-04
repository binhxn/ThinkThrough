import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AllThoughtsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>All thoughts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AllThoughtsScreen;
