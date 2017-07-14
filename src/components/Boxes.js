import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import { getRandomColor, boxColorsGenerator } from '../lib/ColorGenerator';
import { Box } from './Box';
import * as constants from '../constants';

const { height, width } = Dimensions.get('window');

class Boxes extends Component {
  state = {
    box1: { backgroundColor: 'pink' },
    box2: { backgroundColor: 'pink' },
    // box3: { backgroundColor: 'pink' },

    // TEMPORARY!!
    // box4: { backgroundColor: 'pink' },
    // box5: { backgroundColor: 'pink' },
    // box6: { backgroundColor: 'pink' },
    // box7: { backgroundColor: 'pink' },
    // box8: { backgroundColor: 'pink' },
    // box9: { backgroundColor: 'pink' },
    // box10: { backgroundColor: 'pink' },
    // box11: { backgroundColor: 'pink' },
    // box12: { backgroundColor: 'pink' },
  };

  changeBoxColor(boxId) {
    let object = {};
    object[boxId] = { backgroundColor: getRandomColor(boxColorsGenerator(this.props.difficulty))};
    this.setState(object);
  }

  shouldComponentUpdate(nextState) {
    if (this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    let counter = 0;
    for (let key in this.state) {
      const currentColor = this.state[key].backgroundColor;
      const firstColor = Object.keys(this.state)[0];
      if (currentColor == this.state[firstColor].backgroundColor) {
        counter += 1;
      }
    }
    if (counter === Object.keys(this.state).length && Object.keys(this.state).length > 1) {
      this.props.onUserScoredGame();
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box1} id={'box1'} first />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box2} id={'box2'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box3} id={'box3'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box4} id={'box4'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box5} id={'box5'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box6} id={'box6'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box7} id={'box7'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box8} id={'box8'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box9} id={'box9'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box10} id={'box10'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box11} id={'box11'} />
        <Box changeBoxColor={this.changeBoxColor.bind(this)} color={this.state.box12} id={'box12'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
});

export default Boxes;
