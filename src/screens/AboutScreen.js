import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../helpers/constants';

import { HeaderStyles } from '../components';

class AboutScreen extends Component {
  static navigationOptions = () => HeaderStyles('About', 'About', null);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>AYYYEEEE ABOUT PAGE</Text>
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

export default AboutScreen;
