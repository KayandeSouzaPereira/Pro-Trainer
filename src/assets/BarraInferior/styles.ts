import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 380,
        height: 75,
        backgroundColor: theme.colorsPrimary.primary,
        alignContent: 'flex-start',
        borderColor:  theme.colorsPrimary.background,
        borderWidth: 2,
        borderRadius: 35,
        alignItems: 'center'
    },
    containerDarkmode:{
        width: 380,
        height: 75,
        backgroundColor: theme.colorsPrimaryDark.cardColor,
        alignContent: 'flex-start',
        borderColor:  theme.colorsPrimaryDark.border,
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