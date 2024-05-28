import axios from "axios";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import App from "../App";

const API_URL = 'http://localhost:3002'

const initialState = {
  tasks: [],
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getFunkos = async () => {
    const res = await axios.get(API_URL + '/funkos')
    const action = {
      type: "GET_FUNKOS",
      payload: res.data
    }
    dispatch(action)
  }

  return (
    <GlobalContext.Provider
    value={{
      funkos: state.funkos,
      getFunkos
    }}>
      {children}
    </GlobalContext.Provider>
  )
}