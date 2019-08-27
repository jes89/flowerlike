import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swiper  from 'react-native-swiper';
import LikeAndStarInfo from '../LikeAndStarInfo';


const widthRatio = Dimensions.get('window').width / 4;

export default class EmployeeInfo extends Component {
    

    render() {
        const introText = '20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n';
        return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.title}>
                        <Image source={{uri:'https://img.hankyung.com/photo/201906/2019061320151883519-540x745.jpg'}}
                            style={styles.profileImg}  />
                    <Text style={styles.nickName}>{'닉네임이당'}</Text>
                </TouchableOpacity>
                <View style={styles.photoContainer}>
                    <Swiper showsButtons={true}>
                        <View style={{width:'100%', height: '100%',justifyContent: 'center', }}>
                            <Image source={{uri:'https://img.hankyung.com/photo/201906/2019061320151883519-540x745.jpg'}}
                                style={styles.photo} />
                        </View>
                        <View style={{width:'100%', height: '100%',justifyContent: 'center', }}>
                            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg/250px-180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'}}
                                style={styles.photo} />
                        </View>
                        <View style={{width:'100%', height: '100%',justifyContent: 'center', }}>
                            <Image source={{uri:'https://cdnweb01.wikitree.co.kr/webdata/editor/201601/18/img_20160118083800_cb1a9d1a.jpg'}}
                                style={styles.photo} />
                        </View>
                    </Swiper>
                </View>
                <LikeAndStarInfo />
                <View style={{margin:20}}>
                    <Text style={{height:100}}>{introText}</Text>
                </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        flexDirection:'row', 
        alignItems:'center',
        margin: 20
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
    photoContainer: {
        width:'100%', 
        height: widthRatio * 3, 
        justifyContent: 'center', 
        backgroundColor: 'black',
        marginBottom: 10,
    },
    photo: {
        width:'100%', 
        height: '100%', 
        resizeMode:'contain'
    }
  });
  
  