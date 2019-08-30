import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import HeaderLayout from '../HeaderLayout';
import LikeAndStarInfo from './LikeAndStarInfo';
import { Entypo, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import EnterpriseLocation from './EnterpriseLocation';
import MenuTab from './MenuTab';

const widthRatio = Dimensions.get('window').width / 4;
const ICON_SIZE = 25;

export default class ContentsView extends Component {

  state = {
    activeTab: 'intro',
    introText: '20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n20년 전통을 가진 수제 햄버거집!\n\n전통은 있지만, 맛은 장담 못 합니다.\n\n'
  }

  updateActiveTab = (activeTab) => {
    this.setState({activeTab});
  }

  renderContents = () => {
    const { activeTab, introText } = this.state;

    if(activeTab === 'location'){
      return (<EnterpriseLocation></EnterpriseLocation>)
    } else{
      return (<View style={{margin:10}}>
                <Text>{introText}</Text>
              </View>)
    }
  }

  render() {

    const { introText } = this.state;

    return (
      <View style={styles.container}>
        <HeaderLayout   title={'쉑쉑버거'} 
                        isRightSideButton={true} 
                        rightSideButton={<FontAwesome5 name={'share-square'} size={ICON_SIZE}></FontAwesome5>}
                        isHistoryBackButton={true} 
                        leftSideButtonEvent={()=>{this.props.navigation.goBack()}} 
                        rightSideButtonEvent={()=>{}}  />
        <ScrollView>
          <Image  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMBQLLW69nZ3P9ks4ndM_OEaMmWeXM10loSVLOocHLCdxSb2H'}}
                  style={styles.enterpriseImage} />
          <LikeAndStarInfo/>
          <View style={styles.divider}></View>
          <MenuTab updateActiveTab={this.updateActiveTab.bind(this)} moveToEmployeeList={()=>{this.props.navigation.navigate('employeeList')}} />
          {this.renderContents()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1,
        flex: 1,
    },
    enterpriseImage: {
      width:'100%', 
      height: widthRatio * 3
    },
    divider: {
      borderColor: '#EAEAEA', 
      borderWidth:1, 
      backgroundColor:'#F6F6F6', 
      height:10, 
      width:'100%', 
      marginTop: 10, 
    },
  });
  
  