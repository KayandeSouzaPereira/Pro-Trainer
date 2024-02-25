import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect }  from 'react';
import { AntDesign, Feather, Entypo  } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";
import { getMacros, setMacros, getUsuarioRequest } from '../../servicos/Macros';
import { GLOBALS } from '../../configs';


export function ModalMacro ({reload}){
    const [proteinas, setProteinas] = useState(0);
    const [_proteinas, _setProteinas] = useState(0);
    const [gorduras, setGorduras] = useState(0);
    const [_gorduras, _setGorduras] = useState(0);
    const [carboidratos, setCarboidratos] = useState(0);
    const [_carboidratos, _setCarboidratos] = useState(0);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser = await getUsuarioRequest(tkk);
        let idUser = dataUser.data.retorno.idAuth
        
        let dados = await getMacros(idUser, tkk);
       
        if (dados.data.resultado != null ){
            let dados_ = dados.data.resultado[0]
            setProteinas(dados_.proteinas);
            setGorduras(dados_.gorduras);
            setCarboidratos(dados_.carboidratos);
        }
        setLoading(false);
    }

    const setData = async () => {
        setLoading(true);
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser = await getUsuarioRequest(tkk);
        let idUser = dataUser.data.retorno.idAuth;
        let proteinas_ = "";
        let gorduras_ = "";
        let carboidratos_ = "";

        if (_proteinas != ""){
            proteinas_ = parseInt(_proteinas);
        }else{
            proteinas_ = proteinas
        }

        if (_gorduras != ""){
            gorduras_ = parseInt(_gorduras);
        }else{
            gorduras_ = gorduras
        }

        if (_carboidratos != ""){
            carboidratos_ = parseInt(_carboidratos);
        }else{
            carboidratos_ = carboidratos
        }


        let data = await setMacros(idUser, proteinas_, gorduras_, tkk, carboidratos_);
        if (data){
            setLoading(false);
            reload();
        }else{
            setLoading(false);
        }

    }

    return(
        <TouchableOpacity style={{flex: -1, position:'absolute'}}>
            <View style={styles.container}>
                <LoadingModal modalVisible={loading} />
                {edit === true ? 
                    <View style = {{paddingTop: 40, paddingVertical: 30}}>
                       
                        <View style={{height:170, top: 0}}>
                            <Text style={styles.CamposTextEdit}>Proteínas Diarias em gramas :</Text>
                            <TextInput keyboardType='numeric' style={styles.CamposEdit} onChangeText={text => _setProteinas(text)} >{proteinas}</TextInput>
                            <Text style={styles.CamposTextEdit}>Gorduras Diarias em gramas :</Text>
                            <TextInput keyboardType='numeric' style={styles.CamposEdit} onChangeText={text => _setGorduras(text)} >{gorduras}</TextInput>
                            <Text style={styles.CamposTextEdit}>Carboidratos Diarios em gramas :</Text>
                            <TextInput keyboardType='numeric' style={styles.CamposEdit} onChangeText={text => _setCarboidratos(text)} >{carboidratos}</TextInput>
                        </View>
                        <View style={{top:10, height: 300,flex: 1,
                        alignSelf:"center",}}>
                        </View>   
                        <TouchableOpacity disabled={disabled} style={{left:280, top: 0, zIndex: 1}} onPress={async () => {
                            if(edit == true){
                                await setData();
                                setEdit(false)
                            }else{
                                setEdit(true)
                            }
                            }}>
                            <Feather name="send" size={30} color="black" />
                        </TouchableOpacity>
                    </View> 
                    :
                    <View style={{top:10}}>
                        <TouchableOpacity disabled={disabled} style={{left:240, top: 20, width:40, height:40, zIndex: 1}} onPress={() => {
                            if(edit == true){
                                setEdit(false)
                            }else{
                                setEdit(true)
                            }
                            }}>
                            <AntDesign name="edit" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={disabled} style={{left:-20, top: -20, width:40, height:40,  zIndex: 1}} onPress={() => {
                            reload();
                            }}>
                            <Entypo name="cross" size={35} color="black" />
                        </TouchableOpacity>
                        
                        <View style={{height:170, top: 0}}>
                            <Text style={styles.CamposSubTitle}>Macros</Text>
                            <View style={{height: 40}}/>
                            <Text style={styles.Campos}>Proteínas Diarias :{proteinas}</Text>
                            <Text style={styles.Campos}>Gorduras Diarias :{gorduras}</Text>
                            <Text style={styles.Campos}>Carboidratos Diarios :{carboidratos}</Text>
                        </View>
                    </View>
                    }
            </View>
        </TouchableOpacity>
    ) 

}