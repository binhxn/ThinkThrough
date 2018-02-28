import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { MAIN_COLOR } from '../constants';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderRadius: 5,
    height: 50,
    width: 200,
    padding: 5,
    backgroundColor: MAIN_COLOR
  }
};

export { Button };
