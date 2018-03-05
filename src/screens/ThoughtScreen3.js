import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { updateAnswer3 } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse
} from '../components';

class ThoughtScreen3 extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  navigateAnswer3 = () => {
    this.props.updateAnswer3(this.state.text);

    this.props.navigation.navigate('ThoughtScreen4');
  };

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you{' '}
          <ThoughtResponse>
            {this.props.emotion !== 'Feel'
              ? `${this.props.emotion.toLowerCase()} to ${this.props.answer2.toLowerCase()}?`
              : `${this.props.emotion.toLowerCase()} ${this.props.answer2.toLowerCase()}?`}
          </ThoughtResponse>
        </ThoughtText>
        <TextInput
          style={styles.input}
          placeholder="This will make me happy long term"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button onPress={this.navigateAnswer3}>Continue</Button>
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
  input: {
    height: 40,
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { answer2, emotion } = state.thoughts;

  return { answer2, emotion };
};

export default connect(mapStateToProps, { updateAnswer3 })(ThoughtScreen3);
