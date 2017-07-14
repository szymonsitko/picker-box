import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Hint } from './Hint';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTime: props.countdownTime
    }
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ totalTime: this.state.totalTime - 1 });
        if (this.state.totalTime <= 0) {
          this.stopTimer();
          this.props.notifyCounterStop();
        }
      }, 1000)
    })
  }

  stopTimer() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>Time Left: {this.state.totalTime}</Text>
        <Hint style={styles.level} difficulty={this.props.difficulty}/>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'pink',
    marginBottom: 8
  },
  counter: {
    fontSize: 18,
    textAlign: 'left',
    padding: 12,
  },
}

export default Timer;
