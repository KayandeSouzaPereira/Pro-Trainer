import { api } from "../Util"


   
  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }


  function getUserExerciseByTraining(tk, id) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };
    return api.get('exercise?idTraining=' + id, config)
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
 
  



export { getUserExerciseByTraining, setUsuarioExerciseRequest, getUsuarioRequest}