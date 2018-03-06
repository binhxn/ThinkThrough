import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse
} from '../components';

class ThoughtScreen4 extends Component {
  // replaceYouWithI = (str) => {
  //   // Regex to loop through all text and replace
  //   // 'You' with 'I'
  //   str.replace(/\bde\b/g, '');
  // }
  getAllWordsIntoString = () => {};

  // Need to find a way to simplify all these components
  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>I want to </ThoughtText>
        <ThoughtResponse>{this.props.answer1.toLowerCase()}</ThoughtResponse>
        <ThoughtText>because I </ThoughtText>
        <ThoughtResponse>{this.props.emotion.toLowerCase()}</ThoughtResponse>
        <ThoughtText>
          {this.props.emotion !== 'Feel' ? ' to ' : ' '}
        </ThoughtText>
        <ThoughtResponse>{this.props.answer2.toLowerCase()}</ThoughtResponse>
        <ThoughtText>. I </ThoughtText>
        <ThoughtResponse>
          {this.props.emotion !== 'Feel'
            ? this.props.emotion.toLowerCase()
            : this.props.emotion.toLowerCase()}{' '}
        </ThoughtResponse>
        {this.props.emotion !== 'Feel' && <ThoughtText>to</ThoughtText>}
        <ThoughtResponse>{this.props.answer2.toLowerCase()}</ThoughtResponse>
        <ThoughtText>because </ThoughtText>
        <ThoughtResponse>{this.props.answer3.toLowerCase()}</ThoughtResponse>
        <ThoughtText>.</ThoughtText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 200, // TEMPORARY PADDING
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = state => {
  const { answer1, answer2, answer3, emotion } = state.thoughts;

  return { answer1, answer2, answer3, emotion };
};

export default connect(mapStateToProps)(ThoughtScreen4);
