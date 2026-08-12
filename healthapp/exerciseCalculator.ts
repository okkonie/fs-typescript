interface InputValues {
  target: number
  exercises: number[]
}

interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  avarage: number
}

const parseExerciseArguments = (args: string[]): InputValues => {
  if (args.length < 4) {
    throw new Error("Too few arguments")
  }

  if (args.slice(2).some((n) => isNaN(Number(n)))) {
    throw new Error("All arguments must be numbers")
  }

  const [target, ...exercises] = args.slice(2).map(Number)

  return { target, exercises }
}

const calculateExercises = (exercises: number[], target: number): Result => {
  const avarage = exercises.reduce((n, a) => n + a, 0) / exercises.length
  const success = avarage >= target ? true : false

  const rating = success ? 3 : avarage >= target - 0.3 ? 2 : 1

  const ratingDescription =
    rating == 3
      ? "You've completed your workouts successfully"
      : rating == 2
        ? "Not too bad but could be better"
        : "Failed to meet target"

  return {
    periodLength: exercises.length,
    trainingDays: exercises.filter((n) => n > 0).length,
    success,
    rating,
    ratingDescription,
    target,
    avarage,
  }
}

try {
  const { target, exercises } = parseExerciseArguments(process.argv)
  console.log(calculateExercises(exercises, target))
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message)
  }
}
