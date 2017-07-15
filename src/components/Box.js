import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

const { height, width } = Dimensions.get('window');

export const Box = props => {
  return (
    <TouchableOpacity onPress={() => props.changeBoxColor(props.id)}>
      <View style={[styles.box, props.color]}>
        {props.first ? <Text style={styles.firstBox}> + </Text> : <Text></Text>}
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  box: {
    width: width * .265,
    height: height * .165,
    margin: 6,
    borderWidth: 8,
    borderColor: '#99ccff',
    justifyContent: 'center',
  },
  firstBox: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold'
  }
}
