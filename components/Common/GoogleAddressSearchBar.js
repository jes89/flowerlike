import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class GoogleAddressSearchBar extends Component {
    
    render() {

      const { locationText, setLocationText } = this.props;

      return (
          <GooglePlacesAutocomplete 
            minLength={2} 
            autoFocus={true}
            listViewDisplayed='auto'
            fetchDetails={true}
            renderDescription={row => row.description} 
            onPress={(data, details = null) => {
              setLocationText(details.formatted_address);
            }}
            getDefaultValue={() => {
              return locationText; 
            }}
            query={{
              key: 'AIzaSyDLJKMzA1qJxT5REMDSMQo327E85jvMCfU',
              language: 'ko',
            }}
            GooglePlacesDetailsQuery={{
              fields: 'formatted_address',
            }}
            debounce={200}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth:0,
                
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
            }}
            />
      )}
    }