import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch, AsyncStorage } from 'react-native';
import HeaderLayout from '../../../HeaderLayout';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

export default class Settings extends Component {
    
    state = {
        pushState : true
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                 <HeaderLayout  title={'설정'} 
                                isRightSideButton={false} 
                                rightSideButton={''} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{ navigation.navigate('myPage'); }} 
                                rightSideButtonEvent={()=>{}}  />

                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={'bell'} size={20} />
                        <Text style={styles.rowText}>알림</Text>
                    </View>
                    <Switch onValueChange={(pushState)=>{this.setState({pushState})}} 
                            value={this.state.pushState}
                            style={styles.rightSide} />
                </View>
                <TouchableOpacity onPress={()=>{
                      AsyncStorage.setItem('userId', '');
                      AsyncStorage.setItem('email', '');
                      AsyncStorage.setItem('token', '');
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'documents'} size={20} />
                            <Text style={styles.rowText}>서비스 약관</Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={20} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('contact');
                }}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <AntDesign name={'customerservice'} size={20} />
                            <Text style={styles.rowText}>고객센터</Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} color={'#BDBDBD'} style={styles.rightSide} size={20} />
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

