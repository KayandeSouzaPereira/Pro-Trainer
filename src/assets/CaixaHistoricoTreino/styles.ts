import { StyleSheet } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 300, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.cardColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerText:{
        backgroundColor:theme.colorsPrimary.cardColor,
        width: 300, 
        height: 130,
        borderRadius: 15, 
        borderColor: 'black', 
        borderWidth: 2
    },
    CamposTitulo:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 30,
        top: -10,
        marginLeft: 20
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.cardColor,
        backgroundColor: theme.colorsPrimary.border,
        fontSize: 25,
        bottom: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 280
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 12,
        marginLeft: 20,
        marginVertical: 2
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.cardColor,
        backgroundColor:  theme.colorsPrimary.border,
        fontSize: 18,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 300,
        height: 100
    }
});