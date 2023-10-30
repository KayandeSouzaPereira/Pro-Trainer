import { api } from "../Util"


  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }

  function getUsuarioInfoRequest(login, tk) {
    console.log(tk)
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login
     };


    return api.post('userInfo', bodyParameters, config)
  }

  function setUsuarioInfoRequest(login, altura, peso, idade, tk) {
    console.log("setInfo")
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
        usuario: login,
        altura: altura,
        peso: peso,
        idade: idade
     };


    return api.post('userInfo', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getUsuarioInfoRequest, setUsuarioInfoRequest}