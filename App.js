
import { StyleSheet, View, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigacao from './src/rotas';

export default function App() {
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });
  if (!fontsLoaded) {
    return ;
  } else {
  SplashScreen.hideAsync();
  return (
      <View style={styles.container}>
          <NavigationContainer>
            <View style={styles.containerBase}>
              <AppNavigacao />
            </View>
          </NavigationContainer>
      </View>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b5a76',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBase: {
    alignContent:'center', 
    colour:'white', 
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height + 300
  }
});
