import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../../../assets/drawable/background.jpg')} style={styles.background} />
        <View style={styles.contentContainer}>
          <View style={styles.subContainer}>

          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: .2
  },
  contentContainer: {
    position: 'absolute',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .85
  },
  subContainer: {
    height: 280,
    width: 280,
    backgroundColor: 'black',
    opacity: 0.5
  }
}

export default Main;

// <Text>Welcome here!</Text>
// <Text style={styles.btn} onPress={() => Actions.game()}>Go to play!</Text>

// contentContainer: {
//   position: 'absolute',
//   height: height,
//   width: width,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// btn: {
//   borderWidth: 4,
//   borderColor: 'white',
//   fontWeight: 'bold',
//   padding: 12,
//   fontSize: 22,
//   color: 'white',
//   borderRadius: 12,
//   backgroundColor: 'black',
//   opacity: .5
// }
