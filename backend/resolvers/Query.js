const mongoose = require("mongoose")
const { getWorkoutsFunction, getWorkoutFunction } = require("../utils/workout");

exports.Query = {
    workouts: async (parent, args, context) => await getWorkoutsFunction(),
    workout: async (parent, {id}, context) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("No such workout");
        }
        const data = await getWorkoutFunction(id)
        if (!data["workout"]) {
            throw new Error(`${data["error"]}`);
          }
          return data["workout"];
          
    },
}