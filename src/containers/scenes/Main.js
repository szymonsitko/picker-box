import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  render() {
    return (
      <View>
        <Text>Welcome here!</Text>
        <Text onPress={() => Actions.game()}>Go to play!</Text>
      </View>
    )
  }
}

export default Main;
