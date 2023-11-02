import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';




export function CaixaAdd({reload}) {

    const setData = async (titulo, descricao) => {
        console.log("data set")
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        try {
            let ret = await setUsuarioTreinoRequest(id, titulo, descricao, tkk);
            if (ret != null){
                reload();
               }
        } catch (error) {
            Alert.alert("Aviso: ", "Já existe um formulario de treino disponivel para cadastro na lista");
        }
        
        
       
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 1}} onPress={async () => { setData("'Titulo do treino'", "'Descrição do treino'")}}>
                   
                <Ionicons name="add" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}