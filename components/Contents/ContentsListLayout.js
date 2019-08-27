import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';
import { FontAwesome, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import LikeAndStarInfo from './LikeAndStarInfo';

export default class ContentsListLayout extends Component {

  state = {
    visible : false
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };


  render() {

    const { title, images } = this.props;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText} onPress={() => {alert(1)}}> 
                  <FontAwesome naxme={'hashtag'} size={20} /> {title}
                </Text>
                <Menu ref={this.setMenuRef}  button={ <Entypo name={'dots-three-vertical'} size={20} style={{marginRight:10}} onPress={this.showMenu}/>}>
                  <MenuItem onPress={this.hideMenu}>링크복사</MenuItem>
                  <MenuItem onPress={this.hideMenu}>알림설정</MenuItem>
                  <MenuItem onPress={this.hideMenu}>숨기기</MenuItem>
                  <MenuItem onPress={this.hideMenu}>신고</MenuItem>
                </Menu>
            </View>
            <View style={styles.scrollContainer}>
            <ScrollView
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}>
                  {images.map((image, index) => (
                      <TouchableHighlight key={index} onPress={()=>{this.props.navigation.navigate('contentsView')}}>
                          <Image key={index} style={styles.image} source={image.source} />
                      </TouchableHighlight>
                  ))}
                </ScrollView>
            </View>
            <LikeAndStarInfo></LikeAndStarInfo>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop : 10,
        borderColor: '#EAEAEA',
        borderTopWidth: 1,

    },
    titleContainer: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    titleText : {
      color : '#121212',
      fontSize : 16,
    },
    iconsStyle : {
      alignSelf:'center',
      marginLeft:10, 
      marginRight:5
    },
    scrollContainer: {
      height : 150,
    },
    image: {
      width : 200,
      height : 150,
    },
  });
  
  