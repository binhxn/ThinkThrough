import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { logHello } from '../actions';
import { HeaderStyles } from '../components/HeaderStyles';
import { Button } from '../components/Button';

class Home extends Component {
  static navigationOptions = () => HeaderStyles('ThinkThrough', 'Home');

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Insert logo here</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('ThoughtScreen1')}
          >
            Go to New Thought
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 200,
    fontSize: 24
    // flexGrow: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginBottom: 50
  }
});

export default Home;
