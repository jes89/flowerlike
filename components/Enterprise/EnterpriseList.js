import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Menu, { MenuItem } from 'react-native-material-menu';


const ICON_SIZE = 20;

const enterpriseList = [
    {idx : 1 , name: '가게이름 뭔가1', location : '서울특별시 강북구 노해로9나길 10 서울특별시 강북구 노해로9나길 10',  thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 2 , name: '가게이름 뭔가2', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 3 , name: '가게이름 뭔가3', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 4 , name: '가게이름 뭔가4', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 5 , name: '가게이름 뭔가5', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 6 , name: '가게이름 뭔가6', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 7 , name: '가게이름 뭔가7', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
    {idx : 8 , name: '가게이름 뭔가8', location : '서울특별시 강북구 노해로9나길 10', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipPGl5a5UtKthtlNZRoaRxcUBFcHbKX6sQptEgCJ=w180-h180-n-k-no'},
]


class EnterpriseList extends Component {

    _menu = [];

    setMenuRef = ref => {
        this._menu.push(ref);
    };

    showMenu = (idx) => {
        this._menu[idx].show();
    };
    
    doMenuEvent = (routeName, currentEnterprise, idx) => {
        this._menu[idx].hide();
        this.props.navigation.navigate(routeName, {currentEnterprise});
    }

    getLayout = () => {
        
        if(enterpriseList.length === 0){
            return  <View style={styles.registerEncouragement}><Text>{'첫번째 나의 매장을 등록해보세요 !'}</Text></View>;
        }

        return <ScrollView>
                {
                    enterpriseList.map((currentEnterprise, idx)=>{

                        return (<View key={idx}  style={styles.enterpriseListContainer}>
                                    <TouchableOpacity style={styles.enterpriseTouchContainer} onPress={()=>{
                                        this.props.navigation.navigate('enterpriseWrite',{
                                            idx : 0
                                        });
                                    }}>
                                        <View style={{flexDirection:'row' }}>
                                            <Image source={{uri: currentEnterprise.thumbnail}} style={styles.thumbnailStyle}  />
                                            <View style={styles.enterpriseInfo}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.enterpriseNameFont} >{currentEnterprise.name}</Text>
                                                <Text numberOfLines={2} ellipsizeMode={'tail'} >{currentEnterprise.location}</Text>
                                            </View> 
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.contextMenuContainer}>
                                        <Menu ref={this.setMenuRef} button={ <Entypo    name={'dots-three-vertical'} 
                                                                                        size={20} 
                                                                                        color={'#484848'} 
                                                                                        style={{marginRight:20}} 
                                                                                        onPress={()=> {this.showMenu(idx)}}/>}>
                                            <MenuItem onPress={()=> {this.doMenuEvent('enterpriseEmployeeList', currentEnterprise ,idx)}}>{'직원관리'}</MenuItem>
                                            <MenuItem onPress={()=> {this.doMenuEvent('push', currentEnterprise ,idx)}}>{'알림등록'}</MenuItem>
                                            <MenuItem onPress={()=> {this.doMenuEvent('board', currentEnterprise , idx)}}>{'직원용 게시판'}</MenuItem>
                                        </Menu>
                                    </View>
                                </View>)
                    })
                }
            </ScrollView>
    }
        
    
    getMyEnterpriseList = (myList) => {

        if(myList == null || myList.length === 0){

            return (
                <View style={{flex: 1}}>
                    {this.getLayout()}
                </View>
                )
        }

        return null;
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'매장관리'} 
                                isRightSideButton={true} 
                                rightSideButton={<FontAwesome5 name={'plus'} size={ICON_SIZE} />} 
                                isHistoryBackButton={false} 
                                leftSideButtonEvent={()=>{}} 
                                rightSideButtonEvent={()=>{
                                    navigation.navigate('enterpriseWrite',{
                                        enterpriseIdx : 0
                                    });
                                }}  />
                {
                    this.getMyEnterpriseList()
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
    registerEncouragement: {
        justifyContent:'center', 
        alignItems:'center', 
        flex:1
    },
    enterpriseListContainer: {
        width:'100%', 
        paddingTop: 20, 
        paddingLeft: 20,
        flexDirection:'row',
    },
    enterpriseTouchContainer: {
        flex: 0.8, 
        height: 75
    },
    thumbnailStyle: {
        width: 100, 
        height:75
    },
    enterpriseInfo: {
        justifyContent: 'center',
        paddingLeft: 10, 
        flex:1 
    },
    enterpriseNameFont: {
        fontSize:15, 
        fontWeight:'bold'
    },
    contextMenuContainer: {
        flex: 0.2,  
        justifyContent: 'center', 
        alignItems: 'flex-end',
        height:75
    }

});




const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}

  
export default connect(mapStateToProps, null)(EnterpriseList);
  
