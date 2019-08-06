import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableHighlight, StyleSheet, Dimensions, Linking } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const images = [
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg',
      },
    },
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
      },
    },
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg',
      },
    },
    {
        source: {
            uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg',
        },
    },
    {
        source: {
          uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
        },
    },
  ];

export default class ImageSlider extends Component {
    render() {
      if (images && images.length) {
        return (
          <View
            style={styles.scrollContainer}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {images.map((image, index) => (
                   <TouchableHighlight key={index}  onPress={()=>{Linking.openURL(image.source.uri)}}>
                        <Image key={index} style={styles.image} source={image.source} />
                   </TouchableHighlight>
          
              ))}
            </ScrollView>
          </View>
        );
      }
      return null;    
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollContainer: {
      height,
    },
    image: {
      width,
      height,
    },
  });
  