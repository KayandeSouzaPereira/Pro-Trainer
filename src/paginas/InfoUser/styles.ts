import { StyleSheet, Dimensions } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.background : theme.colorsPrimaryDark.background, 
        flexDirection: 'column'
    },
    avatar:{
        width: 130,
        height: 130,
        borderRadius: 130
    },
    containerCampos:{
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor, 
        width: 350, 
        height: Dimensions.get('window').height / 2.15, 
        marginHorizontal: Dimensions.get('window').width / 20, 
        marginTop: 5, 
        borderRadius: 15, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border, 
        borderWidth: 2, 
        alignItems: 'center'
    },
    containerUser:{
        width: Dimensions.get('window').width,
        height:200,
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign:'center'
    },
    containerAvatar:{
        width: 130,
        height:130,
        marginLeft: 5,
        flexDirection: 'column'
    },
    containerButton:{
        width:55,
        height: 55,
        flexDirection:'column',
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.cardColor,
        borderRadius: 30,
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border, 
        borderWidth: 2, 
        alignItems: 'center',
        marginLeft:250,
        marginTop:18,
        paddingTop:10,
    },
    containerButtonIMG:{
        width:40,
        height: 40,
        flexDirection:'column',
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.cardColor,
        borderRadius: 30,
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border, 
        borderWidth: 2, 
        alignItems: 'center',
        marginLeft:90,
        paddingTop: 5,
        bottom: 50
    },
    CamposUser:{
        fontFamily: theme.fonts.tituloDestaque,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        width: Dimensions.get('window').width - 20, 
        fontSize: 30,
        marginTop: 10,
        textAlign:'center'
        
    },
    containerCamposForm:{
        width: 300,
        flexDirection: 'column',
        paddingBottom: 5
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 15
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.fontColor,
        fontSize: 15,
        margin: 5,
        height: 20,
        width: 250,
        borderBottomWidth: 2,
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.fontColor,
    },
    CampoConfirma:{
        fontFamily: theme.fonts.text,
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        fontSize: 12,
        margin: 5
    }
});