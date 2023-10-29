import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { LineChart, PieChart, ContributionGraph, BarChart} from 'react-native-chart-kit';
import { styles } from './styles';

export default function Grafico(data) {
  let dados = data.data;
  let tipo = dados.tipo;
  let titulos = dados.titulos;
  let valores = dados.infos;
  let titulo = dados.Titulo;
    if (tipo == "Linha"){
        return(
            <View style={styles.containerLinha}>
            <Text>{titulo}</Text>
            <LineChart
            data={{
                labels: titulos,
                datasets: [
                {
                    data: valores
                }
                ]
            }}
            width={300}
            height={180}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2,
                color: (opacity = 1) => `#1b5a76`,
                labelColor: (opacity = 1) => `#1b5a76`,
                style: {
                borderRadius: 16
                },
                propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#1b5a76"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
            />
        </View>
        )
    }else if(tipo == "Pizza"){
          return (
            <View style={styles.containerPizza}>
            <Text>{titulo}</Text>
            <PieChart
                data={valores}
                width={300}
                height={180} 
                hasLegend={true}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    color: (opacity = 1) => `#1b5a76`,
                    labelColor: (opacity = 1) => `#1b5a76`,
                }}
                backgroundColor={"#ffffff"}
                accessor={"macros"}
                paddingLeft={"5"}
                center={[10, 10]}
                absolut
            />
            </View>)
    
    }else if(tipo == "Barra"){
        
          return (
            <View style={styles.containerBarra}>
            <Text>{titulo}</Text>
            <BarChart
                data={valores}
                width={300}
                height={180}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    color: (opacity = 1) => `#1b5a76`,
                    labelColor: (opacity = 1) => `#1b5a76`,
                }}
            />
            </View>)
    }
}