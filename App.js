import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import BottomTabNavigators from './components/BottomTabNavigators';

let Navigation = createAppContainer(BottomTabNavigators);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent : 'space-between',
    marginTop : Constants.statusBarHeight,
  },
});