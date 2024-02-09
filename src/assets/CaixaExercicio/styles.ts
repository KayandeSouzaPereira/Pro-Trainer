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
    touchableActive:{
        zIndex: 1
    },
    touchableInactive:{
        zIndex: 1,
        width:200,
        height: 200
    },

    containerText:{
        backgroundColor:"white", 
        width: 370, 
        height: 200,
        borderRadius: 15, 
        borderColor: 'black', 
        borderWidth: 2
    },
    CamposTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 30,
        top: 10,
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
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 20,
        top: 40,
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