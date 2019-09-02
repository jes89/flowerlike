import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { savePolicyAgreeMember } from '../../../redux/actions';

class PolicyList extends Component {

  state = {
    isServiceAgree : false,
    isPrivacyAgree: false,
    isLocationAgree: false,
    isAllAgree : false,
  }

  goToSignUp = () => {

    const {isServiceAgree , isPrivacyAgree, isLocationAgree} = this.state;

    if(isServiceAgree === false){
      Alert.alert('이용안내','꽃다운 이용약관 동의(필수)을/를 동의해주세요.');
      return;
    }

    if(isPrivacyAgree === false){
      Alert.alert('이용안내','개인정보 이용약관 동의(필수)을/를 동의해주세요.');
      return;
    }

    this.props.savePolicyAgreeMember({
      isServiceAgree,
      isPrivacyAgree
    })

    // this.props.agreePolicy(isServiceAgree , isPrivacyAgree, isLocationAgree);
  }

  render() {



      return (
          
          <View style={styles.container}>
              <View style={styles.titleContainer} > 
                  <Text style={styles.titleFont}>{'Sign up'}</Text>
              </View>
              <View style={{flex: 6}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CheckBox checked={this.state.isAllAgree}
                            onPress={() => this.setState({  isServiceAgree : !this.state.isAllAgree,
                                                            isPrivacyAgree: !this.state.isAllAgree,
                                                            isAllAgree : !this.state.isAllAgree,})}/>
                  <Text>모두 동의</Text>
                </View>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox checked={this.state.isServiceAgree}
                                onPress={() => this.setState({isServiceAgree : !this.state.isServiceAgree})} />
                      <Text>꽃다운 이용약관 동의(필수)</Text>
                  </View>
                  <View style={{height:150, borderWidth:1, borderColor: '#EAEAEA', marginLeft:20, marginRight: 20}}>
                    <ScrollView>
                        <Text>
                          {'여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n'}
                        </Text>
                    </ScrollView>
                  </View>
                </View> 
                <View>
                  <View style={{flexDirection: 'row',  alignItems: 'center'}}>
                    <CheckBox checked={this.state.isPrivacyAgree}
                              onPress={() => this.setState({isPrivacyAgree : !this.state.isPrivacyAgree,})} />
                    <Text>개인정보 이용약관 동의(필수)</Text>
                  </View>

                  <View style={{height:150, borderWidth:1, borderColor: '#EAEAEA', marginLeft:20, marginRight: 20}}>
                    <ScrollView>
                      <Text>
                        {'여러분을 환영합니다1.\n여러분을 환영합니다2.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n여러분을 환영합니다.\n'}
                      </Text>
                    </ScrollView>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={this.goToSignUp} >
                <View style={{alignItems: 'center', alignSelf:'center', justifyContent:'center', width: 200, height:30,  marginLeft: 20, marginRight: 20, marginBottom: 30, borderWidth: 1, borderRadius: 20,}}>
                    <Text style={{textAlign:'center',justifyContent:'center'}}>{'약관 동의'}</Text>
                </View>
              </TouchableOpacity>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center', 
  },
  titleFont: {
    fontSize:50
  },
  contentsContainer: {
    width:'100%'
  },
});

function mapStateToProps(sUser) {
  return {
    ...sUser
  };
}

const mapDispatchToProps = dispatch => ({
  savePolicyAgreeMember: sUser => dispatch(savePolicyAgreeMember(sUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PolicyList);
