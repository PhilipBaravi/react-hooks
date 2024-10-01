import { FC, useState, useEffect } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import ExerciseDescription from "./ExerciseDescription";
import { exerciseData } from "../data/exerciseData";
import { useOutletContext } from "react-router-dom";
import MonacoEditor from "@monaco-editor/react";

type ExerciseProps = {};

const Exercise: FC<ExerciseProps> = () => {
  const { hookName } = useOutletContext<{ hookName: keyof typeof exerciseData }>();
  const exercises = exerciseData[hookName];
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);
  const exercise = exercises[selectedExerciseIndex];

  const localStorageKey = `exercise-code-${hookName}-${selectedExerciseIndex}`;
  const originalCode = exercise.exerciseCode; // Keep the original code for resetting
  const initialCode = localStorage.getItem(localStorageKey) || originalCode;
  const [exerciseCode, setExerciseCode] = useState(initialCode);

  // When the selected exercise changes, update the code
  const handleExerciseChange = (index: number) => {
    setSelectedExerciseIndex(index);
    const newCode = localStorage.getItem(`exercise-code-${hookName}-${index}`) || exercises[index].exerciseCode;
    setExerciseCode(newCode);
  };

  // Save the code to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, exerciseCode);
  }, [exerciseCode, localStorageKey]);

  // Reset the code to its original value
  const handleResetCode = () => {
    setExerciseCode(originalCode); // Reset code to original code
    localStorage.setItem(localStorageKey, originalCode); // Reset localStorage as well
  };

  // Callback for when Monaco is fully initialized
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editor.updateOptions({
      automaticLayout: true,
      lineNumbers: "on",
      suggestOnTriggerCharacters: true,
      tabSize: 2,
      minimap: { enabled: true },
    });
    monaco.editor.setTheme("vs-dark");
  };

  return (
    <div className="mt-4">
      {/* Exercise Heading */}
      <h2 className="text-xl font-semibold mb-4">{hookName} Exercise</h2>

      {/* Exercise Selector */}
      <div className="mb-4">
        {exercises.map((ex, index) => (
          <button
            key={index}
            className={`mr-2 mb-2 px-4 py-2 rounded ${index === selectedExerciseIndex ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handleExerciseChange(index)}
          >
            {ex.exerciseName}
          </button>
        ))}
      </div>

      {/* Exercise Description */}
      <ExerciseDescription
        exerciseName={exercise.exerciseName}
        exerciseDescription={exercise.exerciseDescription}
        exerciseTasks={exercise.exerciseTasks}
      />

      {/* Live Code Editor and Previews */}
      <div className="flex flex-col pb-[50px]">
        <div>
          <h3 className="text-lg font-semibold mb-2">Output:</h3>
          <LiveProvider code={exerciseCode} noInline>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <LivePreview />
            </div>
            <MonacoEditor
              height="700px"
              defaultLanguage="javascript"
              value={exerciseCode}
              onChange={(value) => setExerciseCode(value || "")}
              options={{
                automaticLayout: true,
                lineNumbers: "on",
                suggestOnTriggerCharacters: true,
                tabSize: 2,
                minimap: { enabled: true },
              }}
              onMount={handleEditorDidMount}
            />

            <LiveError className="text-red-500 mb-4" />

            {/* Reset Button */}
            <button
              onClick={handleResetCode}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Reset Code
            </button>
          </LiveProvider>
        </div>

        <div className="mt-[30px]">
          <h3 className="text-lg font-semibold mb-2">Working Example:</h3>
          <LiveProvider code={exercise.workingCode} noInline>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <LivePreview />
            </div>
          </LiveProvider>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
