import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { cadRequest, loginRequest, setToken } from "../../servicos/Login";
import { ProgressBar } from 'react-native-paper';
import { styles } from "./styles";
import { Audio, Video } from 'expo-av';
import { useAssets } from 'expo-asset';






export default function Login({navigation}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useAssets([require('../../../assets/video.mp4')]);
    

    const video = React.useRef(null);

    

    const mensagemErro = "Não foi possível realizar sua solicitação.\nVerifique sua conexão com a Internet."

    const loginFunction = async () => {
        if (usuario !== '' && senha !== '') {
            return loginRequest(usuario, senha).then(async res => {
                await setToken(res.data.token)
                navigation.navigate('Home')
                return true
            }).catch(err => {
                if(JSON.stringify(err).includes('403')){
                    return "incorreto";
                }
            });
        }else {
            return false;
        }
       
    }

    const loginBtn = async () => {
        setLoading(true);
        let _ret = await loginFunction();
        if (_ret == true){
            setLoading(false);
            
        } else if(_ret == "incorreto") {
            Alert.alert("Atenção", "Usuario ou Senha incorretos.")
            setLoading(false);
        } else if(_ret == false) {
           
            Alert.alert("Atenção", "E Necessario preencher todos os campos do Login para acessar.")
            setLoading(false);
        }else {
            Alert.alert("ERRO", mensagemErro)
            setLoading(false);
        }
    }

    const cadBtn = async() => {
        setLoading(true);
        if (usuario !== '' && senha !== '') {
            let _ret = cadRequest(usuario, senha).then(async res => {
                if(res.data.retorno.includes('Usuário já cadastrado')){
                    setLoading(false);
                    Alert.alert("Atenção", "Usuario já cadastrado.")
                }if (res.data.retorno.includes('ok')){
                    setLoading(false);
                    navigation.navigate('Home')
                }
                
            }).catch(err => {
                if(JSON.stringify(err).includes('403')){
                    setLoading(false);
                    return "incorreto";
                }
                setLoading(false);
            });
        } else {
            Alert.alert("Atenção", "E Necessario preencher todos os campos do Login para acessar.")
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