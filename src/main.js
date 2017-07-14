import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Boxes from './components/Boxes';

const { height, width } = Dimensions.get('window');

export default class AppContainer extends Component {
  userWonGame() {
    console.log("Won!")
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Boxes onUserScoredGame={this.userWonGame.bind(this)} />
      </View>
    )
  }
}
