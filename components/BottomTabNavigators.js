import React from 'react';
import Home from './Home';
import Search from './Search';
import Like from './Like';
import Profile from './Profile';
import Contact from './Contact';
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

const iconSize = 24;

export default BottomTabNavigator = createMaterialBottomTabNavigator({
  home: { screen : Home, 
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
    screen : Profile , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <AntDesign name={'user'}  style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  Contact : { 
    screen : Contact , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <AntDesign name={'contacts'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
},{
  initialRouteName: "home",  
  labeled : false,
  activeColor: '#f0edf6',  
  inactiveColor: '#226557',  
  barStyle: { backgroundColor: '#3BAD87' },  
});