import React, { Component } from 'react';
import { View, Text, Dimensions, Image, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

const { width, height } = Dimensions.get('window');

class Result extends Component {
  render() {
    const difficultyString = this.props.userResult.difficulty=== 0 && 'Easy' || this.props.userResult.difficulty === 1 && 'Medium' || this.props.userResult.difficulty === 2 && 'Hard';
    const resultStringArray = this.props.userResult.result.split(',');
    const scoreString = this.props.userResult.score > 0 ? "Player score: " + this.props.userResult.score : "No score for loosers!";
    const dateString = Date(this.props.userResult.datestamp).split('GMT')[0];
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../../../assets/drawable/background_result.png')} style={styles.backgroundImage} />
        <Header style={{ fontFamily: 'Visitor' }} title="Result" background="#B54F79" />
          <View style={{ padding: 4 }}>
            <Text style={styles.lineHeader}>Player: {this.props.userResult.user}</Text>
            <Text style={styles.lineDataText}>{resultStringArray[0]}</Text>
            <Text style={styles.lineTextStyle}>Level: {difficultyString}</Text>
            <Text style={styles.lineDataText}>{resultStringArray[1]}</Text>
            <Text style={styles.lineDataText}>{resultStringArray[2]}</Text>
            <Text style={styles.lineTextStyle}>{scoreString}</Text>
            <Text style={styles.lineDataText}>Played at: {dateString}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.rightBottomContainer}>
              <Button
                title="Quit"
                style={styles.button}
                onPress={() => BackHandler.exitApp()}
              />
            </View>
            <View style={styles.leftBottomContainer}>
              <Button
                title="Main"
                style={styles.button}
                onPress={() => Actions.welcome()}
              />
            </View>
          </View>
      </View>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    opacity: .5
  },
  lineTextStyle: {
    marginLeft: 12,
    fontSize: 28,
    color: 'white',
    fontFamily: 'MunroSmall'
  },
  lineHeader: {
    padding: 4,
    fontSize: 32,
    color: 'black',
    fontFamily: 'MunroSmall'
  },
  lineDataText: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 20,
    color: 'black',
    fontFamily: 'MunroSmall'
  },
  rightBottomContainer: {
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  leftBottomContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  button: {
    fontSize: 52,
    padding: 4,
    fontFamily: 'Visitor',
    color: 'white'
  },
  mainButton: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontSize: 52,
    padding: 4,
    fontFamily: 'Visitor',
    color: 'white'
  },
}

export default Result;
