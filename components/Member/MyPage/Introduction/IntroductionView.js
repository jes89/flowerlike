import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class IntroductionView extends Component {
    
    render() {

        let { intro } = this.props.sUser;

        if(intro == null || intro.length == 0){
            intro = '자기소개를 작성해보세요!';
        }

        return (
            <TouchableOpacity style={styles.container} onPress={()=>{
                this.props.navigation.navigate('introductionWrite');
            }}>
                <View >
                    <View>
                        <Text style={{fontWeight:'bold', fontSize: 16}}>{'자기소개'}</Text>
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={{lineHeight:25, }}>{intro}</Text>
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


const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}
    
const mapDispatchToProps = dispatch => ({
    signUp: sUser => dispatch(signUp(sUser)),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(IntroductionView);
      
    