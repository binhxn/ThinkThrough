import React, { Component } from 'react';
import { View, StyleSheet, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { updateAnswer2, updateEmotion } from '../actions';
import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse
} from '../components';

class ThoughtScreen2 extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  constructor(props) {
    super(props);

    this.state = { emotion: 'Want', text: '' };
  }

  replacePerspective = currentThought => {
    let thought = currentThought.toLowerCase().split(' ');
    const perspectiveObj = {
      my: 'your',
      me: 'you',
      myself: 'yourself', // Prettier defaults to single quotes :(
      i: 'you',
      "i'll": "you'll",
      "i'm": 'you are'
    };

    // loop through words and replace first-person view
    // with second-person view
    return thought
      .map(word => {
        if (perspectiveObj.hasOwnProperty(word)) {
          return perspectiveObj[word];
        } else {
          return word;
        }
      })
      .join(' ');
  };

  navigateAnswer2 = () => {
    this.props.updateAnswer2(this.state.text);
    this.props.updateEmotion(this.state.emotion);

    this.props.navigation.navigate('ThoughtScreen3');
  };

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you want to{' '}
          <ThoughtResponse>
            {this.replacePerspective(this.props.answer1)}
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
            <Picker.Item label="Want" value="Want" />
            <Picker.Item label="Need" value="Need" />
            <Picker.Item label="Feel" value="Feel" />
          </Picker>
          {this.state.emotion !== 'Feel' && (
            <ThoughtResponse> to</ThoughtResponse>
          )}
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={
              this.state.emotion === 'Feel'
                ? 'Complacent at work'
                : 'Make a difference at work'
            }
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
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
    marginBottom: 20,
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
