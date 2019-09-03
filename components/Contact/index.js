import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Contact extends Component {
    
    state = {
        isLoading : true,
    }

    render() {

        const { isLoading } = this.state;

        onLoadContents = () => {
            this.setState({
                isLoading: !this.state.isLoading
            });
        }

        if(isLoading){
            setTimeout(onLoadContents, 1000);
        }
        
        return (
            <View>
                {
                    isLoading ? 
                    <Spinner visible={true} /> : <Text>contact</Text>
                }
              
            </View>
        );
    }
}

const styles = StyleSheet.create({

  });
