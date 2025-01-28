import React, { useState } from "react";

const PackageManager = ({ addPackage }) => {
  const [packageName, setPackageName] = useState("");

  const handleAddPackage = () => {
    if (packageName) {
      addPackage(packageName);
      setPackageName("");
    }
  };

  return (
    <div style={{ padding: "10px", background: "#202020", color: "white" }}>
      <input
        type="text"
        placeholder="Enter NPM package name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "70%" }}
      />
      <button onClick={handleAddPackage} style={{ padding: "8px 12px" }}>
        Add Package
      </button>
    </div>
  );
};

export default PackageManager;
