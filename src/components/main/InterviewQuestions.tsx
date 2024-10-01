import { FC, memo } from "react";
import { interviewQuestionsData } from "../data/interviewQuestionsData";

type InterviewQuestionsProps = {
  hookName: keyof typeof interviewQuestionsData; // ensures hookName is one of the keys in the data
};

const InterviewQuestions: FC<InterviewQuestionsProps> = ({ hookName }) => {
  const hookQuestions = interviewQuestionsData[hookName];

  if (!hookQuestions) {
    return <div>No interview questions available for {hookName}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{hookName} Interview Questions with Answers</h2>
      <ul className="space-y-4">
        {hookQuestions.questions.map((qa, index) => (
          <li key={index}>
            <p className="text-lg font-semibold text-gray-900">{qa.question}</p>
            <p className="text-gray-700">{qa.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(InterviewQuestions);
