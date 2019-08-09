import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContentsLayout from '../../Contents/ContentsLayout';


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
    
    return (
      <View>
        <ContentsLayout title={'오늘의 꽃다운'} images={images} />
        <ContentsLayout title={'이달의 꽃다운'} images={images} />
        <ContentsLayout title={'추천 꽃다운'} images={images} />
        <ContentsLayout title={'우수 꽃다운'} images={images} />
      </View>
    );
  }
}