import React, { Component  } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import LocationSearch from '../Common/LocationSearch';
import { ScrollView } from 'react-native-gesture-handler';
import ContentsListLayout from '../Contents/ContentsListLayout';

export default class Search extends Component {
    
    state = {
        isLoading : true,
        searchText : '',
        locationText : '',
    }

    updateLocationText = locationText => {
        this.setState({ locationText });
    };

    updateSearchText = searchText => {
        this.setState({ searchText });
    };

    render() {
        const images = [
            {
              source: {
                uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg',
              },
            },
            {
              source: {
                uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
              },
            },
            {
              source: {
                uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg',
              },
            }];

        const { searchText } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Searchbar  style={styles.searchbar}
                                placeholder="키워드"
                                onChangeText={this.updateSearchText}
                                value={searchText} />
                    <LocationSearch updateLocationText={this.updateLocationText.bind(this)}/>
                </View>
                <ScrollView>
                    <ContentsListLayout title={'꽃다운 000'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 001'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 002'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 003'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 004'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 005'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 006'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 007'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 008'} images={images} navigation={navigation} />
                    <ContentsListLayout title={'꽃다운 009'} images={images} navigation={navigation} />
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor: 'white'
    },
    searchContainer : {
        padding : 20,
    },
    asideContainer : {
        flexDirection : 'column',
    },
    searchbar : {
        alignSelf : 'center',
        marginBottom : 10,
    }, 
});

  