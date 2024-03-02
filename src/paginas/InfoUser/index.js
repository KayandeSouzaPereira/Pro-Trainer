import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect }  from 'react';
import { AntDesign, Entypo, Feather  } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
import { LoadingModal } from "react-native-loading-modal";
import { styles } from '../InfoUser/styles';
import { SYSTEM_MESSAGES, GLOBALS, useContextC  } from '../../configs';
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { getUsuarioInfoRequest, getUsuarioRequest, setUsuarioInfoRequest} from "../../servicos/Usuario"
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';



export default function InfoUser({ navigation }) {
    const { state, dispatch } = useContextC();
    const [token, setToken] = useState(null); 
    const [id, setId] = useState('');
    const [image, setImage] = useState(null);
    const [infos, setInfos] = useState({
        Altura: "...",
        Peso: "...",
        Idade: "..."

    });
    const [nome, setNome] = useState("...");
    const [altura, setAltura] = useState("...");
    const [idade, setIdade] = useState("...");
    const [peso, setPeso] = useState("...");
    const [altura_, setAltura_] = useState("...");
    const [idade_, setIdade_] = useState(0);
    const [peso_, setPeso_] = useState(0);
    const [imgBS64, setImgBS64] = useState("");
    const [edit, setEdit] = useState(false);
    const [disabled,setDisabled] = useState(false)
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setAltura(infos.Altura);
        setPeso(infos.Peso);
        setIdade(infos.Idade);
        if (infos.img === undefined || infos.img === "0" || infos.img === "" ){
            setImage(urlImage);
        }else if(infos.img != ""){
            setImage(`data:image/png;base64,${infos.img}`);
        }
        

     },[infos])

    useEffect(() => {
       getData();
    },[])

    useEffect(() => {
        if(imgBS64 != ''){
            if(altura_ == "..." && peso_ == 0 && idade_ == 0 && altura == "..."){
                Alert.alert(SYSTEM_MESSAGES.AVISO, "E Necessario cadastrar as informações antes de subir uma imagem.")
            }else{  
                if (state.OFFLINE === false){
                    setData();  
                }else{
                    Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                }
            }
            
        }
     },[imgBS64])
     

    

    let urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s"
   
    const getData = async () => {
        let tkk = await SecureStore.getItemAsync("token");
        let idata = await getUsuarioRequest(tkk);
        let idd = idata.data.retorno.idAuth;
        setNome(idata.data.retorno.user);
        setId(idd);

        try {
            let info = await getUsuarioInfoRequest(idd, tkk, state.OFFLINE)
            setInfos(info.data.resultado)
            setLoading(false);
        }catch (err){
            setImage(urlImage);
            setImgBS64("");
            setLoading(false);
        }
    }

    const pickImage = async () => {
       let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 5],
          quality: 0.3,
        });

       
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, { encoding: 'base64' })
          setImgBS64(base64);
          if (state.OFFLINE === false){
            setData();  
        }else{
            Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
        }
        }
      };

    const setData = async () => {
        setLoading(true);
        let tkk = await SecureStore.getItemAsync("token");
        let alturaS
        let pesoS
        let idadeS

        if(altura_ == "..."){
            alturaS = altura;
        }else{
            alturaS = altura_;
        }

        if(peso_ == 0){
            pesoS = peso;
        }else{
            pesoS = peso_;
        }

        if(idade_ == 0){
            idadeS = idade;
        }else{
            idadeS = idade_;
        }


        try {
            await setUsuarioInfoRequest(id, alturaS, pesoS, idadeS, imgBS64, tkk);
        } catch (err){
            if (JSON.stringify(err).includes(500)){
                Alert.alert(SYSTEM_MESSAGES.AVISO, "Ocorreu um problema no envio do seu cadastro.")
            }
            if (JSON.stringify(err).includes("code 413")){
                Alert.alert(SYSTEM_MESSAGES.AVISO, "Arquivo muito grande para envio.")
            }
            
        }
        Alert.alert(SYSTEM_MESSAGES.AVISO, "Dados salvos com sucesso.")
        setLoading(false);
        navigation.navigate("Home")
    }
    
       

    return(
        
        
        <View style={state.DARKMODE != true ? styles.container : styles.containerDark}>
            { image != null?
                <BarraSuperior navigation={navigation} localizacao={"Seus Dados"} />
                :
                <BarraSuperior navigation={navigation} images={image} localizacao={"Seus Dados"}/>

            }
            <LoadingModal modalVisible={loading} />
            
            <View style={styles.containerUser}>
                <View style={styles.containerAvatar}>
                <TouchableOpacity onPress={pickImage}>
                    { image ? 

                        <Image 
                        source={{uri : image}}
                        style={styles.avatar}
                        />  
                        :
                        <Image 
                          source={{uri : encodeURI(urlImage)}}
                            style={styles.avatar}
                    />
                    }
                    <View style={state.DARKMODE != true ? styles.containerButtonIMG : styles.containerButtonIMGDark}>
                    <Feather name="image" size={25} color="white" />
                    </View>
                </TouchableOpacity>
                </View>
                <Text style={state.DARKMODE != true ? styles.CamposUser : styles.CamposUserDark}>Olá {nome.substring(0, 10)}</Text>
            </View>
            
            <KeyboardAvoidingView style={state.DARKMODE != true ? styles.containerCampos : styles.containerCamposDark}>
                <View style={state.DARKMODE != true ? styles.containerButton : styles.containerButtonDark}>
                    <TouchableOpacity disabled={disabled} onPress={() => {
                        if(edit == true){
                            setEdit(false)
                        }else{
                            setEdit(true)
                        }
                        }}>
                            { edit ?
                                <Entypo name="cross" size={30} color="white" />
                                :
                                <AntDesign name="edit" size={30} color="white" />
                            }
                        
                    </TouchableOpacity>
                </View>
                
                <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Seus Dados:</Text>
                <View style={{height: 30}}></View>
                { edit == true ? 
                    <View>
                        <View style={styles.containerCamposForm}>
                            <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Altura (em Metros):</Text>
                            <TextInput keyboardType='phone-pad' style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setAltura_(text)} >{altura}</TextInput>
                            
                        </View>
                        <View style={styles.containerCamposForm}>
                            <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Peso  (em Kilogramas):</Text>
                            <TextInput keyboardType='numeric' style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setPeso_(text)} >{peso}</TextInput>
                            
                        </View>
                        <View style={styles.containerCamposForm}>
                            <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Idade  (em Anos):</Text>
                            <TextInput keyboardType='numeric' style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark} onChangeText={text => setIdade_(text)} >{idade}</TextInput>
                            
                        </View>

                        <TouchableOpacity disabled={disabled} style={{backgroundColor:"#1b5a76", color:"white", borderRadius: 20, alignItems:"center"}} onPress={ async () => {
                           setDisabled(true);
                           if (state.OFFLINE === false){
                            await setData();
                            }else{
                             Alert.alert(SYSTEM_MESSAGES.AVISO, "Você esta offline, não e possível cadastrar ou editar informações offline.")
                            }
                           setDisabled(false);
                           setEdit(false);
                        }}>
                        <Text style={state.DARKMODE != true ? styles.CampoConfirma : styles.CampoConfirmaDark}> Enviar Atualização </Text>
                    </TouchableOpacity>
                   

                    
                    </View>
                    :
                    <View>
                        <View style={styles.containerCamposForm}>
                            <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Altura:</Text>
                            <Text style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark}> {altura+ " m"}</Text>
                        </View>
                        <View style={styles.containerCamposForm}>
                        <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Peso: </Text>
                            <Text style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark}> {peso+ " kg"}</Text>
                        </View>
                        <View style={styles.containerCamposForm}>
                        <Text style={state.DARKMODE != true ? styles.Campos : styles.CamposDark}>Idade: </Text>
                            <Text style={state.DARKMODE != true ? styles.CamposEdit : styles.CamposEditDark}> {idade+ " Anos"}</Text>
                        </View>
                   </View>
                }
                
               
                
            </KeyboardAvoidingView>
            <BarraInferior {... {navigation}}/>
        </View>
        
    )
}