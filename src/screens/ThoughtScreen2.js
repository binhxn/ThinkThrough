import React, { Component } from 'react';
import { View, StyleSheet, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { updateAnswer2, updateEmotion } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse,
  ErrorMessage
} from '../components';
import { replacePerspective } from '../helpers';

class ThoughtScreen2 extends Component {
  state = {
    emotion: 'want',
    text: '',
    error: ''
  };
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  validateInput = text => {
    if (this.state.text.length >= 0) {
      this.setState({ error: '' });
    }
    this.setState({ text });
  };

  navigateAnswer2 = () => {
    if (!this.state.text) {
      this.setState({
        error: 'Please fill in the field'
      });
    } else {
      this.props.updateAnswer2(this.state.text);
      this.props.updateEmotion(this.state.emotion);
      this.props.navigation.navigate('ThoughtScreen3');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you want to{' '}
          <ThoughtResponse>
            {replacePerspective(this.props.answer1)}
          </ThoughtResponse>?
        </ThoughtText>
        <View style={styles.responsePicker}>
          <ThoughtResponse>Because I </ThoughtResponse>
          <Picker
            style={styles.picker}
            selectedValue={this.state.emotion}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ emotion: itemValue })
            }
          >
            <Picker.Item label="Want" value="want" />
            <Picker.Item label="Need" value="need" />
            <Picker.Item label="Feel" value="feel" />
          </Picker>
          {this.state.emotion !== 'feel' && (
            <ThoughtResponse> to</ThoughtResponse>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={
              this.state.emotion === 'feel'
                ? 'Complacent at work'
                : 'Make a difference at work'
            }
            onChangeText={text => this.validateInput(text)}
            value={this.state.text}
          />
          {this.state.error.length > 0 && (
            <ErrorMessage>{this.state.error}</ErrorMessage>
          )}
          <Button onPress={this.navigateAnswer2}>Continue</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 200,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    // Can't remove native Picker styles
    // borderBottomColor: 'transparent',
    // borderTopColor: 'transparent',
    // borderBottomWidth: 0,
    // borderTopWidth: 0,
    height: 100,
    width: 100,
    marginBottom: 100,
    marginTop: -97 // Forced value, fix later
  },
  responsePicker: {
    flexDirection: 'row',
    marginTop: 60
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 30,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { answer1 } = state.thoughts;

  return { answer1 };
};

export default connect(mapStateToProps, { updateAnswer2, updateEmotion })(
  ThoughtScreen2
);
