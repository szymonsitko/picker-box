import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const SquareButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}style={[styles.box, props.boxColor ]}>
      <Text style={styles.boxText}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  box: {
    height: 78,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  }
}
// { backgroundColor: '#9B3E00'}
