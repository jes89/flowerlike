import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 20;

const employeeList = [
    {idx : 1 , name: '가게이름1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 2 , name: '가게이름1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 3 , name: '가게이름13', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 4 , name: '가게이름14', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 5 , name: '가게이름15', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 6 , name: '가게이름16', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 7 , name: '가게이름17', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 8 , name: '가게이름18', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
]

class EnterpriseEmployeeList extends Component {
    
    getLayout = () => {
        
        if(employeeList.length === 0){
            return  <View style={styles.postEncouragement}><Text>{'첫번째 직원을 등록해보세요 !'}</Text></View>;
        }

        return <ScrollView>
                {
                    employeeList.map((currentEmployee, i)=>{

                        return (<View key={i}  style={styles.employeeListContainer}>
                                    <View style={styles.employeeInfoContainer}>
                                        <View style={styles.employeeContainerStyle}>
                                            <Image source={{uri: currentEmployee.thumbnail}} style={styles.thumbnailStyle}  />
                                            <View style={styles.ninkNmStyle}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.nickNmFont} >{currentEmployee.name}</Text>
                                            </View> 
                                        </View>
                                    </View>
                                    <View style={styles.deleteBtnContainer}>
                                        <TouchableOpacity style={styles.deleteBtnStyle} onPress={()=>{console.log(123)}}>
                                            <Text style={styles.deleteBtnFont}>{'삭제'}</Text>
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
    postEncouragement: {
        justifyContent:'center', 
        alignItems:'center', 
        flex:1 
    },
    employeeListContainer: {
        width:'100%', 
        paddingTop: 20, 
        paddingLeft: 10,
        flexDirection:'row',
    },
    employeeInfoContainer: {
        flex: 0.75, 
        height: 60
    },
    employeeContainerStyle: {
        flexDirection:'row' 
    },
    ninkNmStyle: {
        justifyContent: 'center',
        paddingLeft: 10, 
        flex:1 
    },
    nickNmFont: {
        fontSize:15, 
        fontWeight:'bold'
    },
    thumbnailStyle: {
        width: 80, 
        height:60
    },
    deleteBtnContainer: {
        flex: 0.25, 
        alignItems: 'flex-end', 
        height:60, 
        padding: 15
    },
    deleteBtnStyle: {
        alignItems:'center', 
        justifyContent:'center', 
        width:'100%', 
        height:'100%', 
        borderWidth:1, 
        borderRadius: 5
    },
        deleteBtnFont: {
        textAlign:'center',
    }
});




const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}

  
export default connect(mapStateToProps, null)(EnterpriseEmployeeList);
  
