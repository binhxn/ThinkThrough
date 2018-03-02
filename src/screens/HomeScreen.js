import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { logHello } from '../actions';
import { HeaderStyles } from '../components/HeaderStyles';
import { Button } from '../components/Button';
import { STATUS_BAR_HEIGHT, MAIN_COLOR } from '../constants';

class Home extends Component {
  static navigationOptions = () =>
    HeaderStyles('ThinkThrough', 'Home', <View />);

  titleChange = () => {
    this.props.logHello();
  };

  render() {
    const mainTitle = this.props.title || 'Should be a title here';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{mainTitle}</Text>
        <Button onPress={this.titleChange}>Change Title</Button>
        <Button onPress={() => this.props.navigation.navigate('NextScreen2')}>
          Go to NextScreen2
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
