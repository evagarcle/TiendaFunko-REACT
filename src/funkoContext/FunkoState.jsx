import axios from "axios";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const API_URL = 'http://localhost:3002'

const initialState = {
  funkos: [],
}


export const FunkoContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
export const FunkoProvider = ({children}) => {
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
    <FunkoContext.Provider
    value={{
      funkos: state.funkos,
      getFunkos
    }}>
      {children}
    </FunkoContext.Provider>
  )
}