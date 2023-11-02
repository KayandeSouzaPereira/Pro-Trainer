import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingModal } from "react-native-loading-modal";
import { CaixaTreino } from '../../assets/CaixaTreino';
import { CaixaAdd } from '../../assets/CaixaAdd';
import { styles } from '../Treinos/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos'


export default function Treinos({ navigation }) {
    const [dados, setDados] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [loading, setLoading] = useState(true);

   

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

    const getData = async () => {
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        let dadosTreino = await getUserTraining(id, tkk);
        let dados_ = [];
        console.log("DATA")
        if(dadosTreino.data.resultado != "Vazio") {
            dados_ = dadosTreino.data.resultado;
        }
        
        dados_.push({idTreinos: 0})
        setLoading(false);
        setDados(dados_);
        console.log("check")
       
    } 

    


    

    

    return(
        <View style={styles.container}>
            <View style={{left: 130, top: 45}}>
                <BarraSuperior/>
            </View>
            <LoadingModal modalVisible={loading} />
            <FlatList
                data={dados}
                keyExtractor={item => item.idTreinos}
                renderItem={({item}) => (
                    
                    item.idTreinos == "0" ?
                        <CaixaAdd
                        navigation={navigation}
                        reload={reload}
                        />
                        :
                        <CaixaTreino 
                        data={item}
                        reload={reload}
                        />
                       
                    ) 
                }
                        contentContainerStyle={{ paddingBottom: 100, paddingTop: 30}}
                        showsVerticalScrollIndicator={false}
            />
            <View style={{left: 130, bottom: 10}}>
                <BarraInferior {... {navigation}}/>
            </View>            
        </View>
    )
}