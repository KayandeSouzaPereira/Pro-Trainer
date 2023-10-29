import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from "react-native";
import { styles } from "./styles";


export function AvatarMaior( urlImage ) {
        
        return (
            <LinearGradient
                style={styles.container}
                colors={['#0A1033', 'white']}
                >
                    <Image 
                        source={{uri : encodeURI(urlImage)}}
                        style={styles.avatar}
                        />
            </LinearGradient>
    )
}