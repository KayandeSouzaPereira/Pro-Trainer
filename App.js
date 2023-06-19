import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Poppins_400Regular } from from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e6c80',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
