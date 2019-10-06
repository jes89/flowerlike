import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import { FontAwesome5, Entypo} from '@expo/vector-icons';
import Menu, { MenuItem } from 'react-native-material-menu';

const ICON_SIZE = 20;

const pushList = [
    {idx : 1 , title: '매장 정리하기', days: '월,화,수,목,금,토,일', hour: '23', minute: '38' },
    {idx : 2 , title: '필요한 물건 입고 ', days: '월,화,수,목,금,토', hour: '11', minute: '23' },
    {idx : 3 , title: '알람2', days: '월,수,금', hour: '23', minute: '55' },
]


  
export default class PushList extends Component {

    _menu = [];

    setMenuRef = ref => {
        this._menu.push(ref);
    };

    showMenu = (idx) => {
        this._menu[idx].show();
    };
    
    doMenuEvent = (idx) => {
        this._menu[idx].hide();
    }
    
    getLayout = () => {
        
        if(pushList.length === 0){
            return  <View style={{justifyContent:'center', alignItems:'center', flex:1 }}>
                        <Text>{'등록된 알림이 없습니다.'}</Text>
                    </View>
        }

        return <ScrollView>
                {
                    pushList.map((currentPush, idx)=>{

                        return (
                                <View key={idx} style={{height: 100, marginTop: 5,}}>
                                    <View style={{paddingTop: 15, paddingBottom: 20}}>
                                        <View style={{flexDirection:'row'}}>
                                            <TouchableOpacity style={{flex: 0.8}}>
                                                <View style={{paddingLeft: 10, flex: 0.6}}>
                                                    <View style={{justifyContent: 'center'}}>
                                                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={{fontSize:20, fontWeight: 'bold'}} >{currentPush.title}</Text>
                                                    </View>
                                                </View>
                                                <View style={{paddingLeft: 10, flex: 0.4, marginBottom: 10}}>
                                                    <View style={{justifyContent: 'center'}}>
                                                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={{fontSize:16, marginTop: 5 }} >{currentPush.days}</Text>
                                                        <Text numberOfLines={1}  ellipsizeMode={'tail'} style={{fontSize:16, marginTop: 5 }} >{`${currentPush.hour }시 ${currentPush.minute}분`}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{flex: 0.2, alignItems: 'flex-end', height:'100%', padding: 15, }}>
                                                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:'100%', height:'100%', borderWidth:1, borderRadius: 5}} onPress={()=>{console.log(123)}}>
                                                    <Text style={{textAlign:'center',}}>{'삭제'}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{width: '100%', height:1, borderWidth:1, borderColor: '#BDBDBD', borderStyle:'dotted'}} /> 
                                </View>)
                    })
                }
            </ScrollView>
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'알림관리'} 
                                isRightSideButton={true} 
                                rightSideButton={<FontAwesome5 name={'plus'} size={ICON_SIZE} />} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{navigation.navigate('enterpriseList')}} 
                                rightSideButtonEvent={()=>{
                                    navigation.navigate('pushWrite',{
                                        enterpriseIdx : 0
                                    });
                                }}  />
                {
                    <View style={{flex: 1}}>
                        {this.getLayout()}
                    </View>
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


