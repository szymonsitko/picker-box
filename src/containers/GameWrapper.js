import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Game from './scenes/Game';

class GameWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Game { ...this.props } />
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
  mapDispatchToProps,
)(GameWrapper);
