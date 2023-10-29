import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BarraSuperior } from '../../assets/BarraSuperior';
import { BarraInferior } from '../../assets/BarraInferior';
import Login from '../../paginas/Login';
import Home from '../../paginas/Dashboard';
import Info from '../../paginas/InfoUser';
import Treinos from '../../paginas/Treinos';


const Stack = createStackNavigator();


export default function StackMainNavigation(props){
   
    

    return(
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#1A1C29',
          height: '12%',
          elevation: 0,
          shadowOpacity: 0
        },
      }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Treinos" component={Treinos} />
        </Stack.Navigator>
    )
}