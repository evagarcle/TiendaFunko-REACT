import axios from "axios"
import { createContext, useReducer } from "react"
import UserReducer from "./UserReducer"

const token = localStorage.getItem("token") || ""

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
  
    }
  }

  const getLoggedUserInfo = async () => {
    const token = localStorage.getItem("token")

    try {
      const res = await axios.get(API_URL + "/userInfo", {
        headers: {
          Authorization: token
        }
      })
      dispatch({
        type:"GET_USER_INFO",
        payload:res.data
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user:state.user,
        login,
        getLoggedUserInfo
      }}
      >
        {children}
      </UserContext.Provider>
  )
}