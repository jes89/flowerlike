import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, AsyncStorage, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { FontAwesome5 } from '@expo/vector-icons';
import { SegmentedControls } from 'react-native-radio-buttons'
import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

class SignUpForm extends Component {

  state = {
    email: null,
    nickNm : null,
    profileImage: null,
    selectedCustomSegment :{ label:'개인', value: 'P' },
    isFocused: false,
  }

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  componentWillMount() {

    const { email, nickNm } = this.props.sUser;

    this.setState({
      email,
      nickNm,
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
      base64: true,
      aspect: [4, 3],
    });

    if(result.base64){
      this.setState({ profileImage: `data:image/png;base64, ${result.base64}` });
    }

  };
  

  render() {

    setSelectedOption = (option) => {
      this.setState({
        selectedCustomSegment: option,
      });
    }

    const { uid, token, device  } = this.props.sUser;
    const { profileImage, email, nickNm, selectedCustomSegment, isFocused } = this.state;
    const type = selectedCustomSegment.value;

    console.log(profileImage);

    return (

      <Mutation mutation={SAVE_USER} >
       {(saveUser) => (
                  <View style={styles.container}>
                      <View style={styles.titleContainer} > 
                          <Text style={styles.titleFont}>{'Sign up'}</Text>
                      </View>
                      <View style={styles.contentsAside}>
                          <TouchableOpacity style={styles.profileContainer} onPress={this.pickImage}>
                              {profileImage == null ? <Image  source={require('../../../assets/default_profile_image.png')} style={styles.profileImage} /> : 
                                                      <Image  source={{uri: profileImage}} style={styles.profileImage}  /> }
                          </TouchableOpacity>

                          <View style={styles.inputWrap}>
                              <FontAwesome5 name={'user'} size={30} style={styles.inputIcon} />
                              <TextInput  placeholder={'Name'} 
                                          selectionColor={BLUE}
                                          underlineColorAndroid={
                                            isFocused ? BLUE : LIGHT_GRAY
                                          }
                                          onChange={(nickNm)=> {
                                            this.setState({nickNm})
                                          }}
                                          onFocus={this.handleFocus}
                                          onBlur={this.handleBlur}
                                          style={[styles.inputStyle, styles.inputUnderLine]} 
                                          value={nickNm}  />
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
                      </View>
                      <View style={{flex: 1, marginTop:50}}>
                        <TouchableOpacity onPress={async () => {
                    
                              saveUser({
                                variables: {
                                  user: {
                                    userId: uid,
                                    nickNm: nickNm,
                                    email: email,
                                    token: token,
                                    profile: profileImage,
                                    type: type,
                                    device: device
                                  }
                                }
                              }).then(async (res) => {

                                await AsyncStorage.setItem('uid', uid);
                                await AsyncStorage.setItem('email', email);
                            
                                this.props.setGlobalUser();
                              }).catch((err) => {
                                Alert.alert('회원가입 오류', '회원가입 오류, 관리자에게 문의해주세요.')}
                              );
                          }}>
                          <Text style={{fontSize:30, color: '#3897f0'}}>{'회원가입'}</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
       )}
      </Mutation>
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
  inputUnderLine: {
    paddingLeft: 6,
    paddingBottom: 10,
  },
  segmentedControlsWrap: {
    width:300, 
    height: 50, 
    marginTop:20, 
  },
});

function mapStateToProps(sUser) {
  return {
    ...sUser
  };
}

const mapDispatchToProps = dispatch => ({
  signUp: sUser => dispatch(signUp(sUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
