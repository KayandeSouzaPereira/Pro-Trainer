import Grafico from "../../assets/Grafico"
import { useState, useEffect } from "react"
import {View, FlatList} from "react-native"
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { LoadingModal } from "react-native-loading-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMacros, getUsuarioRequest } from '../../servicos/Macros';


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

    console.log(dados);

    if (dados.length != 0){
     let proteinas = dados.proteinas;
     let gorduras = dados.gorduras;
     let carboidratos = dados.carboidratos;
     
    const dadosMock = [
      {id: 1,
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
       },
      {id: 2,
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
       }
    ]

    
    setMock(dadosMock)
    setLoading(false);
    }
  }

  const setDataMacro = async () => {
    
    setLoading(true);
    let tkk = await AsyncStorage.getItem('Token');
    let dataUser = await getUsuarioRequest(tkk);
    let idUser = dataUser.data.retorno.idAuth
    
    let dados = await getMacros(idUser, tkk);
   
    if (dados.data.resultado != null ){
        let dados_ = dados.data.resultado[0]
        setDadosMacro(dados_);
        montaMock(dados_);
    }
    
  }


  

    


    return(
      <View style={{height: 800, top: 50, left: 30}}>
        <LoadingModal modalVisible={loading} />
        <BarraSuperior/>
          <FlatList
          data={mock}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                      <Grafico 
                          data={item} 
                      />
                  )}
                          contentContainerStyle={{ paddingBottom: 30}}
                          showsVerticalScrollIndicator={true}
              />   
        <BarraInferior {... {navigation}}/>    
        </View>
    )
}