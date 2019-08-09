import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import GoogleAddressSearchBar from './GoogleAddressSearchBar';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { FontAwesome5 } from '@expo/vector-icons';

export default class DefaultSearchMode extends Component {
    
  state = {
      isSearchMode : false,
      locationText : '',
  }

  toggleSearchMode = () => {
    this.setState({
        isSearchMode : !this.state.isSearchMode
    });
  }

  setLocationText = (locationText) => {
    this.setState({
      locationText,
      isSearchMode : !this.state.isSearchMode
    })
  }

  findMyLocation = async () => {

    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    const { locationText } = this.state;

    if (status === 'granted' && locationText.length === 0) {

      const location = await Location.getCurrentPositionAsync({});
      const coordsObj = location.coords;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${coordsObj.latitude}, ${coordsObj.longitude}&key=${'AIzaSyDLJKMzA1qJxT5REMDSMQo327E85jvMCfU'}&language=ko`;
      
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ locationText : responseJson.results[0].formatted_address});
            this.toggleSearchMode();
        });

    } else{
      this.toggleSearchMode();
    }
  }

  render() {
        
      const { isSearchMode, locationText } = this.state;

      return (
        <View style={isSearchMode ? {height : 200} : null }>
          { 
            isSearchMode ?  <GoogleAddressSearchBar  locationText={locationText} setLocationText={this.setLocationText.bind(this)}  /> 
                          :  <TouchableHighlight style={styles.searchAsideTouchableHighlight} onPress={this.findMyLocation}>
                                <View style={styles.searchAside} >
                                    <FontAwesome5 name={'map'}></FontAwesome5> 
                                    <Text style={styles.iconText}>{'위치 검색'}</Text>
                                </View>
                            </TouchableHighlight> 
          }
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  searchAsideTouchableHighlight : {
    height : 50,
    borderWidth : 1,
    borderColor : 'gray',
    backgroundColor : 'white',
    borderRadius : 5,
    marginBottom : 10,
  },
  searchAside : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: "center",
    flex : 1,
  },
  iconText : {
      marginLeft : 10,
  }
});