import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import { TabNavigation } from './Router';

const store = createStore(reducers, {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
