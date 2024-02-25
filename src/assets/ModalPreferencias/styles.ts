import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 800,
        left: 100,
        opacity: 1,
        top: 50,
        flexDirection:"column",
        alignItems: 'flex-start',
        textAlign:"left",
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        borderRadius: 20,
        paddingTop: 50,
        paddingHorizontal: 40
    },
    CamposTitulo:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 30,
        flex: 1,
        alignSelf:"flex-start",
    },
    CamposSubTitle:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 22,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 60
    },
    ContainerCampos :{
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        width: 200,
        paddingBottom: 30

    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        paddingBottom: 5,
        right: 5
    },
    CamposTextEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        textAlign:'center',
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 250,
        height: 30,
        borderBottomWidth: 2
    }
});