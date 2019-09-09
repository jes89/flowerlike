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

    renderRightSideButton(isRightSideButton, rightSideButton, rightSideButtonEvent){
        if(isRightSideButton){
            return  <TouchableOpacity style={styles.rightAside} onPress={rightSideButtonEvent}>
                        {
                            typeof(rightSideButton) === 'string' ? <Text style={styles.headerFont}>{rightSideButton}</Text> : rightSideButton
                        }
                    </TouchableOpacity>
        }
    }

    render() {

        const { title, isRightSideButton, rightSideButton, isHistoryBackButton, renderHistoryBack, leftSideButtonEvent, rightSideButtonEvent } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.leftAside}>
                    <TouchableOpacity style={styles.leftButtonWrap} onPress={leftSideButtonEvent}>
                        {this.renderHistoryBack(isHistoryBackButton, renderHistoryBack)}
                        <Text style={styles.headerFont}>{title}</Text>
                    </TouchableOpacity>
                </View>
                {this.renderRightSideButton(isRightSideButton, rightSideButton, rightSideButtonEvent)}
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        justifyContent:'center', 
        alignItems: 'center',
        height:50, 
        paddingLeft:20,
        paddingRight:20,
        borderColor : '#F6F6F6',
        borderBottomWidth: 3,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    leftAside : {
        // flexDirection:'row',
    },
    rightAside : {
        // flexDirection:'row',
        // justifyContent: 'center'
    },
    leftButtonWrap: {
        flexDirection:'row',
        justifyContent: 'center',
    },
    historyBackButton: {
        alignSelf:'center', 
        marginRight: 12
    },
    headerFont : {
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }
});
