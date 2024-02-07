import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 300,
        left: 25,
        opacity: 1,
        top: 200,
        flexDirection:"column",
        alignItems: 'center',
        textAlign:"center",
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20
    },
    CamposTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 30,
        flex: 1,
        alignSelf:"center",
        paddingTop:20,
        paddingBottom: 20
    },
    CamposTituloEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        backgroundColor: '#1b5a76',
        fontSize: 30,
        bottom: 30,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        marginBottom: 40,
        width: 250,
    },
    CamposSubTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 25,
        flex: 1,
        alignSelf:"center",
        paddingBottom: 40
    },
    CamposSubTitle:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 22,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 2
    },
    Campos:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10,
        paddingBottom: 5
    },
    CamposTextEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 18,
        flex: 1,
        alignSelf:"center",
        marginHorizontal:10
    },
    CamposEdit:{
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        fontSize: 18,
        textAlign:'center',
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 20,
        width: 250,
        height: 30,
        borderBottomWidth: 2
    }
});