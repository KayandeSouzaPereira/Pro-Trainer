import { View, FlatList, Dimensions} from 'react-native';
import React, { useState, useEffect, useRef }  from 'react';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";
import { CaixaTreino } from '../../assets/CaixaTreino';
import { CaixaAdd } from '../../assets/CaixaAdd';
import { styles } from '../Treinos/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { GLOBALS, useContextC } from '../../configs';
import { getUserTraining } from '../../servicos/Treinos';

export default function Treinos({ navigation }) {
    const { state, dispatch } = useContextC();
    const [dados, setDados] = useState([]);
    const [id, setId] = useState(0);
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
        setLoading(true);
        let tkk = await SecureStore.getItemAsync("token");
        let id = GLOBALS.IDUSER;
        setId(id);
        try {
            let dadosTreino = await getUserTraining(id, tkk, state.OFFLINE);
            let dados_ = [];
            
            if(dadosTreino.data.resultado != "Vazio") {
                dados_ = dadosTreino.data.resultado;
            }
            setDados([]);
            dados_.push({idTreinos: 0})
            setDados(dados_);
        } catch (err){
            let dados_ = [];
            dados_.push({idTreinos: 0})
            setDados(dados_);
        }
        setLoading(false);
        
    } 

    
    

    

    

    return(
        <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
            <BarraSuperior navigation={navigation} localizacao={"Seus Treinos"}/>
            <LoadingModal modalVisible={loading} />
            <View style={{marginHorizontal: Dimensions.get('window').width / 20, height: Dimensions.get('window').height / 1.33, alignContent: 'center', alignItems: 'center'}}>
            { <FlatList
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
                        navigation={navigation}
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