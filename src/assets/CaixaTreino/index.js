import { Text, View, TouchableOpacity,TextInput, Animated } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { AntDesign, Feather  } from '@expo/vector-icons';
import React, { useState, useEffect, useRef }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsuarioTreinoRequest, getUsuarioRequest, getUserTraining, deleteUsuarioTreinoRequest} from '../../servicos/Treinos';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { GLOBALS, theme } from '../../configs';


export function CaixaTreino({data, reload, navigation}) {

    const [edit, setEdit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [idTreino, setIdTreino] = useState(0);
    const [titulo_, setTitulo_] = useState("");
    const [descricao_, setDescricao_] = useState("");
    
    const swipeableRef = useRef(null);
    
    

    useEffect(() => {
        setTitulo(data.nm_treinos);
        setDescricao(data.ds_treinos);
        setIdTreino(data.idTreinos)
        },[])

        const deleteCard = async () => {
            let tkk = await AsyncStorage.getItem('Token');
            let ret = await deleteUsuarioTreinoRequest(tkk, idTreino);
            if (ret){
                 reload();
            }
        }


        const setData = async (titulo_, descricao_) => {
            let tkk = await AsyncStorage.getItem('Token');
            let data = await getUsuarioRequest(tkk);
            let id = data.data.retorno.idAuth;
            let tituloEnv = "";
            let descricaoEnv = "";
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
           let ret = await setUsuarioTreinoRequest(id, tituloEnv, descricaoEnv, tkk, idTreino);
           if (ret){
                reload();
           }
           
        }

        renderRightActions = (progress, dragX) => {
            const trans = dragX.interpolate({
              inputRange: [-100,0],
              outputRange: [0, 20],
            });
            return (
              <RectButton style={styles.rightAction} onPress={this.close}>
                <Animated.Text
                  style={[
                    styles.actionText,
                    {
                      transform: [{ translateX: trans }],
                    },
                  ]}>
                <Feather name="trash-2" size={20} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                <View style={{width: 20}}></View>
                  Deletar   
                </Animated.Text>
                
              </RectButton>
            );
          };

           renderLeftActions = (progress, dragX) => {
            const trans = dragX.interpolate({
                inputRange: [0,100],
                outputRange: [20, 0],
            });
            return (
              <RectButton style={styles.leftAction} onPress={this.close}>
                { edit == false ?
                <Animated.Text
                  style={[
                    styles.actionText,
                    {
                      transform: [{ translateX: trans }],
                    },
                  ]}>
                
                <AntDesign name="edit" size={20} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                <View style={{width: 20}}></View>
                  Editar
                  
                </Animated.Text>
                :
                <Animated.Text
                  style={[
                    styles.actionText,
                    {
                      transform: [{ translateX: trans }],
                    },
                  ]}>
                
                <Feather name="send" size={20} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                <View style={{width: 20}}></View>
                  Enviar
                </Animated.Text>
                }
              </RectButton>
            );
          };
    
    return(
        <View style={styles.container}>
        <Swipeable 
        ref={swipeableRef}
        renderLeftActions={renderLeftActions} 
        renderRightActions={renderRightActions}
         onSwipeableOpen={async (direction) => {
          if(direction === "left"){
            if(edit == true){
              swipeableRef.current.close();
              await setData(titulo_, descricao_)
              setEdit(false)
            }else{
              swipeableRef.current.close();
              setEdit(true)
            }
          }else if(direction === "right"){
            swipeableRef.current.close();
            deleteCard()
          }}
        }
        >
                <TouchableOpacity disabled={idTreino === 0} onPress={async () => {
                    await AsyncStorage.setItem("idTreino", JSON.stringify(idTreino));
                    navigation.navigate("TreinosInfo")}}>
                    
                    {
                        edit === true ? 
                        <View style={styles.containerEdit}>
                            <TouchableOpacity disabled={disabled} style={{left:320, top: 18, zIndex: 1}} onPress={async () => {
                            if(edit == true){
                                await setData(titulo_, descricao_);
                                setEdit(false)
                            }else{
                                setEdit(true)
                            }
                            }}>
                            <Feather name="send" size={30} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                        </TouchableOpacity>
                        <TextInput style={styles.CamposTituloEdit} onChangeText={text => setTitulo_(text)} >{titulo}</TextInput>
                        <TextInput style={styles.CamposEdit} onChangeText={text => setDescricao_(text)} >{descricao}</TextInput>
                        </View>
                    : 
                    
                    <View style={styles.containerbox}>
                        <View style={styles.containerHeader}>
                            <TouchableOpacity disabled={disabled} style={{width: 20, height: 20, top: 10}} onPress={() => {
                                deleteCard();
                                }}>
                                <Feather name="trash-2" size={20} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                            </TouchableOpacity>
                            <Text style={styles.CamposTitulo}>{titulo}</Text>
                            <TouchableOpacity disabled={disabled} style={{width: 20, height: 20, top: 10}} onPress={() => {
                                if(edit == true){
                                    setEdit(false)
                                }else{
                                    setEdit(true)
                                }
                                }}>
                                <AntDesign name="edit" size={20} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Campos}>{descricao}</Text>
                    </View>
                    }
                </TouchableOpacity>
            </Swipeable>
        </View>
    )
}