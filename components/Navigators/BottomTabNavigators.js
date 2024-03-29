import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../Home';
import Search from '../Search';
import Like from '../Like';

import MyPage from '../Member/MyPage';
import Profile from '../Member/MyPage/Profile';
import IntroductionWrite from '../Member/MyPage/Introduction/IntroductionWrite';
import Settings from '../Member/MyPage/Settings';

import Contact from '../Contact';
import ContentsView from '../Contents/ContentsView';
import EmployeeList from '../Contents/Employee/EmployeeList';

import { BoardList, BoardWrite, BoardView } from '../Enterprise/Board';

import { PushList, PushWrite } from '../Enterprise/Push';

import { EnterpriseList, EnterpriseWrite, EnterpriseEmployeeList, EnterpriseEmployeeWrite } from '../Enterprise';

const iconSize = 24;


const PushStack = createStackNavigator({
  pushList: PushList,
  pushWrite: PushWrite,
}, {
  headerMode : 'none'
});


const BoardStack = createStackNavigator({
  boardList: BoardList,
  boardWrite: BoardWrite,
  boardView: BoardView,
}, {
  headerMode : 'none'
});


const EnterpriseStack = createStackNavigator({
  enterpriseList : EnterpriseList,
  enterpriseWrite : EnterpriseWrite,
  enterpriseEmployeeList: EnterpriseEmployeeList,
  enterpriseEmployeeWrite : EnterpriseEmployeeWrite,
  push: PushStack,
  board : BoardStack
}, {
  headerMode : 'none'
});

const SettingStack = createStackNavigator({
  settings: Settings,
  contact: Contact,
  employeeList: EmployeeList,
}, {
  headerMode : 'none'
});

const HomeStack = createStackNavigator({
  main: Home,
  contentsView: ContentsView,
  employeeList: EmployeeList,
}, {
  headerMode : 'none' 
});

const MyPageStack = createStackNavigator({
  myPage: MyPage,
  introductionWrite: IntroductionWrite,
  profile : Profile,
  settingStack: SettingStack
}, {
  headerMode : 'none'
});

const SearchStack = createStackNavigator({
  search: Search,
  contentsView: ContentsView,
  employeeList: EmployeeList,
}, {
  headerMode : 'none'
});


export default BottomTabNavigators = createMaterialBottomTabNavigator({
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
    screen : SearchStack, 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
          <FontAwesome name={'search'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  like:{ 
    screen : Like, 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
          <AntDesign name={'heart'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  enterprise: { 
    screen : EnterpriseStack , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <FontAwesome name={'building'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
  myPage: { 
    screen : MyPageStack , 
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => (
        <View>  
           <FontAwesome name={'user'} style={[{color: tintColor}]} size={iconSize} /> 
        </View>
      ),
    }     
  },
},{
  initialRouteName: 'enterprise',  
  labeled : false,
  activeColor: '#5A5A5A',  
  inactiveColor: '#5A5A5A',  
  barStyle: { backgroundColor: '#F6F6F6' },  
});