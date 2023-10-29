import { API_URL } from "../Util"

async function loginChamada(usuario, senha){
    let credenciais = {
        "usuario" : usuario,
        "password" : senha
    }

    return fetch(`${API_URL}auth`,{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(credenciais)
    }).then(res => {
        res.json()
    }).then(resJson => {
        
        return resJson;
    }).catch(e => {
        console.log(e);
        return "Error";
    })
}

export { loginChamada }