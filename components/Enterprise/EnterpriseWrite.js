import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity, ScrollView , Image, KeyboardAvoidingView, Platform } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const widthRatio = Dimensions.get('window').width / 4;

class EnterpriseWrite extends Component {

    state = {
        name: '',
        thumbnail: '',
        intro: '',
        locationText : '',
        employees: [],
    }

    updateLocationText = locationText => {
        this.setState({ locationText });
    };

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
          this.setState({ thumbnail: `data:image/png;base64, ${result.base64}` });
        }
    };
    
    setLocationText = (data) => {
        console.log(data);
    }
    

    render() {

        const { name, thumbnail, intro, locationText, employees  } = this.state;
        const { navigation } = this.props;
        const { enterpriseIdx } = navigation.state.params;

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={
                    Platform.select({
                        ios: () => 0,
                        android: () => 50
                    })()
                }>
                    <HeaderLayout   title={'매장관리'} 
                                    isHistoryBackButton={true} 
                                    isRightSideButton={true} 
                                    rightSideButton={'저장'} 
                                    leftSideButtonEvent={()=>{ navigation.goBack() }} 
                                    rightSideButtonEvent={()=>{}}  />
                    
                    <ScrollView>
                        <View style={styles.enterpriseContainer}>
                            <View style={styles.thumbnail}>
                                <TouchableOpacity onPress={this.pickImage}>
                                    {
                                        thumbnail ? <Image  source={{uri: thumbnail}} style={styles.thumbnail} /> : 
                                        <Text style={styles.thumbnailText}>{'매장 이미지를 등록해보세요 (4:3)'}</Text>
                                    }
                                
                                </TouchableOpacity>
                            </View>
                            <View style={styles.termContainer}>
                                <Text style={styles.titleText}>{'매장명'}</Text>
                                <View style={styles.termInput}>
                                    <TextInput onChangeText={name => this.setState({name})} value={name} />
                                </View>
                            </View>
                            <View style={styles.termContainer}>
                                <Text style={styles.titleText}>{'매장 소개'}</Text>
                                <View style={styles.termInputMultiLine}>
                                    <TextInput onChangeText={intro => this.setState({intro})} value={intro} multiline={true}  />
                                </View>
                            </View>
                            <View style={[styles.termContainer,{marginBottom:20}]}>
                                <Text style={styles.titleText}>{'매장 위치'}</Text>
                                <GooglePlacesAutocomplete   minLength={3} 
                                                            listViewDisplayed='auto'
                                                            fetchDetails={true}
                                                            renderDescription={row => row.description} 
                                                            onPress={(data, details = null) => {
                                                                console.log(data, details);
                                                            }}
                                                            getDefaultValue={() => {
                                                                return locationText; 
                                                            }}
                                                            query={{
                                                                key: 'AIzaSyDLJKMzA1qJxT5REMDSMQo327E85jvMCfU',
                                                                language: 'ko',
                                                            }}
                                                            GooglePlacesDetailsQuery={{
                                                                fields: 'formatted_address',
                                                            }}
                                                            debounce={200}
                                                            styles={{
                                                                textInputContainer: {
                                                                    width: '100%',
                                                                    justifyContent: 'center', 
                                                                    height: 40,
                                                                    borderRadius: 5,
                                                                    borderWidth:1, 
                                                                    borderColor: '#adadad', 
                                                                    backgroundColor: '#FCFCFC',
                                                                    paddingLeft: 5
                                                                },
                                                                textInput: {
                                                                    marginTop: 0,
                                                                    marginLeft: 0,
                                                                    marginBottom: 0,
                                                                    marginRight: 0,
                                                                    height: '100%',
                                                                },
                                                                predefinedPlacesDescription: {
                                                                    color: '#1faadb'
                                                                },
                                                            }}
                                                        />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    enterpriseContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    thumbnail: {
        width: '100%',
        height: widthRatio * 3,
        justifyContent: 'center', 
        borderWidth:1, 
        borderColor: '#adadad', 
        
    },
    thumbnailText: {
        textAlign: 'center'
    },  
    termContainer: {
        marginTop: 15,
    },
    titleContainer: {
        width: 80, 
        height: 40, 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17, 
        fontWeight: 'bold',
        marginBottom: 5,
    },
    termInput: {
        width: '100%',
        justifyContent: 'center', 
        height: 40,
        borderRadius: 5,
        borderWidth:1, 
        borderColor: '#adadad', 
        backgroundColor: '#FCFCFC',
        paddingLeft: 5
    },
    termInputMultiLine: {
        width: '100%',
        height: 100,
        justifyContent: 'center', 
        borderRadius: 5,
        borderWidth:1, 
        borderColor: '#adadad', 
        backgroundColor: '#FCFCFC',
        paddingLeft: 5
    },
    contents: {
        height: 150,
    },
});


const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}

  
export default connect(mapStateToProps, null)(EnterpriseWrite);
  
