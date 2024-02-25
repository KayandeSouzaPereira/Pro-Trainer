import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from "./styles";
import { Avatar } from '../Avatar';
import { getUsuarioInfoIMGRequest } from '../../servicos/Usuario';
import * as SecureStore from 'expo-secure-store';
import { GLOBALS, theme } from '../../configs';
import { FontAwesome } from '@expo/vector-icons';
import { ModalPreferencias } from '../ModalPreferencias';




export function BarraSuperior({images, localizacao, navigation}) {

    const [image, setImage] = useState(null);
    const [nome, setNome] = useState("PRO-Trainer");
    const [modal, setModal] = useState(false);

    useEffect (() => {
        getImage();
    }, [])


    const getImage = async () => {
        let tkk = await SecureStore.getItemAsync("token");
        let id = GLOBALS.IDUSER;
        let nomeG = GLOBALS.NOME;
        if (nomeG != "PRO-Trainer"){
            console.log(nomeG)
            setNome(nomeG);
        }
        if(id != 0){
            try {
            let data = await getUsuarioInfoIMGRequest(id, tkk);
            if (data.data.resultado != undefined){
                let image = data.data.resultado.img
                setImage(`data:image/png;base64,${image}`)
            }else {
                setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
            } } catch (err){
                setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
            }
        }else if(id == 0){
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
        }
    }

    return(
        <>
        { 
        images != undefined ?
        <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Avatar urlImage={images} />
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.texto}>{nome}</Text>
                    <Text style={styles.textoSub}>{localizacao}</Text>
                </View>

                <View style={styles.containerConfig}>
                        <TouchableOpacity style={{width:40, height:40, zIndex: 1}} onPress={() => {
                            if(modal == true){
                                setModal(false)
                            }else{
                                setModal(true)
                            }
                            }}>
                            <FontAwesome name="gear" size={30} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.fontColor} />
                        </TouchableOpacity>
                        <Modal
                            visible={modal}
                            transparent={true}
                            onRequestClose={() => {setModal(false);}}
                            >
                            <ModalPreferencias navigation={navigation} reload={() => {setModal(false);}}/>
                         </Modal>
                </View>
        </View>
        :
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Avatar urlImage={image} />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.texto}>{nome}</Text>
                    <Text style={styles.textoSub}>{localizacao}</Text>
                </View>
                <View style={styles.containerConfig}>
                    <FontAwesome name="gear" size={30} color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.fontColor} />
                </View>
            </View>
        }
        </>
    )
}