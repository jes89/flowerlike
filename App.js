import React, { Component } from 'react';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { View, StyleSheet, AsyncStorage, Platform } from 'react-native';
import BottomTabNavigators from './components/BottomTabNavigators';
import firebase from 'firebase';
import firebaseConfig from './config/firebaseConfig';
import registerForNotifications from './pusuNotification'
import GoogleButton from './components/Member/LoginScreen/GoogleButton';
import Spinner from 'react-native-loading-spinner-overlay';

let Navigation = createAppContainer(BottomTabNavigators);
let defaultProject = firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  state = {
    uid : null ,
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
    this.getUID();
  }

  getUID = async () => {
    
    let uid = await AsyncStorage.getItem('uid');

    if(Platform.OS === 'ios' && uid == null ){
      uid = 'iso_dev_user';
    }

    this.setState({uid, isLoginCheckFinished : true});
  }

  setUID = (uid) => {
    this.setState({uid});
  }

  getComponent = ( isLoginCheckFinished, uid ) => {
    if(isLoginCheckFinished){
       if(uid){
        return <Navigation />
       } else{
        return <GoogleButton setUID={this.setUID.bind(this)} />  
       }
    } else{
       return <Spinner visible={true} ></Spinner>
    }
  }


  render() {

    const { isLoginCheckFinished, uid } = this.state;

    return (
      <Provider store={store}>
        <View style={styles.container}>
              {
                this.getComponent( isLoginCheckFinished, uid )
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