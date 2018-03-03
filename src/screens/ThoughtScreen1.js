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
import { Button } from '../components/Button';
import { HeaderStyles } from '../components/HeaderStyles';
import { ThoughtText } from '../components/ThoughtText';

class ThoughtScreen1 extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  updateAnswer1AndNavigate = () => {
    this.props.updateAnswer1(this.state.text);

    this.props.navigation.navigate('ThoughtScreen2');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <ThoughtText>How are you feeling today?</ThoughtText>
          <ThoughtText>I want to...</ThoughtText>
          <TextInput
            style={styles.input}
            placeholder="Change my career"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button onPress={this.updateAnswer1AndNavigate}>
            Go to ThoughtScreen2
          </Button>
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
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(null, { updateAnswer1 })(ThoughtScreen1);
