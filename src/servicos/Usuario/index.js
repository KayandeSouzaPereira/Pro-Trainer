import { api } from "../Util"


  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }

  function getUsuarioInfoRequest(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };
    return api.get('userInfo?user=' + login, config)
  }

  function getUsuarioInfoIMGRequest(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    


    return api.get('userInfo?user=' + login, config)
  }


  function setUsuarioInfoRequest(login, altura, peso, idade, image, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    const bodyParameters = {
      usuario: login,
      altura: altura,
      peso: peso,
      idade: idade,
      img: image
   };


    return api.post('userInfo', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getUsuarioInfoRequest, setUsuarioInfoRequest, getUsuarioInfoIMGRequest}