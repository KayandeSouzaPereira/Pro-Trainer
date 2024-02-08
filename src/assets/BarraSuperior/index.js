import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from "./styles";
import { Avatar } from '../Avatar';
import { getUsuarioInfoIMGRequest } from '../../servicos/Usuario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GLOBALS } from '../../configs';




export function BarraSuperior() {

    const [image, setImage] = useState(null);

    useEffect (() => {
        getImage();
    }, [])

    const getImage = async () => {
        let tkk = await AsyncStorage.getItem('Token');
        let id = GLOBALS.IDUSER;
        console.log("ID : " + id)
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
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar urlImage={image} />
            </View>

            <Text style={styles.texto}>PRO Trainer</Text>
        </View>
    )
}