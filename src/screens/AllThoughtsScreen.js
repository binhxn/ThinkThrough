import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { HeaderStyles, Header } from '../components';

class AllThoughtsScreen extends Component {
  static navigationOptions = () =>
    HeaderStyles('All Thoughts', 'Thoughts', null);

  _renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.thought}>{item}</Text>
        {/* <Text>{savedDates}</Text> */}
      </View>
    );
    // return <Text style={styles.thought}>{item}</Text>;
  };

  _renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  _keyExtractor = (item, index) => index;

  render() {
    if (this.props.thoughts.length === 0) {
      return (
        <View style={styles.thoughtsContainer}>
          <Text>You have no current thoughts</Text>
        </View>
      );
    }

    console.log(this.props);

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.thoughts}
          extraData={this.props.savedDates}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thought: {
    paddingTop: 10,
    paddingBottom: 10
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center'
  }
});

const mapStateToProps = state => {
  const { thoughts, savedDates } = state.thoughts;

  return { thoughts, savedDates };
};

export default connect(mapStateToProps)(AllThoughtsScreen);
