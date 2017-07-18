import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Boxes from '../../components/Boxes';
import Timer from '../../components/Timer';
import { scoreGenerator } from '../../lib/ScoreGenerator';

const { height, width } = Dimensions.get('window');

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTime: scoreGenerator(this.props.user_object.difficulty),
      forceTimerStop: this.props.forceTimerStop,
      tapCount: 0
    }
  }

  notifyUserScoredGame() {
    this.refs.child.stopTimer();
    this.storeGameResult('won');
  }

  notifyGameTimeOut() {
    this.storeGameResult('lost');
  }

  notifyTimerStop() {
    this.refs.child.stopTimer();
  }

  incrementTapCount() {
    this.setState({ tapCount: this.state.tapCount += 1 });
  }

  storeGameResult(finalResult) {
    const statsString = `User ${this.props.user_object.user} ${finalResult} the game!,Total game time: ${this.state.gameTime},Time left: ${this.refs.child.state.totalTime},Time used: ${this.state.gameTime - this.refs.child.state.totalTime}`;
    const result = { ...this.props.user_object, score: statsString };
    this.props.storeFinishedGameResults(result);
    setTimeout(function(){
      Actions.result();
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer
          ref="child"
          notifyGameTimeOut={this.notifyGameTimeOut.bind(this)}
          tapCount={this.state.tapCount}
          countdownTime={this.state.gameTime}
          difficulty={this.props.user_object.difficulty}
        />
        <Boxes
          { ...this.props }
          incrementTapCount={this.incrementTapCount.bind(this)}
          notifyUserScoredGame={this.notifyUserScoredGame.bind(this)}
          difficulty={this.state.difficulty}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
}

export default Game;
