import React, { Component } from 'react';
import { StyleSheet, View, Platform, AsyncStorage, ImageBackground, Text, Alert } from 'react-native';
import * as Google from 'expo-google-app-auth';
import GoogleButton from 'react-native-google-button';
import { connect } from 'react-redux';
import { autoLogin } from '../../../redux/actions';
import LoadingMask from '../../Common/LoadingMask';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER = gql`
  query getUser($userId: String){
    getUser(userId:$userId){
      userId
      email
      nickNm
      profile
      pushToken
      refreshToken
      device
      intro
    }
  }
`;

class LoginScreen extends Component {

  autoLoginObj = {}

  userIdLoadFinished = false;
  emailLoadFinished = false;
  tokenLoadFinished = false;

  state = {
    isLoading: true,
    isAutoLogin : false,
  };

  signInWithGoogleAsync = async () => {
  
    const { type, accessToken, refreshToken, idToken ,  user } = await Google.logInAsync({
      iosClientId: `320146660045-oilotmqs4lqauh0fk7sp6o35amgf1kii.apps.googleusercontent.com`,
      androidClientId: `320146660045-1pkr3c5rlag29dqkq7ifppe475blaber.apps.googleusercontent.com`,
      scopes: ['email'],
    });
    if (type !== 'success') { return; }
    
    const pushToken = await AsyncStorage.getItem('pushToken');
    const device = Platform.OS;
    
    this.props.navigation.navigate('policyList', {
        userId: user.id,
        email: user.email,
        nickNm: user.name,
        pushToken,
        device
    });
  }



  checkAutoLogin = (data) => {

    const key = Object.keys(data)[0];

    
    this.autoLoginObj[key] = data[key];

    const { userId, email, pushToken } = this.autoLoginObj;
    const { userIdLoadFinished, emailLoadFinished, tokenLoadFinished } = this;

    if( userIdLoadFinished && emailLoadFinished && tokenLoadFinished ){

      if(userId && email && pushToken){
        this.setState({
            isLoading : false,
            isAutoLogin : true
          })
      } else{
          this.setState({
            isLoading : false,
            isAutoLogin : false,
          })
      }
    }
  }

  componentWillMount() {

    AsyncStorage.getItem('userId').then((userId) => {
      userId = Platform.OS === 'ios' ? '116577877247390439710' : userId;
      this.userIdLoadFinished = true;
      this.checkAutoLogin({userId});
    });

    AsyncStorage.getItem('email').then((email) => {
      email = Platform.OS === 'ios' ? 'jungeuisub1989@gmail.com' : email;
      this.emailLoadFinished = true;
      this.checkAutoLogin({email});
    });

    AsyncStorage.getItem('pushToken').then((pushToken) => {
      pushToken = Platform.OS === 'ios' ? 'ExponentPushToken[da2rI4F3tcF3yucXVzus_n]' : pushToken;
      this.tokenLoadFinished = true;
      this.checkAutoLogin({pushToken});
    });
  }

  getGoogleLoginLayout = () => {
    return <ImageBackground source={require('../../../assets/background.png')} style={{flex:1, justifyContent:'center', padding:20}}>
                <View style={{flexDirection:'row', justifyContent:'center', marginTop: -100, marginBottom: 100}}>
                  <Text style={{fontSize: 50}}>{'flowerlike'}</Text>
                </View>
                <GoogleButton onPress={this.signInWithGoogleAsync} >Google Login</GoogleButton>
            </ImageBackground>   
  }

  getLayout = () => {

    const {isLoading, isAutoLogin} = this.state;

    if(isLoading){
      <LoadingMask />
    } 

    if(isAutoLogin){

      let { userId } = this.autoLoginObj; 
      const { handleAutoLogin } = this.props;

      handleAutoLogin({
        userId: 'userId',
        nickNm: 'nickNm',
        email: 'email',
        accessToken: 'accessToken',
        pushToken: 'pushToken',
        refreshToken: 'refreshToken',
        profile: 'profile',
        type: 'type',
        device: 'device',
        intro: 'intro',
      })
      //TEST
      // return <Query query={GET_USER} variables={{userId}} >
      //    {({ loading, error, data }) => {
      //       if(loading){
      //         return <LoadingMask />;
      //       }

      //       if(data == null || data.getUser == null){
      //         return this.getGoogleLoginLayout();
      //       }
            
      //       if(error){
      //         Alert.alert('오류', '자동로그인 도중 오류가 발생했습니다.\n다시 시도해주세요.');
      //         AsyncStorage.removeItem('userId');
      //         AsyncStorage.removeItem('email');
      //       }

      //       handleAutoLogin(data.getUser);

      //       return <LoadingMask />;
      //     }}
      // </Query>

    } else{
        return this.getGoogleLoginLayout();
    }
    
  }

  render() {
   
    return (
      <View style={styles.container}>
         {this.getLayout()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1
  }
});


const mapStateToProps = (sUser) => {
  return {
    ...sUser
  };
}

const mapDispatchToProps = dispatch => ({
  handleAutoLogin: sUser => dispatch(autoLogin(sUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);