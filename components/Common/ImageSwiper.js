import React, { Component } from 'react';
import Swiper  from 'react-native-swiper';
import { View, Text, StyleSheet,  Alert, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';

const widthRatio = Dimensions.get('window').width / 4;

const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

export default ImageSwiper = ({imageList}) => {

    return (
        <View style={styles.photoContainer}>
            <Swiper showsButtons={false}
                    renderPagination={renderPagination}>
                    {
                        imageList.map((currentImage, i)=>{

                            return (<TouchableWithoutFeedback style={styles.photoAside} key={i} onPress={currentImage.pressEvent}>
                                        <Image source={{uri: currentImage.uri}} style={styles.photo} />
                                    </TouchableWithoutFeedback>)
                        })
                    }
            </Swiper>
        </View>);
}



const styles = StyleSheet.create({
    photoContainer: {
        width:'100%', 
        height: widthRatio * 3, 
        justifyContent: 'center', 
        backgroundColor: 'black',
        marginBottom: 10,
    },
    paginationStyle: {
      position: 'absolute',
      backgroundColor: 'rgba( 255, 255, 255, 0.1 )',
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
      bottom: 10,
      right: 10
    },
    photoAside: {
        width:'100%', 
        height: '100%',
        justifyContent: 'center'
    },
    photo: {
        width:'100%', 
        height: '100%', 
        resizeMode:'contain'
    },
    paginationText: {
      color: 'white',
      fontSize: 20
    },
  });
  
