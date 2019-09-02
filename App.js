import React, { Component } from 'react';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { View, StyleSheet, AsyncStorage, Platform } from 'react-native';
import BottomTabNavigators from './components/BottomTabNavigators';
import registerForNotifications from './pusuNotification'
import LoginScreen from './components/Member/LoginScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import { ApolloProvider} from 'react-apollo'; 
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

let Navigation = createAppContainer(BottomTabNavigators);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: Platform.select({
      ios: 'http://192.168.2.52:8080/graphql',
      android: 'http://192.168.2.52:8080/graphql'
    })
  })
})



export default class App extends Component {

  state = {
    uid : null ,
    email : null,
    isLoginCheckFinished : false,
  }
  
  componentDidMount(){

    let token = registerForNotifications();
    
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

  setGlobalUser = async () => {

    let uid = await AsyncStorage.getItem('uid');
    let email = await AsyncStorage.getItem('email');
    
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
      <ApolloProvider client={client}>
        <Provider store={store}>
          <View style={styles.container}>
                {
                  this.getComponent( isLoginCheckFinished, uid, email )
                }
          </View>
        </Provider>
      </ApolloProvider>
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
