import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        width: 370, 
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
        bottom: 30,
        marginLeft: 20
    },
    CamposTituloEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        backgroundColor: '#1b5a76',
        fontSize: 30,
        bottom: 30,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 250,
    },
    Campos:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 20,
        marginLeft: 20
    },
    CamposEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        backgroundColor: '#1b5a76',
        fontSize: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 330,
        height: 100
    }
});