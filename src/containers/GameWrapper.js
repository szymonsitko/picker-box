import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Game from './scenes/Game';

class GameWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Game />
      </View>
    )
  }
}


export default GameWrapper;
