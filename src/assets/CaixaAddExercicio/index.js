import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../CaixaAddExercicio/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import * as SecureStore from 'expo-secure-store';
import { getUsuarioRequest, setUsuarioExerciseRequestEmpt } from '../../servicos/Exercicios';
import { LoadingModal } from "react-native-loading-modal";  
import { SYSTEM_MESSAGES, GLOBALS, theme } from '../../configs';




export function CaixaAddExercicio({reload, treino}) {

    const [loading, setLoading] = useState(false);

    
    const setData = async (titulo, descricao) => {
        setLoading(true);
        let tkk = await SecureStore.getItemAsync("token");
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        try {
            let ret = await setUsuarioExerciseRequestEmpt(id, treino, titulo, descricao, "", tkk);
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
                    <TouchableOpacity style={{zIndex: 1}} onPress={async () => { 
                        if (GLOBALS.OFFLINE === 0) {
                            setData(SYSTEM_MESSAGES.TITULOEXERCICIOPLACEHOLDER, SYSTEM_MESSAGES.DESCRICAOEXERCICIOPLACEHOLDER)
                        }else{
                            Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                        }
                        }}>
                        
                    <Ionicons name="add" size={40} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                    </TouchableOpacity>
                </View> 
        </View>
    )
}