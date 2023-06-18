import { Router } from "express";
const router = Router();
import {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} from "../../controllers/workoutController";


router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

export default router;
