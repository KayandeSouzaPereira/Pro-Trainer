import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 370, 
        flex: 1,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerEdit:{
        backgroundColor:GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor, 
        width: 370, 
        height: 200,
        borderRadius: 15, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border, 
        borderWidth: 2
    },
    containerbox:{
        backgroundColor:GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor, 
        width: 370, 
        height: 200,
        borderRadius: 15, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
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
        fontFamily: theme.fonts.textDestaque,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 30,
        textAlign:"center"
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.textDestaque,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 25,
        bottom: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 280,
        borderBottomWidth: 2

    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.overlay : theme.colorsPrimaryDark.fontColor,
        fontSize: 20,
        top: 10,
        marginLeft: 20
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 300,
        height: 100,
        borderBottomWidth: 2
    },
    leftAction:{},
    rightAction:{},
    actionText:{
        fontFamily: theme.fonts.text,
        fontSize: 20,
        top: 50
    }
});