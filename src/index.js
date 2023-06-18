import express from "express";
import { json } from "body-parser";

const app = express();

const PORT = process.env.PORT || 3000;

import v1WorkoutRouter from "./v1/routes/workoutRoutes";

app.use(json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
