import { api } from '../Util'

function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
}

function getMacros(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };



    return api.get('macros?idUser='+login, config)
  }

  function setMacros(login, proteinas, gorduras, tk, carboidratos) {
    
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        idUser: login,
        proteinas: proteinas,
        gorduras: gorduras,
        carboidratos: carboidratos
     };


     console.log("BODY : " + JSON.stringify(bodyParameters))


    return api.post('macros', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getMacros, setMacros}