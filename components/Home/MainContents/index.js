import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContentsLayout from './ContentsLayout';
import { AntDesign } from '@expo/vector-icons';

export default class MainContents extends Component {

  render() {
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
    const iconSize = 20;

    return (
      <View>
        <ContentsLayout title={'오늘의 친절 직원'} images={images} titleIcon={<AntDesign name={'heart'}  style={styles.titleIcon} size={iconSize} />} />
        <ContentsLayout title={'이달의 친절 직원'} images={images} titleIcon={<AntDesign name={'calendar'} style={styles.titleIcon} size={iconSize} />}/>
        <ContentsLayout title={'누적 친절 직원'} images={images} titleIcon={<AntDesign name={'calendar'} style={styles.titleIcon} size={iconSize} />}/>
        <ContentsLayout title={'뭔가 더 넣고 싶당...'} images={images} titleIcon={<AntDesign name={'calendar'} style={styles.titleIcon} size={iconSize} />}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleIcon : {
    color: 'white',
  }
});
