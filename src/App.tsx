import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Description from "./components/main/Description";
import Exercise from "./components/main/Exercise";
import Example from "./components/main/Example";
import InterviewQuestions from "./components/main/InterviewQuestions";
import { hookDescriptionData } from "./components/data/hookDescriptionData";
import { exerciseData } from "./components/data/exerciseData";

type HookName = keyof typeof exerciseData;

type Hook = {
  name: HookName;
  path: string;
  description?: JSX.Element;
};

const hooks: Hook[] = [
  { name: "useState", path: "usestate", description: hookDescriptionData.useState },
  { name: "useEffect", path: "useeffect", description: hookDescriptionData.useEffect },
  { name: "useContext", path: "usecontext", description: hookDescriptionData.useContext },
  { name: "useReducer", path: "usereducer", description: hookDescriptionData.useReducer },
  { name: "useCallback", path: "usecallback", description: hookDescriptionData.useCallback },
  { name: "useMemo", path: "usememo", description: hookDescriptionData.useMemo },
  { name: "useRef", path: "useref", description: hookDescriptionData.useRef },
  { name: "useLayoutEffect", path: "uselayouteffect", description: hookDescriptionData.useLayoutEffect },
  { name: "useDebugValue", path: "usedebugvalue", description: hookDescriptionData.useDebugValue },
  { name: "useImperativeHandle", path: "useimperativehandle", description: hookDescriptionData.useImperativeHandle },
];

const App: FC = () => {
  return (
    <Router>
      <div className="w-full flex flex-col md:flex-row">
        <Navigation />
        <Routes>
          {hooks.map((hook) => (
            <Route key={hook.path} path={`/${hook.path}/*`} element={<Main hookName={hook.name} />}>
              <Route index element={<Navigate to="description" replace />} />
              <Route path="description" element={<Description hookDescription={hook.description} />} />
              <Route path="exercise" element={<Exercise />} />
              <Route path="example" element={<Example />} />
              <Route path="interview-questions" element={<InterviewQuestions hookName={hook.name} />} />
            </Route>
          ))}
          {/* Redirect to the first hook if path doesn't match */}
          <Route path="*" element={<Navigate to={`/${hooks[0].path}`} replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
