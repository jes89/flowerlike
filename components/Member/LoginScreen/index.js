import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import GoogleLogin from './GoogleLogin';
import SignUpForm from './SignUpForm';
import PolicyList from './PolicyList';

import { connect } from 'react-redux';
import { googleLogin, increment } from '../../../redux/actions';

class LoginScreen extends Component {

  state = {
    uid: null,
    email: null,
    ninkNm : null, 
    isServiceAgree: false,
    isPrivacyAgree : false,
  }
  

  signInWithGoogleAsync = async () => {
    
    const { type, accessToken, refreshToken, idToken ,  user } = await Google.logInAsync({
      iosClientId: `320146660045-oilotmqs4lqauh0fk7sp6o35amgf1kii.apps.googleusercontent.com`,
      androidClientId: `320146660045-1pkr3c5rlag29dqkq7ifppe475blaber.apps.googleusercontent.com`,
      scopes: ['email'],
    });
    if (type !== 'success') { return; }

    this.props.handleGoogleLogin({
        uid: user.id,
        email: user.email,
        ninkNm: user.name
    });

    this.setState({
        uid: user.id,
        email: user.email,
        ninkNm: user.name
    });

  }

  agreePolicy = (isServiceAgree , isPrivacyAgree, isLocationAgree) => {
    this.setState({
      isServiceAgree , 
      isPrivacyAgree , 
      isLocationAgree
    })
  }

  getSignup = () =>{
    
    const { isServiceAgree, isPrivacyAgree } = this.state;
    const { setGlobalUser } = this.props;

    return isServiceAgree && isPrivacyAgree ? <SignUpForm setGlobalUser={setGlobalUser} userInfo={this.state} /> : <PolicyList agreePolicy={this.agreePolicy.bind(this)} />
  } 

  getLoginLayout = () => {

    let { uid } = this.state;

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