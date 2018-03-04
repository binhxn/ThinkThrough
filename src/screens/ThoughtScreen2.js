import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// import { updateAnswer1 } from '../actions';
import { Button } from '../components/Button';
import { HeaderStyles } from '../components/HeaderStyles';
import { ThoughtText } from '../components/ThoughtText';
import { ThoughtResponse } from '../components/ThoughtResponse';

class ThoughtScreen2 extends Component {
  static navigationOptions = () => HeaderStyles('New Thought', 'Home');

  render() {
    return (
      <View style={styles.container}>
        <ThoughtText>
          Why do you want to{' '}
          <ThoughtResponse>{this.props.answer1}</ThoughtResponse>?
        </ThoughtText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { answer1 } = state.thoughts;

  return { answer1 };
};

export default connect(mapStateToProps)(ThoughtScreen2);
