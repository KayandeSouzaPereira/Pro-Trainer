import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { AntDesign, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';



export function BarraInferior({navigation}) {


    async function logout(){
        await AsyncStorage.clear();
        navigation.navigate("Login");
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.containerIcones}>
                <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                    <AntDesign style={styles.Icones} name="barschart" size={40} color="#1b5a76"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Treinos")}}>
                    <MaterialCommunityIcons style={styles.Icones} name="weight-lifter" size={40} color="#1b5a76" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Info")}}>
                    <Feather style={styles.Icones} name="user" size={40} color="#1b5a76" />
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => { await logout()}}>
                    <MaterialIcons style={styles.Icones} name="logout" size={40} color="#1b5a76" />
                </TouchableOpacity>
            </View>
        </View>
    )
}