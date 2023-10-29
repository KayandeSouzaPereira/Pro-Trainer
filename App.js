import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import Login from './src/paginas/Login';
import Dashboard from './src/paginas/Dashboard';
import { BarraSuperiorLogin } from './src/assets/BarraSuperiorLogin';
import { BarraSuperior } from './src/assets/BarraSuperior';
import { BarraInferior } from './src/assets/BarraInferior';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });
  if (!fontsLoaded) {
    return ;
  } else {
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BarraSuperiorLogin />
        <Login/>
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
});
