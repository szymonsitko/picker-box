import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';

class Result extends Component {
  render() {
    return (
      <View>
        <Header style={{ fontFamily: 'Visitor' }} title="Result" background="#B54F79" />
        <View>
          <Text>{this.props.user_object[0].user}</Text>
          <Text>{Date(this.props.user_object[0].datestamp)}</Text>
          <Text>{this.props.user_object[0].difficulty}</Text>
          <Text>{this.props.user_object[0].score}</Text>
        </View>
      </View>
    );
  }
}

export default Result;
