import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { Entypo, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 20;

 class Enterprise extends Component {


    render() {

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'매장관리'} 
                                isRightSideButton={false} 
                                rightSideButton={''} 
                                isHistoryBackButton={false} 
                                leftSideButtonEvent={()=>{}} 
                                rightSideButtonEvent={()=>{}}  />
                <TouchableOpacity onPress={()=>{
                    
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name={'store'} size={ICON_SIZE} />
                            <Text style={styles.rowText}>{'매장정보'}</Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={ICON_SIZE} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name={'user-friends'} size={ICON_SIZE} />
                            <Text style={styles.rowText}>{'직원관리'}</Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={ICON_SIZE} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                        <Entypo name={'bell'} size={ICON_SIZE} />
                            <Text style={styles.rowText}>{'푸쉬관리'}</Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={ICON_SIZE} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name={'chalkboard'} size={ICON_SIZE} />
                            <Text style={styles.rowText}>{'내부 게시판'}</Text>
                        </View> 
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={ICON_SIZE} />
                    </View>
                </TouchableOpacity>
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
  
