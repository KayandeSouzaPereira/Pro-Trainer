import AsyncStorage from "@react-native-async-storage/async-storage";
import RNSimpleCrypto from "react-native-simple-crypto";
import { api} from "../Util"

function loginRequest(login, senha) {
    return api.post('auth', {
        usuario: login,
        password: senha
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
        console.log("tk:" + _token);
        let tkk = _token;
        //await AsyncStorage.setItem('RK', JSON.stringify(rsaKeys));
        //const rsaTkEncript = await RNSimpleCrypto.RSA.encrypt(tkk,rsaKeys.public);
       
        await AsyncStorage.setItem('Token', tkk);
    }
} 
  



export { cadRequest, loginRequest, setToken }