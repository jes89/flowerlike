import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import Swiper  from 'react-native-swiper';

const screenWidth = Math.round(Dimensions.get('window').width);

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


const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class BoardView extends Component {


  

  render() {

    const { navigation } = this.props;
    const { title, userId, nickNm, regDtm } = { idx : 1 , title: '제목이당0', userId : 'wjddy89', nickNm: '정의섭', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23' }
    

    return (
      <View style={styles.container}>
        <HeaderLayout   title={'직원용 게시판'} 
                        isRightSideButton={true} 
                        rightSideButton={''} 
                        isHistoryBackButton={true} 
                        leftSideButtonEvent={()=>{navigation.goBack();}} 
                        rightSideButtonEvent={() => {}} />
        <View>
          <View style={{ padding:15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text ellipsizeMode={'tail'} style={{fontWeight: 'bold', fontSize: 16, }}>{title}</Text>
            </View>
            <View style={{justifyContent: 'center', alignContent: 'center', flex: 0.3}}>
              <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}>{nickNm}</Text>
              <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}>{regDtm}</Text>
            </View>
          </View>
          <View style={{width: '100%', height:1, borderWidth:1, borderColor: '#BDBDBD', borderStyle:'dotted'}} /> 
        </View>
        
        
        <ScrollView style={{margin: 15, width: (screenWidth - 30)}}>
          {/* <Swiper showsButtons={false}
                    renderPagination={renderPagination}>
                    {
                        imageList.map((currentImage, idx)=>{

                            return <Image key={idx} source={{uri: currentImage.uri}} style={{
                              width:'100%', 
                              height: '100%',
                              resizeMode: 'contain',
                              justifyContent: 'center'
                            }} />
                        })
                    }
            </Swiper> */}
          <Text style={{fontWeight: 'bold', fontSize: 35,}}>{nickNm}</Text>
        </ScrollView>
        
          
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
