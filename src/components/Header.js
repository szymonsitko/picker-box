import React from 'react';
import { View, Text } from 'react-native';

export const Header = props => {
  return (
    <View>
        <Text style={[styles.textStyle, props.style, { backgroundColor: props.background }]}>{props.title}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 38,
    padding: 12,
    borderBottomWidth: 12,
    borderColor: 'rgba(255,255,255,0.1)'
  }
}
