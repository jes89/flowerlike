import React, { Component } from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import ImageSwiper from '../../Common/ImageSwiper';

const imageList = [{
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF',
  pressEvent : () => {console.log(1);}
},{
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypWo1EzzKTraDLUBryGAgfP5fK8dXotKuVc_aArjFwFB8lKL6dw',
  pressEvent : () => {console.log(1);}
}, {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm2-cByslbQnJFXCvCc2IkyNq1hHX0b-w5w-dyGrkE6Jd3qoL',
  pressEvent : () => {console.log(1);}
}, {
  uri: 'https://pbs.twimg.com/media/ECR7p3tXsAIzmn6.jpg',
  pressEvent : () => {console.log(1);}
}
]

export default class TopBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageSwiper imageList={imageList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      width: '100%',
      height: 300,
      // marginTop : 20,
      // marginBottom : 30,
  },
});

