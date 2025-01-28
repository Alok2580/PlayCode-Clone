import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

const Editor = ({ code, setCode }) => {
  return (
    <div style={{ flex: 1 }}>
      <MonacoEditor
        width="100%"
        height="100%"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{ fontSize: 16 }}
      />
    </div>
  );
};

export default Editor;

