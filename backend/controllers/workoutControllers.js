

const { 
    getWorkoutsFunction,
    getWorkoutFunction, 
    createWorkoutFunction,
    deleteWorkoutFunction, 
    updateWorkoutFunction,} = require("../utils/workout")
//get all workout
const getWorkouts = async(req, res) => {
    const workouts = await getWorkoutsFunction()
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    
    const data = await getWorkoutFunction(id)
    if(data['workout']){
        res.status(200).json(data["workout"])
    } else {
        res.status(400).json({error: data["error"]})
    }
    
}
// create new workout  
const createWorkout = async(req, res) => {
    const { title, load, reps } = req.body
    // /add doc to db
    const data = await createWorkoutFunction(title, reps, load)
    if(data['workout']){
        res.status(200).json(data["workout"])
    } else {
        res.status(400).json({error: data["error"]})
    }
    
}

//delete a workout
const deleteWork = async(req, res) => {
    const {id} = req.params
    const data = await deleteWorkoutFunction(id)
    if(data['workout']){
        res.status(200).json(data["workout"])
    } else {
        res.status(400).json({error: data["error"]})
    }
    

}
// /update workout 
const updateWorkout = async (req, res) => {
    const {id} = req.params
    const body = req.body
    const data = await updateWorkoutFunction(id, body)
    if(data['error']){
        res.status(400).json({error: data["error"]})
    } else if (data['workout']){
        res.status(200).json(data["workout"])
    }
    

}

module.exports ={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWork,
    updateWorkout
}