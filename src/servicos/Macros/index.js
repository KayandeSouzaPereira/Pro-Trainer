import { api } from '../Util'
import { GLOBALS } from '../../configs';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
}

async function getMacros(login, tk) {

  if(GLOBALS.OFFLINE === 0) {
    const config = {
      headers: { Authorization: `Bearer ${tk}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
  };
  const ret = await api.get('macros?idUser='+login, config);
  await AsyncStorage.setItem("macros", JSON.stringify(ret));
  return ret;
  }else if(GLOBALS.OFFLINE === 1){
    return JSON.parse(await AsyncStorage.getItem("macros"))
  }
    
  }

  async function getPresenca(login, tk) {

    if(GLOBALS.OFFLINE === 0) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` ,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      };
      const ret = await api.get('dashboard?tipo=presenca&usuario='+login, config);
      await AsyncStorage.setItem("presenca", JSON.stringify(ret));
      return ret;
    }else if(GLOBALS.OFFLINE === 1){
      return JSON.parse(await AsyncStorage.getItem("presenca"))
    }
  }

  async function getForca(login, tk) {
    if(GLOBALS.OFFLINE === 0) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` ,
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      };
      const ret = await api.get('dashboard?tipo=forca&usuario='+login, config);
      await AsyncStorage.setItem("forca", JSON.stringify(ret));
      return ret;
    }else if(GLOBALS.OFFLINE === 1){
      return JSON.parse(await AsyncStorage.getItem("forca"))
    }
  }

  function setMacros(login, proteinas, gorduras, tk, carboidratos) {

    if(GLOBALS.OFFLINE === 0) {
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
    }else if(GLOBALS.OFFLINE === 1){ return "OFFLINE"}
  }
 
  



export { getUsuarioRequest, getMacros, setMacros, getForca, getPresenca}