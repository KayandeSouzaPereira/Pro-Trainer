import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        width: 300, 
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    CamposTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 30,
        top: -10,
        marginLeft: 20
    },
    CamposTituloEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        backgroundColor: '#1b5a76',
        fontSize: 25,
        bottom: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 280
    },
    Campos:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 12,
        marginLeft: 20,
        marginVertical: 2
    },
    CamposEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        backgroundColor: '#1b5a76',
        fontSize: 18,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 300,
        height: 100
    }
});