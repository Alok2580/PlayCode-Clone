import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import PackageManager from "./components/PackageManager";

const App = () => {
  const [code, setCode] = useState("// Start coding your React component here...");
  const [packages, setPackages] = useState([]);

  const addPackage = (pkg) => {
    setPackages([...packages, pkg]);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <PackageManager addPackage={addPackage} />
      <div style={{ display: "flex", flex: 1 }}>
        <Editor code={code} setCode={setCode} />
        <Preview code={code} />
      </div>
    </div>
  );
};

export default App;
