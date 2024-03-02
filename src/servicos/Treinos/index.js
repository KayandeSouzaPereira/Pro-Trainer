import { api } from "../Util"
import AsyncStorage from '@react-native-async-storage/async-storage';


   
  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }


  async function getUserTraining(login, tk, OFFLINE) {
    if(OFFLINE === false) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` }
      };
      const bodyParameters = {
          usuario: login
      };
      const ret = await api.post('treino', bodyParameters, config);
      await AsyncStorage.setItem("treino", JSON.stringify(ret));
      return ret;
      }else if(OFFLINE === true){
        return JSON.parse(await AsyncStorage.getItem("treino"))
      }
  }

  function setUsuarioTreinoRequest(login, treino, descricao, tk, idTreino) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        treino: treino,
        descricao: descricao,
        idTreino: idTreino
     };


    return api.post('treino', bodyParameters, config)
  }

  function setUsuarioTreinoRequestEmpty(login, treino, descricao, tk, ) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        treino: treino,
        descricao: descricao
     };


    return api.post('treino', bodyParameters, config)
  }

  function deleteUsuarioTreinoRequest(tk, idTreino) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        deleteIdTreino: idTreino
     };


    return api.post('treino', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getUserTraining, setUsuarioTreinoRequest, deleteUsuarioTreinoRequest, setUsuarioTreinoRequestEmpty}