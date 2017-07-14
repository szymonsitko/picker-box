import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Boxes from './components/Boxes';
import Timer from './components/Timer';
import { Hint } from './components/Hint';

const { height, width } = Dimensions.get('window');

export default class AppContainer extends Component {

  userWonGame() {
    this.refs.child.stopTimer();
  }

  userLostGame() {
    alert("Lost!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer ref="child" countdownTime={1} notifyCounterStop={this.userLostGame.bind(this)} />
        <Boxes onUserScoredGame={this.userWonGame.bind(this)} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3399ff',
  },
}
