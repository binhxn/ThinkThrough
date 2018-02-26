import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { logHello } from '../actions';
import { Button } from '../components/Button';

class Home extends Component {
  titleChange = () => {
    this.props.logHello();
  };

  render() {
    const mainTitle = this.props.title || 'Should be a title here';

    return (
      <View>
        <Text>{mainTitle}</Text>
        <Button onPress={this.titleChange}>Change Title</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    minWidth: '200px',
    padding: '5px',
    backgroundColor: '#21ce99',
    color: '#fff',
    margin: '0 auto'
  }
});

const mapStateToProps = state => {
  const { title } = state.thoughts;

  return { title };
};

export default connect(mapStateToProps, { logHello })(Home);
