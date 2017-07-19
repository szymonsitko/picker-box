import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Hint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: props.countdownTime,
      level: props.difficulty
    }
  }

  getLevel() {
    switch (this.state.level) {
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
        <Text style={this.props.style.taps}>{this.props.tapCount}</Text>
        <Text style={this.props.style.counter}>{this.getLevel()}</Text>
      </View>
    )
  }
}
