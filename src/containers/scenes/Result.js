import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';

class Result extends Component {
  componentDidMount() {
    console.log("component mounted", this.props.userResult)
  }

  render() {
    return (
      <View>
        <Header style={{ fontFamily: 'Visitor' }} title="Result" background="#B54F79" />
        <View>
          <Text>{this.props.userResult.user}</Text>
          <Text>{Date(this.props.userResult.datestamp)}</Text>
          <Text>{this.props.userResult.difficulty}</Text>
          <Text>{this.props.userResult.result}</Text>
          <Text>{this.props.userResult.score}</Text>
        </View>
      </View>
    );
  }
}

export default Result;
