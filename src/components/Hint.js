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
    switch (this.props.difficulty) {
      case 0:
        return 'Easy';
      case 1:
        return 'Medium';
      case 2:
        return 'Hard';
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
    padding: 8,
    fontSize: 18,
    textAlign: 'right',
  },
}
