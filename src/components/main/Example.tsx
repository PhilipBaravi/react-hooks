import { FC, useState } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { useOutletContext } from "react-router-dom";
import MonacoEditor from "@monaco-editor/react";
import { codeExamples } from "../data/examplesData";

const Example: FC = () => {
  const { hookName } = useOutletContext<{ hookName: keyof typeof codeExamples }>();

  const codeExample = codeExamples[hookName];
  const [exampleCode, setExampleCode] = useState(codeExample); // Manage the example code state

  if (!codeExample) {
    return <div>No example available for {hookName}</div>;
  }

  // Callback for when Monaco is fully initialized
  const handleEditorDidMount = (editor: any, monaco: any) => {
    console.log('Monaco Editor is mounted:', editor, monaco);

    // Set options dynamically after the editor is ready
    editor.updateOptions({
      automaticLayout: true,
      lineNumbers: "on",
      suggestOnTriggerCharacters: true,
      tabSize: 2,
      minimap: { enabled: true }, // Optionally disable the minimap for simplicity
    });

    monaco.editor.setTheme("vs-dark");
  };

  return (
    <div>
      <div className="flex flex-col">
        <LiveProvider code={exampleCode} noInline>
        <div className="border border-lightGray rounded-md p-4 mb-4 w-full">
            <LivePreview />
          </div>
          <div className="border rounded-md mb-4 w-full">
            <MonacoEditor
              height="700px"
              defaultLanguage="javascript"
              value={exampleCode}
              onChange={(value) => setExampleCode(value || "")}
              options={{
                automaticLayout: true,
                lineNumbers: "on",
                suggestOnTriggerCharacters: true,
                tabSize: 2,
                minimap: { enabled: true },
              }}
              onMount={handleEditorDidMount} // Call the onMount handler when the editor is ready
            />
          </div>
          <LiveError className="text-red-500 mb-4" />
        </LiveProvider>
      </div>
    </div>
  );
};

export default Example;
