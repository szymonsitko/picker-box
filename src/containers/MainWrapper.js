import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RNExitApp from 'react-native-exit-app';
import { ActionCreators } from '../actions';
import Main from './scenes/Main';

class MainWrapper extends Component {
  componentWillMount() {
    this.props.initializeDatabaseConnection();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      RNExitApp.exitApp();
      return true;
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main { ...this.props } />
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

function mapStateToProps({ records }) {
  return records;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWrapper);
