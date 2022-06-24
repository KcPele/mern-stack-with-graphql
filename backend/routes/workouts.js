
const express = require("express")
const { 
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWork,
    updateWorkout 
} = require("../controllers/workoutControllers")
const router = express.Router()

//GET al worrkout
router.get("/", getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post("/", createWorkout)

//DELETE a workout
router.delete("/:id", deleteWork)

//UPDATE a workout
router.patch("/:id", updateWorkout)
module.exports = router