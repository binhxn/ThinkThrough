import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, HeaderStyles, ThoughtText, ThoughtResponse } from './index';

// "Workaround" component to target children Nodes
class FinalThoughts extends Component {
  state = { thoughtString: '' };

  // Performing Children manipulation in componentDidMount
  // to make sure strings are parsed correctly and
  // mounted after rendering
  componentDidMount() {
    const { answer1, answer2, answer3, emotion } = this.props;
    // Loops through children array to concatenate as strings
    const children = React.Children.toArray(this.props.children);
    const thoughtString = children
      .map(item => {
        console.log('item', item);
        // if item has array length of 2 and does not have emotion of feel,
        // return the first index of that array
        // DOESN'T SEEM TO WORK
        // need to play around with props.children
        // console.log('item.props.children', item.props.children);

        // console.log('item.props.children.length', item.props.children.length);
        return item.props.children;
      })
      .join('');

    this.setState({
      thoughtString
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        {this.state.thoughtString && <Text>{this.state.thoughtString}</Text>}
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
