import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { View, Platform } from 'react-native';
import { MAIN_COLOR } from './helpers/constants';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AllThoughtsScreen from './screens/AllThoughtsScreen';
import ThoughtScreen1 from './screens/ThoughtScreen1';
import ThoughtScreen2 from './screens/ThoughtScreen2';
import ThoughtScreen3 from './screens/ThoughtScreen3';
import ThoughtScreen4 from './screens/ThoughtScreen4';

const ThoughtStack = StackNavigator({
  Home: { screen: HomeScreen },
  ThoughtScreen1: { screen: ThoughtScreen1 },
  ThoughtScreen2: { screen: ThoughtScreen2 },
  ThoughtScreen3: { screen: ThoughtScreen3 },
  ThoughtScreen4: { screen: ThoughtScreen4 }
});

const AllThoughtsStack = StackNavigator({
  Thoughts: { screen: AllThoughtsScreen }
});

const AboutStack = StackNavigator({
  About: { screen: AboutScreen }
});

export const Router = TabNavigator(
  {
    Home: { screen: ThoughtStack },
    Thoughts: { screen: AllThoughtsStack },
    About: { screen: AboutStack }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: MAIN_COLOR,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 16,
        alignSelf: 'center'
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
