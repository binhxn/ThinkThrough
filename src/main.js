import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StackNavigator } from 'react-navigation';

import reducers from './reducers';
import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';

/*
 * Store
 */
const store = createStore(reducers, {}, applyMiddleware());

class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Home: { screen: HomeScreen },
      NextPage: { screen: NextPage }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
