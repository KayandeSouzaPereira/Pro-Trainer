import { View, FlatList} from 'react-native';
import React, { useState, useEffect, useRef }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingModal } from "react-native-loading-modal";
import { CaixaTreino } from '../../assets/CaixaTreino';
import { CaixaAdd } from '../../assets/CaixaAdd';
import { styles } from '../Treinos/styles';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { Video } from "../../assets/Video"
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos'
import { Button } from 'react-native-paper';


export default function Treinos({ navigation }) {
    const [dados, setDados] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [loading, setLoading] = useState(true);
    const video = useRef(null);
    const [status, setStatus] = React.useState({});

   

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
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        let id = data.data.retorno.idAuth;
        let dadosTreino = await getUserTraining(id, tkk);
        let dados_ = [];
        
        if(dadosTreino.data.resultado != "Vazio") {
            dados_ = dadosTreino.data.resultado;
        }
        setDados([]);
        dados_.push({idTreinos: 0})
        setDados(dados_);
        
        setLoading(false);
        
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