import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.background : theme.colorsPrimaryDark.background, 
        flexDirection: 'column',
    }
});