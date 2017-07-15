import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Popup } from '../../components/Popup';
import { Button } from '../../components/Button';
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
        <View style={{ flex: 1, position: 'absolute', right: 0, bottom: 0, padding: 4 }}>
          <Button title="Play" onPress={() => Actions.settings()} style={styles.buttonText} />
          <Button title="Records" onPress={this.showRecordsModal.bind(this)} style={styles.buttonText} />
          <Button title="Info" onPress={this.showInfoModal.bind(this)} style={styles.buttonText} />
        </View>
        <Popup showModal={this.showInfoModal.bind(this)} modalVisible={this.state.infoModalVisible}>
          <Header title="Info" background="#06939B"/>
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
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'right'
  }
}

export default Main;

// <View style={{ padding: 4}}>
//   <Text style={{ fontSize: 38}}>PickerBox</Text>
// </View>
// 4C9FDA6D2EFDDAFE2749132426

// 122134623
