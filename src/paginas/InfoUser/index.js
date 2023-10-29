import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { styles } from '../InfoUser/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"


export default function InfoUser({ navigation }) {
    let urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s"
    return(
        <View style={styles.container}>
            <View style={{left: 130, top: 55}}>
                <BarraSuperior/>
            </View>
           
            <Image 
                            source={{uri : encodeURI(urlImage)}}
                            style={styles.avatar}
            />
            <View style={{backgroundColor:"white", width: 350, height: 500, top: 40, borderRadius: 15, borderColor: 'black', borderWidth: 2, alignItems: 'center'}}>
            
            <Text style={styles.CamposUser}>Nome: Ciclano</Text>
            <View style={{height: 60}}></View>
            <Text style={styles.Campos}>Altura: 1,77m</Text>
            <Text style={styles.Campos}>Peso: 78 kg</Text>
            <Text style={styles.Campos}>Idade: 28 anos</Text>
            </View>
            <View style={{left: 130, bottom: 20}}>
                <BarraInferior {... {navigation}}/>
            </View>  
        </View>
    )
}