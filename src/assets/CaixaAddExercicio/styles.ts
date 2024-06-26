import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.cardColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerDark:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimaryDark.cardColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    CamposTitulo:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 30,
        bottom: 30,
        marginLeft: 20
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.cardColor,
        backgroundColor: theme.colorsPrimary.border,
        fontSize: 30,
        bottom: 30,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 250,
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 20,
        marginLeft: 20
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.cardColor,
        backgroundColor: theme.colorsPrimary.border,
        fontSize: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 330,
        height: 100
    }
});