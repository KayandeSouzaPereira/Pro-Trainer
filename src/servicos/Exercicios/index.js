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


    console.log(bodyParameters)

    return api.post('exercise', bodyParameters, config)
  }

  function setUsuarioExerciseRequestEmpt(login, treino, descricao, link, tk, idTreino) {

    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        exercicio: treino,
        descricao: descricao,
        link: link,
        treino: idTreino
     };


    console.log(bodyParameters)

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