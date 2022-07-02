
import React, { useEffect, useContext } from 'react'
import { Form, WorkoutDetails } from '../components'

import useWorkoutsContext  from '../hooks/useWorkoutContext.js'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  
    useEffect(() => {

    const fetcheWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts")
        const json = await response.json()
        if(!response.ok) {
               throw Error(" un able to fetch workout")
        }  else {
         dispatch({type: "SET_WORKOUTS", payload: json})
        }
    
        
      } catch (error) {
        throw Error(error.message)
      }
    }
    fetcheWorkouts()
  }, [dispatch])
  return (
	<div className=" bg-gray-300 min-h-screen">
    <div className='max-w-5xl md:max-w-4xl py-5 my-0 mx-auto'>
      <div className='grid gap-5 grid-cols-12'>
        <div className='col-span-7'>
      {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} {...workout}/>
      ))}
      </div>
      <div className='col-span-4'>
      <Form />
      </div>
    </div>
  
    
    </div>
    
    </div>
  )
}

export default Home