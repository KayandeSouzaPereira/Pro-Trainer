import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 380,
        height: 75,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.cardColor,
        alignContent: 'flex-start',
        borderColor:  GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.background : theme.colorsPrimaryDark.border,
        borderWidth: 2,
        borderRadius: 35,
        alignItems: 'center'
    },
    containerIcones:{
        left:0, 
        top: 12, 
        display: 'flex', 
        flexDirection: "row"
    },
    Icones:{
        marginHorizontal: 25
    }
});