import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: 600, 
        right: 100,
        flex: 1,
        backgroundColor: '#2e6c80',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar:{
        width: 180,
        height: 180,
        borderRadius: 160,
    },
    CamposUser:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 20,
        marginVertical: 50
    },
    Campos:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 20,
        margin: 5
    }
});