import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';

export default class ContentsView extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text>
          컨텐츠 상세보기
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1,
    },
  });
  
  