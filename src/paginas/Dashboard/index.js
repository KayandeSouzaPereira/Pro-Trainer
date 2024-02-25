import Grafico from "../../assets/Grafico"
import { useState, useEffect } from "react"
import {View, FlatList, Text, Dimensions} from "react-native"
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"
import { LoadingModal } from "react-native-loading-modal";  
import * as SecureStore from 'expo-secure-store';
import { getMacros, getUsuarioRequest, getForca, getPresenca } from '../../servicos/Macros';
import { getUserTraining } from "../../servicos/Treinos"
import { getUsuarioInfoIMGRequest } from "../../servicos/Usuario"
import moment from 'moment';
import 'moment/locale/pt-br'
import { GLOBALS, theme } from "../../configs";

export default function Dashboard({ navigation }) {

  const [dadosMacro, setDadosMacro] = useState([]);
  const [dadosForca, setDadosForca] = useState([]);
  const [dadosPresenca, setDadosPresenca] = useState([]);
  const [dadosPresencaMeses, setDadosPresencaMeses] = useState([]);
  const [treinos, setTreinos] = useState(0)
  const [loading, setLoading] = useState(true);
  const [mock, setMock] = useState([]);
  const [recall, setRecall] = useState([false]);
  const [update, setUpdate] = useState(false);
  const [image, setImage] = useState(null);


  useEffect(() => {
     navigation.addListener('focus', () => {
          setDataMacro();
    });
  }, [navigation]);



  useEffect(() => {
    montaMock();
  }, [dadosMacro])

  useEffect(() => {
    //montaMock();
  }, [dadosForca])

  useEffect(() => {
    montaMock();
  }, [dadosPresenca])

  const montaMock = () => {

    const dadosMock = [];

    if(dadosMacro != undefined){
    if (dadosMacro.length != 0){
      let dados = dadosMacro
     let proteinas = dados.proteinas;
     let gorduras = dados.gorduras;
     let carboidratos = dados.carboidratos;
     
    
    const dadosMacroMock = {
        id: 1,
        tipo: "Pizza",
        infos: [
          {
            name: "Prot",
            macros: proteinas,
            color: "#EC6B56",
            legendFontColor: theme.colorsPrimary.cardColor,
            legendFontSize: 15
          },
          {
            name: "Gord",
            macros: gorduras,
            color: "#FFC154",
            legendFontColor: theme.colorsPrimary.cardColor,
            legendFontSize: 15
          },
          {
            name: "Carb",
            macros: carboidratos,
            color: "#47B39C",
            legendFontColor: theme.colorsPrimary.cardColor,
            legendFontSize: 15
          }
        ],
        Titulo: "Macros do Dia",
       };

       dadosMock.push(dadosMacroMock); 


       if(treinos > 0 && dadosPresenca.length > 0){
        
        const treinos = {
          id: 2,
          tipo: "Linha",
          infos: dadosPresenca,
          titulos: dadosPresencaMeses,
          Titulo: "Presença nos Treinos"
         };

         dadosMock.push(treinos)

      }

      if(treinos > 0 && dadosForca.length > 0){
        const forca = {
          id: 3,
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

      if (treinos > 0 && dadosForca.length == 0 && dadosPresenca.length == 0){
        const meses = ultimosMes();
        const mock = {id: 2,
          tipo: "Linha",
          infos: [0,0,0],
          titulos: meses,
          Titulo: "Presença nos Treinos"
         };
         const mock2 =  {id: 3,
           tipo: "Barra",
           infos:{
           labels: ["1º", "2º", "3º"],
           datasets: [
             {
               data: [0,0,0]
             }
           ]},
           Titulo: "Aumento de Força (ultimos 3 registro do treino)"
          };
          dadosMock.push(mock)
          dadosMock.push(mock2)
      }

      

      

      if(treinos === 0){
        const zero = {id: 0}
        dadosMock.push(zero);
      }


    setMock(dadosMock)
    setLoading(false);
    }
    }else{
      const dadosMock = [ {id: 1,
        tipo: "Pizza",
        infos: [
          {
            name: "Prot",
            macros: 0,
            color: "#83a7ea",
            legendFontColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor ,
            legendFontSize: 15
          },
          {
            name: "Gord",
            macros: 0,
            color: "#1b5a76",
            legendFontColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor ,
            legendFontSize: 15
          },
          {
            name: "Carb",
            macros: 0,
            color: "#2e6c80",
            legendFontColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor ,
            legendFontSize: 15
          }
        ],
        Titulo: "Macros do Dia"
       },{id: 0}]
      setMock(dadosMock);
    }
    setLoading(false);
  }

  function handleForca(dados) {
    const reg = [];
    dados.forEach((i) => reg.push(i.peso))

    if (dados.length === 1){
      reg.push(0);
      reg.push(0);
    }
    if (dados.length === 2){
      reg.push(0);
    }

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
      const i = data[0];
      data.push(moment(i.Mes).subtract(1, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
      data.push(moment(i.Mes).subtract(2, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
    }

    if (data.length == 2) {
      const i = data[0];
      data.push(moment(i.Mes).subtract(1, 'months').format('MMMM').substring(0, 3))
      reg.push(0)
    }
    
    

    setDadosPresenca(reg);
    setDadosPresencaMeses(data)


  }

  function ultimosMes(){
    const data = [];

    data.push(moment().format('MMMM').substring(0, 3))
    data.push(moment().subtract(1, 'months').format('MMMM').substring(0, 3))
    data.push(moment().subtract(2, 'months').format('MMMM').substring(0, 3))

    return data;

  }

  const getImage = async () => {
    let tkk = await SecureStore.getItemAsync("token");
    let id = GLOBALS.IDUSER;
    if(id != 0){
        try {
        let data = await getUsuarioInfoIMGRequest(id, tkk);
        if (data.data.resultado != undefined){
            let image = data.data.resultado.img
            setImage(`data:image/png;base64,${image}`)
        }else {
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
        } } catch (err){
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
        }
    }else if(id == 0){
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH15XmvGL5ftl3MGXUuUXajy-FGo0jCfwQQZY5sOWNw&s")
    }
  }

  const setDataMacro = async () => {

    setLoading(true);
    let tkk = await SecureStore.getItemAsync("token");
    let dataUser = ""
    try {
       dataUser = await getUsuarioRequest(tkk);
    } catch (err){
      try {
        dataUser = await getUsuarioRequest(tkk);
      } catch (err){

      }
    }
    
    let idUser = dataUser.data.retorno.idAuth;
    let nome = dataUser.data.retorno.user;
    GLOBALS.IDUSER = idUser
    GLOBALS.NOME = nome
    getImage();
    try {
      let dados = await getUserTraining(idUser, tkk);
      
      if (dados.data != null){
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
        handleForca(dados.data.resultado);
      }

    } catch (err){

    }

    try {
      let dados = await getPresenca(idUser, tkk);
      
      if (dados.data.resultado != null && dadosPresenca.length === 0){
        handleHistorico(dados.data.resultado);
      }

    } catch (err){
      console.log(err);
    }
    

  }


  
  function callback(){
    setDataMacro();
  }


    return(
      <View style={{flex: 1, backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.background : theme.colorsPrimaryDark.background}}>
        
        <BarraSuperior images={image} localizacao={"Dashboard"}/>
       
        <View style={{flex: 1,marginHorizontal: Dimensions.get('window').width / 15, marginVertical: 10}}>
        <LoadingModal modalVisible={loading} />
          <FlatList
          data={mock}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                     item.id === 0?
                      <View style={{width: 330}}>
                        <Text>Nenhum dado de treino cadastrado, por favor insira suas informações de Treino, na aba de treino.</Text>
                      </View>
                      :
                      <Grafico 
                          data={item}
                          callback={callback}
                      />
                  )}
                          contentContainerStyle={{ paddingBottom: 50, height: 750}}
                          showsVerticalScrollIndicator={true}
              />   
            </View>
            <View style={{bottom: 25}}>
            <BarraInferior {... {navigation}}/>
          </View>   
        </View>
    )
}