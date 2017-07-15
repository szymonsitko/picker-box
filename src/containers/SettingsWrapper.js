import React, { Component } from 'react';
import { View } from 'react-native';
import Settings from './scenes/Settings';

class SettingsWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Settings />
      </View>
    )
  }
}

export default SettingsWrapper;
