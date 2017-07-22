import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  Modal
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Boxes from '../../components/Boxes';
import Timer from '../../components/Timer';
import { scoreGenerator } from '../../lib/ScoreGenerator';
import { scoreCalculator } from '../../lib/ScoreCalculator';

const { height, width } = Dimensions.get('window');

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTime: scoreGenerator(this.props.user_object.difficulty),
      forceTimerStop: this.props.forceTimerStop,
      tapCount: 0,
      preCounter: 3,
      gameHasStarted: false,
      showEndGamePopup: false
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
    setTimeout(() => {
      this.setState({ showEndGamePopup: true });
      this.storeGameResult('won');
    }, 1000);
  }

  notifyGameTimeOut() {
    setTimeout(() => {
      this.setState({ showEndGamePopup: true });
      this.storeGameResult('lost');
    }, 1000);
  }

  notifyTimerStop() {
    this.refs.child.stopTimer();
  }

  incrementTapCount() {
    this.setState({ tapCount: this.state.tapCount + 1 });
  }

  storeGameResult(finalResult) {
    const statsString = `Player ${this.props.user_object.user} ${finalResult} the game!,Total game time: ${this.state.gameTime},Time left: ${this.refs.child.state.totalTime},Time used: ${this.state.gameTime - this.refs.child.state.totalTime},Tapped: ${this.state.tapCount} times`;
    const evaluatedTapCount = finalResult === 'won' ? this.state.tapCount : 0;
    const result = {
      ...this.props.user_object,
      result: statsString,
      score: scoreCalculator(
        this.refs.child.state.totalTime,
        this.props.user_object.difficulty,
        evaluatedTapCount
      )
    };
    if (finalResult === 'won') {
      this.props.storeFinishedGameResults(result);
    }
    if (finalResult === 'lost') {
      this.props.storeFinishedGameResultsOnReducer(result);
    }
    setTimeout(function(){
      this.setState({ showEndGamePopup: false });
      Actions.result();
    }.bind(this), 2500);
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
      <View style={styles.nonGameContainer}>
        <Text style={styles.nonGameMessage}>Take a seat, prepare yourself..</Text>
        <Text style={styles.nonGameBoldLabel}>{this.state.preCounter}</Text>
      </View>
    );
  }

  renderPostGamePopup() {
    if (this.state.showEndGamePopup) {
      return (
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.showEndGamePopup}
            onRequestClose={() => {}}
          >
            <View style={styles.postGameContainer}>
              <Text style={styles.nonGameMessage}>Preparing results...</Text>
              <Text style={styles.nonGameBoldLabel}>!</Text>
            </View>
          </Modal>
        </View>
      );
    }
  }

  renderGameContent() {
    if (!this.state.showEndGamePopup) {
      return this.renderMainPlayground();
    } else {
      return this.renderPostGamePopup();
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {!this.state.gameHasStarted ? this.renderPreGameCounter() : this.renderMainPlayground()}
        {this.renderPostGamePopup()}
      </View>
    );
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
  nonGameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(155, 48, 74, .7)',
  },
  postGameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
  nonGameMessage: {
    fontSize: 32,
    fontFamily: 'Visitor',
    textAlign: 'center',
    color: 'white'
  },
  nonGameBoldLabel: {
    fontSize: 72,
    padding: 8,
    fontFamily: 'Visitor',
    color: 'white'
  }
}

export default Game;
