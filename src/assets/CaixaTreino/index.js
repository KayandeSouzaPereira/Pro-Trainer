import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining, deleteUsuarioTreinoRequest} from '../../servicos/Treinos';




export function CaixaTreino({data, reload, navigation}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [idTreino, setIdTreino] = useState(0);
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");
    
    
    
    

    useEffect(() => {
        console.log(data);
        setTitulo(data.nm_treinos);
        setDescricao(data.ds_treinos);
        setIdTreino(data.idTreinos)
        },[])

        const deleteCard = async () => {
            let tkk = await AsyncStorage.getItem('Token');
            let ret = await deleteUsuarioTreinoRequest(tkk, idTreino);
            if (ret){
                 console.log("RECARGA")
                 reload();
            }
        }


        const setData = async (titulo_, descricao_) => {
            console.log("ENVIO")
            let tkk = await AsyncStorage.getItem('Token');
            let data = await getUsuarioRequest(tkk);
            let id = data.data.retorno.idAuth;
            let tituloEnv = "";
            let descricaoEnv = "";
            if (titulo_ == ""){
                tituloEnv = titulo;
            }else{
                tituloEnv = titulo_;
            } 
            if (descricao_ == ""){
                descricaoEnv = descricao;
            }else{
                descricaoEnv = descricao_;
            }
           let ret = await setUsuarioTreinoRequest(id, tituloEnv, descricaoEnv, tkk, idTreino);
           if (ret){
                console.log("RECARGA")
                reload();
           }
           
        }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity disabled={idTreino === 0} onPress={async () => {
                await AsyncStorage.setItem("idTreino", JSON.stringify(idTreino));
                navigation.navigate("TreinosInfo")}}>
                
                {
                    edit === true ? 
                    <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                        <TouchableOpacity disabled={disabled} style={{left:320, top: 18, zIndex: 1}} onPress={async () => {
                        if(edit == true){
                            await setData(titulo_, descricao_);
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <Feather name="send" size={30} color="black" />
                    </TouchableOpacity>
                    <TextInput style={styles.CamposTituloEdit} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                    </View>
                : 
                
                <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                    <TouchableOpacity disabled={disabled} style={{left:310, top: 10, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={disabled} style={{left:20,width: 40, height: 40, bottom: 20, zIndex: 1}} onPress={() => {
                        deleteCard();
                        }}>
                        <Feather name="trash-2" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.CamposTitulo}>{titulo}</Text>
                    <Text style={styles.Campos}>{descricao}</Text>
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}