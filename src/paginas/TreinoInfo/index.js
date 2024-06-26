import { View, FlatList, Dimensions} from 'react-native';
import React, { useState, useEffect, useRef }  from 'react';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";
import { CaixaAddExercicio } from '../../assets/CaixaAddExercicio';
import { styles } from '../Treinos/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { getUserExerciseByTraining } from '../../servicos/Exercicios'
import { CaixaExercicio } from '../../assets/CaixaExercicio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContextC } from '../../configs';

export default function TreinoInfo({ navigation}) {
    const { state, dispatch } = useContextC();
    const [dados, setDados] = useState([]);
    const [id, setId] = useState(0);
    const [loadingData, setLoadingData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [idTreino, setIdTreino] = useState(0);
    const [inEdit, setInEdit] = useState(false);

   

    useEffect(() => {
        getData(); 
    },[loadingData])

    function reload() {
       
        if(loadingData == false){
            setLoadingData(true);
        }else{
            setLoadingData(false);
        }
        
    }

    function edition() {
        if(inEdit == false){
            setInEdit(true);
        }else{
            setInEdit(false);
        }
    }

    const getData = async () => {
        setLoading(true);
        
        const treino = parseInt(await AsyncStorage.getItem("idTreino"));

        if (treino != 0 && treino != undefined){
            setDados([]);
            setIdTreino(treino)
            let tkk = await SecureStore.getItemAsync("token");
            let dadosTreino = "";
            dadosTreino = await getUserExerciseByTraining(tkk, treino, state.OFFLINE);
            let dados_
            if(dadosTreino.data.resultado != "treinos não encontrado") {
                dados_ = dadosTreino.data.resultado;
                dados_.push({idExercicios: 0})
            }else if(dadosTreino.data.resultado === "treinos não encontrado"){
                dados_ = [{idExercicios: 0}];
            }
            setDados(dados_);
            setLoading(false);
        }else{
            setLoading(false)
        }
    } 

    
    

    

    

    return(
        <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
            <BarraSuperior navigation={navigation} localizacao={"Seus Exercícios"}/>
            <LoadingModal modalVisible={loading} />
            <View style={{marginHorizontal: Dimensions.get('window').width / 20, height: Dimensions.get('window').height / 1.33}}>
            { <FlatList
                data={dados}
                keyExtractor={item => item.idExercicios}
                renderItem={({item}) => (
                    
                     item.idExercicios === 0 ?
                        <CaixaAddExercicio
                        reload={reload}
                        treino={idTreino}
                        />
                        : 
                        <CaixaExercicio 
                        data={item}
                        treino={idTreino}
                        editionFunction={edition}
                        reload={reload}
                        /> 
                       
                    ) 
                }
                        contentContainerStyle={{ paddingBottom: 100, paddingTop: 30}}
                        showsVerticalScrollIndicator={false}
            /> }
            </View>
            <BarraInferior {... {navigation}}/>          
        </View>
    )
}