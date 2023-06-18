import {
  getAllWorkouts as _getAllWorkouts,
  getOneWorkout as _getOneWorkout,
  createNewWorkout as _createNewWorkout,
  updateOneWorkout as _updateOneWorkout,
  deleteOneWorkout as _deleteOneWorkout,
} from "../database/Workout";
import { v4 as uuid } from "uuid";

const getAllWorkouts = () => {
  try {
    const allWorkouts = _getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = _getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = _createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = _updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    _deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
