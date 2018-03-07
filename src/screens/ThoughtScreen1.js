import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import { updateAnswer1 } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtResponse,
  ThoughtText
} from '../components';

class ThoughtScreen1 extends Component {
  state = { text: '' };
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  navigateAnswer1 = () => {
    this.props.updateAnswer1(this.state.text);

    this.props.navigation.navigate('ThoughtScreen2');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.subcontainer}>
          <ThoughtText>What's been on your mind?</ThoughtText>
          <ThoughtResponse>I want to...</ThoughtResponse>
          <TextInput
            style={styles.input}
            placeholder="Change my career"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button onPress={this.navigateAnswer1}>Continue</Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  subcontainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(null, { updateAnswer1 })(ThoughtScreen1);
