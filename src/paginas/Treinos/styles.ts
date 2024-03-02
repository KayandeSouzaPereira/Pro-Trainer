import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colorsPrimary.background, 
        flexDirection: 'column',
    },
    containerDark:{
        flex: 1,
        backgroundColor: theme.colorsPrimaryDark.background, 
        flexDirection: 'column',
    }
});