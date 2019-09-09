import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import MyPageUserInfo from './MyPageUserInfo';
import IntroductionView from './Introduction/IntroductionView';
import MenuTab from './MenuTab';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import HeaderLayout from '../../HeaderLayout';
import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions';

const ICON_SIZE = 20;
const menuList = [
    { key : 'start' , title: '별점관리', icon :  <FontAwesome5 name={'star'} color={'#F5E107'} size={ICON_SIZE} style={{width:30}} /> , navigateName: 'settingStack' } ,
    { key : 'store' , title: '매장관리', icon :  <FontAwesome5 name={'heart'} color={'#FF7E7E'} size={ICON_SIZE} style={{width:30}} /> , navigateName: 'settingStack' } ,
    { key : 'settings' , title: '설정', icon :  <AntDesign name={'setting'} color={'#0BC904'} size={ICON_SIZE}  style={{width:30}}/>, navigateName: 'settingStack' } ,
    // { key : 'star' , title: '매장관리', icon :  <FontAwesome5 name={'building'} color={'#4374D9'} size={25} style={{width:30}} /> , navigateName: 'settingStack' } ,
  
]

 class MyPage extends Component {
    
    componentWillMount() {
        const { nickNm } = this.props.sUser;

        this.setState({
            nickNm
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'프로필'} 
                                isRightSideButton={false} 
                                rightSideButton={''} 
                                isHistoryBackButton={false} 
                                leftSideButtonEvent={()=>{}} 
                                rightSideButtonEvent={()=>{}}  />
                <ScrollView>
                    <MyPageUserInfo navigation={this.props.navigation}/>
                    <IntroductionView navigation={this.props.navigation} />
                    <View style={styles.divider} />
                    <FlatList   data={menuList} renderItem={({item}) => <MenuTab navigation={this.props.navigation} item={item}></MenuTab>} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    divider : {
        width: '100%', height: 10, backgroundColor:'#F6F6F6', shadowColor: "#F6F6F6",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,
    }
});



const mapStateToProps = (sUser) => {
return {
    ...sUser
};
}
  
const mapDispatchToProps = dispatch => ({
    signUp: sUser => dispatch(signUp(sUser)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
  
