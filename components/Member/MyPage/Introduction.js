import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Introduction extends Component {
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{}}>
                <View >
                    <View>
                        <Text style={{fontWeight:'bold', fontSize: 16}}>{'자기소개'}</Text>
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={{lineHeight:25, }}>{'안녕하세요~ 잘 부탁드려요! \n한국마사회에서 5년째 근무 중인 정의섭입니다.\n토,일 9시~6시 근무합니다\n먹이주면 좋아해요~\nhhh'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        padding: 10,
        overflow:'hidden' 
    }, 
});
