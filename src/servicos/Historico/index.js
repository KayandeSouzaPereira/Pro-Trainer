import { api } from '../Util'

function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
}

function getHistorico(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };



    return api.get('exerciseHistory?usuario='+login, config)
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