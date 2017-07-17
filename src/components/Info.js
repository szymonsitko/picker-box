import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';
import * as constants from '../constants';

const { width, height } = Dimensions.get('window');

export const Info = () => {
  return (
    <View>
      <ScrollView>
        <Image source={require('../../assets/drawable/background.png')} style={{ opacity: .5, width: width * 1.25, height: height * 1.25 }} />
        <View style={{ position: 'absolute', padding: 8 }}>
          <Text style={[styles.headerStyle, { marginTop: 8} ]}>Instructions</Text>
          <Text style={styles.instructions}>{constants.GAME_INSTRUCTIONS}</Text>
          <Text style={styles.headerStyle}>Credits</Text>
          <Text style={styles.instructions}>{constants.GAME_CREDITS}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(constants.URL).catch(err => console.error('Cannot open browser!', err))}>
            <Text style={[styles.headerStyle, { textAlign: 'center', marginTop: 8 } ]}>Visit Webpage</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  headerStyle: {
    fontFamily: 'MunroSmall',
    fontSize: 42
  },
  instructions: {
    fontFamily: 'Munro',
    color: 'white',
    padding: 4,
    fontSize: 22
  }
}
