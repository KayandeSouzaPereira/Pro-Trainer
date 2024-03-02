import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaExercicio/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import * as SecureStore from 'expo-secure-store';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';
import { ModalExercicio } from '../ModalExercicio';
import { SYSTEM_MESSAGES, useContextC } from '../../configs';



export function CaixaExercicio({data, editionFunction, treino, reload}) {
    const { state, dispatch } = useContextC();
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
        <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
             <TouchableOpacity disabled={edit} style={[edit ? styles.touchableActive : styles.touchableActive]} onPress={() => {
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
              
               <View style={state.DARKMODE != true ? styles.containerText : styles.containerTextDark}>
                        <Text style={state.DARKMODE != true ? styles.CamposTitulo : styles.CamposTituloDark}>{titulo}</Text>
                        <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>{SYSTEM_MESSAGES.EXERCICIODESCRICAOSAIBAMAIS}</Text>
                </View>
            }
            </TouchableOpacity>
            
        </View>
    )
}