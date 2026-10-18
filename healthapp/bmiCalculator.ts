type range = "Underweight" | "Normal range" | "Overweight" | "Obese";

interface CalculatorValues {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): CalculatorValues => {
  if (args.length < 4) throw new Error("Too few arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values are not numbers!");
  }
};

export const calculateBmi = (height: number, weight: number): range => {
  const bmi: number = weight / (((height / 100) * height) / 100);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal range";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

if (process.argv[1] === import.meta.filename) {
  try {
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(" Error: " + error.message);
    }
  }
}
