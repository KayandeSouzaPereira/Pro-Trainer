import { createStackNavigator } from '@react-navigation/stack';
import StackMainNavigation from './Main';



export default function AppNavigacao({navigation, stateApp}) {
    const Stack = createStackNavigator();

    
    
    return(
        <Stack.Navigator>
            {
                <Stack.Screen name="Main" component={StackMainNavigation}  options={{headerShown:false}} />
            }
            
         </Stack.Navigator>
        
    )
}