import Grafico from "../../assets/Grafico"
import {View, FlatList} from "react-native"
import { BarraInferior } from "../../assets/BarraInferior"
import { BarraSuperior } from "../../assets/BarraSuperior"

export default function Dashboard({ navigation }) {
  const dadosMock = [
    {id: 1,
     tipo: "Linha",
     infos: [5,10,20],
     titulos: ["Jan", "Fev", "Mar"],
     Titulo: "Treinos"
    },
    {id: 2,
      tipo: "Pizza",
      infos: [
        {
          name: "Prot",
          macros: 177,
          color: "#83a7ea",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Gord",
          macros: 30,
          color: "#1b5a76",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Carb",
          macros: 230,
          color: "#2e6c80",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ],
      Titulo: "Macros do Dia"
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
     },
     {id: 4,
      tipo: "Linha",
      infos: [5,10,20],
      titulos: ["Jan", "Fev", "Mar"],
      Titulo: "TESTE"
     }
  ]
    return(
      <View style={{height: 800, top: 50, left: 30}}>
        <BarraSuperior/>
          <FlatList
          data={dadosMock}
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