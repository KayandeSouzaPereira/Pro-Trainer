import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { CaixaTreino } from '../../assets/CaixaTreino';
import { styles } from '../Treinos/styles';


export default function Treinos() {
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
        }
]
    return(
        <View style={styles.container}>
            <FlatList
                data={dados}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CaixaTreino 
                        data={item} 
                    />
                )}
                        contentContainerStyle={{ paddingBottom: 100, paddingTop: 30}}
                        showsVerticalScrollIndicator={false}
            />
                        
        </View>
    )
}