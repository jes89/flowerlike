import React, { Component } from 'react';
import { StyleSheet, View, Platform, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import GoogleLogin from './GoogleLogin';
import SignUpForm from './SignUpForm';
import PolicyList from './PolicyList';

import { connect } from 'react-redux';
import { googleLogin, increment } from '../../../redux/actions';

class LoginScreen extends Component {

  signInWithGoogleAsync = async () => {
    
    const { type, accessToken, refreshToken, idToken ,  user } = await Google.logInAsync({
      iosClientId: `320146660045-oilotmqs4lqauh0fk7sp6o35amgf1kii.apps.googleusercontent.com`,
      androidClientId: `320146660045-1pkr3c5rlag29dqkq7ifppe475blaber.apps.googleusercontent.com`,
      scopes: ['email'],
    });
    if (type !== 'success') { return; }
    
    const token = await AsyncStorage.getItem('token');
    const device = Platform.OS;
    this.props.handleGoogleLogin({
        uid: user.id,
        email: user.email,
        nickNm: user.name,
        token,
        device
    });
  }

  getSignup = () =>{
    
    const { isServiceAgree, isPrivacyAgree } = this.props.sUser;

    return isServiceAgree && isPrivacyAgree ? <SignUpForm setGlobalUser={this.props.setGlobalUser} /> : <PolicyList />
  } 

  getLoginLayout = () => {

    const { uid } = this.props.sUser;

    if(uid){
        return  this.getSignup();
    } else{
        return <GoogleLogin signInWithGoogleAsync={this.signInWithGoogleAsync.bind(this)} ></GoogleLogin>
    }
  }

  

  render() {
    return (
      <View style={styles.container}>
        {
          this.getLoginLayout()
        }
            
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1
  }
});



function mapStateToProps(sUser) {
  return {
    ...sUser
  };
}

const mapDispatchToProps = dispatch => ({
  handleGoogleLogin: sUser => dispatch(googleLogin(sUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);