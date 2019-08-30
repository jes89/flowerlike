import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SegmentedControls } from 'react-native-radio-buttons'

export default class SignUpForm extends Component {

  state = {
    uid: null,
    email: null,
    ninkNm : null,
    profileImage: null,
    token : null,
    type: null,
    device: null,
    intro: null,
    selectedCustomSegment :{ label:'개인', value: 'P' },
  }

  componentWillMount() {

    const { uid, email, ninkNm, isServiceAgree , isPrivacyAgree  } = this.props.userInfo;

    this.setState({
      uid, 
      email,
      ninkNm,
      isServiceAgree,
      isPrivacyAgree,
    })
  }


  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('카메라 권한 없이는 일부 이용이 제한될 수 있습니다.');
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ profileImage: result.uri });
    }
  };

  saveUser = () => {
    const { id, email, ninkNm, profileImage, token, type, device} = this.state;
    const { isServiceAgree, isPrivacyAgree } = this.props;


  }
  

  render() {

    function setSelectedOption(option){
      this.setState({
        selectedCustomSegment: option,
      });
    }

    const { profileImage, email, ninkNm } = this.state;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer} > 
                <Text style={styles.titleFont}>{'Sign up'}</Text>
            </View>
            <ScrollView style={styles.contentsContainer}>
                <View style={styles.contentsAside}>
                    <TouchableOpacity style={styles.profileContainer} onPress={this.pickImage}>
                        {profileImage == null ? <Image  source={require('../../../assets/default_profile_image.png')} style={styles.profileImage} /> : 
                                                <Image  source={{uri: profileImage}} style={styles.profileImage}  /> }
                    </TouchableOpacity>

                    <View style={styles.inputWrap}>
                        <FontAwesome5 name={'user'} size={30} style={styles.inputIcon} />
                        <TextInput placeholder={'Name'} style={styles.inputStyle} value={ninkNm}  />
                    </View>

                    <View style={styles.inputWrap}>
                        <MaterialCommunityIcons name={'email'} size={30}  style={styles.inputIcon} />
                        <Text style={styles.inputStyle} >{email}</Text>
                    </View>
                    <View style={styles.segmentedControlsWrap}>
                    <SegmentedControls  direction={'row'}
                                        options={ [
                                          { label:'개인', value: 'P' },
                                          { label:'기업', value: 'E'},
                                        ] }
                                        tint= {'#6799FF'}
                                        selectedTint= {'white'}
                                        backTint= {'white'}
                                        optionStyle= {{
                                          fontSize: 30,
                                        }}
                                        onSelection={ setSelectedOption.bind(this) }
                                        selectedOption={ this.state.selectedCustomSegment }
                                        extractText={ (option) => option.label }
                                        testOptionEqual={ (a, b) => {
                                          if (!a || !b) {
                                            return false;
                                          }
                                          return a.label === b.label
                                        }}
                                      />       
                    </View>
                    <View style={{marginTop:30, marginBottom:50}}>
                    <TouchableOpacity onPress={ async ()=>{
                      const {uid, email} = this.state;

                      await AsyncStorage.setItem('uid', uid);
                      await AsyncStorage.setItem('email', email);

                      this.props.setGlobalUser(uid, email);
                    }}>
                      <View>
                        <Text>{'회원가입'}</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                   
                </View>
                
                

            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:'center', 
    justifyContent: 'center'
  },
  titleContainer: {
    marginTop: 30
  },
  titleFont: {
    fontSize:50
  },
  contentsContainer: {
    width:'100%'
  },
  contentsAside: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  profileContainer: {
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#EAEAEA'
  },
  inputWrap: {
    width:300, 
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop:20, 
    borderWidth:1,  
    borderRadius: 25,  
  },
  inputIcon: {
    marginLeft:20, 
    marginRight:20,
  },
  inputStyle: {
    flex:1, 
    marginRight:20
  },
  segmentedControlsWrap: {
    width:300, 
    height: 50, 
    marginTop:20, 
  },
});

