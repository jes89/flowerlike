import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { Searchbar } from 'react-native-paper';

class EnterpriseEmployeeWrite extends Component {
    
    state = {
        emailSearchTxt : '',
    }

    updateSearchText = emailSearchTxt => {
        this.setState({ emailSearchTxt });
    };

    render() {
        const { emailSearchTxt } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'고용관계 요청'} 
                                rightSideButton={''} 
                                isHistoryBackButton={true} 
                                isRightSideButton={false} 
                                leftSideButtonEvent={()=>{navigation.goBack()}} 
                                rightSideButtonEvent={()=>{}}  />
                <View>
                    <View style={{}}>
                        <Searchbar  style={styles.searchbar}
                                    placeholder={'이메일'}
                                    onChangeText={this.updateSearchText}
                                    value={emailSearchTxt} />
                        <View style={styles.profileContainer}>
                            <Image source={require('../../assets/default_profile_image.png')} style={styles.profileImg} />
                            <Text style={{textAlign:'center', marginTop : 10, fontSize:17, fontWeight: 'bold'}}>{'섭서비'}</Text>
                        </View>
                        <View style={{alignItems: 'center', marginTop: 20,}}>
                            <TouchableOpacity style={{width:90, height:30, justifyContent: 'center',  backgroundColor: '#6799FF', borderRadius: 5 }}>
                                <Text style={{textAlign: 'center', color: 'white'}}>{'고용관계 요청'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    searchbar: {
        marginBottom : 10,
    }, 
    profileContainer: {
        paddingTop: 60,
        alignItems: 'center',
        
    }, 
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#EAEAEA',
    }
});




const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}

  
export default connect(mapStateToProps, null)(EnterpriseEmployeeWrite);
  
