import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.cardColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerDark:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimaryDark.cardColor,
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
        backgroundColor: theme.colorsPrimary.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimary.border, 
        borderWidth: 2
    },
    containerTextDark:{
        backgroundColor: theme.colorsPrimaryDark.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimaryDark.border, 
        borderWidth: 2
    },
    CamposTitulo:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimary.fontColor,
        fontSize: 30,
        top: 10,
        marginLeft: 20
    },
    CamposTituloDark:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 30,
        top: 10,
        marginLeft: 20
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.textDestaque,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        backgroundColor: theme.colorsPrimary.border,
        fontSize: 30,
        bottom: 30,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 250,
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.overlay,
        fontSize: 20,
        top: 40,
        marginLeft: 20
    },
    CamposDark:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 20,
        top: 40,
        marginLeft: 20
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        backgroundColor: theme.colorsPrimary.border,
        fontSize: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 330,
        height: 100
    }
});