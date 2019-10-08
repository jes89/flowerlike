import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Platform, Alert } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import RNPickerSelect from 'react-native-picker-select';

const default_type = {
    label: '선택',
    value: '',
}

const type_options = [
    { label: '오류문의', value: 'error' },
    { label: '광고문의', value: 'advertisement', },
    { label: '기타', value: 'etc', },
]

class Contact extends Component {

    state = {
        data: [
            {
                label: '동의',
                value: 'Y',
            },
            {
                label: '미동의',
                value: 'N',
                selected: true,
            },
        ],
 
    }

    render() {

        const { nickNm, email } = this.props.sUser;
        
        return (
            <View style={styles.container}>
                <HeaderLayout   title={'문의하기'} 
                                    isRightSideButton={true} 
                                    rightSideButton={'저장'} 
                                    isHistoryBackButton={true} 
                                    leftSideButtonEvent={()=>{this.props.navigation.goBack()}}
                                    rightSideButtonEvent={()=>{
                                        
                                    }}  />
                <ScrollView>
                    <View style={styles.innerContainer}>
                        <View style={styles.termContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>{'닉네임'}</Text>
                            </View>
                            <View style={styles.termInput}>
                                <Text>{nickNm}</Text>
                            </View>
                        </View>
                        <View style={styles.termContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>{'이메일'}</Text>
                            </View>
                            <View style={styles.termInput}>
                                <Text>{email}</Text>
                            </View>
                        </View>
                        <View style={styles.termContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>{'문의종류'}</Text>
                            </View>
                            <View style={styles.termInput}>
                            <RNPickerSelect placeholder={default_type}
                                            items={type_options}
                                            onValueChange={(val) => {}}  />
                            </View>
                        </View>
                        <View style={styles.termContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>{'내용'}</Text>
                            </View>
                            <View style={styles.termInput}>
                                <TextInput style={styles.contents} multiline={true}/>
                            </View>
                        </View>
                      
                        <View style={styles.policyWrap}>
                            <View style={styles.policyTitleWrap}>
                                <Text style={styles.policyTitle}>{'개인정보 수집 및 이용 약관'}</Text>
                            </View>
                            <View style={styles.policyContents}>
                                <ScrollView>
                                    <Text>{'환영합니다0.\n환영합니다1.\n환영합니다2.\환영합니다0.\n환영합니다1.\n환영합니다2.\n환영합니다0.\n환영합니다1.\n환영합니다2.\n환영합니다0.\n환영합니다1.\n환영합니다2.\n환영합니다0.\n환영합니다1.\n환영합니다2.\n환영합니다0.\n환영합니다1.\n환영합니다2.\n'}</Text>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.agreeContainer}>
                            <Text style={styles.agreeText}>{'개인정보 수집 및 이용에 동의합니다.(필수)'}</Text>
                            <View style={styles.agreeRadioWrap}>
                                 <RadioGroup radioButtons={this.state.data}  flexDirection='row' onPress={data => this.setState({ data })} />
                            </View>
                        </View>
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
    innerContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    termContainer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    titleContainer: {
        width: 80, 
        height: 40, 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17, 
        fontWeight: 'bold'
    },
    termInput: {
        flex:1, 
        justifyContent: 'center', 
        borderWidth:1, 
        borderColor: '#adadad', 
        paddingLeft: 5
    },
    contents: {
        height: 150,
    },
    policyWrap: {
        marginTop: 15,
    },
    policyTitleWrap: {
        backgroundColor: '#e4e8eb',
        height: 25,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    policyContents: {
        height:150,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e4e8eb',
    },
    agreeContainer: {
        marginTop: 15,
        marginBottom: 20,
    },  
    agreeRadioWrap: {
        alignSelf:'flex-end', 
        marginTop: 10,
    },
    agreeText: {
        fontWeight: 'bold'
    },
    saveBtnContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveBtn: {
        fontSize: 30,
        color: "#3897f0"
    }
});


function mapStateToProps(sUser) {
    return {
      ...sUser
    };
  }
  
export default connect(mapStateToProps, null)(Contact);
  