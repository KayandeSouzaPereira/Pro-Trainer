import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../configs';

export const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 600,
        marginHorizontal: Dimensions.get('window').width / 15,
        opacity: 1,
        top: 10,
        flexDirection:"column",
        alignItems: 'center',
        textAlign:"center",
        backgroundColor: theme.colorsPrimary.cardColor,
        borderRadius: 20,
        marginBottom: 20
    },
    CamposTitulo:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 30,
        flex: 1,
        alignSelf:"center",
        paddingTop:20,
        paddingBottom: 20
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
        marginBottom: 40,
        width: 250,
    },
    CamposSubTitulo:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 25,
        flex: 1,
        alignSelf:"center",
        paddingBottom: 40
    },
    CamposSubTitle:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 22,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 5
    },
    Campos:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 5
    },
    CamposTextEdit:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10
    },
    CamposEdit:{
        fontFamily: theme.fonts.text,
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        paddingLeft: 20,
        width: 250,
        height: 40,
        borderBottomWidth: 2
    }
});