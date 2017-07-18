import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  Image
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
      tapCount: 0,
      preCounter: 3,
      gameHasStarted: false
    }
  }

  componentDidMount() {
    let countLimit = 3;
    let initialMessage = setInterval(() => {
      countLimit -= 1;
      this.setState({ preCounter: this.state.preCounter - 1 });
      if (countLimit === 0) {
        this.setState({
          gameHasStarted: true
        });
        clearInterval(initialMessage);
      }
    }, 1250);
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

  renderMainPlayground() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/drawable/background_game.png')} style={styles.backgroundImage} />
        <View style={{ position: 'absolute' }}>
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
      </View>
    );
  }

  renderPreGameCounter() {
    return (
      <View style={styles.preCounterContainer}>
        <Text style={styles.preCounterMessage}>Take a seat, prepare yourself..</Text>
        <Text style={styles.preCounter}>{this.state.preCounter}</Text>
      </View>
    );
  }

  render() {
    return (
      !this.state.gameHasStarted ? this.renderPreGameCounter() : this.renderMainPlayground()
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    opacity: .65
  },
  preCounterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preCounterMessage: {
    fontSize: 32,
    fontFamily: 'Visitor',
    textAlign: 'center'
  },
  preCounter: {
    fontSize: 72,
    padding: 8,
    fontFamily: 'Visitor'
  }
}

export default Game;
