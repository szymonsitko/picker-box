import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableHighlight, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { realmDatabase } from '../../lib/DatabaseConnection';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

const { width, height } = Dimensions.get('window');

class Settings extends Component {
  constructor(props) {
    super(props);

    const records = realmDatabase.objects('Records');
    const lastUser = Object.keys(records).length > 0 ? records[Object.keys(records).length - 1].user : '';
    this.state = {
      user: lastUser,
      difficulty: 0,
      renderMessage: false,
      renderButtons: true
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    this.setState({ renderButtons: false });
  }

  _keyboardDidHide() {
    this.setState({ renderButtons: true });
  }

  storeNewGameData({ user, difficulty }) {
    if (user.length > 0 && !user.includes('!') && !user.includes('"')) {
      this.setState({ renderMessage: false });
      this.props.storeNewGameDetails(user, difficulty);
      Actions.game();
    } else {
      this.setState({ renderMessage: true });
      setTimeout(() => {
        this.setState({ renderMessage: false });
      }, 2000);
    }
  }

  renderFormInvalidMessage() {
    if (this.state.renderMessage || (this.state.user.legth < 1)) {
      return (
        <View style={styles.invalidMessageFrame}>
          <Image source={require('../../../assets/drawable/uglyface.png')} style={{ width: 92, height: 92 }} />
          <Text style={styles.invalidMessageLabel}>Hey, I cannot accept this!</Text>
        </View>
      );
    }
  }

  renderUserForm() {
    return (
      <View style={styles.centralContainer}>
        <Text style={styles.formFrameLabel}>Please tell us your name!</Text>
        <TextInput
          style={styles.inputFormField}
          underlineColorAndroid='transparent'
          placeholder="E.g Mr. Robot"
          onChangeText={(text) => this.setState({ user: text })}
          value={this.state.user}
        />
      </View>
    );
  }

  renderBottomContainers() {
    if (this.state.renderButtons) {
      return (
        <View>
          <View style={styles.rightBottomContainer}>
            <Button title="Start" onPress={() => this.storeNewGameData(this.state)} style={styles.buttonText}/>
          </View>
          <View style={styles.leftBottomContainer}>
            <Button
              title="Easy"
              onPress={() => this.setState({ difficulty: 0 })}
              style={styles.buttonText}
            />
            <Button
              title="Medium"
              onPress={() => this.setState({ difficulty: 1 })}
              style={styles.buttonText}
            />
            <Button
              title="Hard"
              onPress={() => this.setState({ difficulty: 2, chosen: { color: 'coral' } })}
              style={styles.buttonText}
            />
          </View>
        </View>
      )
    }
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          <Image source={require('../../../assets/drawable/background_settings.png')} style={styles.backgroundImage} />
          <Header style={{ fontFamily: 'Visitor' }} title="Settings" background="coral" />
          {!this.state.renderMessage ? this.renderUserForm() : this.renderFormInvalidMessage()}
          {this.renderBottomContainers()}
        </View>
    );
  }
}

const styles = {
  leftBottomContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 4,
  },
  rightBottomContainer: {
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 4,
  },
  centralContainer: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 52,
    padding: 2,
    textAlign: 'left',
    fontFamily: 'Visitor',
    color: 'white'
  },
  formFrameLabel: {
    marginBottom: 24,
    marginTop: 24,
    fontFamily: 'Visitor',
    fontSize: 30
  },
  inputFormField: {
    width: width * .75,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'Munro',
    fontSize: 20,
    borderWidth: 2
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    opacity: .5
  },
  invalidMessageFrame: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center'
  },
  invalidMessageLabel: {
    fontFamily: 'MunroSmall',
    fontSize: 24,
    padding: 8
  }
}

export default Settings;
