import { api } from '../Util'
import AsyncStorage from '@react-native-async-storage/async-storage';

function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
}

async function getHistorico(login, tk, OFFLINE) {
  if(OFFLINE === false) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` ,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      };
      const ret = await api.get('exerciseHistory?usuario='+login, config);
      await AsyncStorage.setItem("exerciseHistory", JSON.stringify(ret));
      return ret;
      }else if(OFFLINE === true){
        return JSON.parse(await AsyncStorage.getItem("exerciseHistory"))
      }
  }

  function setHistorico(login, exercicio, peso, repeticoes, observacoes, tk) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        exercicio: exercicio,
        peso: peso,
        repeticoes: repeticoes,
        observacao: observacoes
     };


    return api.post('exerciseHistory', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getHistorico, setHistorico}