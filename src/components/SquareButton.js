import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const SquareButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}style={[styles.box, props.style]}>
      <Text style={[styles.boxText, props.large ? { fontSize: 76 } : {} ]}>{props.children}</Text>
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
