import { Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from "react-native";


export default async () => {

    let previousToken = await AsyncStorage.getItem('pushToken');

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
      
        let pushToken = await Notifications.getExpoPushTokenAsync();
        
        AsyncStorage.setItem('pushToken', pushToken);
    }
};
