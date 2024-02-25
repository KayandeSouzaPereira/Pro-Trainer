import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 600,
        flex: 1,
        flexDirection:"column",
        alignItems: 'center',
        textAlign:"center",
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        borderRadius: 20,
        marginBottom: 20
    },
    CamposTitulo:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 30,
        flex: 1,
        alignSelf:"center",
        paddingTop:20,
        paddingBottom: 20
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        fontSize: 30,
        bottom: 30,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        marginBottom: 40,
        width: 250,
    },
    CamposSubTitulo:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 25,
        flex: 1,
        alignSelf:"center",
        paddingBottom: 40
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 20
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 20,
        marginLeft: 10,
        borderRadius: 20,
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.fontColor,
        paddingLeft: 20,
        top: 20,
        marginBottom: 30,
        width: 330,
        height: 60,
        borderBottomWidth: 2
    }
});