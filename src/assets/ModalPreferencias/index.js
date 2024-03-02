import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect }  from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { GLOBALS, SYSTEM_MESSAGES, theme, useContextC } from '../../configs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";

import { getMacros, getForca, getPresenca } from '../../servicos/Macros';
import { getHistorico } from '../../servicos/Historico';
import { getUsuarioInfoRequest } from '../../servicos/Usuario';
import { getUserTraining } from '../../servicos/Treinos';
import { getUsuarioRequest } from '../../servicos/Usuario';

export function ModalPreferencias ({reload, navigation}){
    const [loading, setLoading] = useState(false);

    const { state, dispatch } = useContextC();

    const toggleD = id => {
        dispatch({ type: 'TOGGLE_DARKMODE'});
    };

    async function sincronizarDados(){
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser;
        try {
            dataUser = await getUsuarioRequest(tkk);
         } catch (err){
            console.log(err)
           try {
             dataUser = await getUsuarioRequest(tkk);
           } catch (err){
            console.log(err)
           }
         }
        let nome = dataUser.data.retorno.user;
        let idUser = dataUser.data.retorno.idAuth;
        await getMacros(nome, tkk);
        await getForca(nome, tkk);
        await getPresenca(idUser, tkk);
        await getHistorico(nome, tkk);
        await getUsuarioInfoRequest(idUser, tkk);
        await getUserTraining(nome, tkk); 
        Alert.alert(SYSTEM_MESSAGES.AVISO, "Sincronização feita com sucesso.")
        setLoading(false);
        reload()
    }


    return(
        <TouchableOpacity onPress={() => {reload()}} style={{flex: -30, width: 'auto', height: 1500, position:'absolute'}}>
            <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
            <LoadingModal modalVisible={loading} />
                    <View>
                            <Text style={state.DARKMODE != true ? styles.CamposSubTitle : styles.CamposSubTitleDark}>Preferencias</Text>
                            <View style={styles.ContainerCampos}>
                                <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Aparência</Text>
                                <TouchableOpacity style={{width:60, height:40, zIndex: 1, left: 80}} onPress={() => {
                                console.log("DARKMODE : " + state.DARKMODE);
                                toggleD();  
                                //navigation.navigate("Login")
                                /* if(GLOBALS.DARKMODE === 0){
                                    Alert.alert(SYSTEM_MESSAGES.AVISO, "função em fase de implementação")
                                    await AsyncStorage.setItem("mode", "1")
                                    navigation.navigate("Login")
                                } else {
                                    Alert.alert(SYSTEM_MESSAGES.AVISO, "função em fase de implementação")
                                    await AsyncStorage.setItem("mode", "0")
                                    navigation.navigate("Login")
                                } */
                            }}>
                                <MaterialCommunityIcons name="theme-light-dark" size={30} color={state.DARKMODE === false ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.fontColor} />
                            </TouchableOpacity>
                            </View>
                            <View style={styles.ContainerCampos}>
                                <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Sincronizar Dados</Text>
                                <TouchableOpacity style={{width:60, height:40, zIndex: 1, left: 15, top: 5}} onPress={async () => {
                                    setLoading(true);
                                    sincronizarDados();
                                }}>
                                    <FontAwesome5 name="sync" size={20} color={state.DARKMODE === false ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.fontColor} />
                                </TouchableOpacity>
                            </View>
                        </View>
            </View>
        </TouchableOpacity>
    ) 

}