import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import { Router } from './Router';
import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';

/*
 * Store
 */
const store = createStore(reducers, {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
