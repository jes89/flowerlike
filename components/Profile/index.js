import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Profile extends Component {
    
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
            setTimeout(onLoadContents, 1000);
        }
        
        return (
            <View>
                {
                    isLoading ? 
                    <Spinner visible={true} /> : <Text>profile</Text>
                }
              
            </View>
        );
    }
}

const styles = StyleSheet.create({

  });
