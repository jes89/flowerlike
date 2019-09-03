import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView, TextInput, Button } from 'react-native';
import HeaderLayout from '../../../HeaderLayout';
import { connect } from 'react-redux';
import { signUp } from '../../../../redux/actions';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const TEXT_INPUT_FCOUSED_COLOR = '#FFB2D9';
const TEXT_INPUT_DEFUALT_COLOR = '#EAEAEA';

const SAVE_USER = gql`
      mutation saveUser($user: SaveUserInput){
        saveUser(user:$user){
          userId
          nickNm
          email
          token
          device
          profile
        }
      }
`;

class Profile extends Component {

    state = {
        nameInput : null,
        userId: null,
        nickNm: null,
        profile: null,

    }   

    componentWillMount() {
        const { userId, nickNm, profile, email } = this.props.sUser;

        this.setState({
            userId, 
            nickNm, 
            profile, 
            email 
        })
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64: true,
          aspect: [4, 3],
        });
    
        if(result.base64){
          this.setState({ profile: `data:image/png;base64, ${result.base64}` });
        }

    }

    render() {

        const { userId, nickNm, profile, email } = this.state;

        return (
            <Mutation mutation={SAVE_USER} >
            {(saveUser) => (
                <View style={styles.container}>
                    <HeaderLayout   title={'프로필'} 
                                    isRightSideButton={true} 
                                    rightSideButton={'확인'} 
                                    isHistoryBackButton={true} 
                                    leftSideButtonEvent={()=>{this.props.navigation.goBack()}} 
                                    rightSideButtonEvent={()=>{
                                        saveUser({
                                            variables: {
                                              user: {
                                                userId,
                                                nickNm,
                                                profile
                                              }
                                            }
                                          }).then(async (res) => {
                                        
                                          }).catch((err) => {
                                            Alert.alert('회원가입 오류', '회원가입 오류, 관리자에게 문의해주세요.')}
                                          )
                                    }}  />
                    <ScrollView>
                        <View style={styles.profileImgContainer}>
                            <TouchableOpacity onPress={this.pickImage}>
                                   {
                                        profile ?   <Image source={{uri:profile}} style={styles.profileImg} /> : 
                                                    <Image source={require('../../../../assets/default_profile_image.png')} style={styles.profileImg} />
                                    }
                                <Text style={styles.profileImgUploadText}>{'이미지 업로드'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:15}}>
                            <Text>{'이메일'}</Text>
                            <Text style={{marginTop:10}}>{email}</Text>
                        </View>
                        <View style={{margin:15}}>
                            <Text>{'닉네임'}</Text>
                            <TextInput  ref={(nameInput)=>{this.state.nameInput || this.setState({nameInput})}} 
                                        onChange={(nickNm)=>{
                                            this.setState({nickNm})
                                        }}
                                        style={styles.textInputStyle}></TextInput>
                        </View>
                        <View style={{margin:15}}>
                            <Text>{'포인트'}</Text>
                            <Text style={{marginTop:10}}>{'0'}</Text>
                        </View>
                    </ScrollView>
                </View>
             )}
             </Mutation>
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


function mapStateToProps(sUser) {
    return {
      ...sUser
    };
  }
  
  const mapDispatchToProps = dispatch => ({
    signUp: sUser => dispatch(signUp(sUser)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  