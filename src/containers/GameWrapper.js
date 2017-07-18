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
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  _handleBackButtonPress() {
    if (this.props.navigation.state.routeName === 'game') {
      // Here, 1) clear current props on reducers level,
      this.props.clearReducerData();
      // 2) delete last database entry,

      //3) go to main



      ToastAndroid.show('You cannot go back while playing!', ToastAndroid.SHORT);
      return true;
    }
  }

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
