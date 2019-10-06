import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 20;

const boardList = [
    {idx : 1 , title: '제목이당0', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 2 , title: '제목이당1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 3 , title: '제목이당2', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 4 , title: '제목이당3', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 5 , title: '제목이당4', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 6 , title: '제목이당5', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 7 , title: '제목이당6', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
    {idx : 8 , title: '제목이당8제목이당8제목이당8제목이당8제목이당8제목이당8제목이당8제목이당8', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF', regDtm: '2019-10-23'},
]
class BoardList extends Component {

  getLayout = () => {
    const { navigation } = this.props;
    if(boardList.length === 0){
        return  <View style={{justifyContent:'center', alignItems:'center', flex:1 }}><Text>{'첫번째 게시물을 등록해보세요 !'}</Text></View>;
    }

    return <ScrollView>
            {
                boardList.map((currentBoard, idx)=>{
                    return (<View key={idx}  style={{width:'100%', paddingTop: 20, paddingLeft: 10,flexDirection:'row', }}>
                                <TouchableOpacity style={{ flex: 0.75, height: 60 }} onPress={()=> {navigation.navigate('boardView');}}>
                                    <View style={{flexDirection:'row' }}>
                                        <Image source={{uri: currentBoard.thumbnail}} style={{width: 80, height:60}}  />
                                        <View style={{justifyContent: 'center',paddingLeft: 10, flex:1  }}>
                                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:15, fontWeight:'bold'}} >{currentBoard.title}</Text>
                                        </View> 
                                    </View>
                                </TouchableOpacity>
                                <View style={{flex: 0.25, alignItems: 'flex-end', height:60, padding: 15 }}>
                                    <Text>{currentBoard.regDtm}</Text>
                                </View>
                            </View>)
                })
            }
        </ScrollView>
}

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'직원용 게시판'} 
                                isRightSideButton={true} 
                                rightSideButton={<FontAwesome5 name={'plus'} size={ICON_SIZE} />} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{navigation.navigate('enterpriseList');}} 
                                rightSideButtonEvent={()=>{
                                navigation.navigate('boardWrite');
                                }}  />
            
                {
                    this.getLayout()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  }, 
});



const mapStateToProps = (sUser) => {
return {
    ...sUser
};
}


export default connect(mapStateToProps, null)(BoardList);
