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
        backgroundColor: theme.colorsPrimary.primary, 
        borderRadius : 10, 
        borderColor: theme.colorsPrimary.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerLinhaDark:{
        backgroundColor: theme.colorsPrimaryDark.primary, 
        borderRadius : 10, 
        borderColor: theme.colorsPrimaryDark.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerPizza:{
        backgroundColor: theme.colorsPrimary.primary, 
        color: theme.colorsPrimary.cardColor,
        borderRadius : 10, 
        borderColor: theme.colorsPrimary.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20 
    },
    containerPizzaDark:{
        backgroundColor: theme.colorsPrimaryDark.primary, 
        color: theme.colorsPrimaryDark.cardColor,
        borderRadius : 10, 
        borderColor: theme.colorsPrimaryDark.border,
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20 
    },
    containerBarra:{
        backgroundColor: theme.colorsPrimary.cardColor, 
        borderRadius : 10, 
        borderColor: theme.colorsPrimary.border,
        borderWidth: 2,
        width: 330, 
        height: 230 ,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 20
    },
    containerBarraDark:{
        backgroundColor: theme.colorsPrimaryDark.cardColor, 
        borderRadius : 10, 
        borderColor: theme.colorsPrimaryDark.border,
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
        backgroundColor: theme.colorsPrimary.primary,
        alignItems: 'center',
        marginLeft:260,
        paddingTop: 8,
    },
    containerButtonIconsDark:{
        width:35,
        height: 35,
        flexDirection:'column',
        backgroundColor: theme.colorsPrimaryDark.primary,
        alignItems: 'center',
        marginLeft:260,
        paddingTop: 8,
    },
    
});