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
    // Loops through children array to concatenate as strings
    const children = React.Children.toArray(this.props.children);
    const thoughtString = children
      .map(item => {
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
  // May not need this anymore
};

export default connect(mapStateToProps)(FinalThoughts);
