import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../paginas/Login';
import Home from '../../paginas/Dashboard';
import Info from '../../paginas/InfoUser';
import Treinos from '../../paginas/Treinos';
import TreinoInfo from '../../paginas/TreinoInfo';


const Stack = createStackNavigator();


export default function StackMainNavigation(props){
   

    

    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Treinos" component={Treinos} />
            <Stack.Screen name="TreinosInfo" component={TreinoInfo} /> 
        </Stack.Navigator>
          
    )
}
