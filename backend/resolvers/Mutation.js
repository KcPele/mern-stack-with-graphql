const { createWorkoutFunction, deleteWorkoutFunction, updateWorkoutFunction } = require("../utils/workout");
exports.Mutation = {
  addWorkout: async (parent, { input }, context) => {
    const { title, reps, load } = input;
    const data = await createWorkoutFunction(title, reps, load);
    if (data["workout"]) {
      return data["workout"];
    } else {
      throw new Error(`${data["error"]}`);
    }
  },
  deleteWorkout: async (parent, { _id }, context) => {
    const data = await deleteWorkoutFunction(_id);
    if (data["workout"]) {
      return data["workout"];
    } else {
      throw new Error(`${data["error"]}`);
    }
  },
  updateWorkout: async (parent, { input }, context) => {
    const {_id, title, reps, load} = input
    const data = await updateWorkoutFunction(_id, {title, reps, load});
    if (data["workout"]) {
      return data["workout"];
    } else {
      throw new Error(`${data["error"]}`);
    }
  },
};
