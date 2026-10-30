import { type CoursePart } from "../types";

const Part = ({ part }: { part: CoursePart }) => {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>
        {part.name} {part.exerciseCount}
      </p>
      <Details part={part} />
    </div>
  );
};

const Details = ({ part }: { part: CoursePart }) => {
  switch (part.kind) {
    case "basic":
      return <p>{part.description}</p>;
    case "group":
      return <p>group projects: {part.groupProjectCount}</p>;
    case "background":
      return (
        <>
          <p>{part.description}</p>
          <p style={{ fontStyle: "italic" }}>
            background material: {part.backgroundMaterial}
          </p>
        </>
      );
    case "special":
      return (
        <>
          <p>{part.description}</p>
          <p>requirements: {part.requirements.join(", ")}</p>
        </>
      );
    default:
      return null;
  }
};

export default Part;
