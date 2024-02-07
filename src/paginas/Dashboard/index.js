import Grafico from "../../assets/Grafico"
import { useState, useEffect } from "react"
import {View, FlatList, Text} from "react-native"
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { LoadingModal } from "react-native-loading-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMacros, getUsuarioRequest, getForca, getPresenca } from '../../servicos/Macros';
import { GLOBALS } from "../../configs"

export default function Dashboard({ navigation }) {

  const [dadosMacro, setDadosMacro] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mock, setMock] = useState([]);
  const [recall, setRecall] = useState([false]);



  useEffect(() => {
    setDataMacro();
  }, [])


  useEffect(() => {
    if(recall === true){
      setDataMacro();
    }
  }, [recall])

  

  const montaMock = (dados) => {

    const dadosMock = [];

    if (dados.length != 0){
     let proteinas = dados.proteinas;
     let gorduras = dados.gorduras;
     let carboidratos = dados.carboidratos;
     
    
    const dadosMacroMock = {id: 1,
        tipo: "Pizza",
        infos: [
          {
            name: "Prot",
            macros: proteinas,
            color: "#83a7ea",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Gord",
            macros: gorduras,
            color: "#1b5a76",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Carb",
            macros: carboidratos,
            color: "#2e6c80",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          }
        ],
        Titulo: "Macros do Dia"
       };

       dadosMock.push(dadosMacroMock); 

      if (1 != 1){
        const dev = [{id: 2,
          tipo: "Linha",
          infos: [5,10,20],
          titulos: ["Jan", "Fev", "Mar"],
          Titulo: "Treinos"
         },
         
          {id: 3,
           tipo: "Barra",
           infos:{
           labels: [ "Maio", "Junho", "Julho"],
           datasets: [
             {
               data: [20, 15, 10]
             }
           ]},
           Titulo: "Aumento de Força Media"
          }]
      }


    
    setMock(dadosMock)
    setLoading(false);
    }else{
      const dadosMock = [ {id: 1,
        tipo: "Pizza",
        infos: [
          {
            name: "Prot",
            macros: 0,
            color: "#83a7ea",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Gord",
            macros: 0,
            color: "#1b5a76",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Carb",
            macros: 0,
            color: "#2e6c80",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          }
        ],
        Titulo: "Macros do Dia"
       },{id: 0}]
      setMock(dadosMock)
      setLoading(false);
    }
  }

  const setDataMacro = async () => {

    setLoading(true);
    let tkk = await AsyncStorage.getItem('Token');
    let dataUser = await getUsuarioRequest(tkk);
    let idUser = dataUser.data.retorno.idAuth;
    GLOBALS.IDUSER = idUser
    try { 
      let dados = await getMacros(idUser, tkk);
      
      if (dados.data.resultado != null ){
          let dados_ = dados.data.resultado[0]
          setDadosMacro(dados_);
          montaMock(dados_);
      }
    } catch (err){
      
    }

    try {
      let dados = await getForca(idUser, tkk);

      if (dados.data.resultado != null){
        console.log("FORCA : " + dados.data.resultado);
      }

    } catch (err){

    }

    try {
      let dados = await getPresenca(idUser, tkk);

      if (dados.data.resultado != null){
        console.log("PRESENÇA : " + dados.data.resultado);
      }

    } catch (err){

    }

    setLoading(false);

  }


  

    


    return(
      <View style={{flex: 1}}>
        <LoadingModal modalVisible={loading} />
        <BarraSuperior/>
        <View style={{flex: 1, marginHorizontal: 30, marginVertical: 20, top: 60}}>
          <FlatList
          data={mock}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                     item.id === 0?
                      <View style={{width: 350}}>
                        <Text>Nenhum dado de treino cadastrado, por favor insira suas informações de Treino</Text>
                      </View>
                      :
                      <Grafico 
                          data={item} 
                      />
                  )}
                          contentContainerStyle={{ paddingBottom: 30}}
                          showsVerticalScrollIndicator={true}
              />   
            </View>
        <BarraInferior {... {navigation}}/>    
        </View>
    )
}