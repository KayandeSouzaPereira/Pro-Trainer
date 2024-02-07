import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 2,
        height: 120,
        right: 80,
        top: 120,
        backgroundColor: 'white',
        alignContent: 'center',
        flexDirection: 'column'
    },
    texto:{
        left: 210, 
        fontSize: 30, 
        fontFamily: 'Poppins_400Regular'
    },
    imageContainer:{
        left: 120,
        top: 50
    }
});