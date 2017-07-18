import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Hint } from './Hint';
import { Header } from './Header';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTime: props.countdownTime,
    }
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ totalTime: this.state.totalTime - 1 });
        if (this.state.totalTime <= 0) {
          this.stopTimer();
          this.props.notifyGameTimeOut();
        }
      }, 1000)
    })
  }

  stopTimer() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <View>
        <Header style={{ fontFamily: 'Visitor' }} title={"Time Left: " + this.state.totalTime} background="pink" />
        <Hint
          tapCount={this.props.tapCount}
          style={styles}
          difficulty={this.props.difficulty}
        />
      </View>
    );
  }
}

const styles = {
  counter: {
    padding: 4,
    fontSize: 28,
    fontFamily: 'Visitor',
    textAlign: 'left',
    color: '#660066'
  },
  taps: {
    padding: 4,
    fontSize: 28,
    fontFamily: 'Visitor',
    textAlign: 'left',
    color: '#660066'
  }
}

export default Timer;
