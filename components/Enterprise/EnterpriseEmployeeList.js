import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 20;

const employeeList = [
    {idx : 1 , name: 'Real Coffee1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 2 , name: 'Real Coffee2', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 3 , name: 'Real Coffee3', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 4 , name: 'Real Coffee4', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 5 , name: 'Real Coffee5', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 6 , name: 'Real Coffee6', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 7 , name: 'Real Coffee7', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 8 , name: 'Real Coffee8', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
]

class EnterpriseEmployeeList extends Component {
    
    getLayout = () => {
        
        if(employeeList.length === 0){
            return  <View style={{justifyContent:'center', alignItems:'center', flex:1 }}><Text>{'첫번째 직원을 등록해보세요 !'}</Text></View>;
        }

        return <ScrollView>
                {
                    employeeList.map((currentEmployee, i)=>{

                        return (<View key={i}  style={{width:'100%', paddingTop: 20, paddingLeft: 10,flexDirection:'row', }}>
                                    <View style={{ flex: 0.75, height: 60 }}>
                                        <View style={{flexDirection:'row' }}>
                                            <Image source={{uri: currentEmployee.thumbnail}} style={{width: 80, height:60}}  />
                                            <View style={{justifyContent: 'center',paddingLeft: 10, flex:1  }}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:15, fontWeight:'bold'}} >{currentEmployee.name}</Text>
                                            </View> 
                                        </View>
                                    </View>
                                    <View style={{flex: 0.25, alignItems: 'flex-end', height:60, padding: 15 }}>
                                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:'100%', height:'100%', borderWidth:1, borderRadius: 5}} onPress={()=>{console.log(123)}}>
                                            <Text style={{textAlign:'center',}}>{'삭제'}</Text>
                                        </TouchableOpacity>
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
                <HeaderLayout   title={'직원관리'} 
                                isRightSideButton={true} 
                                rightSideButton={<FontAwesome5 name={'plus'} size={ICON_SIZE} />} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{navigation.goBack();}} 
                                rightSideButtonEvent={()=>{
                                    this.props.navigation.navigate('enterpriseEmployeeWrite');
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

  
export default connect(mapStateToProps, null)(EnterpriseEmployeeList);
  
