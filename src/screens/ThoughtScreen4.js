import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import {
  Button,
  HeaderStyles,
  ThoughtText,
  ThoughtResponse
} from '../components';

class ThoughtScreen4 extends Component {
  static navigationOptions = () => HeaderStyles('Final Thoughts', 'Home', null);

  // TODO
  getAllWordsIntoString = () => {};

  // Disables back button on stackNavigation
  resetNavigation = targetRoute => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: targetRoute })]
    });
    this.props.navigation.dispatch(resetAction);
  };

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
        <Button onPress={() => this.resetNavigation('Home')}>
          Return Home
        </Button>
        <Button onPress={() => this.props.navigation.navigate('Thoughts')}>
          View All Thoughts
        </Button>
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
