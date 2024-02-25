import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: 370, 
        flex: 1,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLinha:{
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary, 
        borderRadius : 10, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerPizza:{
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary, 
        color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
        borderRadius : 10, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20 
    },
    containerBarra:{
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor, 
        borderRadius : 10, 
        borderColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.border : theme.colorsPrimaryDark.border,
        borderWidth: 2,
        width: 330, 
        height: 230 ,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 20
    },
    containerButtonIcons:{
        width:35,
        height: 35,
        flexDirection:'column',
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
        alignItems: 'center',
        marginLeft:260,
        paddingTop: 8,
    },
    
});