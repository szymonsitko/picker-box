import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Popup } from '../../components/Popup';
import { SquareButton } from '../../components/SquareButton';
import { Header } from '../../components/Header';

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

        <Header title="PickerBox" background="#9B3E00"/>

        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ flex: 1, position: 'absolute', flexDirection: 'row', justifyContent: 'center'}}>
            <SquareButton
            large
            style={{ backgroundColor: '#06939B', width: 192, height: 192, borderWidth: 8, borderColor: 'rgba(255,255,255,0.1)' }}
            onPress={() => Actions.settings()}>
            P
            </SquareButton>
            <View>
              <SquareButton
              style={{ backgroundColor: '#ff1a1d', width: 96, height: 96, borderWidth: 4, borderColor: 'rgba(255,255,255,0.1)' }}
              onPress={this.showRecordsModal.bind(this)}>
              R
              </SquareButton>
              <SquareButton
              style={{ backgroundColor: '#9B3E00', width: 96, height: 96, borderWidth: 4, borderColor: 'rgba(255,255,255,0.1)'}}
              onPress={this.showInfoModal.bind(this)}>
              I
              </SquareButton>
            </View>
          </View>
        </View>


        <Popup showModal={this.showInfoModal.bind(this)} modalVisible={this.state.infoModalVisible}>
          <Header title="Info" background="#9B3E00"/>
        </Popup>
        <Popup showModal={this.showRecordsModal.bind(this)} modalVisible={this.state.recordsModalVisible}>
          <Header title="Records" background="#ff1a1d"/>
        </Popup>


      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black'
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
