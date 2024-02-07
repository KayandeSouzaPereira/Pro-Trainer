import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart, PieChart, ContributionGraph, BarChart} from 'react-native-chart-kit';
import { styles } from './styles';
import { ModalMacro } from '../ModalMacro';
import { ModalTreinoRegistro } from '../ModalTreinoRegistro';
import { Entypo } from '@expo/vector-icons';

export default function Grafico(data) {

   const [modalMacro, setModalMacro] = useState(false);
   const [modalTreino, setModalTreino] = useState(false);

   

  let dados = data.data;
  let tipo = dados.tipo;
  let titulos = dados.titulos;
  let valores = dados.infos;
  let titulo = dados.Titulo;

  
    if (tipo == "Linha"){
        return(
            <View style={styles.containerLinha}>
            <Text style={{top: 20}}>{titulo}</Text>
            <TouchableOpacity onPress={() => setModalTreino(true) }>
            <View style={styles.containerButtonIcons}>
                <Entypo name="add-to-list" size={20} color="white" />
            </View>
            <LineChart
            data={{
                labels: titulos,
                datasets: [
                {
                    data: valores
                }
                ]
            }}
            width={280}
            height={150}
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
            <Modal
                visible={modalTreino}
                transparent={true}
                onRequestClose={() => {setModalTreino(false);}}
            >
                <ModalTreinoRegistro reload={() => {setModalTreino(false);}}/>
            </Modal>
            </TouchableOpacity>
        </View>
        )
    }else if(tipo == "Pizza"){
          return (
            <View style={styles.containerPizza}>
            <TouchableOpacity onPress={() => setModalMacro(true) }>
            <Text style={{top: 20, left: 20}}>{titulo}</Text>
            <View style={styles.containerButtonIcons}>
                <Entypo name="add-to-list" size={20} color="white" />
            </View>
            <PieChart
                data={valores}
                width={280}
                height={150} 
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
            <Modal
                visible={modalMacro}
                transparent={true}
                onRequestClose={() => {setModalMacro(false);}}
            >
                <ModalMacro reload={() => {setModalMacro(false);}}/>
            </Modal>
            </TouchableOpacity>
            </View>)
    
    }else if(tipo == "Barra"){
        
          return (
            <View style={styles.containerBarra}>
            <Text>{titulo}</Text>
            <BarChart
                data={valores}
                width={280}
                height={150}
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