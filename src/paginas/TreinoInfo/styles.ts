import { StyleSheet } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 400, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.border,
        alignItems: 'center',
        justifyContent: 'center'
    }
});