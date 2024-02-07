import { api } from '../Util'

function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
}

function getMacros(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}`,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
    };



    return api.get('macros?idUser='+login, config)
  }

  function getPresenca(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` ,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    };



    return api.get('dashboard?tipo=presenca&usuario='+login, config)
  }

  function getForca(login, tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` ,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    };



    return api.get('dashboard?tipo=forca&usuario='+login, config)
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

    return api.post('macros', bodyParameters, config)
  }
 
  



export { getUsuarioRequest, getMacros, setMacros, getForca, getPresenca}