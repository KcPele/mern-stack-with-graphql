import React, {createContext, useReducer} from 'react'
import { workoutsReducer }  from '../reducers/workoutsReducer.js'

export const WorkoutsContext = createContext()

const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, { workouts: null})

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
     {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutContextProvider