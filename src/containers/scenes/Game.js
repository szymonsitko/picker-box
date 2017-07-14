import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import Boxes from '../../components/Boxes';
import Timer from '../../components/Timer';
import { scoreGenerator } from '../../lib/ScoreGenerator';

const { height, width } = Dimensions.get('window');

class Game extends Component {
  state = {
    difficulty: 2
  }

  userWonGame() {
    this.refs.child.stopTimer();
  }

  userLostGame() {
    alert("Lost!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer ref="child" countdownTime={scoreGenerator(this.state.difficulty)} notifyCounterStop={this.userLostGame.bind(this)} />
        <Boxes onUserScoredGame={this.userWonGame.bind(this)} difficulty={this.state.difficulty}/>
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

export default Game;
