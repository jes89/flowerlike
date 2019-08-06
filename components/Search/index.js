import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Searchbar } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
export default class Search extends Component {
    
    state = {
        isLoading : true,
        searchText : '',
    }

    updateSearch = searchText => {
        this.setState({ searchText });
    };

    render() {
        onLoadContents = () => {
            this.setState({
                isLoading: !this.state.isLoading
            });
        }

        const { isLoading, searchText } = this.state;

        if(isLoading){
            setTimeout(onLoadContents, 500);
        }
        
        return (
            <View style={styles.container}>
                {
                    isLoading ? 
                    <Spinner visible={true} /> :    
                    <View style={styles.asideContainer}>
                        <Searchbar  style={styles.searchbar}
                                    placeholder="Search"
                                    onChangeText={this.updateSearch}
                                    value={searchText} />
                        <View style={styles.locationContainer}>
                            <View style={styles.searchAside}>
                                <FontAwesome5 name={'map-marker'}></FontAwesome5> 
                                <Text style={styles.iconText}>내 위치</Text>
                            </View>
                            <View style={styles.searchAside}>
                                <FontAwesome5 name={'map'}></FontAwesome5> 
                                <Text style={styles.iconText}>지도에서 찾기</Text>
                            </View>
                        </View>
                        <ScrollView>

                        </ScrollView>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor: 'black',
        padding : 20,
    },
    asideContainer : {
        flexDirection : 'column',
    },
    searchbar : {
        alignSelf : 'center',
    }, 
    locationContainer : {
        flexDirection : 'row',
        width : '100%',
        height : 50,
        marginTop : 20,

    },
    searchAside : {
        flexDirection : 'row',
        backgroundColor : 'gray',
        alignItems : 'center',
        justifyContent: "center",
        flex : 1,
        borderWidth : 1,
        borderColor : 'white',
    },
    iconText : {
        marginLeft : 10,
        
    }
});

  