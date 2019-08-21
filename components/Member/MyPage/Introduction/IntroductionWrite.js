import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class IntroductionWrite extends Component {


    
    constructor(props) {
        super(props);
        this._didFocusSubscription;
        this._willBlurSubscription;
        this.state = { 
            originText : '안녕하세요~ 잘 부탁드려요! \n한국마사회에서 5년째 근무 중인 정의섭입니다.\n토,일 9시~6시 근무합니다\n먹이주면 좋아해요~\nhhh',
            text: '안녕하세요~ 잘 부탁드려요! \n한국마사회에서 5년째 근무 중인 정의섭입니다.\n토,일 9시~6시 근무합니다\n먹이주면 좋아해요~\nhhh'
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

        return (
            <View style={styles.container}>
                <View style={{
                    justifyContent:'center', 
                    height:50, 
                    paddingLeft:20,
                    paddingRight:20,
                    borderColor: '#F6F6F6',
                    borderBottomWidth: 2, }}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={this.onBackButtonPressAndroid}>
                            <Ionicons name={'ios-arrow-back'} color={'black'} style={{alignSelf:'center', marginRight: 5}} size={20} />
                            <Text style={{fontSize:20, fontWeight:'bold'}}>{'자기소개'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={this.saveIntroduction}>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>{'확인'}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.divider} />
                <View style={{padding:15}}>
                    <Text style={{alignSelf:'flex-end'}}>{`${text.length} / 2000`}</Text>
                    <TextInput  multiline = {true}
                                value={text}
                                onChangeText={text => this.setState({ text })}
                                style={{
                                    padding : 10,
                                    height: 200,
                                    borderColor: "gray",
                                    borderWidth: 1
                                }}
                    />
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
    divider : {
        width: '100%', 
        height: 10, 
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
    }
});