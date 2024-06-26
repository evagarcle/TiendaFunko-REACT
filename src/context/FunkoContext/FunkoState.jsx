import axios from "axios";
import { createContext, useReducer } from "react";
import FunkoReducer from "./FunkoReducer"

const API_URL = 'http://localhost:3002/funkos'

const cart = JSON.parse(localStorage.getItem("cart")) || [] 

const initialState = {
  funkos: [],
  cart: cart
}


export const FunkoContext = createContext(initialState)


export const FunkoProvider = ({children}) => {
  const [state, dispatch] = useReducer(FunkoReducer, initialState)

  const getFunkos = async () => {
    const res = await axios.get(API_URL + '/')
    const action = {
      type: "GET_FUNKOS",
      payload: res.data
    }
    dispatch(action)
    return res
  }

  const addCart = (funko) => {
    dispatch({
      type: "ADD_CART",
      payload: funko
    })
  }

  const clearCart = () => {
    dispatch({
      type:"CLEAR_CART"

    })
  }

  const deleteFunko = (id) => {
    dispatch({ type: "DELETE_FUNKO", payload: id });
  }

  return (
    <FunkoContext.Provider
    value={{
      funkos: state.funkos,
      cart: state.cart,
      getFunkos,
      addCart,
      clearCart,
      deleteFunko
    }}>
      {children}
    </FunkoContext.Provider>
  )
}