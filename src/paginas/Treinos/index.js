import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { CaixaTreino } from '../../assets/CaixaTreino';
import { CaixaAdd } from '../../assets/CaixaAdd';
import { styles } from '../Treinos/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"


export default function Treinos({ navigation }) {
    const dados = [
        {
            id:'1',
            treino:{
                id: '1',
                nome: 'Treino A',
            },
            descricao: 'Treino focado em costas'
        },
        {
            id:'2',
            treino:{
                id: '1',
                nome: 'Treino B',
            },
            descricao: 'Treino focado em peito'
        },
        {
            id:'3',
            treino:{
                id: '1',
                nome: 'Treino C',
            },
            descricao: 'Treino focado em pernas'
        },
        {
            id:'4',
            treino:{
                id: '4',
                nome: 'Treino D',
            },
            descricao: 'Treino focado em superiores'
        },
        {
            id:'0'
        }
       
]
    return(
        <View style={styles.container}>
            <View style={{left: 130, top: 45}}>
                <BarraSuperior/>
            </View>
            <FlatList
                data={dados}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    
                    item.id == "0" ?
                         <CaixaAdd/>
                        :
                        <CaixaTreino 
                        data={item}/>
                       
                    ) 
                }
                        contentContainerStyle={{ paddingBottom: 100, paddingTop: 30}}
                        showsVerticalScrollIndicator={false}
            />
            <View style={{left: 130, bottom: 10}}>
                <BarraInferior {... {navigation}}/>
            </View>            
        </View>
    )
}