import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Result from './scenes/Result';

class ResultWrapper extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Result { ...this.props }/>
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
)(ResultWrapper);
