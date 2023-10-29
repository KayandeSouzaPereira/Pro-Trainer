import { Text, View } from 'react-native';
import { styles } from "./styles";
import { Avatar } from '../Avatar';




export function BarraSuperior() {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar urlImage="https://media.istockphoto.com/id/1300845620/pt/vetorial/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=WAnDMS5oCNIj7VFSrf_Y0_fRWD9QlrG-1Gzr1joCnaM=" />
            </View>

            <Text style={styles.texto}>PRO Trainer</Text>
        </View>
    )
}