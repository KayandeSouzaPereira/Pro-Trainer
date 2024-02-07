import Grafico from "../../assets/Grafico"
import { useState, useEffect } from "react"
import {View, FlatList, Text} from "react-native"
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { LoadingModal } from "react-native-loading-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMacros, getUsuarioRequest, getForca, getPresenca } from '../../servicos/Macros';
import { getUserTraining } from "../../servicos/Treinos"
import moment from 'moment';
import 'moment/locale/pt-br'
import { GLOBALS } from "../../configs"

export default function Dashboard({ navigation }) {

  const [dadosMacro, setDadosMacro] = useState([]);
  const [dadosForca, setDadosForca] = useState([]);
  const [dadosPresenca, setDadosPresenca] = useState([]);
  const [dadosPresencaMeses, setDadosPresencaMeses] = useState([]);
  const [treinos, setTreinos] = useState(0)
  const [loading, setLoading] = useState(true);
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


  useEffect(() => {
    montaMock();
  }, [dadosMacro])

  useEffect(() => {
    montaMock();
  }, [dadosForca])

  useEffect(() => {
    montaMock();
  }, [dadosPresenca])
  

  const montaMock = () => {

    const dadosMock = [];
    console.log(treinos > 0)

    if (dadosMacro.length != 0){
      let dados = dadosMacro
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

       if(treinos > 0 && dadosPresenca.length > 0){
        console.log("DADOS : " + dadosPresenca)
        const treinos = {id: 2,
          tipo: "Linha",
          infos: dadosPresenca,
          titulos: dadosPresencaMeses,
          Titulo: "Presença nos Treinos"
         };

         dadosMock.push(treinos)

      }

      if(treinos > 0 && dadosForca.length > 0){
        const forca = {id: 3,
          tipo: "Barra",
          infos:{
          labels: ["1", "2", "3"],
          datasets: [
            {
              data: dadosForca
            }
          ]},
          Titulo: "Aumento de Força (ultimos 3 registro do treino)"
         }

         dadosMock.push(forca)

      }

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
           Titulo: "Aumento de Força"
          }]
      }

      

      

      if(treinos === 0){
        const zero = {id: 0}
        dadosMock.push(zero);
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
      
    }
    setLoading(false);
  }

  function handleForca(dados) {
    const reg = [];
    dados.forEach((i) => reg.push(i.peso))
    setDadosForca(reg)
  }

  function handleHistorico(dados) {
    const reg = [];
    const data = [];
    dados.forEach((i) => {
     data.push(moment(i.Mes).locale('pt-br').format('MMMM').substring(0, 3))
     reg.push(i.treinos)
    })

    if (data.length == 1) {
      data.push(moment(i.Mes).subtract(1, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
      data.push(moment(i.Mes).subtract(2, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
    }

    if (data.length == 2) {
      data.push(moment(i.Mes).subtract(1, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
    }
    
    setDadosPresenca(reg);
    setDadosPresencaMeses(data)


  }

  const setDataMacro = async () => {

    setLoading(true);
    let tkk = await AsyncStorage.getItem('Token');
    let dataUser = await getUsuarioRequest(tkk);
    let idUser = dataUser.data.retorno.idAuth;
    GLOBALS.IDUSER = idUser
    try {
      let dados = await getUserTraining(idUser, tkk);

      if (dados.data != null){
        console.log("Training : " + JSON.stringify(dados.data.resultado.length));
        setTreinos(dados.data.resultado.length)
      }

    } catch (err){

    }
    try { 
      let dados = await getMacros(idUser, tkk);
      
      if (dados.data.resultado != null ){
          let dados_ = dados.data.resultado[0]
          setDadosMacro(dados_);
          
      }
    } catch (err){
      
    }

    try {
      let dados = await getForca(idUser, tkk);

      if (dados.data.resultado != null){
        console.log("FORCA : " + JSON.stringify(dados.data.resultado));
        handleForca(dados.data.resultado);
      }

    } catch (err){

    }

    try {
      let dados = await getPresenca(idUser, tkk);

      if (dados.data.resultado != null){
        console.log("PRESENÇA : " + JSON.stringify(dados.data.resultado));
        handleHistorico(dados.data.resultado);
      }

    } catch (err){

    }
    
    setLoading(false);

  }


  

    


    return(
      <View style={{flex: 1}}>
        <LoadingModal modalVisible={loading} />
        <BarraSuperior/>
        <View style={{flex: 1,marginHorizontal: 30, marginVertical: 20, top: 120}}>
          <FlatList
          data={mock}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                     item.id === 0?
                      <View style={{width: 350}}>
                        <Text>Nenhum dado de treino cadastrado, por favor insira suas informações de Treino, na aba de treino.</Text>
                      </View>
                      :
                      <Grafico 
                          data={item} 
                      />
                  )}
                          contentContainerStyle={{ paddingBottom: 50, height: 1000}}
                          showsVerticalScrollIndicator={true}
              />   
            </View>
        <View style={{bottom: 0}}>
          <BarraInferior {... {navigation}}/>    
        </View>
        </View>
    )
}