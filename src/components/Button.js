import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const Button = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <Text style={props.style}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  box: {
    height: 108,
    width: 108,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  }
}
