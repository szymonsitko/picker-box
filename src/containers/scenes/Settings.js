import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Settings Page</Text>
        <TextInput />
        <Text>Easy</Text>
        <Text>Medium</Text>
        <Text>Hard</Text>
      </View>
    );
  }
}

export default Settings;
