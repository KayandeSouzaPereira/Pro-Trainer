import { StyleSheet } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colorsPrimary.background, 
        flexDirection: 'column'
    }
});