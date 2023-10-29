import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginNavigation from './Login';
import MainRoute from './Main';



export default function AppNavigacao({navigation, stateApp}) {
    const Stack = createStackNavigator();
    
    return(
        <Stack.Navigator>
            {
                <Stack.Screen name="Main" component={MainRoute} />
            }
            
         </Stack.Navigator>
        
    )
}