import { Text, View } from 'react-native';
import { styles } from "./styles";
import { AntDesign, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 




export function BarraInferior() {
    return(
        <View style={styles.container}>
            <View style={styles.containerIcones}>
                <AntDesign style={styles.Icones} name="barschart" size={40} color="#1b5a76" />
                <MaterialCommunityIcons style={styles.Icones} name="weight-lifter" size={40} color="#1b5a76" />
                <Feather style={styles.Icones} name="user" size={40} color="#1b5a76" />
                <MaterialIcons style={styles.Icones} name="logout" size={40} color="#1b5a76" />
            </View>
        </View>
    )
}