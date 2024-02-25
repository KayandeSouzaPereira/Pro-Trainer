import { api } from "../Util"
import { GLOBALS } from '../../configs';
import AsyncStorage from '@react-native-async-storage/async-storage';


   
  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }


  async function getUserExerciseByTraining(tk, id) {
    if(GLOBALS.OFFLINE === 0) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` }
      };
      const ret = await api.get('exercise?idTraining=' + id, config);
      await AsyncStorage.setItem("exerciseTraining" + id, JSON.stringify(ret));
      return ret;
      }else if(GLOBALS.OFFLINE === 1){
        return JSON.parse(await AsyncStorage.getItem("exerciseTraining" + id))
      }
  }

  function setUsuarioExerciseRequest(login, treino, descricao, link, tk, idTreino, idExercicio) {

    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        exercicio: treino,
        descricao: descricao,
        link: link,
        treino: idTreino,
        id_exercicio: idExercicio
     };

    return api.post('exercise', bodyParameters, config)
  }

  function setUsuarioExerciseRequestEmpt(login, treino, exercicio, descricao, link, tk) {

    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        exercicio: exercicio,
        descricao: descricao,
        treino: treino,
        link: link
     };


    return api.post('exercise', bodyParameters, config)
  }
 
  function deleteUsuarioExerciseRequest(tk, idExercicio) {

    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
      deleteIdExercicise: idExercicio
     };


    return api.post('exercise', bodyParameters, config)
  }



export { getUserExerciseByTraining, setUsuarioExerciseRequest, getUsuarioRequest, deleteUsuarioExerciseRequest, setUsuarioExerciseRequestEmpt}