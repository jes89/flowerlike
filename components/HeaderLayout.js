import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ICON_SIZE = 20; 

export default class HeaderLayout extends Component {

    renderHistoryBack(isHistoryBackButton){
        if(isHistoryBackButton){
            return <Ionicons name={'ios-arrow-back'} style={styles.historyBackButton} size={ICON_SIZE} />
        }
    }

    renderRightSideButton(isRightSideButton, rightSideButtonText, rightSideButtonEvent){
        if(isRightSideButton){
            return  <TouchableOpacity style={styles.rightAside} onPress={rightSideButtonEvent}>
                        <Text style={styles.headerFont}>{rightSideButtonText}</Text>
                    </TouchableOpacity>
        }
    }

    render() {

        const { title, isRightSideButton, rightSideButtonText, isHistoryBackButton, renderHistoryBack, leftSideButtonEvent, rightSideButtonEvent } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.leftAside}>
                    <TouchableOpacity style={styles.leftButtonWrap} onPress={leftSideButtonEvent}>
                        {this.renderHistoryBack(isHistoryBackButton, renderHistoryBack)}
                        <Text style={styles.headerFont}>{title}</Text>
                    </TouchableOpacity>
                    {this.renderRightSideButton(isRightSideButton, rightSideButtonText, rightSideButtonEvent)}
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        justifyContent:'center', 
        height:50, 
        paddingLeft:20,
        paddingRight:20,
        borderColor: '#F6F6F6',
        borderBottomWidth: 2,
    },
    leftAside : {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    rightAside : {
        flexDirection:'row',
    },
    leftButtonWrap: {
        flexDirection:'row'
    },
    historyBackButton: {
        alignSelf:'center', 
        marginRight: 8
    },
    headerFont : {
        fontSize:20, 
        fontWeight:'bold'
    }
});
