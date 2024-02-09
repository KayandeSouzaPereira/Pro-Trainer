import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../CaixaAddExercicio/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsuarioRequest, setUsuarioExerciseRequestEmpt } from '../../servicos/Exercicios';
import { LoadingModal } from "react-native-loading-modal";  
import { SYSTEM_MESSAGES } from '../../configs';




export function CaixaAddExercicio({reload, treino}) {

    const [loading, setLoading] = useState(false);

    
    const setData = async (titulo, descricao) => {
        setLoading(true);
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        try {
            let ret = await setUsuarioExerciseRequestEmpt(id, titulo, descricao, "", tkk, treino, undefined);
            if (ret != null){
                setLoading(false);
                reload();
               }
        } catch (error) {
            setLoading(false);
            Alert.alert(SYSTEM_MESSAGES.AVISO, SYSTEM_MESSAGES.AVISOADDEXERCICIO);
        }
        
        
       
    }
    
    return(
        <View> 
                <View style={styles.container}>
                    <LoadingModal modalVisible={loading} />
                    <TouchableOpacity style={{zIndex: 1}} onPress={async () => { setData(SYSTEM_MESSAGES.TITULOEXERCICIOPLACEHOLDER, SYSTEM_MESSAGES.DESCRICAOEXERCICIOPLACEHOLDER)}}>
                        
                        <Ionicons name="add" size={40} color="black" />
                    </TouchableOpacity>
                </View> 
        </View>
    )
}