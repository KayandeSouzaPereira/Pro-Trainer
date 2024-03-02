import { StyleSheet } from 'react-native';
import { theme, GLOBALS } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.cardColor,
        borderColor: theme.colorsPrimary.border,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerDark:{
        width: 340, 
        flex: 1,
        backgroundColor: theme.colorsPrimaryDark.cardColor,
        borderColor: theme.colorsPrimaryDark.border,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerEdit:{
        backgroundColor:theme.colorsPrimary.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimary.border, 
        borderWidth: 2
    },
    containerEditDark:{
        backgroundColor:theme.colorsPrimaryDark.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimaryDark.border, 
        borderWidth: 2
    },
    containerbox:{
        backgroundColor: theme.colorsPrimary.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimary.border,
        borderWidth: 2
    },
    containerboxDark:{
        backgroundColor: theme.colorsPrimaryDark.cardColor, 
        width: 340, 
        height: 200,
        borderRadius: 15, 
        borderColor: theme.colorsPrimaryDark.border,
        borderWidth: 2
    },
    containerHeader:{
        flexDirection:"row", 
        width: 340,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        top: 10
    },
    CamposTitulo:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimary.fontColor,
        fontSize: 30,
        textAlign:"center"
    },
    CamposTituloDark:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 30,
        textAlign:"center"
    },
    CamposTituloEdit:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimary.fontColor,
        fontSize: 25,
        bottom: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 280,
        borderBottomWidth: 2

    },
    CamposTituloEditDark:{
        fontFamily: theme.fonts.textDestaque,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 25,
        bottom: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 280,
        borderBottomWidth: 2

    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.overlay,
        fontSize: 20,
        top: 10,
        marginLeft: 20
    },
    CamposDark:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 20,
        top: 10,
        marginLeft: 20
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.fontColor,
        fontSize: 18,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 300,
        height: 100,
        borderBottomWidth: 2
    },
    CamposEditDark:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimaryDark.fontColor,
        fontSize: 18,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 300,
        height: 100,
        borderBottomWidth: 2
    },
    leftAction:{},
    rightAction:{},
    actionText:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.fontColor,
        fontSize: 20,
        top: 50
    },
     actionTextDark:{
        fontFamily: theme.fonts.text,
        color: theme.colorsPrimary.fontColor,
        fontSize: 20,
        top: 50
    }
});