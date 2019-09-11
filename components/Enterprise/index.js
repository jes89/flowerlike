import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 20;

class Enterprise extends Component {

    getMyEnterpriseList = (myList) => {

        if(myList == null || myList.length === 0){

            return (
                <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                     <Text>{'첫번째 나의 매장을 등록해보세요 !'}</Text>
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
    row: {
        flexDirection: 'row',
        height:70, 
        borderBottomWidth: 2, 
        borderColor: '#F6F6F6', 
        alignItems: 'center',
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    rowEnd: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 36

    },
    iconContainer: {
        flexDirection: 'row',
    },
    rightSide: {
        marginRight:20
    },
    rowText: {
        fontSize: 18,
        marginLeft: 10,

    }
});



const mapStateToProps = (sUser) => {
return {
    ...sUser
};
}

  
export default connect(mapStateToProps, null)(Enterprise);
  
