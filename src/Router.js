import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';

// may not need anymore
// const RouterComponent = () => {
//   return <RootStack />;
// };

const Router = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    NextPage: {
      screen: NextPage
    }
  },
  {
    initialRouteName: 'Home'
  }
);
