import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { HeaderStyles, Header } from '../components';

class AllThoughtsScreen extends Component {
  static navigationOptions = () =>
    HeaderStyles('All Thoughts', 'Thoughts', null);

  render() {
    const allThoughts = this.props.thoughts.map((thought, i) => {
      return <Text key={i}>{thought}</Text>;
    });

    if (this.props.thoughts.length === 0) {
      return <Text>You have no current thoughts</Text>;
    }

    return <View style={styles.container}>{allThoughts}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { thoughts } = state.thoughts;

  return { thoughts };
};

export default connect(mapStateToProps)(AllThoughtsScreen);
