import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const IMAGE_ATTACH_SIZE = 40;

class BoardWrite extends Component {

  state = {
    images : [],
  }

  selectPic = async () => {
    let config = {
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    base64: true,
                    aspect: [4, 3],
                }
    let result = await ImagePicker.launchImageLibraryAsync(config);

    if(result.base64){
        let { images } = this.state;

        images.push(`data:image/png;base64, ${result.base64}`);

        this.setState(images);
    }
    
}

  render() {

    const { navigation } = this.props;
    const { userId, nickNm, } = this.props.sUser;
    const { selectPic } = this;

    return (
        <View style={styles.container}>
          <HeaderLayout   title={'직원용 게시판'} 
                            isRightSideButton={true} 
                            rightSideButton={'저장'} 
                            isHistoryBackButton={true} 
                            leftSideButtonEvent={()=>{navigation.goBack()}} 
                            rightSideButtonEvent={()=>{
                              alert('저장');
                            }}  />
          <View style={styles.innerContainer}>
                <View style={styles.termContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{'제목'}</Text>
                    </View>
                    <View style={styles.termInput}>
                        <Text>{nickNm}</Text>
                    </View>
                </View>
                <View style={styles.termContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{'내용'}</Text>
                    </View>
                    <View style={styles.termInput}>
                        <TextInput style={styles.contents} multiline={true}/>
                    </View>
                </View>
                <View style={styles.imagesContainer}>
                  <Text style={styles.imagesContainerTitle}>{'이미지 등록'}</Text>
                  <ScrollView horizontal={true} style={styles.imageScroll}>
                    <View style={styles.imagesList}>
                      <TouchableOpacity onPress={selectPic}>
                        <View style={styles.imageBorder}>
                          <AntDesign name={'pluscircleo'} size={IMAGE_ATTACH_SIZE} color={'#4C4C4C'}></AntDesign>
                        </View>
                      </TouchableOpacity>
                        <View style={styles.imageBorder}></View>
                        <View style={styles.imageBorder}></View>
                        <View style={styles.imageBorder}></View>
                      </View>
                  </ScrollView>
                  
                </View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    innerContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    termContainer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    titleContainer: {
        width: 80, 
        height: 40, 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17, 
        fontWeight: 'bold'
    },
    termInput: {
        flex:1, 
        justifyContent: 'center', 
        borderWidth:1, 
        borderColor: '#adadad', 
        paddingLeft: 5
    },
    contents: {
        height: 150,
    },
    imagesContainer: {
      marginTop: 20,
    },
    imagesContainerTitle: {
      fontSize: 17, 
      fontWeight: 'bold'
    },  
    imageScroll: {
      marginTop: 10,
    },
    imagesList: {
      flexDirection: 'row'
    },
    imageBorder: {
      borderColor: '#adadad', 
      borderWidth:1, 
      width: 150, 
      height: 113, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
});



function mapStateToProps(sUser) {
  return {
    ...sUser
  };
}

export default connect(mapStateToProps, null)(BoardWrite);

