import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
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