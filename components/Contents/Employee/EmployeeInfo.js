import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import LikeAndStarInfo from '../LikeAndStarInfo';
import ImageSwiper from '../../Common/ImageSwiper';

export default class EmployeeInfo extends Component {
    
    render() {

        const { profileImgPath, nickNm, imageList, intro } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.title}>
                        <Image source={{uri: profileImgPath}}
                            style={styles.profileImg}  />
                    <Text style={styles.nickName}>{nickNm}</Text>
                </TouchableOpacity>
                <ImageSwiper imageList={imageList}></ImageSwiper>
                <LikeAndStarInfo />
                <View style={styles.introAside}>
                    <Text>{intro}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA'
    },
    title: {
        flexDirection:'row', 
        alignItems:'center',
        margin: 10
    }, 
    profileImg: {
        width:40, 
        height:40, 
        borderRadius: 40/2,
    },
    nickName: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    introAside:{ 
        margin:20, 
        height:50
    }
  });
  
