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
    containerbox:{
        backgroundColor:"white", 
        width: 370, 
        height: 200,
        borderRadius: 15, 
        borderColor: 'black',
        borderWidth: 2
    },
    containerHeader:{
        flexDirection:"row", 
        width: 360,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        top: 10
    },
    CamposTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 30
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
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 20,
        top: 10,
        marginLeft: 20
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
    },
    leftAction:{},
    rightAction:{},
    actionText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        top: 50
    }
});