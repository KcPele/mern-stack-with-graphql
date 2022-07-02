import { useState, useRef, useContext } from "react";
// import useWorkoutsContext from '../hooks/useWorkoutContext'
import { WorkoutsContext } from "../context/WorkoutContext";
const Form = () => {
  const { dispatch } = useContext(WorkoutsContext);
  const form = useRef();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log(json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <h3>Add a new Workout</h3>
      <label className="block">Title: </label>
      <input
        className={
          emptyFields.includes("title")
            ? "rounded p-1 focus:outline-none border-2 border-rose-600"
            : "rounded p-1 focus:outline-none"
        }
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="block">Reps: </label>
      <input
        className={
          emptyFields.includes("reps")
            ? "rounded p-1 focus:outline-none border-2 border-rose-600"
            : "rounded p-1 focus:outline-none"
        }
        type="number"
        name="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <label className="block">Load: </label>
      <input
        className={
          emptyFields.includes("load")
            ? "rounded p-1 focus:outline-none border-2 border-rose-600"
            : "rounded p-1 focus:outline-none"
        }
        type="number"
        name="load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <div className="text-center">
        <input
          className="rounded mt-1 text-red-50 bg-green-600 p-1  hover:cursor-pointer"
          type="submit"
          value="Add Workout"
        />
      </div>

      {error && <div className="text-center color-red">{error}</div>}
    </form>
  );
};

export default Form;
