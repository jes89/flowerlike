import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


export default class LoadingMask extends Component {
  
  render() {
      return (
              <View style={styles.container}>
                <Spinner visible={true}></Spinner>
              </View>
      )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  stretch: {
      width: '50%',
      height: '50%',
      resizeMode:'contain'
  }
});

