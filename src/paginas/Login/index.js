import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { cadRequest, loginRequest, setToken, autologinRequest } from "../../servicos/Login";
import { ProgressBar } from 'react-native-paper';
import { styles } from "./styles";
import { Audio, Video } from 'expo-av';
import { useAssets } from 'expo-asset';
import { GLOBALS,SYSTEM_MESSAGES, useContextC } from "../../configs";
import * as SecureStore from 'expo-secure-store';
import * as Network from 'expo-network';
import AsyncStorage from "@react-native-async-storage/async-storage";






export default function Login({navigation}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useAssets([require('../../../assets/video.mp4')]);
    

    const video = React.useRef(null);


    useEffect(() => {
        navigation.addListener('focus', () => {
            setLoading(false)
            getAutoLogin();
        });
      }, [navigation]);
    
    useEffect(() => {
        getAutoLogin();
    }, [])

    const mensagemErro = "Não foi possível realizar sua solicitação.\nVerifique sua conexão com a Internet."

    const getAutoLogin = async () => {
        let connection = await Network.getNetworkStateAsync();
        let tkk = await SecureStore.getItemAsync("token");
        let user = await SecureStore.getItemAsync("usuario");
        let darkMode = await AsyncStorage.getItem("mode");
        GLOBALS.NOME = user
        if(darkMode != null){
            GLOBALS.DARKMODE = JSON.parse(darkMode)
        }else{
            GLOBALS.DARKMODE = 0
        }
        
        console.log("TKK : " + tkk);
        console.log("USER : " + user)
        if(connection.isConnected === true){
        if(tkk != undefined && user != undefined){
            autologinRequest(user, tkk).then(
                async res => {
                    navigation.navigate('Home')
                }).catch(err => {
                    setLoading(false);
                    console.log("ERRO : " + err)
                });
        }}else if(connection.isConnected === false && tkk != undefined && user != undefined){
            GLOBALS.OFFLINE = 1
            console.log("OFFLINE")
            navigation.navigate('Home')
        }
        setLoading(false);
    }

    const loginFunction = async () => {
        
        if (usuario !== '' && senha !== '') {
            return loginRequest(usuario, senha).then(async res => {
                GLOBALS.IDUSER = res.data.id
                GLOBALS.NOME = usuario
                await setToken(res.data.token)
                await SecureStore.setItemAsync("token", res.data.token);
                await SecureStore.setItemAsync("usuario", usuario);
                navigation.navigate('Home')
                return true
            }).catch(err => {
                console.log(JSON.stringify(err))
                if(JSON.stringify(err).includes('code 403')){
                    return "incorreto";
                }else if(JSON.stringify(err).includes('code 404')){
                    return "sem resposta";
                }});
        }else {
            return false;
        }
       
    }

    const loginBtn = async () => {
        setLoading(true);
        GLOBALS.IDUSER = 0;
        GLOBALS.IMG = "";
        let _ret = await loginFunction();
        if (_ret == true){
        } else if(_ret == "incorreto") {
            Alert.alert(SYSTEM_MESSAGES.AVISO, "Usuario ou Senha incorretos.")
            setLoading(false);
        } else if(_ret == "sem resposta") {
            Alert.alert(SYSTEM_MESSAGES.AVISO, "Estamos sem serviço no momento.")
            setLoading(false);
        }
         else if(_ret == false) {
            Alert.alert(SYSTEM_MESSAGES.AVISO, "E Necessario preencher todos os campos do Login para acessar.")
            setLoading(false);
        }else {
            Alert.alert("ERRO", mensagemErro)
            setLoading(false);
        }
    }

    const cadBtn = async () => {
        setLoading(true);
        GLOBALS.IDUSER = 0;
        GLOBALS.IMG = "";
        if (usuario !== '' && senha !== '') {
            let _ret = cadRequest(usuario, senha).then(async res => {
                if(res.data.retorno.includes('Usuário já cadastrado')){
                    setLoading(false);
                    Alert.alert(SYSTEM_MESSAGES.AVISO, "Usuario já cadastrado.")
                }if (res.data.retorno.includes('ok')){
                     loginRequest(usuario, senha).then(async res => {
                        GLOBALS.IDUSER = res.data.id
                        GLOBALS.NOME = usuario
                        await setToken(res.data.token)
                        await SecureStore.setItemAsync("token", res.data.token);
                        await SecureStore.setItemAsync("usuario", usuario);
                        navigation.navigate('Home')
                        return true
                    }).catch(err => {
                        Alert.alert(SYSTEM_MESSAGES.AVISO, "Usuario cadastrado com sucesso")
                        setLoading(false);
                    })

                    
                }
                
            }).catch(err => {
                if(JSON.stringify(err).includes('403')){
                    setLoading(false);
                    return "incorreto";
                }
                setLoading(false);
            });
        } else {
            Alert.alert(SYSTEM_MESSAGES.AVISO, "E Necessario preencher todos os campos do Login para acessar.")
            setLoading(false);
        }
    }

    


    return(
        <View style={styles.container}>
               { url != null ?
                <Video
                    style={styles.video}
                    source={{
                    uri: url[0].uri,
                    }}
                    shouldPlay={true}
                    resizeMode="cover"
                    isLooping={true}
                    isMuted
                    
                    useNativeControls={false}
                />:
                <></>
                }
                <View style={styles.containerLogin}>
                <Text style={styles.Titulo}>Bem vindo !</Text>
                <Text style={styles.Titulo2}>Login</Text>
                <TextInput placeholder="Usuário" value={usuario} onChangeText={text => setUsuario(text)} style={styles.CamposLogin}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={text => setSenha(text)} style={styles.CamposSenha}></TextInput>
                <View style={styles.ContainerBotões}>
                    <TouchableOpacity  onPress={async () => {await loginBtn();}} style={styles.BotaoLogin}><Text style={styles.textoLogin}>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BotaoLogin}
                        onPress={async () => {
                            await cadBtn();
                        }}
                    ><Text style={styles.textoLogin}>Inscrição 1-click</Text></TouchableOpacity>
                </View>
                </View>
                
            {
                loading ?
                    <View  style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(26, 28, 41,0.8)', justifyContent: "center", alignItems: "center"}}>
                        <ProgressBar style={{marginTop: 30}} color="#49B5F2" />
                    </View>
                : null
            }
        </View>
    )
}