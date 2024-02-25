import AsyncStorage from "@react-native-async-storage/async-storage";
import { api} from "../Util"

function loginRequest(login, senha) {
    return api.post('auth', {
        usuario: login,
        password: senha
      })
  }

  function autologinRequest(login, token) {
    return api.post('auth', {
        usuario: login,
        token: token
      })
  }
  function cadRequest(login, senha) {

    return api.post('cad', {
        usuario: login,
        password: senha
      })
  }
async function setToken(_token){
    //const rsaKeys = await RNSimpleCrypto.RSA.generateKeys(4096);
    if(_token){
        let tkk = _token;
        return await AsyncStorage.setItem('Token', tkk);

        //await AsyncStorage.setItem('RK', JSON.stringify(rsaKeys));
        //const rsaTkEncript = await RNSimpleCrypto.RSA.encrypt(tkk,rsaKeys.public);
       
        
    }
} 
  



export { cadRequest, loginRequest, setToken, autologinRequest }