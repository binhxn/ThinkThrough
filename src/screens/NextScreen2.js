import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import { Button } from '../components/Button';

class NextScreen2 extends Component {
  static navigationOptions = () => ({
    title: 'New Thought',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: '#FFF'
    },
    headerTintColor: '#FFF', // Colors the 'back' button
    headerLeft: null // Removes back button
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>NextScreen2</Text>
        <Button onPress={() => this.props.navigation.navigate('NextScreen3')}>
          Go to NextScreen2
        </Button>
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

export default NextScreen2;
