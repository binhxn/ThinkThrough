import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, HeaderStyles, ThoughtText, ThoughtResponse } from './index';

class FinalThoughts extends Component {
  componentDidMount() {
    console.log('this.props.children', this.props.children);
    console.log('React.Children', React.Children);
    React.Children.forEach(child => {
      console.log(child);
    });
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    console.log('children', React.Children.count(this.props.children));

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
        {this.props.emotion !== 'Feel' && <ThoughtText>to </ThoughtText>}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 50
  }
});

const mapStateToProps = state => {
  const { answer1, answer2, answer3, emotion } = state.thoughts;

  return { answer1, answer2, answer3, emotion };
};

export default connect(mapStateToProps)(FinalThoughts);
