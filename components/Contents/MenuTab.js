import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const ICON_SIZE = 25;


export default MenuTab = ({updateActiveTab}) => {

    return ( <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuWithText} onPress={()=> {updateActiveTab('intro')}}>
                <View style={styles.menu}>
                    <FontAwesome5 name={'store'} size={ICON_SIZE} />
                    <Text>{'소개'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWithText} onPress={()=> {updateActiveTab('location')}}>
                <View style={styles.menu}>
                    <Entypo name={'map'} size={ICON_SIZE} />
                    <Text>{'위치'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWithText} onPress={()=> {}}>
                <View style={styles.menu}>
                    <AntDesign name={'team'} size={ICON_SIZE} />
                    <Text>{'직원'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWithText} onPress={()=> {}}>
                <View style={styles.menu}>
                    <MaterialCommunityIcons name={'cellphone-message'} size={ICON_SIZE} />
                    <Text>{'푸쉬관리'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuWithText} onPress={()=> {}}>
                <View style={styles.menu}>
                    <FontAwesome5 name={'chalkboard-teacher'} size={ICON_SIZE} />
                    <Text>{'매장관리'}</Text>
                </View>
                </TouchableOpacity>
            </View>)
}


const styles = StyleSheet.create({
    menuContainer: {
      borderTopWidth: 1, 
      borderBottomWidth: 1, 
      borderColor:'#EAEAEA', 
      height : 80, 
      flexDirection: 'row'
    },
    menuWithText: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menu: {
      alignItems: 'center'
    }
  });
  
  