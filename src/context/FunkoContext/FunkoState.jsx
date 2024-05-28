import axios from "axios";
import { createContext, useReducer } from "react";
import FunkoReducer from './FunkoContext/FunkoReducer'

const API_URL = 'http://localhost:3002/funkos'

const initialState = {
  funkos: [],
}


export const FunkoContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
export const FunkoProvider = ({children}) => {
  const [state, dispatch] = useReducer(FunkoReducer, initialState)

  const getFunkos = async () => {
    const res = await axios.get(API_URL + '/')
    const action = {
      type: "GET_FUNKOS",
      payload: res.data
    }
    dispatch(action)
  }

  const deleteFunko = async(id)=>{
    await axios.delete(API_URL + '/id/' + id)
    getFunkos()
  }

  return (
    <FunkoContext.Provider
    value={{
      funkos: state.funkos,
      getFunkos,
      deleteFunko
    }}>
      {children}
    </FunkoContext.Provider>
  )
}