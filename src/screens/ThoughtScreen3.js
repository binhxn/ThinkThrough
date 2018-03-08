import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { updateAnswer3 } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse,
  ErrorMessage
} from '../components';
import { replacePerspective } from '../helpers';

class ThoughtScreen3 extends Component {
  state = { text: '', error: '' };
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  _validateInput = text => {
    if (this.state.text.length >= 0) {
      this.setState({ error: '' });
    }
    this.setState({ text });
  };

  _navigateAnswer3 = () => {
    // Makes sure field is not empty before continuing
    if (!this.state.text) {
      this.setState({
        error: 'Please fill in the field'
      });
    } else {
      this.props.updateAnswer3(this.state.text);
      this.props.navigation.navigate('ThoughtScreen4');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you{' '}
          <ThoughtResponse>
            {this.props.emotion !== 'feel'
              ? `${this.props.emotion} to ${replacePerspective(
                  this.props.answer2
                )}?`
              : `${this.props.emotion} ${replacePerspective(
                  this.props.answer2
                )}?`}
          </ThoughtResponse>
        </ThoughtText>
        <View style={styles.subcontainer}>
          <ThoughtText>Because </ThoughtText>
          <TextInput
            style={styles.input}
            placeholder="This will make me happy long term"
            onChangeText={text => this._validateInput(text)}
            value={this.state.text}
          />
          {this.state.error.length > 0 && (
            <ErrorMessage>{this.state.error}</ErrorMessage>
          )}
        </View>
        <Button onPress={this._navigateAnswer3}>Find your cause</Button>
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
  subcontainer: {
    marginTop: 50
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
  const { answer2, emotion } = state.thoughts;

  return { answer2, emotion };
};

export default connect(mapStateToProps, { updateAnswer3 })(ThoughtScreen3);
