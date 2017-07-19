import React, { Component } from 'react';
import { View, Image, ToastAndroid, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { ActionCreators } from '../actions';
import Game from './scenes/Game';

class GameWrapper extends Component {
  constructor(props) {
  super(props);
  this.navigator = null;

  this._handleBackButtonPress = this._handleBackButtonPress.bind(this);
  this.state = { forceTimerStop: false }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  _handleBackButtonPress() {
    if (this.props.navigation.state.routeName === 'game') {
      if (!this.refs.child.state.gameHasStarted) {
        return true;
      } else {
        this.props.deleteDatabaseRecord(this.props.user_object);
        this.setState({ forceTimerStop: true }, () => {
          this.refs.child.notifyTimerStop();
          Actions.welcome();
        })
        return true;
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Game ref="child" { ...this.props } />
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
