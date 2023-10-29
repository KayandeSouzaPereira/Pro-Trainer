import { Text, View } from 'react-native';
import { styles } from '../CaixaTreino/styles';




export function CaixaTreino({data}) {
    console.log(data.treino.nome)
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                <Text style={styles.CamposTitulo}>{data.treino.nome}</Text>
                <Text style={styles.Campos}>{data.descricao}</Text>
            </View>
        </View>
    )
}