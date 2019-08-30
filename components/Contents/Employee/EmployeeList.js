import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import EmployeeInfo from './EmployeeInfo';

const employeeObj = [{
        nickNm: '새로미에요',
        profileImgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF',
        intro: '월 ~ 금 오전 9시 ~ 오후 3시까지 근무해요~\n맛있는거 많이 주세요!',
        imageList: [{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'}, {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypWo1EzzKTraDLUBryGAgfP5fK8dXotKuVc_aArjFwFB8lKL6dw'}],
    },{
        nickNm: '지선이에요',
        profileImgPath: 'https://pbs.twimg.com/media/ECR7p3tXsAIzmn6.jpg',
        intro: '월 ~ 금 오전 9시 ~ 오후 3시까지 근무해요~\n맛있는거 많이 주세요!',
        imageList: [{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm2-cByslbQnJFXCvCc2IkyNq1hHX0b-w5w-dyGrkE6Jd3qoL'}, {uri :'https://pbs.twimg.com/media/ECR7p3tXsAIzmn6.jpg'}],
    },{
        nickNm: '쯔뭉이에요',
        profileImgPath: 'https://img.hankyung.com/photo/201906/2019061320151883519-540x745.jpg',
        intro: '월 ~ 금 오전 9시 ~ 오후 3시까지 근무해요~\n맛있는거 많이 주세요!',
        imageList: [{uri :'https://img.hankyung.com/photo/201906/2019061320151883519-540x745.jpg'}, {uri :'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg/250px-180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'}, {uri :'https://cdnweb01.wikitree.co.kr/webdata/editor/201601/18/img_20160118083800_cb1a9d1a.jpg'}],
    }]

export default class EmployeeList extends Component {

    render() {
        return (
        <View style={styles.container}>
             <HeaderLayout  title={'쉑쉑버거 꽃다운 직원'} 
                            isRightSideButton={false} 
                            rightSideButtonText={''} 
                            isHistoryBackButton={true} 
                            leftSideButtonEvent={()=>{this.props.navigation.goBack()}} 
                            rightSideButtonEvent={{}}  />
            <ScrollView>
                
                {
                    employeeObj.map( (currentInfo, i) => {
                        return <EmployeeInfo    key={i}  
                                                nickNm={currentInfo.nickNm} 
                                                profileImgPath={currentInfo.profileImgPath}
                                                imageList={currentInfo.imageList}
                                                intro={currentInfo.intro}
                                />
                                 
                    })
                }
 
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
  });
  
  