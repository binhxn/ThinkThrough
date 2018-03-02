import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { HeaderStyles } from '../components/HeaderStyles';

class NextScreen2 extends Component {
  static navigationOptions = () => HeaderStyles('NextScreen2', 'Home');

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
