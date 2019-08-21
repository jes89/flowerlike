import React, { Component, Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import TopBanner from './TopBanner';
import MainContents from './MainContents';

export default class Home extends Component {

    state = {
        isLoading : true,
      }

    render() {

        onLoadContents = () => {
            this.setState({
                isLoading: !this.state.isLoading
            });
        }

        const { isLoading } = this.state;

        if(isLoading){
            setTimeout(onLoadContents, 500);
        }

        return (
            <ScrollView style={styles.container}>
                  {
                      isLoading ? <Spinner visible={true} /> : 
                      <View>
                          <TopBanner></TopBanner>
                          <MainContents navigation={this.props.navigation}></MainContents>
                      </View>
                  }
              </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        backgroundColor: 'white'
    }
});

  
  