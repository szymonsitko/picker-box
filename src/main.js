import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Boxes from './components/Boxes';

const { height, width } = Dimensions.get('window');

export default class AppContainer extends Component {
  userWonGame() {
    alert("Won!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}> Counter Here! </Text>
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
