import { Text, View, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect }  from 'react';
import { Video } from '../Video';
import { AntDesign, Feather   } from '@expo/vector-icons';
import { getUsuarioRequest } from '../../servicos/Usuario';
import {setUsuarioExerciseRequest, deleteUsuarioExerciseRequest } from '../../servicos/Exercicios';
import * as SecureStore from 'expo-secure-store';
import { LoadingModal } from "react-native-loading-modal";
import { GLOBALS, theme, SYSTEM_MESSAGES, useContextC } from '../../configs';



export function ModalExercicio({data, edition, treino, reload}) {

    const { state, dispatch } = useContextC();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [video, setVideo] = useState("");
    const [videourl, setVideoUrl] = useState("Link de video do Youtube");
    const [videourl_, setVideoUrl_] = useState("Link de video do Youtube");
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
        
        if(data.link_exercicio != ""){
            let video_ = ""
            if (data.link_exercicio.includes("youtube")){
                video_ = filtroEmbed(data.link_exercicio);
            }else if(data.link_exercicio.includes("youtu.be")){
                video_ = filtroEmbedBe(data.link_exercicio);
            }
            
            setVideoUrl(data.link_exercicio);
            setVideo(video_);
        }else {
            setVideoUrl("Link de video do Youtube");
            setVideo("Link de video do Youtube");
        }
        
        setLoading(false);
        },[])
    
    const filtroEmbed = (str) => {
        let rx = "=[\\dA-z]+"
        let filterStr = JSON.stringify(str.match(rx))
        filterStr = filterStr.substring(3)
        filterStr = filterStr.replaceAll('"]', '');
        return filterStr;
    }
    const filtroEmbedBe = (str) => {
        let rx = "be\/[\\dA-z]+"
        let filterStr = JSON.stringify(str.match(rx))
        filterStr = filterStr.substring(5)
        filterStr = filterStr.replaceAll('"]', '');
        return filterStr;
    }

    const setData = async () => {
        setLoading(true);
       
        let tituloEnv = "";
        let descricaoEnv = "";
        let videourlEnv = "";
        let tkk = await SecureStore.getItemAsync("token");
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
        let tkk = await SecureStore.getItemAsync("token");
        let ret = await deleteUsuarioExerciseRequest(tkk, idExercicio);
        if (ret){
             reload();
        }
    }


    return(
        <View style={{height: 800}}>
        <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
        <LoadingModal modalVisible={loading} />
            <ScrollView style={{flex:1, alignContent:"center"}}>
            { 
            edit === true ? 
                <View style = {{paddingTop: 40, paddingVertical: 30}}>
                    <TouchableOpacity disabled={disabled} style={{left:290, top: -10, zIndex: 1}} onPress={async () => {
                        if(edit == true){
                            if (GLOBALS.OFFLINE === 0) {
                                await setData();
                            }else{
                                Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                            }
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <Feather name="send" size={40} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                    </TouchableOpacity>
                    <TextInput style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                    <TextInput style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                    <TextInput style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setVideoUrl_(text)} >{videourl}</TextInput>
                    <View style={{top:10, height: 300,flex: 1,
                    alignSelf:"center",}}>
                    </View>   
                </View> 
                :
                <View style={{top:10, width:300}}>
                     {videourl.includes("youtube") ?
                    <TouchableOpacity disabled={disabled} style={{left:280, top: 20, width:40, height:40, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                    </TouchableOpacity> :
                   
                        <TouchableOpacity disabled={disabled} style={{left:270, top: 20, width:40, height:40, zIndex: 1}} onPress={() => {
                            if(edit == true){
                                setEdit(false)
                            }else{
                                setEdit(true)
                            }
                            }}>
                            <AntDesign name="edit" size={30} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                        </TouchableOpacity>}
                        <TouchableOpacity disabled={disabled} style={{left:0, top: -20, width:40, height:40,  zIndex: 1}} onPress={() => {
                            
                            reload();
                            }}>
                            <AntDesign name="leftcircleo" size={30} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                        </TouchableOpacity>
                    <Text style={state.DARKMODE != true ? styles.CamposTitulo : styles.CamposTituloDark}>{titulo}</Text>
                    <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>{descricao}</Text>
                    {videourl.includes("youtu") ?
                    <View>
                        <Text style={state.DARKMODE != true ? styles.CamposSubTitulo : styles.CamposSubTituloDark}>Video</Text>
                        <View style={{top:10, height: 300, flex: 1,
                        alignSelf:"center",alignItems:'center', flexDirection:'column'}}>
                            <Video
                                id={video}
                            />
                             </View>
                             <TouchableOpacity disabled={disabled} style={{top: 40, width:40, height:80, alignSelf: 'center', alignItems: 'center'}} onPress={() => {
                                    if (GLOBALS.OFFLINE === 0) {    
                                        deleteCard();
                                    }else{
                                        Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                                    }
                                    }}>
                                    <Feather name="trash-2" size={30} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                                </TouchableOpacity>
                             </View>
                            : <View>
                                <TouchableOpacity disabled={disabled} style={{top: 20, width:40, height:60, alignSelf: 'center', alignItems: 'center'}} onPress={() => {
                                    if (GLOBALS.OFFLINE === 0) {     
                                        deleteCard();
                                    }else{
                                        Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                                    }
                                    }}>
                                    <Feather name="trash-2" size={30} color={state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                                </TouchableOpacity>
                                </View>}
                    
                   
                </View>
                }
        </ScrollView>
    </View> 
    </View>
    )
}