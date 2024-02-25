import { api } from "../Util"
import { GLOBALS } from '../../configs';
import AsyncStorage from '@react-native-async-storage/async-storage';

  function getUsuarioRequest(tk) {
    const config = {
        headers: { Authorization: `Bearer ${tk}` }
    };

    return api.get('userTK', config)
  }

  async function getUsuarioInfoRequest(login, tk) {
    if(GLOBALS.OFFLINE === 0) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` }
      };
      const ret = await api.get('userInfo?user=' + login, config);
      await AsyncStorage.setItem("userInfo", JSON.stringify(ret));
      return ret;
      }else if(GLOBALS.OFFLINE === 1){
        return JSON.parse(await AsyncStorage.getItem("userInfo"))
      }
  }

  async function getUsuarioInfoIMGRequest(login, tk) {

    if(GLOBALS.OFFLINE === 0) {
      const config = {
          headers: { Authorization: `Bearer ${tk}` }
      };
      const ret = await api.get('userInfo?user=' + login, config);
      await AsyncStorage.setItem("userInfo", JSON.stringify(ret));
      return ret;
      }else if(GLOBALS.OFFLINE === 1){
        return JSON.parse(await AsyncStorage.getItem("userInfo"))
      }
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