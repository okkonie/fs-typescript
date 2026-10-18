import express from "express";
import { calculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight || weight <= 0 || height <= 0) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }

  res.json({
    height,
    weight,
    bmi: calculateBmi(height, weight),
  });
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body as {
    daily_exercises?: number[];
    target?: number;
  };

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (
    !Array.isArray(daily_exercises) ||
    daily_exercises.some((daily_exercises) => isNaN(daily_exercises)) ||
    isNaN(target)
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  return res.json(calculateExercises(daily_exercises, target));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
