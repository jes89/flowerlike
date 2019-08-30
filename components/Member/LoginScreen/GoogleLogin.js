import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet  } from 'react-native';
import GoogleButton from 'react-native-google-button';



export default GoogleLogin = ({signInWithGoogleAsync}) => {
    return (<ImageBackground source={require('../../../assets/background.png')} style={{flex:1, justifyContent:'center', padding:20}}>
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop: -100, marginBottom: 100}}>
                      <Text style={{fontSize: 50}}>{'flowerlike'}</Text>
                    </View>
                    <GoogleButton onPress={signInWithGoogleAsync} >Google Login</GoogleButton>
                </ImageBackground>)
}

const styles = StyleSheet.create({
    container : {
      flex:1
    }
  });
  
  