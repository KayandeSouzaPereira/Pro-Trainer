import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { AntDesign, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 




export function BarraInferior({navigation}) {
    
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
                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                    <MaterialIcons style={styles.Icones} name="logout" size={40} color="#1b5a76" />
                </TouchableOpacity>
            </View>
        </View>
    )
}