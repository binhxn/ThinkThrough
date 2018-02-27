import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import HomeScreen from './screens/HomeScreen';

/*
 * Store
 */
const store = createStore(reducers, {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Expo.registerRootComponent(App);
