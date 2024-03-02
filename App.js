
import { StyleSheet, View, Dimensions, LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Bitter_600SemiBold, Bitter_700Bold } from '@expo-google-fonts/bitter'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/configs';
 

import AppNavigacao from './src/rotas';

export default function App() {
  const Stack = createStackNavigator();
  LogBox.ignoreLogs(['Warning: ...']);
  let [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Bitter_600SemiBold, Bitter_700Bold});
  if (!fontsLoaded) {
    return ;
  } else {
  SplashScreen.hideAsync();
  return (
          <Provider>
                <NavigationContainer>
                    <AppNavigacao />
                </NavigationContainer>
          </Provider>
    
  );
}}

