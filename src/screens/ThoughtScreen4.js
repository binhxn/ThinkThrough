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
import { addThought } from '../actions';

class ThoughtScreen4 extends Component {
  static navigationOptions = () => HeaderStyles('Final Thoughts', 'Home', null);

  // Disables back button on stackNavigation
  _resetNavigation = targetRoute => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: targetRoute })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _storeFinalThought = () => {
    // this.props.saveDate();
    this.props.addThought(this.props.finalThoughts);
    this._resetNavigation('Home'); // Reset stackNav to Home
    this.props.navigation.navigate('Thoughts'); // Navigates to Thoughts Tab
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
      // Wrapped each text in a component so we can map
      // over them as child components in FinalThoughts
      <View style={styles.container}>
        <FinalThoughts>
          <ThoughtText>I want to </ThoughtText>
          <ThoughtResponse>{`${answer1} `}</ThoughtResponse>
          <ThoughtText>because I </ThoughtText>
          <ThoughtResponse>{`${emotion} `}</ThoughtResponse>
          <ThoughtText>{emotion1}</ThoughtText>
          <ThoughtResponse>{answer2}</ThoughtResponse>
          <ThoughtText>. I </ThoughtText>
          <ThoughtResponse>{`${emotion2} `}</ThoughtResponse>
          {emotion3}
          <ThoughtResponse>{`${answer2} `}</ThoughtResponse>
          <ThoughtText>because </ThoughtText>
          <ThoughtResponse>{answer3}</ThoughtResponse>
          <ThoughtText>.</ThoughtText>
        </FinalThoughts>
        <Button onPress={() => this._resetNavigation('ThoughtScreen1')}>
          Start Over
        </Button>
        <Button onPress={this._storeFinalThought}>Save Thought</Button>
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
  const { answer1, answer2, answer3, emotion, finalThoughts } = state.thoughts;

  return { answer1, answer2, answer3, emotion, finalThoughts };
};

export default connect(mapStateToProps, { addThought })(ThoughtScreen4);
