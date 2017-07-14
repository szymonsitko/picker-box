import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Hint extends Component {
  renderHint() {
    if (this.props.score <= 4) {
      return <Text style={styles.hint}>Bit far away...</Text>;
    }
    if (this.props.score > 4 && this.props.score <= 8) {
      return <Text style={styles.hint}>This is much better.</Text>;
    }
    if (this.props.score > 8 && this.props.score < 11) {
      return <Text style={styles.hint}>Almost there!</Text>;
    }
    if (this.props.score === 12) {
      return <Text style={styles.hint}>Yeah, you nailed it!</Text>
    }
  }

  componentDidMount() {
    console.log(this.props.timeLeft)
  }

  render() {
    return (
      <View>
        {this.renderHint()}
      </View>
    )
  }
}

const styles = {
  hint: {
    margin: 12,
    textAlign: 'center'
  }
}
