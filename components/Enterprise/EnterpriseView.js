import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { Entypo, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';


const ICON_SIZE = 20;

 class EnterpriseView extends Component {

    render() {

        const { navigation } = this.props;
        const { enterpriseIdx } = navigation.state.params;

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'매장관리'} 
                                isHistoryBackButton={false} 
                                isRightSideButton={false} 
                                rightSideButton={''} 
                                leftSideButtonEvent={()=>{ navigation.goBack() }} 
                                rightSideButtonEvent={()=>{}}  />
                <ScrollView>
                    <View style={styles.enterpriseContainer}>
                        <View>
                            <Text>{'매장명'}</Text>
                        </View>
                        <Text>aaa</Text>
                    </View>
                </ScrollView>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    enterpriseContainer: {
        padding: 20,
    },
});



const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}

  
export default connect(mapStateToProps, null)(EnterpriseView);
  
