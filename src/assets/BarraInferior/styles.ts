import { StyleSheet } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 400,
        height: 75,
        backgroundColor: theme.colorsPrimary.primary,
        alignContent: 'flex-start',
        borderColor: theme.colorsPrimary.background,
        borderWidth: 2,
        borderRadius: 35
    },
    containerIcones:{
        left:0, 
        top: 12, 
        display: 'flex', 
        flexDirection: "row"
    },
    Icones:{
        marginHorizontal: 30
    }
});