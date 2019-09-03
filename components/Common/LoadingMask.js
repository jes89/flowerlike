import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

let loadingMaskInterValEvent = null

export default class LoadingMask extends Component {

  state = {
    isEvent: true,

  }
  
  componentWillMount(){ 
    loadingMaskInterValEvent = setInterval(()=>{
        this.setState({
            isEvent: !this.state.isEvent
        })
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(loadingMaskInterValEvent);
  }

  render() {

    const { isEvent } = this.state;
    let loadingImage = null;

    if(isEvent){
        loadingImage = require('../../assets/loading_mask.png');
    } else{
        loadingImage = require('../../assets/loading_mask_late.png');
    }

      return (
                <View style={styles.container}>
                  <Image  style={styles.stretch}
                          source={loadingImage}  />
                </View>
      )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  stretch: {
      width: '50%',
      height: '50%',
      resizeMode:'contain'
  }
});

