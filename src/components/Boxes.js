import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { getRandomColor } from '../lib/ColorGenerator';
import * as constants from '../constants';

const { height, width } = Dimensions.get('window');

class Boxes extends Component {
  state = {
    box1: { backgroundColor: 'pink' },
    box2: { backgroundColor: 'pink' },
    box3: { backgroundColor: 'pink' },
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

  _changeBoxColor(boxId) {
    let object = {};
    object[boxId] = { backgroundColor: getRandomColor(constants.COLORS)};
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
        counter += 1
      }
    }
    if (counter === Object.keys(this.state).length && Object.keys(this.state).length > 1) {
      this.props.onUserScoredGame();
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <TouchableOpacity onPress={() => this._changeBoxColor('box1')}>
          <View style={[styles.box, this.state.box1 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box2')}>
          <View style={[styles.box, this.state.box2 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box3')}>
          <View style={[styles.box, this.state.box3 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box4')}>
          <View style={[styles.box, this.state.box4 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box5')}>
          <View style={[styles.box, this.state.box5 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box6')}>
          <View style={[styles.box, this.state.box6 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box7')}>
          <View style={[styles.box, this.state.box7 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box8')}>
          <View style={[styles.box, this.state.box8 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box9')}>
          <View style={[styles.box, this.state.box9 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box10')}>
          <View style={[styles.box, this.state.box10 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box11')}>
          <View style={[styles.box, this.state.box11 ]}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._changeBoxColor('box12')}>
          <View style={[styles.box, this.state.box12 ]}>
          </View>
        </TouchableOpacity>
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
  box: {
    width: width * .3,
    height: height * .2,
    margin: 4,
    borderWidth: 4,
    borderColor: 'brown'
  },
});

export default Boxes;
