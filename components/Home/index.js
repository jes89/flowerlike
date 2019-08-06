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
        const { navigation } = this.props;

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
            <Fragment>
            <ScrollView style={styles.container}>
                  {
                      isLoading ? <Spinner visible={true} /> : 
                      <View>
                          <TopBanner></TopBanner>
                          <MainContents></MainContents>
                      </View>
                  }
              </ScrollView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        backgroundColor: 'black'
    }
});

  
  