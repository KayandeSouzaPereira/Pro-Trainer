import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { Image, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../configs";


export function Avatar( {urlImage} ) {
        
        return (
            <View
                style={styles.container}
                >
                    <Image 
                        source={{uri : urlImage}}
                        style={styles.avatar}
                        />
            </View>
    )
}