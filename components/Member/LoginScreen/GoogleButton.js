import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

YellowBox.ignoreWarnings(['Setting a timer']);

export default class GoogleButton extends Component {

  signInWithGoogleAsync = async () => {

    const { type, accessToken, refreshToken, idToken ,  user } = await Google.logInAsync({
      iosClientId: `320146660045-oilotmqs4lqauh0fk7sp6o35amgf1kii.apps.googleusercontent.com`,
      androidClientId: `320146660045-1pkr3c5rlag29dqkq7ifppe475blaber.apps.googleusercontent.com`,
      scopes: ['email'],
    });

    const { setUID } = this.props;

    if (type !== 'success') { return; }
    
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken)

    firebase.auth().signInWithCredential(credential);

    firebase.auth().onAuthStateChanged((user) => {

      if (user != null) {

        AsyncStorage.setItem('uid', user.uid);

        firebase.database().ref('users/' + user.uid).set({
          accessToken,
          refreshToken
        });
        this.setState({accessToken});
        setUID(user.uid);
      }
    })
  }

  render() {

    return (
      <View >
          {
            <Button title={'Google login'} onPress={this.signInWithGoogleAsync} ></Button>
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn : {
    marginTop : 50,
  }
});

