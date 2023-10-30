import { Text, View, TouchableOpacity,TextInput } from 'react-native';
import { styles } from '../CaixaTreino/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect }  from 'react';




export function CaixaAdd() {
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 1}}>
                   
                <Ionicons name="add" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}