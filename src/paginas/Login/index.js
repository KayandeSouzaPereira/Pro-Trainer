import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { cadRequest, loginRequest, setToken } from "../../servicos/Login";
import { ProgressBar } from 'react-native-paper';






export default function Login({navigation}) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const mensagemErro = "Não foi possível realizar sua solicitação.\nVerifique sua conexão com a Internet."

    const loginFunction = async () => {
        if (usuario !== '' && senha !== '') {
            return loginRequest(usuario, senha).then(async res => {
                console.log(res.data);
                await setToken(res.data.token)
                navigation.navigate('Home')
                return true
            }).catch(err => {
                if(JSON.stringify(err).includes('403')){
                    return "incorreto";
                }
                console.log("ERRO : " + err);
            });
        }else {
            return false;
        }
       
    }

    const loginBtn = async () => {
        setLoading(true);
        let _ret = await loginFunction();
        console.log(_ret);
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
        console.log("Usuario : " + usuario);
        if (usuario !== '' && senha !== '') {
            let _ret = cadRequest(usuario, senha).then(async res => {
                console.log(res.data);
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
                console.log("ERRO : " + err);
            });
        } else {
            Alert.alert("Atenção", "E Necessario preencher todos os campos do Login para acessar.")
            setLoading(false);
        }
    }

    


    return(
        <View style={{width: 400, flex: 1,backgroundColor: '#2e6c80',alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Poppins_400Regular', color: 'white', fontSize: 30, right: 70}}>Bem vindo !</Text>
            <Text style={{fontFamily: 'Poppins_400Regular', color: 'white', fontSize: 30, right: 120}}>Login</Text>
            <TextInput placeholder="Usuário" value={usuario} onChangeText={text => setUsuario(text)} style={{width: 200, height: 40,  paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, right: 60,fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 15,top: 20}}></TextInput>
            <TextInput secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={text => setSenha(text)} style={{width: 200, height: 40,  paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, right: 60,fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 15, top: 40}}></TextInput>
            <View style={{left: 100, top: 100, }}>
                <Button title='Login' onPress={async () => {
                    await loginBtn();
                    }} style={{borderRadius:15, fontFamily: 'Poppins_400Regular'}}></Button>
                <View style={{height:20}}></View>
                <Button title='Inscrição 1-click' style={{borderRadius:15, fontFamily: 'Poppins_400Regular'}}
                    onPress={async () => {
                        await cadBtn();
                    }}
                ></Button>
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