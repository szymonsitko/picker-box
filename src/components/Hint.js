import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Hint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: props.countdownTime
    }
  }

  getLevel() {
    switch (this.state.countdownTime) {
      case 0:
        return 'Easy';
      case 1:
        return 'Medium';
      case 2:
        return 'Hard';
      default:
        return 'Easy';
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.hint}>Difficulty: {this.getLevel()}</Text>
      </View>
    )
  }
}

const styles = {
  hint: {
    padding: 6,
    textAlign: 'right'
  },
}
