import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { LineChart, PieChart, ContributionGraph, BarChart} from 'react-native-chart-kit';
import { styles } from './styles';
import { ModalMacro } from '../ModalMacro';
import { ModalTreinoRegistro } from '../ModalTreinoRegistro';
import { Entypo } from '@expo/vector-icons';
import { theme, GLOBALS, useContextC } from '../../configs';

export default function Grafico({data, callback}) {

    const { state, dispatch } = useContextC();

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
            <View style={state.DARKMODE != true ? styles.containerLinha : styles.containerLinhaDark}>
            <Text style={{top: 20,  fontFamily: theme.fonts.titulo, color:  state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor }}>{titulo}</Text>
            <TouchableOpacity onPress={() => setModalTreino(true) }>
            <View style={state.DARKMODE != true ? styles.containerButtonIcons : styles.containerButtonIconsDark}>
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
                backgroundColor: state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                backgroundGradientFrom: state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                backgroundGradientTo: state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                decimalPlaces: 2,
                color: (opacity = 1) =>  state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor,
                labelColor: (opacity = 1) =>  state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor,
                style: {
                borderRadius: 16
                },
                propsForDots: {
                strokeWidth: "1",
                stroke: state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor
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
            <View style={state.DARKMODE != true ? styles.containerPizza : styles.containerPizzaDark}>
            <TouchableOpacity onPress={() => setModalMacro(true) }>
            <Text style={{top: 20, left: 20,fontFamily: theme.fonts.titulo, color: GLOBALS.DARKMODE === 0 ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.fontColor}}>{titulo}</Text>
            <View style={state.DARKMODE != true ? styles.containerButtonIcons : styles.containerButtonIconsDark}>
                <Entypo name="add-to-list" size={20} color="white" />
            </View>
            <PieChart
                data={valores}
                width={280}
                height={160} 
                hasLegend={true}
                chartConfig={{
                    color: (opacity = 0) => state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    labelColor: (opacity = 0) => state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    fontColor: (opacity = 0) => state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                }}
                backgroundColor={state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary}
                accessor={"macros"}
                paddingLeft={"5"}
                center={[10, 10]}
                color={state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor}
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
            <View style={state.DARKMODE != true ? styles.containerBarra : styles.containerBarraDark}>
            <Text style={{fontFamily: theme.fonts.titulo, color: state.DARKMODE != true ? theme.colorsPrimary.fontColor : theme.colorsPrimaryDark.primary}}>{titulo}</Text>
            <BarChart
                data={valores}
                width={280}
                height={170}
                chartConfig={{
                    backgroundColor: state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    backgroundGradientFrom: state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    backgroundGradientTo: state.DARKMODE != true ? theme.colorsPrimary.cardColor : theme.colorsPrimaryDark.cardColor,
                    color: (opacity = 1) => state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                    labelColor: (opacity = 1) => state.DARKMODE != true ? theme.colorsPrimary.primary : theme.colorsPrimaryDark.primary,
                }}
            />
            </View>)
    }
}