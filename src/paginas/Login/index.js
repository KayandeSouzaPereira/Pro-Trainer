import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { loginChamada } from "../../servicos/Login";
import { ProgressBar } from 'react-native-paper';






export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const loginFunction = async () => {
        let resLogin = await loginChamada(usuario, senha);
        if (resLogin != undefined){
            console.log("Resposta: "+ JSON.stringify(resLogin));
            return resLogin;
        }
    }

    


    return(
        <View style={{width: 400, flex: 1,backgroundColor: '#2e6c80',alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Poppins_400Regular', color: 'white', fontSize: 30, right: 70}}>Bem vindo !</Text>
            <Text style={{fontFamily: 'Poppins_400Regular', color: 'white', fontSize: 30, right: 120}}>Login</Text>
            <TextInput placeholder="Usuário" value={usuario} onChangeText={text => setUsuario(text)} style={{width: 200, height: 40,  paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, right: 60,fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 15,top: 20}}></TextInput>
            <TextInput placeholder="Senha" value={senha} onChangeText={text => setSenha(text)} style={{width: 200, height: 40,  paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, right: 60,fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 15, top: 40}}></TextInput>
            <View style={{left: 100, top: 100, }}>
                <Button title='Login' onPress={async () => {
                    setLoading(true);
                    let _ret = await loginFunction();
                    if (_ret != undefined ){
                        setLoading(false);
                        console.log("RET :" + _ret)
                    } 
                    }} style={{borderRadius:15, fontFamily: 'Poppins_400Regular'}}></Button>
                <View style={{height:20}}></View>
                <Button title='Inscrição 1-click' style={{borderRadius:15, fontFamily: 'Poppins_400Regular'}}></Button>
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