import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect }  from 'react';
import { AntDesign  } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { LoadingModal } from "react-native-loading-modal";
import { styles } from '../InfoUser/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { getUsuarioInfoRequest, getUsuarioRequest, setUsuarioInfoRequest} from "../../servicos/Usuario"



export default function InfoUser({ navigation }) {

    const [token, setToken] = useState(null); 
    const [id, setId] = useState('');
    const [infos, setInfos] = useState({
        Altura: "...",
        Peso: "...",
        Idade: "..."

    });
    const [nome, setNome] = useState("...");
    const [altura, setAltura] = useState("...");
    const [idade, setIdade] = useState("...");
    const [peso, setPeso] = useState("...");
    const [altura_, setAltura_] = useState("...");
    const [idade_, setIdade_] = useState(0);
    const [peso_, setPeso_] = useState(0);
    const [edit, setEdit] = useState(false);
    const [disabled,setDisabled] = useState(false)
    const [loading, setLoading] = useState(true);
    



    useEffect(() => {
        setAltura(infos.Altura);
        setPeso(infos.Peso);
        setIdade(infos.Idade);
     },[infos])

    useEffect(() => {
       getData();
    },[])

    let urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s"
   
    const getData = async () => {
        let tkk = await AsyncStorage.getItem('Token');
        let id = await getUsuarioRequest(tkk);
        console.log(id.data.retorno.idAuth);
        setNome(id.data.retorno.user);
        setId(id.data.retorno.idAuth);
        let info = await getUsuarioInfoRequest(id.data.retorno.idAuth, tkk)
        setInfos(info.data.resultado[0])
        setLoading(false);
    }

    const setData = async () => {
        setLoading(true);
        let tkk = await AsyncStorage.getItem('Token');
        let alturaS
        let pesoS
        let idadeS

        if(altura_ == "..."){
            alturaS = altura;
        }else{
            alturaS = altura_;
        }

        if(peso_ == 0){
            pesoS = peso;
        }else{
            pesoS = peso_;
        }

        if(idade_ == 0){
            idadeS = idade;
        }else{
            idadeS = idade_;
        }


        await setUsuarioInfoRequest(id, alturaS, pesoS, idadeS, tkk);
        setLoading(false);
    }
    
       

    return(
        
        
        <View style={styles.container}>
            <View style={{left: 130, top: 55}}>
                <BarraSuperior/>
            </View>
            <LoadingModal modalVisible={loading} />
            <Image 
                            source={{uri : encodeURI(urlImage)}}
                            style={styles.avatar}
            />
            <View style={{backgroundColor:"white", width: 350, height: 500, top: 40, borderRadius: 15, borderColor: 'black', borderWidth: 2, alignItems: 'center'}}>
                <View>
                    <TouchableOpacity disabled={disabled} style={{left:125, top: 20}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.CamposUser}>Olá  {nome}</Text>
                <Text style={styles.Campos}>Seus Dados:</Text>
                <View style={{height: 30}}></View>
                { edit == true ? 
                    <View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.Campos}>Altura:</Text>
                            <TextInput keyboardType='phone-pad' style={styles.Campos} onChangeText={text => setAltura_(text)} >{altura}</TextInput>
                            <Text style={styles.Campos}> m</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.Campos}>Peso:</Text>
                            <TextInput keyboardType='numeric' style={styles.Campos} onChangeText={text => setPeso_(text)} >{peso}</TextInput>
                            <Text style={styles.Campos}>kg</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.Campos}>Idade:</Text>
                            <TextInput keyboardType='numeric' style={styles.Campos} onChangeText={text => setIdade_(text)} >{idade}</TextInput>
                            <Text style={styles.Campos}>Anos</Text>
                        </View>

                        <TouchableOpacity disabled={disabled} style={{backgroundColor:"#1b5a76", color:"white", borderRadius: 20}} onPress={ async () => {
                           setDisabled(true);
                           await setData();
                           setDisabled(false);
                           setEdit(false);
                        }}>
                        <Text style={styles.CampoConfirma}> Enviar Atualização </Text>
                    </TouchableOpacity>
                   

                    
                    </View>
                    :
                    <View>
                        <Text style={styles.Campos}>Altura: {altura+ " m"}</Text>
                        <Text style={styles.Campos}>Peso: {peso+ " kg"}</Text>
                        <Text style={styles.Campos}>Idade: {idade+ " Anos"}</Text>
                    </View>
                }
                
               
                
            </View>
            <View style={{left: 130, bottom: 20}}>
                <BarraInferior {... {navigation}}/>
            </View>  
        </View>
        
    )
}