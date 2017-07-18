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
        <Text style={this.props.style.taps}>Tapped {this.props.tapCount} times</Text>
        <Text style={this.props.style.counter}>Difficulty: {this.getLevel()}</Text>
      </View>
    )
  }
}
