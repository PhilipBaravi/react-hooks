import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

type MainProps = {
  hookName: string;
};

type Section = {
  name: string;
  path: string;
};

const sections: Section[] = [
  { name: "Description", path: "description" },
  { name: "Example", path: "example" },
  { name: "Exercise", path: "exercise" },
  { name: "Interview Questions", path: "interview-questions" },
];

const Main: FC<MainProps> = ({ hookName }) => {
  return (
    <div className="px-6 md:pt-8 w-full md:w-[90%]">
      <div>
        <h1 className="text-2xl font-bold">{hookName}</h1>
      </div>
      <div className="mt-4 flex flex-wrap">
        {sections.map((section) => (
          <Link to={section.path} key={section.path}>
            <button className="font-semibold text-lg mr-4 mb-2 p-2 bg-white rounded-lg hover:bg-gray-200">
              {section.name}
            </button>
          </Link>
        ))}
      </div>
      <hr className="w-full h-px bg-black mt-2 mb-4" />

      <Outlet context={{ hookName }} />
    </div>
  );
};

export default Main;
