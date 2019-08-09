import React, { Component  } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import LocationSearch from './LocationSearch';
import { ScrollView } from 'react-native-gesture-handler';
import ContentsLayout from '../Contents/ContentsLayout';

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

        return (
            <View style={styles.container}>
                 <Searchbar  style={styles.searchbar}
                                placeholder="키워드"
                                onChangeText={this.updateSearchText}
                                value={searchText} />
                <LocationSearch updateLocationText={this.updateLocationText.bind(this)}/>
                <ScrollView>
                    <ContentsLayout title={'꽃다운 000'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 001'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 002'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 003'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 004'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 005'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 006'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 007'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 008'} images={images} ></ContentsLayout>
                    <ContentsLayout title={'꽃다운 009'} images={images} ></ContentsLayout>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
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

  