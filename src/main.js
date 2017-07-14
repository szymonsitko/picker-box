import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Boxes from './components/Boxes';
import Timer from './components/Timer';

const { height, width } = Dimensions.get('window');

export default class AppContainer extends Component {
  
  userWonGame() {
    alert("Won!");
  }

  userLostGame() {
    alert("Lost!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer countdownTime={3} notifyCounterStop={this.userLostGame.bind(this)}/>
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
  counter: {
    textAlign: 'center',
    fontSize: 18,
    padding: 2
  }
}
