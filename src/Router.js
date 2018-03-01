import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { View, Platform } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';

export const Router = StackNavigator({
  Home: { screen: HomeScreen },
  NextPage: { screen: NextPage }
});

export const TabNavigation = TabNavigator(
  {
    Home: { screen: HomeScreen },
    NextPage: { screen: NextPage }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
