import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

class Settings extends Component {
  render() {
    return (
      <View>
        <Header title="Settings" background="coral" />
        <View>
          <TextInput />
          <Text>Easy</Text>
          <Text>Medium</Text>
          <Text>Hard</Text>
        </View>
        <Button title="Start" onPress={() => Actions.game()} />
      </View>
    );
  }
}

export default Settings;
