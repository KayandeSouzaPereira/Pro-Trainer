import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 2,
        height: 120,
        flexDirection: 'row',
        backgroundColor: theme.colorsPrimary.background,
        alignContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        textAlign:'left',
        top: 23,
        left: 20
    },
    texto:{
        fontSize: 20, 
        fontFamily: theme.fonts.tituloDestaque,
        color: theme.colorsPrimary.fontColor,
    },
    textoSub:{
        fontSize: 15, 
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimary.border,
    },
    textoSubNome:{
        right: 18, 
        fontSize: 15, 
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimary.border,
        top: 35
    },
    imageContainer:{
        left: 30,
        top: 20
    }
});