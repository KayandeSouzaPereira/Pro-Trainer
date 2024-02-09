import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequestEmpty, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';
import { SYSTEM_MESSAGES } from '../../configs';



export function CaixaAdd({reload}) {

    const setData = async (titulo, descricao) => {
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        try {
            let ret = await setUsuarioTreinoRequestEmpty(id, titulo, descricao, tkk);
            if (ret != null){
                reload();
               }
        } catch (error) {
            Alert.alert(SYSTEM_MESSAGES.AVISO, SYSTEM_MESSAGES.AVISOADDTREINO);
        }
        
        
       
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 1}} onPress={async () => { setData(SYSTEM_MESSAGES.TITULOTREINOPLACEHOLDER, SYSTEM_MESSAGES.DESCRICAOTREINOPLACEHOLDER)}}>
                   
                <Ionicons name="add" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}