import { useContext } from "react";

import { WorkoutsContext } from "../context/WorkoutContext.js";

const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    if(!context){
        throw Error('useWorkouts must be used inside a workouts provider')
    }
    return context
}

export default useWorkoutsContext