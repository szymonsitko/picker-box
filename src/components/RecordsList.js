import React, { Component } from 'react';
import { View, Text, ListView, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
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
    const difficultyString = rowData.difficulty === 0 && 'Easy' || rowData.difficulty === 1 && 'Medium' || rowData.difficulty === 2 && 'Hard';
    const scoreArray = rowData.score.split(',');
    return (
      <View style={{ margin: 4 }}>
        <Text style={styles.rowHeader}>User: {rowData.user}</Text>
        <Text style={styles.rowTextStyle}>Level: {difficultyString}</Text>
        <Text style={styles.rowDataText}>{formattedDate}</Text>
        <Text style={{ fontFamily: 'Munro', marginLeft: 12, fontSize: 16 }}>{scoreArray[1]} seconds</Text>
        <Text style={{ fontFamily: 'Munro', marginLeft: 12, fontSize: 16  }}>{scoreArray[3]} seconds</Text>
        <Text style={{ fontFamily: 'Munro', marginLeft: 12, fontSize: 16  }}>{scoreArray[2]} seconds</Text>
      </View>
    );
  }

  render() {
    return (
      <View >
        <Image source={require('../../assets/drawable/background.png')} style={{ opacity: .5, width: width * 1.25, height: height * 1.25 }} />
        <View style={{ position: 'absolute', width: width }}>
          <TouchableOpacity onPress={() => this.reverseListOrder()}>
            <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 8, fontFamily: 'Visitor', fontSize: 22 }}>Sorting: {this.state.reversed ? 'Newest to Oldest' : 'Oldest to Newest'}</Text>
          </TouchableOpacity>
          <ScrollView style={{ height: height * .75 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.renderRow(rowData)}
            />
          </ScrollView>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.75)', height: height * .25 }} />
        </View>
      </View>
    );
  }
}

const styles = {
  rowTextStyle: {
    marginLeft: 12,
    fontSize: 22,
    color: 'black',
    fontFamily: 'MunroSmall'
  },
  rowHeader: {
    padding: 4,
    fontSize: 26,
    color: 'black',
    fontFamily: 'MunroSmall'
  },
  rowDataText: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 20,
    color: 'black',
    fontFamily: 'MunroSmall'
  },
  backgroundImage: {
    width: width,
    height: height,
    opacity: .5
  }
}


// Need to change this image!
// <Image source={require('../../assets/drawable/background_box.png')} style={{ opacity: .15 }} />
