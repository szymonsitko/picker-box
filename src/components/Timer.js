import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Hint } from './Hint';
import { Header } from './Header';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTime: props.countdownTime,
      timerHasStopped: false
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
    this.setState({ timerHasStopped: true });
  }

  renderTimerIsRunning() {
    return (
      <View>
        <Hint
          tapCount={"Tapped " + this.props.tapCount + " times"}
          style={styles}
          difficulty={this.props.difficulty}
        />
      </View>
    )
  }

  renderTimerHasStopped() {
    return (
      <View>
        <Hint
          tapCount={"Moving into result screen..."}
          style={styles}
          difficulty={this.props.difficulty}
        />
      </View>
    )
  }

  render() {
    return (
      <View>
        <Header style={{ fontFamily: 'Visitor' }} title={"Time Left: " + this.state.totalTime} background="#ff4d94" />
        {!this.state.timerHasStopped ? this.renderTimerIsRunning() : this.renderTimerHasStopped()}
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
    color: 'rgba(0,0,0,0.5)'
  },
  taps: {
    padding: 4,
    fontSize: 28,
    fontFamily: 'Visitor',
    textAlign: 'left',
    color: 'rgba(0,0,0,0.5)'
  }
}

export default Timer;
