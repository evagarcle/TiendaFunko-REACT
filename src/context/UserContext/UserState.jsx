import axios from "axios"
import { createContext, useReducer } from "react"
import UserReducer from "./UserReducer"

const token = localStorage.getItem("token") || ""

const initialState = {
  token: token,
  user: null
}

const API_URL = 'http://localhost:3002/users'

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const createUser = async (userData) => {
    try {
      const response = await axios.post(API_URL, userData)
      dispatch({
        type: "CREATE_USER",
        payload: {
          token: response.data.token,
          user: response.data.user, 
        }
      })
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error)
    }
  }

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/login", user)
      dispatch({
        type: "LOGIN",
        payload: {
          token: res.data.token,
          user: res.data.user, 
        }
      })
      if (res.data.token) {
        localStorage.setItem("token", res.data.token)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getLoggedUserInfo = async () => {
    const token = localStorage.getItem("token")

    try {
      const res = await axios.get(API_URL + "/usersOrdersFunkos", {
        headers: {
          Authorization: token
        }
      })
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data
      })
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await axios.delete(API_URL + "/logout", {
        headers: {
          Authorization: token
        }
      })
      if (res.data) {
        localStorage.removeItem("token")
        dispatch({
          type: "LOGOUT"
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        createUser, 
        login,
        getLoggedUserInfo,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
