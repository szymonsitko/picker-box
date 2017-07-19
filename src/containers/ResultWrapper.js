import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { ActionCreators } from '../actions';
import Result from './scenes/Result';

class ResultWrapper extends Component {
  constructor(props) {
    super(props);
    this.navigator = null;

    this._handleBackButtonPress = this._handleBackButtonPress.bind(this);
    this.userResult = this.props.user_object;
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonPress);
  }

  componentDidMount() {
    this.props.clearReducerData();
  }

  _handleBackButtonPress() {
    if (this.props.navigation.state.routeName === 'result') {
      Actions.welcome();
    }
    return true;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Result { ...this.props } userResult={this.userResult}/>
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
