import { api } from "../Util"


   
  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }


  function getUserTraining(login, tk) {
    console.log(tk)
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login
     };


    return api.post('treino', bodyParameters, config)
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

  function deleteUsuarioTreinoRequest(tk, idTreino) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        deleteIdTreino: idTreino
     };


    return api.post('treino', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getUserTraining, setUsuarioTreinoRequest, deleteUsuarioTreinoRequest}