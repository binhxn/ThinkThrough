import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, HeaderStyles, ThoughtText, ThoughtResponse } from './index';
import { concatThought } from '../actions';

// "Workaround" component to target children Nodes
class FinalThoughts extends Component {
  // Performing Children manipulation in componentDidMount
  // to make sure strings are parsed correctly and
  // mounted after rendering
  componentDidMount = () => {
    // Loops through children array to concatenate as strings
    const children = React.Children.toArray(this.props.children);
    const thoughtString = children
      .map(item => {
        return item.props.children;
      })
      .join('');

    this.props.concatThought(thoughtString);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        {this.props.finalThoughts && <Text>{this.props.finalThoughts}</Text>}
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
  const { finalThoughts } = state.thoughts;

  return { finalThoughts };
};

export default connect(mapStateToProps, { concatThought })(FinalThoughts);
