import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { logHello } from '../actions';
import { HeaderStyles } from '../components/HeaderStyles';
import { Button } from '../components/Button';

class Home extends Component {
  static navigationOptions = () => HeaderStyles('ThinkThrough', 'Home');

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/icons/shocker-icon.png')}
        />
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
  logo: {
    marginBottom: 100,
    width: 175,
    height: 175
  },
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
