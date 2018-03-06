import { Platform } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../helpers/constants';

/*
 * @param {string} title - Header title
 * @param {string} tabBarLabel - Bottom navbar title
 * @param {Component} headerLeft - Component for backbutton
 */
export const HeaderStyles = (title, tabBarLabel, headerLeft = null) => ({
  title,
  tabBarLabel,
  headerStyle: {
    height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
    backgroundColor: '#2196F3'
  },
  headerTitleStyle: {
    marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    color: '#FFF'
  },
  headerTintColor: '#FFF' // Colors the 'back' button
  // headerLeft // Removes back button
});
