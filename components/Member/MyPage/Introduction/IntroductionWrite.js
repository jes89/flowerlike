import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native';
import HeaderLayout from '../../../HeaderLayout';
import { connect } from 'react-redux';


class IntroductionWrite extends Component {

    
    
    constructor(props) {
        super(props);
        this._didFocusSubscription;
        this._willBlurSubscription;
        
        let { intro } = props.sUser;

        intro = intro || '';

        this.state = { 
            originText : intro,
            text: intro
        };
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }
  
    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }
  
    onBackButtonPressAndroid = () => {
        const { originText , text } = this.state;
        if (originText === text){
            this.props.navigation.goBack()
        } else {
            Alert.alert(
                '자기소개',
                '정말 나가시겠습니까?',
                [
                  {
                    text: '취소',
                    style: 'cancel',
                  },
                  { text: '저장', onPress: () => this.props.navigation.goBack()},
                ],
                { cancelable: false }
            );
        }
        return true;
    };

    saveIntroduction = () => {
        this.props.navigation.goBack();
    }
  
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove();
      this._willBlurSubscription && this._willBlurSubscription.remove();
    }
    
    render() {
          

        const { text } = this.state;

        console.log(text);

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'자기소개'} 
                                isRightSideButton={true} 
                                rightSideButton={'확인'} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={this.onBackButtonPressAndroid.bind(this)} 
                                rightSideButtonEvent={this.saveIntroduction.bind(this)}  />
                <View style={{padding:15}}>
                    <Text style={styles.currentTextLenWarp}>{`${text.length} / 2000`}</Text>
                    <TextInput  multiline = {true}
                                value={text}
                                onChangeText={text => this.setState({ text })}
                                style={styles.introductionTextInput} />
                </View>
                <View style={styles.backgroundDrawing} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    currentTextLenWarp : {
        alignSelf:'flex-end',
        marginBottom: 10,
    },
    backgroundDrawing : {
        width: '100%', 
        flex: 1,
        backgroundColor:'#F6F6F6', 
        shadowColor: "#F6F6F6",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,
    },
    introductionTextInput : {
        padding : 10,
        height: 200,
        borderColor: "gray",
        borderWidth: 1
    }
});


const mapStateToProps = (sUser) => {
    return {
        ...sUser
    };
}
    
const mapDispatchToProps = dispatch => ({
    signUp: sUser => dispatch(signUp(sUser)),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(IntroductionWrite);
      
    