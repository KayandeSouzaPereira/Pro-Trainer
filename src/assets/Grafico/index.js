import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart, PieChart, ContributionGraph, BarChart} from 'react-native-chart-kit';
import { styles } from './styles';
import { ModalMacro } from '../ModalMacro';
import { ModalTreinoRegistro } from '../ModalTreinoRegistro';
import { Entypo } from '@expo/vector-icons';
import { theme, GLOBALS } from '../../configs';

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
            <Text style={{top: 20,  fontFamily: theme.fonts.titulo, color:  GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.fontColor }}>{titulo}</Text>
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
                backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                backgroundGradientFrom: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                backgroundGradientTo: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                decimalPlaces: 2,
                color: (opacity = 1) =>  GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor,
                labelColor: (opacity = 1) =>  GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor,
                style: {
                borderRadius: 16
                },
                propsForDots: {
                strokeWidth: "1",
                stroke: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor
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
            <Text style={{top: 20, left: 20,fontFamily: theme.fonts.titulo, color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor}}>{titulo}</Text>
            <View style={styles.containerButtonIcons}>
                <Entypo name="add-to-list" size={20} color="white" />
            </View>
            <PieChart
                data={valores}
                width={280}
                height={160} 
                hasLegend={true}
                chartConfig={{
                    color: (opacity = 0) => GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    labelColor: (opacity = 0) => GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    fontColor: (opacity = 0) => GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                }}
                backgroundColor={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary}
                accessor={"macros"}
                paddingLeft={"5"}
                center={[10, 10]}
                color={GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor}
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
            <Text style={{fontFamily: theme.fonts.titulo, color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.primary}}>{titulo}</Text>
            <BarChart
                data={valores}
                width={280}
                height={170}
                chartConfig={{
                    backgroundColor: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    backgroundGradientFrom: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    backgroundGradientTo: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    color: (opacity = 1) => GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                    labelColor: (opacity = 1) => GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                }}
            />
            </View>)
    }
}