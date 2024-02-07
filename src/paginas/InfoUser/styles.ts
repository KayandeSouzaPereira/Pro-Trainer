import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2e6c80', 
        flexDirection: 'column'
    },
    avatar:{
        width: 140,
        height: 140,
        borderRadius: 160,
        marginTop: 20
    },
    containerCampos:{
        backgroundColor:"white", 
        width: 350, 
        height: 550, 
        marginHorizontal: 30, 
        marginTop: 20, 
        borderRadius: 15, 
        borderColor: 'black', 
        borderWidth: 2, 
        alignItems: 'center'
    },
    containerUser:{
        width: Dimensions.get('window').width,
        height:240,
        marginTop: 120,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign:'center'
    },
    containerAvatar:{
        width: 160,
        height:160,
        marginLeft: 30,
        flexDirection: 'column'
    },
    containerButton:{
        width:55,
        height: 55,
        flexDirection:'column',
        backgroundColor: '#2e6c80',
        borderRadius: 160,
        alignItems: 'center',
        marginLeft:250,
        marginTop:18,
        paddingTop:10,
        borderWidth: 2
    },
    containerButtonIMG:{
        width:35,
        height: 35,
        flexDirection:'column',
        backgroundColor: '#2e6c80',
        borderRadius: 160,
        alignItems: 'center',
        marginLeft:100,
        paddingTop: 8,
        bottom: 60
    },
    CamposUser:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        width: Dimensions.get('window').width - 20, 
        fontSize: 30,
        marginTop: 10,
        textAlign:'center'
        
    },
    containerCamposForm:{
        width: 300,
        flexDirection: 'column',
        paddingBottom: 5
    },
    Campos:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 15
    },
    CamposEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 15,
        margin: 5,
        height: 20,
        width: 250,
        borderBottomWidth: 2,
    },
    CampoConfirma:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 12,
        margin: 5
    }
});