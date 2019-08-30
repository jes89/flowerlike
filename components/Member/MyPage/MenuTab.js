import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class MenuTab extends Component {
    


    render() {

        const { item } = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={()=>{
                AsyncStorage.removeItem('uid');
                AsyncStorage.removeItem('email');
            }}>
                <View style={{flexDirection:'row', flex:1, alignItems:'center'}} >
                    <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                        {item.icon}
                        <Text>{item.title}</Text>
                    </View>
                    <View>
                        <FontAwesome5 name={'angle-right'} color={'#D5D5D5'} size={20} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        justifyContent: 'center',
        padding: 10,
    }, 
});
