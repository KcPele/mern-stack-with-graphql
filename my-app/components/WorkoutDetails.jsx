import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutContext'
import { MdDeleteForever } from "react-icons/md"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
const WorkoutDetails = ({_id, title, load, reps, createdAt}) => {
  const {dispatch} = useWorkoutsContext()
  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${_id}`, {
      method: "DELETE"
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type: "DELETE_WORKOUT", payload: json})
    }

  }
  return (
    <div className='relative bg-gray-50 mb-7 rounded shadow-lg p-3'>
        <h4 className='text-emerald-500 capitalize'>{title}</h4>
        <p className='text-sm'><strong>Load (kg)</strong> {load}</p>
        <p className='text-sm'><strong>Reps </strong>{reps}</p>
        <p className='text-sm'>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</p>
        <span className='absolute top-3 right-3 hover:cursor-pointer bg-gray-300 rounded p-1 ' onClick={handleClick}>< MdDeleteForever size={24} /></span>
    </div>
  )
}

export default WorkoutDetails