import { Text, View, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect, useRef }  from 'react';
import { AntDesign, Feather, Entypo  } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";
import {Picker} from '@react-native-picker/picker';
import { CaixaHistoricoTreino } from '../CaixaHistoricoTreino';
import { getUserTraining } from '../../servicos/Treinos';
import { getUserExerciseByTraining } from '../../servicos/Exercicios';
import { getHistorico, setHistorico, getUsuarioRequest } from '../../servicos/Historico';
import { GLOBALS, SYSTEM_MESSAGES, useContextC } from '../../configs';


export function ModalTreinoRegistro ({reload}){
    const [exercicio, setExercicio] = useState(0);
    const [treino, setTreino] = useState(0);
    const [peso, setPeso] = useState(0);
    const [repeticoes, setRepeticoes] = useState(0);
    const [observacoes, setObservacoes] = useState("");
    const [dadosHistory, setDadosHistory] = useState([]);
    const [treinos, setTreinos] = useState([]);
    const [exercicios, setExercicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const { state, dispatch } = useContextC();

    useEffect(() => {
        setLoading(true);
        getData()
    }, [])

    useEffect(() => {
        getIdsExercicios(treino)
    }, [treino])

    useEffect(() => {

    }, [exercicio])
    

    const getData = async () => {
        
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser = await getUsuarioRequest(tkk);
        let idUser = GLOBALS.IDUSER
        
        let dados = await getHistorico(idUser, tkk, state.OFFLINE);
       console.log(dados.data)
        if (dados.data.resultado != null ){
            let dados_ = dados.data.resultado
            if(dados_.length === 0){
                dados_.push({idRegistro_exercicio: 0})
            }
            setDadosHistory(dados_);
        }
        getIdsTreinos();
    }

    const getIdsTreinos = async () => {
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser = await getUsuarioRequest(tkk);
        let idUser = dataUser.data.retorno.idAuth;
        let dados = await getUserTraining(idUser, tkk, state.OFFLINE);
        
        if (dados.data.resultado != null ){
            let dados_ = dados.data.resultado
            setTreinos(dados_);
            getIdsExercicios(dados_[0].idTreinos);
        }
        setLoading(false);
    }

    const getIdsExercicios = async (id) => {
        let tkk = await SecureStore.getItemAsync("token");
        let dados = await getUserExerciseByTraining(tkk, id, state.OFFLINE);
        
        if (dados.data.resultado != null ){
            let dados_ = dados.data.resultado
            setExercicios(dados_);
        }
        setLoading(false);

    }




    const setRegistro = async () => {
        setLoading(true);
        let tkk = await SecureStore.getItemAsync("token");
        let dataUser = await getUsuarioRequest(tkk);
        let idUser = dataUser.data.retorno.idAuth;
        console.log("EXERCICIO : " + exercicio)
        let data = await setHistorico(idUser, exercicio, peso, repeticoes, observacoes, tkk);
        if (data){
            if(data.data.resultado === "Já existe registro para este exercício e usuário nas ultimas 24 horas, remova o registro ou atualize ele no proxímo treino."){
                Alert.alert(SYSTEM_MESSAGES.AVISO, "O Registro enviado ja existe em nossos bancos, não podemos atualiza-lo")
                setLoading(false);
                
                setEdit(false);
                reload();
            }else{
                setLoading(false);
                setEdit(false);
                reload();
            }
        }else{
            setEdit(false);
            setLoading(false);
        }

    }

    const pickerRef = useRef();

    const showAlert = () =>
    Alert.alert(
      'Aviso',
      'O Registro do Treino não poderá ser alterado após o envio, gostaria de continuar ?',
      [
        {
          text: 'Não'
        },{
            text: 'Sim',
            onPress: () => {
                if (state.OFFLINE === false) { 
                setRegistro()
                }else{
                    Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                }
            }
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );


    return(
        <View style={{backgroundColor:'rgba(52, 52, 52, 0.7)', flex: 1,top: 0}}>
            <View style={styles.container}>
                <LoadingModal modalVisible={loading} />
                {edit === true ? 
                    <View style = {{top:0}}>
                        <TouchableOpacity disabled={disabled} style={{right:30, top: 20, width:40, height:40,  zIndex: 1}} onPress={() => {
                                reload();
                                }}>
                                <Entypo name="cross" size={35} color="black" />
                            </TouchableOpacity>
                                
                            <Text style={styles.CamposSubTitle}>Registro de Treino</Text>
                            <View style={{width: 250, height: 120, left:0}}>
                                <Picker 
                                    ref={pickerRef}
                                    selectedValue={treino}
                                    style={styles.CamposEdit}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setTreino(itemValue)
                                    }
                                >
                                    
                                {treinos.map (item => 
                                    <Picker.Item label={item.nm_treinos} value={item.idTreinos}>{item.nm_treinos}</Picker.Item>
                                )}  
                                </Picker>
                            </View>
                            {exercicios.map != undefined?
                                <View>
                                    <View style={{bottom:60}}>
                                        <Picker 
                                        ref={pickerRef}
                                        style={styles.CamposEdit}
                                        selectedValue={exercicio}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setExercicio(itemValue)
                                        }
                                    >
                                    {exercicios.map (item => 
                                        <Picker.Item label={item.nm_exercicios} value={item.idExercicios}>{item.nm_exercicios}</Picker.Item>
                                    )}  
                                    </Picker>
                                    </View> 
                                    <View style={{bottom:10}}>
                                        <Text style={styles.CamposSubTitle}>Informações do Treino</Text>
                                        <View style={{}}>
                                            <Text>Peso em Kg:</Text>
                                            <TextInput onChangeText={text => setPeso(text)} keyboardType="numeric" style={styles.CamposEdit}>
                                            {peso}
                                            </TextInput>
                                        </View>
                                        <View style={{paddingTop:10}}>
                                            <Text>Repetiçoes:</Text>
                                            <TextInput keyboardType="numeric" onChangeText={text => setRepeticoes(text)} style={styles.CamposEdit}>
                                            {repeticoes}
                                            </TextInput>
                                        </View>
                                        <View style={{paddingTop:10}}>
                                            <Text>Observações:</Text>
                                            <TextInput onChangeText={text => setObservacoes(text)} style={styles.CamposEdit}>
                                            {observacoes}
                                            </TextInput>
                                        </View>
                                    </View>    
                                    <TouchableOpacity disabled={disabled} style={{left:240, top: 30, width:40, height:40, zIndex: 1}} onPress={() => {
                                            showAlert();
                                        }}>
                                        <Feather name="send" size={40} color="black" />
                                    </TouchableOpacity>
                                </View>
                                :  <View style={{bottom:40,left:20}}><Text>Não a exercicios cadastrados</Text></View>
                            }
                    </View> 
                    :
                    <View style={{top:0}}>
                        
                        <TouchableOpacity disabled={disabled} style={{right: 0, top: 20, width:40, height:40,  zIndex: 1}} onPress={() => {
                            reload();
                            }}>
                            <Entypo name="cross" size={35} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={disabled} style={{left:270, bottom: 15, width:40, height:40, zIndex: 1}} onPress={() => {
                            if(edit == true){
                                setEdit(false)
                            }else{
                                setEdit(true)
                            }
                            }}>
                            <Entypo name="add-to-list" size={30} color="black" />
                        </TouchableOpacity>
                        
                        <View style={{height:430, width: 300}}>
                            { dadosHistory.length > 0 ?
                            <FlatList
                                data={dadosHistory}
                                keyExtractor={item => item.idRegistro_exercicio}
                                renderItem={({item}) => (
                                     item.idRegistro_exercicio === 0 ? 
                                        <Text style={{flex: 1, textAlign:"center"}}>Não há registros encontrados.</Text>
                                        :
                                            <CaixaHistoricoTreino 
                                                data={item} 
                                            />
                                )}
                                contentContainerStyle={{ paddingBottom: 30}}
                                showsVerticalScrollIndicator={true}
                                />   
                                :
                                <Text style={{flex: 1, textAlign:"center"}}>Carregando...</Text>
                            }
                        </View>
                    </View>
                    }
            </View>
        </View>
    ) 

}