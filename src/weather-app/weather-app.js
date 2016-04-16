import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

export default class WeatherProject extends Component {
  componentWillMount() {
    this.setState({
      cities: [ 'Amsterdam', 'Paris', 'London' ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Weather
        </Text>
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
