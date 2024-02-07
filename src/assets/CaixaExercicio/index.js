import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaExercicio/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';
import { ModalExercicio } from '../ModalExercicio';




export function CaixaExercicio({data, editionFunction, treino, reload}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [idExercicio, setIdExercicio] = useState(0);
    const [titulo_, setTitulo_] = useState("");
    const [idTreino, setIdTreino] = useState(0);
    const [descricao_, setDescricao_] = useState("");
    const [video, setVideo] = useState("");
    
    
    

    useEffect(() => {
        setIdExercicio(data.idExercicios)
        setTitulo(data.nm_exercicios);
        setDescricao(data.ds_exercicio);
        setVideo(data.link_exercicio);
        setIdTreino(treino);
        },[])


    const edition = () => {
        editionFunction();
        setEdit(false);
    }
       
    
    return(
        <View style={styles.container}>
             <TouchableOpacity disabled={disabled} style={{zIndex: 1}} onPress={() => {
                if(edit == true){
                    //setEdit(false)
                }else{
                    editionFunction();
                    setEdit(true)
                }
                }}>
            {
                edit === true ? 
                <ModalExercicio
                    data={data}
                    edition={edition}
                    treino={idTreino}
                    reload={reload}
                />
               : 
              
               <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                        <Text style={styles.CamposTitulo}>{titulo}</Text>
                        <Text style={styles.Campos}>Toque para saber mais...</Text>
                </View>
            }
            </TouchableOpacity>
            
        </View>
    )
}