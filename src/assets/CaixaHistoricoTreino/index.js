import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaHistoricoTreino/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'




export function CaixaHistoricoTreino({data}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [peso, setPeso] = useState(0);
    const [repeticoes, setRepeticoes] = useState(0);
    const [observacoes, setObservacoes] = useState("");
    const [dataTempo, setDataTempo] = useState("");
    
    
    
    

    useEffect(() => {
        setTitulo(data.nm_exercicios);
        setPeso(data.peso);
        setRepeticoes(data.repeticoes);
        if (data.observacao == "undefined" ){
            setObservacoes("Tradicional")
        }else{
            setObservacoes(data.observacao);
        }
        
        setDataTempo(moment(data.data).locale('pt-br').format("DD/MM/YYYY"));
        },[])

      


    return(
        <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.Campos}>Exercicio : {titulo}</Text>
                    <Text style={styles.Campos}>Peso : {peso}</Text>
                    <Text style={styles.Campos}>Repeticoes : {repeticoes}</Text>
                    <Text style={styles.Campos}>Observacoes : {observacoes}</Text>
                    <Text style={styles.Campos}>Data Realizada : {dataTempo}</Text>
            </View>
        </View>
    )
}