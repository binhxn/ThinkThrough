import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderStyles, Header } from '../components';

class AllThoughtsScreen extends Component {
  static navigationOptions = () =>
    HeaderStyles('All Thoughts', 'Thoughts', null);

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
