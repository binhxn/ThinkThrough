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
import FinalThoughts from '../components/FinalThoughts';

class ThoughtScreen4 extends Component {
  static navigationOptions = () => HeaderStyles('Final Thoughts', 'Home', null);

  // Disables back button on stackNavigation
  resetNavigation = targetRoute => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: targetRoute })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const { answer1, answer2, answer3, emotion } = this.props;
    // Having trouble parsing with inline ternary,
    // will resort to variables to ease the work
    // in FinalThoughts.js
    const emotion1 = emotion !== 'feel' ? 'to ' : '';
    const emotion2 = emotion !== 'feel' ? emotion : emotion;
    const emotion3 = emotion !== 'feel' && <ThoughtText>to </ThoughtText>;

    return (
      // Need to find a way to simplify all these components
      <View style={styles.container}>
        {/* <View>
          <ThoughtText>
            I want to <ThoughtResponse>{answer1} </ThoughtResponse>
            because I <ThoughtResponse>{emotion} </ThoughtResponse>
            {emotion1} <ThoughtResponse>{answer2}</ThoughtResponse>
            . I <ThoughtResponse>{emotion2} </ThoughtResponse>
            {emotion3}
            <ThoughtResponse>{answer2} </ThoughtResponse>
            because <ThoughtResponse>{answer3}</ThoughtResponse>
            .
          </ThoughtText>
        </View> */}
        <FinalThoughts>
          <ThoughtText>I want to </ThoughtText>
          <ThoughtResponse>{answer1} </ThoughtResponse>
          <ThoughtText>because I </ThoughtText>
          <ThoughtResponse>{emotion} </ThoughtResponse>
          <ThoughtText>{emotion1}</ThoughtText>
          <ThoughtResponse>{answer2}</ThoughtResponse>
          <ThoughtText>. I </ThoughtText>
          <ThoughtResponse>{emotion2} </ThoughtResponse>
          {emotion3}
          <ThoughtResponse>{answer2} </ThoughtResponse>
          <ThoughtText>because </ThoughtText>
          <ThoughtResponse>{answer3}</ThoughtResponse>
          <ThoughtText>.</ThoughtText>
        </FinalThoughts>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 50
  }
});

const mapStateToProps = state => {
  const { answer1, answer2, answer3, emotion } = state.thoughts;

  return { answer1, answer2, answer3, emotion };
};

export default connect(mapStateToProps)(ThoughtScreen4);
