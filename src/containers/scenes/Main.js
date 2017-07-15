import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Popup } from '../../components/Popup';
import { SquareButton } from '../../components/SquareButton';

const { height, width } = Dimensions.get('window');

class Main extends Component {
  state = {
    infoModalVisible: false,
    recordsModalVisible: false
  }

  showInfoModal() {
    this.setState({ infoModalVisible: !this.state.infoModalVisible })
  }

  showRecordsModal() {
    this.setState({ recordsModalVisible: !this.state.recordsModalVisible })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={{ color: 'white', fontSize: 32, padding: 18, backgroundColor: '#06939B', fontWeight: 'bold' }}>PickerBox</Text>
        </View>
        <View style={{ flex: 1, position: 'absolute', flexDirection: 'row', right: 0, bottom: 0}}>
          <SquareButton
          boxColor={{ backgroundColor: '#06939B' }}
          onPress={() => Actions.game()}>
          P
          </SquareButton>
          <SquareButton
          boxColor={{ backgroundColor: '#ff1a1d' }}
          onPress={this.showRecordsModal.bind(this)}>
          R
          </SquareButton>
          <SquareButton
          boxColor={{ backgroundColor: '#9B3E00' }}
          onPress={this.showInfoModal.bind(this)}>
          I
          </SquareButton>
        </View>
        <Popup showModal={this.showInfoModal.bind(this)} modalVisible={this.state.infoModalVisible}>
          <Text>Info page</Text>
        </Popup>
        <Popup showModal={this.showRecordsModal.bind(this)} modalVisible={this.state.recordsModalVisible}>
          <Text>Records page</Text>
        </Popup>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(12,235,12,0.2)'
  },
  box: {
    height: 78,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  }
}

export default Main;

// <TouchableOpacity onPress={() => Actions.game()} style={[styles.box, { backgroundColor: '#06939B'}]}>
// <Text style={styles.boxText}>P</Text>
// </TouchableOpacity>
// 4C9FDA6D2EFDDAFE2749132426

// 122134623
