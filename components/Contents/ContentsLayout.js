import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default class ContentsLayout extends Component {
  render() {

    const { title, images } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}> 
              <FontAwesome name={'hashtag'} size={20} /> {title}
            </Text>
            <Entypo name={'dots-three-vertical'} size={20} style={{marginRight:10}} onPress={()=>{alert(2)}}/>
        </View>
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
    container: {
        marginTop : 10,
        borderColor: '#EAEAEA',
    },
    titleContainer: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    titleText : {
      color : '#121212',
      fontSize : 16,
    },
    scrollContainer: {
      borderWidth: 1,
      borderColor: '#EAEAEA',
      height : 150,
    },
    image: {
      width : 200,
      height : 150,
    },
  });
  
  