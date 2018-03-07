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
  constructor(props) {
    super(props);
  }
  static navigationOptions = () => HeaderStyles('Final Thoughts', 'Home', null);

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
        <FinalThoughts>
          <ThoughtText>I want to </ThoughtText>
          <ThoughtResponse>{this.props.answer1}</ThoughtResponse>
          <ThoughtText>because I </ThoughtText>
          <ThoughtResponse>{this.props.emotion}</ThoughtResponse>
          <ThoughtText>
            {this.props.emotion !== 'Feel' ? ' to ' : ' '}
          </ThoughtText>
          <ThoughtResponse>{this.props.answer2}</ThoughtResponse>
          <ThoughtText>. I </ThoughtText>
          <ThoughtResponse>
            {this.props.emotion !== 'Feel'
              ? this.props.emotion
              : this.props.emotion}{' '}
          </ThoughtResponse>
          {this.props.emotion !== 'Feel' && <ThoughtText>to </ThoughtText>}
          <ThoughtResponse>{this.props.answer2}</ThoughtResponse>
          <ThoughtText>because </ThoughtText>
          <ThoughtResponse>{this.props.answer3}</ThoughtResponse>
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
