import { Text, View, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { LoadingModal } from "react-native-loading-modal";
import Modal from '@mui/material/Modal';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';
import Video, {VideoRef} from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining} from '../../servicos/Treinos';
import { CaixaExercicio } from '../CaixaExercicio';




export function ModalTreinos({reload, id, visible}) {
    const [dados, setDados] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [loading, setLoading] = useState(true);


    
    return(
        <Modal open={visible} style={styles.container}>
            <LoadingModal modalVisible={loading} />
            <Text style={styles.CamposTitulo}>{"Teste"}</Text>
            <Text style={styles.Campos}>{"descricao"}</Text>
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
                        <CaixaExercicio 
                        data={item}
                        reload={reload}
                        />
                       
                    ) 
                }
                        contentContainerStyle={{ paddingBottom: 100, paddingTop: 30}}
                        showsVerticalScrollIndicator={false}
            />
        </Modal>
    )
}