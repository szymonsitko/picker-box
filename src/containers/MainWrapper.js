import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import Main from './scenes/Main';

class MainWrapper extends Component {
  componentWillMount() {
    this.props.initializeDatabaseConnection();
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

export default connect(
  (state) => { return {} },
  mapDispatchToProps
)(MainWrapper);
