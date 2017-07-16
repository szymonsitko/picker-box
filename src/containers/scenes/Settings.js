import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
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
      renderMessage: false
    }
  }

  storeNewGameData({ user, difficulty }) {
    if (user.length > 0 && !user.includes('!') && !user.includes('"')) {
      this.setState({ renderMessage: false });
      this.props.storeNewGameDetails(user, difficulty);
    } else {
      this.setState({ renderMessage: true });
    }
  }

  renderFormInvalidMessage() {
    if (this.state.renderMessage || this.state.user.length < 1) {
      return <Text>Form canot be validated, double check game instructions!</Text>;
    }
  }


  render() {
    return (
      <View >
        <Header title="Settings" background="coral" />
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({ user: text })}
            value={this.state.user}
          />
          <Button title="Easy" onPress={() => this.setState({ difficulty: 0 })} />
          <Button title="Medium" onPress={() => this.setState({ difficulty: 1 })} />
          <Button title="Hard" onPress={() => this.setState({ difficulty: 2 })} />
        </View>
        <Button title="Start" onPress={() => this.storeNewGameData(this.state)} />
        {this.renderFormInvalidMessage()}
      </View>
    );
  }
}

const styles = {

}

export default Settings;
