import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const { height, width } = Dimensions.get('window');

export const Box = props => {
  return (
    <TouchableOpacity onPress={() => props.changeBoxColor(props.id)}>
      <View style={[styles.box, props.color ]}>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  box: {
    width: width * .3,
    height: height * .2,
    margin: 4,
    borderWidth: 8,
    borderColor: '#99ccff'
  },
}
