import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';

export const Router = StackNavigator({
  Home: { screen: HomeScreen },
  NextPage: { screen: NextPage }
});
