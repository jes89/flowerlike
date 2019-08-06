import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ImageSlider from './ImageSlider';

export default class TopBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      marginTop : 20,
      marginBottom : 30,
  },
});

