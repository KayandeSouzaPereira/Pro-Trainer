import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AvatarMaior } from '../../assets/AvatarMaior';
import { styles } from '../InfoUser/styles';


export default function InfoUser() {
    return(
        <View style={styles.container}>
            <AvatarMaior urlImage="https://media.istockphoto.com/id/1300845620/pt/vetorial/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=WAnDMS5oCNIj7VFSrf_Y0_fRWD9QlrG-1Gzr1joCnaM=" />
            <View style={{backgroundColor:"white", width: 350, height: 500, top: 40, borderRadius: 15, borderColor: 'black', borderWidth: 2, alignItems: 'center'}}>
            
            <Text style={styles.CamposUser}>Nome: Ciclano</Text>
            <View style={{height: 80}}></View>
            <Text style={styles.Campos}>Altura: 1,77m</Text>
            <Text style={styles.Campos}>Peso: 78 kg</Text>
            <Text style={styles.Campos}>Idade: 28 anos</Text>
            </View>
        </View>
    )
}