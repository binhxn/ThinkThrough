import { Platform } from 'react-native';

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
  headerTintColor: '#FFF', // Colors the 'back' button
  headerLeft // Removes back button
});
