import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { logHello } from '../actions';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { STATUS_BAR_HEIGHT, MAIN_COLOR } from '../constants';

class Home extends Component {
  static navigationOptions = () => ({
    title: 'ThinkThrough',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: '#FFF'
    },
    headerLeft: <View />
  });

  titleChange = () => {
    this.props.logHello();
  };

  render() {
    const mainTitle = this.props.title || 'Should be a title here';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{mainTitle}</Text>
        <Button onPress={this.titleChange}>Change Title</Button>
        <Button onPress={() => this.props.navigation.navigate('NextPage')}>
          Go to next screen
        </Button>
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
  const { title } = state.thoughts;

  return { title };
};

export default connect(mapStateToProps, { logHello })(Home);
