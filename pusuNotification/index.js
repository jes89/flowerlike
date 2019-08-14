import { Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import * as axios from 'axios';
import { AsyncStorage } from "react-native";

// const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

// var instance = axios.create();
// instance.defaults.baseURL = PUSH_ENDPOINT;
// instance.defaults.timeout = 20000;

export default async () => {

    let previousToken = await AsyncStorage.getItem('pushtoken');

    if(previousToken){
        return;
    } else{
        const { status : existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
      
        if (finalStatus !== 'granted') {
          return;
        }
      
        let token = await Notifications.getExpoPushTokenAsync();
        
        AsyncStorage.setItem('pushtoken', token);
    }
};
