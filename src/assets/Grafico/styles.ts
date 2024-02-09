import { StyleSheet } from 'react-native';
import { theme } from '../../configs';


export const styles = StyleSheet.create({
    container:{
        width: 370, 
        flex: 1,
        backgroundColor: theme.colorsPrimary.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLinha:{
        backgroundColor: theme.colorsPrimary.cardColor, 
        borderRadius : 10, 
        borderColor: 'black',
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerPizza:{
        backgroundColor: theme.colorsPrimary.cardColor, 
        color: theme.colorsPrimary.cardColor,
        borderRadius : 10, 
        borderColor: 'black',
        borderWidth: 2,
        width: 330, 
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20 
    },
    containerBarra:{
        backgroundColor: theme.colorsPrimary.cardColor, 
        borderRadius : 10, 
        borderColor: 'black',
        borderWidth: 2,
        width: 330, 
        height: 230 ,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 20
    },
    containerButtonIcons:{
        width:35,
        height: 35,
        flexDirection:'column',
        backgroundColor: theme.colorsPrimary.primary,
        borderRadius: 160,
        alignItems: 'center',
        marginLeft:260,
        paddingTop: 8,
    },
    
});