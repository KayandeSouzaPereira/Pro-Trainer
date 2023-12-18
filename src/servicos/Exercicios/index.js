import { api } from "../Util"


   
  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }


  function getUserExerciseByTraining(tk, id) {
    console.log(tk)
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

   


    return api.get('exercise?idTraining=1', config)
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
 
  



export { getUserExerciseByTraining, setUsuarioTreinoRequest, getUsuarioRequest}