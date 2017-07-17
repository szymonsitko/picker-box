import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { ActionCreators } from '../actions';
import Settings from './scenes/Settings';

class SettingsWrapper extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      Actions.welcome();
      return true;
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Settings { ...this.props }/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    ActionCreators,
    dispatch
  );
}

export default connect(
  (state) => { return {} },
  mapDispatchToProps
)(SettingsWrapper);
