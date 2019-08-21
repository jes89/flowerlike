import React from 'react';
import Home from './Home';
import Search from './Search';
import Like from './Like';
import MyPage from './Member/MyPage';
import Contact from './Contact';
import ContentsView from './Contents/ContentsView';
import Profile from './Member/MyPage/Profile';
import IntroductionWrite from './Member/MyPage/Introduction/IntroductionWrite';
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const iconSize = 24;

const HomeStack = createStackNavigator({
  main: Home,
  contentsView: ContentsView,
}, {
  headerMode : 'none'
});

const MyPageStack = createStackNavigator({
  myPage: MyPage,
  introductionWrite: IntroductionWrite,
  profile : Profile
}, {
  headerMode : 'none'
});

export default BottomTabNavigator = createMaterialBottomTabNavigator({
  home: { screen : HomeStack, 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
          <Entypo name='home' style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  search: { 
    screen : Search, 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
          <FontAwesome name={'search'}  style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  like:{ 
    screen : Like, 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
          <AntDesign name={'heart'}   style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  profile: { 
    screen : MyPageStack , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <FontAwesome name={'user'}  style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  Contact : { 
    screen : Contact , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <MaterialIcons name={'contact-mail'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
},{
  // initialRouteName: "home",  
  initialRouteName: "profile",  
  labeled : false,
  activeColor: '#5A5A5A',  
  inactiveColor: '#5A5A5A',  
  barStyle: { backgroundColor: '#F6F6F6' },  
});