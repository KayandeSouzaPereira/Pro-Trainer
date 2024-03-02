import React, { createContext, useContext, useReducer } from 'react';

const cContext = createContext();

const initialState = {
  DARKMODE: false,
  OFFLINE: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
    return {
        ...state,
        DARKMODE: !state.DARKMODE
    }
    case 'TOGGLE_OFFLINE':
      return {
          ...state,
          OFFLINE: !state.OFFLINE
      }
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <cContext.Provider value={{ state, dispatch }}>
      {children}
    </cContext.Provider>
  );
};

export const useContextC = () => useContext(cContext);


export const theme = {
    colorsPrimary: {
      background: '#F5FFFA',
      primary: '#0077B6',
      overlay: 'rgba(0,0,0,0.7)',
      border: '#DDD6E1',
      highlight: '#5A3920',
      heading: '#80512e',
      line: '#991F36',
      cardColor:'#CAF0F8',
      fontColor: '#222222'
    },

    colorsPrimaryDark: {
      background: '#081B33',
      primary: '#50A0FF',
      overlay: 'rgba(0,0,0,0.7)',
      border: '#0f1a2e',
      highlight: '#5A3920',
      heading: '#80512e',
      line: '#991F36',
      cardColor:'#152642',
      fontColor: '#CAF0F8'
    },

  
    fonts: {
      text: 'Poppins_400Regular',
      textDestaque : "Poppins_500Medium", 
      titulo : 'Bitter_600SemiBold', 
      tituloDestaque : "Bitter_700Bold"
    }
  };

  

export const GLOBALS = {
  IDUSER: 0,
  IMG: "",
  NOME: "",
  OFFLINE: 0,
  DARKMODE: 0
}

export const SYSTEM_MESSAGES = {
  AVISO: "Aviso :",
  AVISOADDTREINO : "Já existe um formulario de treino disponivel para cadastro na lista",
  AVISOADDEXERCICIO : "Já existe um formulario de Exercicio disponivel para cadastro na lista",
  TITULOTREINOPLACEHOLDER: "'Titulo do treino'",
  DESCRICAOTREINOPLACEHOLDER: "'Descrição do treino'",
  TITULOEXERCICIOPLACEHOLDER: "'Titulo do exercicio'",
  DESCRICAOEXERCICIOPLACEHOLDER: "'Descrição do exercicio'",
  EXERCICIODESCRICAOSAIBAMAIS: "Toque para saber mais...",
}

