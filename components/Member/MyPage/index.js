import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import MyPageUserInfo from './MyPageUserInfo';
import Introduction from './Introduction';
import MenuTab from './MenuTab';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

const menuList = [
    { key : 'likeAndStartScore' , title: '즐겨찾기', icon : <Feather name={'bookmark'} color={'#FFCD12'} size={25} style={{width:30}} /> },
    { key : 'bookMark' , title: '별점관리', icon :  <FontAwesome5 name={'star'} color={'#F5E107'} size={25} style={{width:30}} /> },
    { key : 'star' , title: '매장관리', icon :  <FontAwesome5 name={'building'} color={'#4374D9'} size={25} style={{width:30}} /> },
    { key : 'enterprise' , title: '설정', icon :  <AntDesign name={'setting'} color={'#0BC904'} size={25}  style={{width:30}}/> },

]


export default class MyPage extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    justifyContent:'center', 
                    height:50, 
                    paddingLeft:20,
                    borderColor: '#F6F6F6',
                    borderBottomWidth: 2, }}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{'프로필'}</Text>
                </View>
                <MyPageUserInfo />
                <Introduction />
                <View style={styles.divider} />
                <FlatList   data={menuList}
                            renderItem={({item}) => <MenuTab item={item}></MenuTab>} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    divider : {
        width: '100%', height: 10, backgroundColor:'#F6F6F6', shadowColor: "#F6F6F6",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,
    }
});
