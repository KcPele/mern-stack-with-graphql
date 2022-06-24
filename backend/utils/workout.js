const Workout = require("../models/workoutModel");
const mongoose = require("mongoose")

//get workouts

const getWorkoutsFunction = async () => {
  return await Workout.find({}).sort({ createdAt: -1 });
};

//get workout
const getWorkoutFunction = async (id) => {
  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return { error: "No such workout" };
    } else {
        return { workout: workout };
    }
  } catch(error) {
    return { error: "No such workout id wrong" };
  }
};

//create a workout
const createWorkoutFunction = async (title, reps, load) => {
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    return { workout: workout };
  } catch (error) {
    return { error: error.message };
  }
};

//delete a workout
const deleteWorkoutFunction = async (id) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout) {
      return { error: "No such workout" };
    } else {
        return { workout: workout };
    }
    
  } else {
    return { error: "No such workout" };
  }
};
//update
const updateWorkoutFunction = async (id, body) => {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const workout = await Workout.findOneAndUpdate({ _id: id }, {...body}, {new: true});
      if (!workout) {
        return { error: "No such workout" };
      } else {
        return { workout: workout };
      }
       
    } else {
        return { error: "No such workout" };
    }
  };
module.exports = {
  getWorkoutsFunction,
  getWorkoutFunction,
  createWorkoutFunction,
  deleteWorkoutFunction,
  updateWorkoutFunction
};
