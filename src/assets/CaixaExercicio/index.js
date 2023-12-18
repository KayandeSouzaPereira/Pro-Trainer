import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';
import { ModalExercicio } from '../ModalExercicio';




export function CaixaExercicio({data, reload}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [idExercicio, setIdExercicio] = useState(0);
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");
    const [video, setVideo] = useState("");
    
    
    

    useEffect(() => {
        setIdExercicio(data.idExercicios)
        setTitulo(data.nm_exercicios);
        setDescricao(data.ds_exercicio);
        setVideo(data.link_exercicio);
        },[])



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
                reload();
           }
           
        }
    
    return(
        <View style={styles.container}>
            {
                edit === true ? 
                <ModalExercicio
                    data={data}
                />
               : 
               
               <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                <TouchableOpacity disabled={disabled} style={{left:300, top: 10, zIndex: 1}} onPress={() => {
                    if(edit == true){
                        setEdit(false)
                    }else{
                        setEdit(true)
                    }
                    }}>
                    <AntDesign name="edit" size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.CamposTitulo}>{titulo}</Text>
                <Text style={styles.Campos}>{descricao}</Text>
                </View>
            }
            
        </View>
    )
}