import { Text, View, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import { styles } from './styles'
import React, { useState, useEffect }  from 'react';
import { Video } from '../Video';
import { AntDesign, Feather   } from '@expo/vector-icons';




export function ModalExercicio({data}) {


    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [video, setVideo] = useState("");
    const [videourl, setVideoUrl] = useState("URL");
    const [disabled, setDisabled] = useState(false);
    const [idExercicio, setIdExercicio] = useState(0);
    const [edit, setEdit] = useState(false);
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");

    
    useEffect(() => {
        setIdExercicio(data.idExercicios)
        setTitulo(data.nm_exercicios);
        setDescricao(data.ds_exercicio);
        let teste = filtroEmbed(data.link_exercicio);
        setVideo(teste);
        },[])
    
    const filtroEmbed = (str) => {
        let rx = "=[\\dA-z]+"
        let filterStr = JSON.stringify(str.match(rx))
        filterStr = filterStr.substring(3)
        filterStr = filterStr.replaceAll('"]', '');
        return filterStr;
    }
    
    return(
        <View style={{height: 650}}>
        <View style={styles.container}>
            <ScrollView style={{flex:1, alignContent:"center"}}>
            { 
            edit === true ? 
                <View style = {{paddingTop: 40, paddingVertical: 30}}>
                    <TouchableOpacity disabled={disabled} style={{left:300, top: -10, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color="black" />
                    </TouchableOpacity>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                    <TextInput style={styles.CamposEdit} onChangeText={text => setVideoUrl(text)} >{videourl}</TextInput>
                    <View style={{top:10, height: 300,flex: 1,
                    alignSelf:"center",}}>
                    </View>   
                </View> 
                :
                <View>
                    <TouchableOpacity disabled={disabled} style={{left:300, top: 10, zIndex: 1}} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                        <AntDesign name="edit" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.CamposTitulo}>{titulo}</Text>
                    <Text style={styles.Campos}>{descricao}</Text>
                    <Text style={styles.CamposSubTitulo}>Video</Text>
                    <View style={{top:10, height: 300,flex: 1,
                    alignSelf:"center",}}>
                            <Video
                                id={video}
                            />
                    </View>
                </View>
                }
        </ScrollView>
    </View> 
    </View>
    )
}