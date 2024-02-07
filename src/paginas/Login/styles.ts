import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#2e6c80',
        alignItems: 'center',
        justifyContent: 'center'
    },
    video:{
        flex: 1,
        height:  Dimensions.get('window').height + 300,
        width:  Dimensions.get('window').width + 150,
        position:'absolute'
    },
    containerLogin:{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: 500,
        height: 500,
        paddingBottom: 150,
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Titulo:{
        fontFamily: 'Poppins_400Regular',
         color: 'white', 
         fontSize: 30, 
         right: 70
    },
    Titulo2:{
        fontFamily: 'Poppins_400Regular', 
        color: 'white', 
        fontSize: 30, 
        right: 120
    },
    CamposLogin:{
        width: 200, 
        height: 40,  
        paddingLeft: 10, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        right: 60,
        fontFamily: 'Poppins_400Regular', 
        color: 'black', 
        fontSize: 15,
        top: 20
    },
    CamposSenha:{
        width: 200, 
        height: 40,  
        paddingLeft: 10, 
        backgroundColor: 'white', 
        borderRadius: 5, 
        right: 60,
        fontFamily: 'Poppins_400Regular', 
        color: 'black', 
        fontSize: 15, 
        top: 40
    },
    ContainerBotões:{
        left: 100, 
        top: 100
    },
    BotaoLogin:{
        backgroundColor: "white", 
        width: 150, 
        height: 40,
        borderColor: "black", 
        borderRadius:10,
        marginBottom: 20
        
    }, 
    textoLogin:{
        textAlign: "center",
        paddingVertical: 7,
        fontFamily: 'Poppins_400Regular'
    }
});