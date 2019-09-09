import React, { Component, FlatList } from 'react';

const menuList = [
    { key : 'likeAndStartScore' , title: '', icon : <Feather name={'bookmark'} color={'#FFCD12'} size={25} style={{width:30}} />, navigateName: 'settings' } ,
        { key : 'bookMark' , title: '별점관리', icon :  <FontAwesome5 name={'star'} color={'#F5E107'} size={25} style={{width:30}} /> , navigateName: 'settings' } ,
        { key : 'star' , title: '매장관리', icon :  <FontAwesome5 name={'building'} color={'#4374D9'} size={25} style={{width:30}} /> , navigateName: 'settings' } ,
        { key : 'enterprise' , title: '설정', icon :  <AntDesign name={'setting'} color={'#0BC904'} size={25}  style={{width:30}}/>, navigateName: 'settings' } ,
    ]


export default class MyWorkingHistory extends Component {


    render() {
        

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'근무 히스토리'} 
                                isRightSideButton={false} 
                                rightSideButton={''} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{}} 
                                rightSideButtonEvent={()=>{}}  />
                   <FlatList   data={menuList} renderItem={({item}) => <MenuTab navigation={this.props.navigation} item={item}></MenuTab>} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
});
      
    