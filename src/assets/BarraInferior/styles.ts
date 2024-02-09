import { StyleSheet } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 600,
        height: 100,
        bottom:120,
        right: 10,
        backgroundColor: theme.colorsPrimary.cardColor,
        alignContent: 'flex-start',
        borderColor: theme.border,
        borderWidth: 5
    },
    containerIcones:{
        left:0, 
        top: 10, 
        display: 'flex', 
        flexDirection: "row"
    },
    Icones:{
        marginHorizontal: 30
    }
});