import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class ContentsLayout extends Component {
  render() {

    const { title, images } = this.props;
    
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          <FontAwesome name={'hashtag'} style={styles.titleIcon} size={20} /> {title}
        </Text>
        <View style={styles.scrollContainer}>
        <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}>
              {images.map((image, index) => (
                  <TouchableHighlight key={index} onPress={()=>{alert(index)}}>
                      <Image key={index} style={styles.image} source={image.source} />
                  </TouchableHighlight>
              ))}
            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        margin : 10,
    },
    titleText : {
        color : 'white',
        fontSize : 20,
    },
    scrollContainer: {
      height : 150,
    },
    image: {
      width : 200,
      height : 150,
      marginTop : 20,
    },
  });
  
  