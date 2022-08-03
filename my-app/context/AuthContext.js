import {createContext, useEffect, useReducer, useState } from 'react'
import {authReducer} from '../reducers/authReducers.js'
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })
  useEffect(() => {
   const user = JSON.parse(localStorage.getItem('user'))
   if(user){
    dispatch({type: 'LOGIN', payload: user })
   }
  }, [])

  console.log('authContext state: ', state)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
} 

export default AuthContextProvider