import React, { Component } from 'react';
import { View, Text, ListView, Dimensions, ScrollView, Image } from 'react-native';
import { Button } from './Button';

const { width, height } = Dimensions.get('window');

function generateRecordsListData(databaseRecords) {
  let dataSource = [];
  for (let i = 0; i < databaseRecords.length; i++ ) {
    dataSource.push(databaseRecords[i]);
  }
  return dataSource;
}

export class RecordsList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(generateRecordsListData(this.props.all_records)),
      reversed: false
    };
  }

  reverseListOrder() {
    if (!this.state.reversed) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(generateRecordsListData(this.props.all_records).reverse()),
        reversed: true,
      });
    }
    if (this.state.reversed) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(generateRecordsListData(this.props.all_records)),
        reversed: false
      });
    }
  }

  // This is a candidate for separate component
  renderRow(rowData) {
    const newDateObject = new Date(rowData.datestamp);
    const formattedDate = newDateObject.toUTCString().replace("GMT", "");
    const difficultyString = rowData.difficulty === 0 && 'Easy' || rowData.difficulty === 1 && 'Medium' || rowData.difficulty === 2 && 'Hard'
    return (
      <View style={{ margin: 4 }}>
        <Text style={styles.rowHeader}>User: {rowData.user}</Text>
        <Text style={styles.rowTextStyle}>Level: {difficultyString}</Text>
        <Text style={styles.rowTextStyle}>{formattedDate}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Image source={require('../../assets/drawable/background_box.png')} style={{ opacity: .25 }} />
        <View style={{ position: 'absolute', width: width }}>
          <ScrollView style={{ height: height * .75, marginTop: 12 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.renderRow(rowData)}
            />
          </ScrollView>
          <Button title="Reverse!" onPress={() => this.reverseListOrder()} style={styles.buttonText} />
        </View>
      </View>
    );
  }
}

const styles = {
  rowTextStyle: {
    marginLeft: 12,
    fontSize: 14,
    color: 'black',
  },
  rowHeader: {
    padding: 4,
    fontSize: 18,
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 32,
    fontFamily: 'Visitor',
  }
}
