import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';


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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
});



const mapStateToProps = (sUser) => {
return {
    ...sUser
};
}

  
export default connect(mapStateToProps, null)(Enterprise);
  
