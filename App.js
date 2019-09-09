import React, { Component } from 'react';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import Constants from 'expo-constants';
import { View, StyleSheet, Platform } from 'react-native';
import Navigators from './components/Navigators';
import registerForNotifications from './pusuNotification'
import { ApolloProvider} from 'react-apollo'; 
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

const SERVER_URI = 'http://192.168.2.167:8080/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: Platform.select({
      ios: SERVER_URI,
      android: SERVER_URI,
    })
  })
})

export default class App extends Component {

  componentDidMount(){

    registerForNotifications();
    
    Notifications.addListener((notification) =>{ 

      const { data, origin } = notification;
      
      if(origin === 'received'){
        console.log(Object.keys(data));
      }
    })
  }


  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <View style={styles.container}>
                <Navigators />
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
