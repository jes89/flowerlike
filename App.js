import React, { Component } from 'react';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { View, StyleSheet, AsyncStorage, Platform } from 'react-native';
import BottomTabNavigators from './components/BottomTabNavigators';
import firebase from 'firebase';
import firebaseConfig from './config/firebaseConfig';
import registerForNotifications from './pusuNotification'
import LoginScreen from './components/Member/LoginScreen';
import Spinner from 'react-native-loading-spinner-overlay';


let Navigation = createAppContainer(BottomTabNavigators);
let defaultProject = firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  state = {
    uid : null ,
    email : null,
    isLoginCheckFinished : false,
  }
  
  componentDidMount(){

    registerForNotifications();
    
    Notifications.addListener((notification) =>{ 

      const { data, origin } = notification;
      
      if(origin === 'received'){
        console.log(Object.keys(data));
      }
    })
  }

  componentWillMount (){
    this.setGlobalUser();
  }

  setGlobalUser = async (uid, email) => {
    
    if(uid == null){
      uid = await AsyncStorage.getItem('uid');
    }

    if(email == null){
      email = await AsyncStorage.getItem('email');
    }

    if(Platform.OS === 'ios' && uid == null && email == null){
      uid = '116577877247390439710';
      email = 'jungeuisub1989@gmail.com';
    }

    this.setState({uid, email, isLoginCheckFinished : true});
  }

  getComponent = ( isLoginCheckFinished, uid, email ) => {
    if(isLoginCheckFinished){
       if(uid && email){
        return <Navigation />
       } else{
        return <LoginScreen setGlobalUser={this.setGlobalUser.bind(this)}/>  
       }
    } else{
       return <Spinner visible={true} ></Spinner>
    }
  }


  render() {

    const { isLoginCheckFinished, uid, email } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
              {
                this.getComponent( isLoginCheckFinished, uid, email )
              }
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
