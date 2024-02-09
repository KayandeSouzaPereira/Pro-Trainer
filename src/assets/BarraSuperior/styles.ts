import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 2,
        height: 120,
        right: 80,
        top: 120,
        backgroundColor: theme.colorsPrimary.cardColor,
        alignContent: 'center',
        flexDirection: 'column'
    },
    texto:{
        left: 210, 
        fontSize: 30, 
        fontFamily: theme.fonts.text
    },
    imageContainer:{
        left: 120,
        top: 50
    }
});