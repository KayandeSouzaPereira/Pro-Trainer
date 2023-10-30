import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { AntDesign, Feather   } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';




export function CaixaTreino({data}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");
    
    

    useEffect(() => {
        setTitulo(data.treino.nome);
        setDescricao(data.descricao);
        },[])
    
    return(
        <View style={styles.container}>
            
            {
                edit === true ? 
                <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                    <TouchableOpacity disabled={disabled} style={{left:300, top: 18, zIndex: 1}} onPress={() => {
                    if(edit == true){
                        setEdit(false)
                    }else{
                        setEdit(true)
                    }
                    }}>
                    <Feather name="send" size={40} color="black" />
                </TouchableOpacity>
                <TextInput style={styles.CamposTituloEdit} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                <TextInput style={styles.CamposEdit} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                </View>
               : 
               
               <View style={{backgroundColor:"white", width: 370, height: 200,borderRadius: 15, borderColor: 'black', borderWidth: 2}}>
                <TouchableOpacity disabled={disabled} style={{left:300, top: 10, zIndex: 1}} onPress={() => {
                    if(edit == true){
                        setEdit(false)
                    }else{
                        setEdit(true)
                    }
                    }}>
                    <AntDesign name="edit" size={40} color="black" />
                </TouchableOpacity>
                <Text style={styles.CamposTitulo}>{titulo}</Text>
                <Text style={styles.Campos}>{descricao}</Text>
                </View>
            }
            
        </View>
    )
}