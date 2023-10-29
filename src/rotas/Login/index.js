import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../paginas/Login';
import { View, Text } from 'react-native';



const Stack = createStackNavigator();

export default function LoginNavigation(){


    return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
    )

}
