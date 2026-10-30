import Part from "./Part";
import { type CoursePart } from "../types";

const Content = ({ parts }: { parts: CoursePart[] }) =>
  parts.map((part) => <Part part={part} />);

export default Content;
