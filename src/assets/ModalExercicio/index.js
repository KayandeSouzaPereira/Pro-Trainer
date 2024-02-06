import { Text, View, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect }  from 'react';
import { Video } from '../Video';
import { AntDesign, Feather   } from '@expo/vector-icons';
import { getUsuarioRequest } from '../../servicos/Usuario';
import {setUsuarioExerciseRequest, deleteUsuarioExerciseRequest } from '../../servicos/Exercicios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingModal } from "react-native-loading-modal";




export function ModalExercicio({data, edition, treino, reload}) {


    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [video, setVideo] = useState("");
    const [videourl, setVideoUrl] = useState("URL");
    const [videourl_, setVideoUrl_] = useState("URL");
    const [disabled, setDisabled] = useState(false);
    const [idExercicio, setIdExercicio] = useState(0);
    const [idTreino, setIdTreino] = useState(0);
    const [edit, setEdit] = useState(false);
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setIdExercicio(data.idExercicios)
        setTitulo(data.nm_exercicios);
        setDescricao(data.ds_exercicio);
        
        let video_ = filtroEmbed(data.link_exercicio);
        setVideoUrl(data.link_exercicio);
        setVideo(video_);
        setLoading(false);
        },[])
    
    const filtroEmbed = (str) => {
        let rx = "=[\\dA-z]+"
        let filterStr = JSON.stringify(str.match(rx))
        filterStr = filterStr.substring(3)
        filterStr = filterStr.replaceAll('"]', '');
        return filterStr;
    }

    const setData = async () => {
        setLoading(true);
       
        let tituloEnv = "";
        let descricaoEnv = "";
        let videourlEnv = "";
        let tkk = await AsyncStorage.getItem('Token');
        let data = await getUsuarioRequest(tkk);
        
        let id = data.data.retorno.idAuth;

       

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
        if (videourl_ == "URL"){
            videourlEnv = videourl;
        }else{
            videourlEnv = videourl_;
        }
       let ret = await setUsuarioExerciseRequest(id, tituloEnv, descricaoEnv, videourlEnv, tkk, idTreino, idExercicio);
       if (ret){
            setLoading(false);
            edition();
            reload();
       }
       setLoading(false);
       
    }
    
    const deleteCard = async () => {
        let tkk = await AsyncStorage.getItem('Token');
        let ret = await deleteUsuarioExerciseRequest(tkk, idExercicio);
        if (ret){
             reload();
        }
    }


    return(
        <View style={{height: 800}}>
        <View style={styles.container}>
        <LoadingModal modalVisible={loading} />
            <ScrollView style={{flex:1, alignContent:"center"}}>
            { 
            edit === true ? 
                <View style = {{paddingTop: 40, paddingVertical: 30}}>
                    <TouchableOpacity disabled={disabled} style={{left:290, top: -10, zIndex: 1}} onPress={async () => {
                        if(edit == true){
                            await setData();
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <Feather name="send" size={40} color="black" />
                    </TouchableOpacity>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setVideoUrl_(text)} >{videourl}</TextInput>
                    <View style={{top:10, height: 300,flex: 1,
                    alignSelf:"center",}}>
                    </View>   
                </View> 
                :
                <View style={{top:10}}>
                     {videourl.includes("youtube") ?
                    <TouchableOpacity disabled={disabled} style={{left:300, top: 20, width:40, height:40, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color="black" />
                    </TouchableOpacity> :
                    <TouchableOpacity disabled={disabled} style={{left:250, top: 20, width:40, height:40, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color="black" />
                    </TouchableOpacity>}
                    <TouchableOpacity disabled={disabled} style={{left:0, top: -20, width:40, height:40,  zIndex: 1}} onPress={() => {
                        
                        reload();
                        }}>
                        <AntDesign name="leftcircleo" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.CamposTitulo}>{titulo}</Text>
                    <Text style={styles.Campos}>{descricao}</Text>
                    {videourl.includes("youtube") ?
                    <View>
                        <Text style={styles.CamposSubTitulo}>Video</Text>
                        <View style={{top:10, height: 300, flex: 1,
                        alignSelf:"center",}}>
                            <Video
                                id={video}
                            />
                             </View>
                             <TouchableOpacity disabled={disabled} style={{left:152, top: 40, width:80, height:80, zIndex: 1}} onPress={() => {
                                    deleteCard();
                                    }}>
                                    <Feather name="trash-2" size={30} color="black" />
                                </TouchableOpacity>
                             </View>
                            : <View>
                                <TouchableOpacity disabled={disabled} style={{left:125, top: 20, width:60, height:60, zIndex: 1}} onPress={() => {
                                    deleteCard();
                                    }}>
                                    <Feather name="trash-2" size={30} color="black" />
                                </TouchableOpacity>
                                </View>}
                    
                   
                </View>
                }
        </ScrollView>
    </View> 
    </View>
    )
}