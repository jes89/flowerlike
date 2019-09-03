import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class MyPageUserInfo extends Component {
    
    render() {

        const { nickNm, profile } = this.props.sUser;

        return (
            <View style={styles.container}>
                <View style={styles.profileImgContainer}>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('profile')}}>
                        {
                            profile ?   <Image source={{uri:profile}} style={styles.profileImg} /> : 
                                        <Image source={require('../../../assets/default_profile_image.png')} style={styles.profileImg} />
                        }
                        
                        <Text style={{textAlign:'center', marginTop : 5}}>{nickNm}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userLikeAndStarPoint}>
                    <TouchableOpacity style={styles.iconTouchContainer} onPress={()=>{}}>
                        <View style={styles.iconContainer} >
                            <Text style={{fontWeight:'bold'}}>1(25)</Text>
                            <Text style={{}}>근무</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTouchContainer} onPress={()=>{}}>
                        <View style={styles.iconContainer} >
                            <Text style={{fontWeight:'bold'}}>4.7(2034)</Text>
                            <Text style={{}}>좋아요</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTouchContainer} onPress={()=>{}}>
                        <View style={styles.iconContainer} >
                            <Text style={{fontWeight:'bold'}}>4.7(2034)</Text>
                            <Text style={{}}>평점</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        paddingTop: 20,
        paddingBottom : 20,
        paddingLeft : 20,
        paddingRight : 20,
        flexDirection: 'row',
    }, 
    profileImgContainer: {
        width : 100,
        alignItems : 'center',
        justifyContent: 'center',
    },
    userNickName: {
        margin : 10,
        textAlign: 'center',
        justifyContent:'center',
    },
    profileImg: {
        width : 80,
        height : 80,
        alignSelf: 'center',
        justifyContent:'center',
        borderRadius: 40,
    },
    userLikeAndStarPoint : {
        flex : 1, 
        flexDirection : 'row',
        alignItems: 'center',
        height: '100%'
    },
    iconTouchContainer : {
        flex: 1, 
    },
    iconContainer : {
        alignItems : 'center' 
    }
});


function mapStateToProps(sUser) {
    return {
      ...sUser
    };
  }
  
  
  export default connect(mapStateToProps, null)(MyPageUserInfo);
  
