import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: theme.colorsPrimary.primary,
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
        fontFamily: theme.fonts.text,
         color: theme.colorsPrimary.cardColor, 
         fontSize: 30, 
         right: 70
    },
    Titulo2:{
        fontFamily: theme.fonts.text, 
        color: theme.colorsPrimary.cardColor, 
        fontSize: 30, 
        right: 120
    },
    CamposLogin:{
        width: 200, 
        height: 40,  
        paddingLeft: 10, 
        backgroundColor: theme.colorsPrimary.cardColor, 
        borderRadius: 5, 
        right: 60,
        fontFamily: theme.fonts.text, 
        color: 'black', 
        fontSize: 15,
        top: 20
    },
    CamposSenha:{
        width: 200, 
        height: 40,  
        paddingLeft: 10, 
        backgroundColor: theme.colorsPrimary.cardColor, 
        borderRadius: 5, 
        right: 60,
        fontFamily: theme.fonts.text, 
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
        fontFamily: theme.fonts.text
    }
});