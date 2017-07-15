import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';

export const Popup = props => {
  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => props.showModal()}
        >
       <View style={styles.container}>
        <View>
          {props.children}
        </View>
       </View>
      </Modal>
    </View>
  )
}

const styles = {
  container: {

  },
}
