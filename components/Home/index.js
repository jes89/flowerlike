import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

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
            setTimeout(onLoadContents, 1000);
        }

        return (
            <Fragment>
              <View style={styles.container}>
                  {
                      isLoading ? <Spinner visible={true} /> : <Text>home</Text>
                  }
              </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1
    }
});
