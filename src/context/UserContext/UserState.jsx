const token = localStorage.getItem("token") || ""
import { createContext, useReducer } from "react"
import axios from "axios"
import UserReducer from "./UserContext/UserReducer"


const initialState = {
  token: token,
  user:null
}

const API_URL = 'http://localhost:3002/users'

export const UserContext = createContext(initialState)

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/login", user)
      dispatch({
        type: "LOGIN",
        payload: res.data
      })
      if (res.data) {
        localStorage.setItem("token", res.data.token)
      }
      
    } catch (error) {
      console.error(error)
      return error
    }
  }
}