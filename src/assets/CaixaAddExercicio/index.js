import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../CaixaAddExercicio/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsuarioRequest, setUsuarioTreinoRequest } from '../../servicos/Exercicios';




export function CaixaAddExercicio({reload, idTreino}) {

    const setData = async (titulo, descricao) => {
        console.log("data set")
        let tkk = await AsyncStorage.getItem('Token');
        console.log(tkk)
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        try {
            let ret = await setUsuarioTreinoRequest(id, titulo, descricao, tkk, );
            if (ret != null){
                reload();
               }
        } catch (error) {
            Alert.alert("Aviso: ", "Já existe um formulario de Exercicio disponivel para cadastro na lista");
        }
        
        
       
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 1}} onPress={async () => { setData("'Titulo do exercicio'", "'Descrição do exercicio'")}}>
                   
                <Ionicons name="add" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}