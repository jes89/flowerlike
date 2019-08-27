import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

const widthRatio = Dimensions.get('window').width / 4;

export default class EnterpriseLocation extends Component {

    state = {
        region : {  
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
        },
        coordinate  : {
            latitude: 37.78825,
            longitude: -122.4324
        }
    }
  
  render() {

    const {region, coordinate} = this.state;

    return (
        <View style={{width: '100%', height: widthRatio * 3}}>
            <MapView style={{flex: 1}} initialRegion={region}> 
                <Marker coordinate={coordinate}
                        title={"title"}
                        description={"description"}
                    >
                <FontAwesome name={'map-marker'} size={30} color={'red'}></FontAwesome>
                </Marker>
            </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EAEAEA',
        borderTopWidth: 1,
        flex: 1,
    }
  });
  
  