import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default class LikeAndStarInfo extends Component {



  render() {

    return (
        <View style={styles.container}>
            <FontAwesome5 name={'star'} size={25} style={styles.iconsStyle} color={'#EDD200'}/><Text style={styles.iconsText}>4.7(2034)</Text>
            <Ionicons name={'md-heart'} size={25} style={styles.iconsStyle} color={'#FF4848'}/><Text style={styles.iconsText}>1,000</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        marginTop:10
    },
    iconsStyle : {
      alignSelf:'center',
      marginLeft:10, 
      marginRight:5
    },
    iconsText : {
        alignSelf:'center'
    }
  });
  
  