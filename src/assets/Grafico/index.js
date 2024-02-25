import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart, PieChart, ContributionGraph, BarChart} from 'react-native-chart-kit';
import { styles } from './styles';
import { ModalMacro } from '../ModalMacro';
import { ModalTreinoRegistro } from '../ModalTreinoRegistro';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../configs';

export default function Grafico({data, callback}) {

   const [modalMacro, setModalMacro] = useState(false);
   const [modalTreino, setModalTreino] = useState(false);

   useEffect(() => {
        if(modalTreino == false){
            callback();
        }
   }, [modalTreino])

   useEffect(() => {
    if(modalMacro == false){
        callback();
    }
}, [modalMacro])

   

  let dados = data;
  let tipo = dados.tipo;
  let titulos = dados.titulos;
  let valores = dados.infos;
  let titulo = dados.Titulo;

  
    if (tipo == "Linha"){
        return(
            <View style={styles.containerLinha}>
            <Text style={{top: 20,  fontFamily: theme.fonts.titulo, color: theme.colorsPrimary.cardColor}}>{titulo}</Text>
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
            width={260}
            height={170}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor: theme.colorsPrimary.primary,
                backgroundGradientFrom: theme.colorsPrimary.primary,
                backgroundGradientTo: theme.colorsPrimary.primary,
                decimalPlaces: 2,
                color: (opacity = 1) => theme.colorsPrimary.cardColor,
                labelColor: (opacity = 1) => theme.colorsPrimary.cardColor,
                style: {
                borderRadius: 16
                },
                propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: theme.colorsPrimary.cardColor
                }
            }}
            bezier
            style={{
                marginVertical: 10,
                borderRadius: 16,
                fontFamily: theme.fonts.titulo
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
            <Text style={{top: 20, left: 20,fontFamily: theme.fonts.titulo, color: theme.colorsPrimary.cardColor}}>{titulo}</Text>
            <View style={styles.containerButtonIcons}>
                <Entypo name="add-to-list" size={20} color="white" />
            </View>
            <PieChart
                data={valores}
                width={280}
                height={160} 
                hasLegend={true}
                chartConfig={{
                    color: (opacity = 0) => theme.colorsPrimary.cardColor,
                    labelColor: (opacity = 0) => theme.colorsPrimary.cardColor,
                    fontColor: (opacity = 0) => theme.colorsPrimary.cardColor,
                }}
                backgroundColor={theme.colorsPrimary.primary}
                accessor={"macros"}
                paddingLeft={"5"}
                center={[10, 10]}
                color={theme.colorsPrimary.cardColor}
                absolut
            />
            <Modal
                visible={modalMacro}
                transparent={true}
                onRequestClose={() => {setModalMacro(false);}}
            >
                <ModalMacro reload={() => {setModalMacro(false); }}/>
            </Modal>
            </TouchableOpacity>
            </View>)
    
    }else if(tipo == "Barra"){
        
          return (
            <View style={styles.containerBarra}>
            <Text style={{fontFamily: theme.fonts.titulo, color: theme.colorsPrimary.fontColor}}>{titulo}</Text>
            <BarChart
                data={valores}
                width={280}
                height={170}
                chartConfig={{
                    backgroundColor: theme.colorsPrimary.cardColor,
                    backgroundGradientFrom: theme.colorsPrimary.cardColor,
                    backgroundGradientTo: theme.colorsPrimary.cardColor,
                    color: (opacity = 1) => `#1b5a76`,
                    labelColor: (opacity = 1) => `#1b5a76`,
                }}
            />
            </View>)
    }
}