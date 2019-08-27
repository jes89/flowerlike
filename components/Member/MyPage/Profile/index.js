import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView, TextInput, Button } from 'react-native';
import HeaderLayout from '../../../HeaderLayout';

const TEXT_INPUT_FCOUSED_COLOR = '#FFB2D9';
const TEXT_INPUT_DEFUALT_COLOR = '#EAEAEA';

export default class Profile extends Component {

    state = {
        nameInput : null
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'프로필'} 
                                isRightSideButton={true} 
                                rightSideButtonText={'확인'} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{this.props.navigation.goBack()}} 
                                rightSideButtonEvent={()=>{}}  />
                <ScrollView>
                    <View style={styles.profileImgContainer}>
                        <TouchableOpacity onPress={()=>{ }}>
                            <Image  source={{uri:'http://www.changetv.kr/upload/ProfileImg/2019-04-29060012_18.png'}}
                                    style={styles.profileImg} />
                            <Text style={styles.profileImgUploadText}>{'이미지 업로드'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:15}}>
                        <Text>{'아이디'}</Text>
                        <Text style={{marginTop:10}}>{'flowlike102220'}</Text>
                    </View>
                    <View style={{margin:15}}>
                        <Text>{'닉네임'}</Text>
                        <TextInput ref={(nameInput)=>{this.state.nameInput || this.setState({nameInput})}} style={styles.textInputStyle}></TextInput>
                    </View>
                    <View style={{margin:15}}>
                        <Text>{'이메일'}</Text>
                        <Text style={{marginTop:10}}>{'hiter00@naver.com'}</Text>
                    </View>
                    <View style={{margin:15}}>
                        <Text>{'포인트'}</Text>
                        <Text style={{marginTop:10}}>{'0'}</Text>
                    </View>
                    <Button title={'저장'} onPress={()=>{console.log(this.state.nameInput)}}></Button>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImgContainer: {
        padding: 30,
        alignItems : 'center',
        justifyContent: 'center',
    },
    profileImg: {
        width : 100,
        height : 100,
        alignSelf: 'center',
        justifyContent:'center',
        borderRadius: 50,
    },
    profileImgUploadText : {
        textAlign : 'center', 
        marginTop : 10,
        color : '#489CFF'
    },
    textInputStyle: {
        alignSelf: 'stretch',
        borderBottomColor: '#000',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1
    }
});
