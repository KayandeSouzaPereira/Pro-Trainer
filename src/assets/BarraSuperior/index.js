import { Text, View } from 'react-native';
import { styles } from "./styles";
import { Avatar } from '../Avatar';




export function BarraSuperior() {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s" />
            </View>

            <Text style={styles.texto}>PRO Trainer</Text>
        </View>
    )
}