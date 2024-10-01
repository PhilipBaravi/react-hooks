import { FC, memo } from "react";

type ExerciseDescriptionProps = {
  exerciseName: string;
  exerciseDescription: string;
  exerciseTasks: string[];
};

const ExerciseDescription: FC<ExerciseDescriptionProps> = ({
  exerciseName,
  exerciseDescription,
  exerciseTasks,
}) => {
  return (
    <div className="bg-gray-50 border rounded-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">{exerciseName}</h3>
      <p className="mb-2">{exerciseDescription}</p>
      <ul className="list-disc list-inside mb-4">
        {exerciseTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>Follow the comments in the code to complete the exercise.</p>
      <p><strong>Note:</strong> To use React hooks in this editor, please prefix them with React. (e.g., <strong>React.useState or React.useEffect</strong>) to ensure they work correctly in the live environment.</p>
      <i>Additionally, I recommend using Tailwind CSS for styling your components. You can easily apply classes like bg-blue-500, text-white, or p-4 to style components.</i>
    </div>
  );
};

export default memo(ExerciseDescription);
