import React from 'react-native';
const {
  Component,
  StyleSheet,
  View,
  Text,
  ListView,
} = React;

export default class WeatherProject extends Component {
  componentWillMount() {
    const _dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: _dataSource.cloneWithRows([
        'Amsterdam',
        'Athens',
        'Berlin',
        'London',
        'Madrid',
        'Paris',
        'Rome',
      ]),
    });
  }

  _renderRow(rowData) {
    return (
      <Text>
        {rowData}
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}>
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
});
