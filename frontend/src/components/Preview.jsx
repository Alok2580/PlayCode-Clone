import React from "react";

const Preview = ({ code }) => {
  const srcDoc = `
    <html>
      <body>
        <div id="root"></div>
        <script type="module">
          import React from "https://esm.sh/react";
          import ReactDOM from "https://esm.sh/react-dom";
          const App = () => { ${code} };
          ReactDOM.render(React.createElement(App), document.getElementById("root"));
        </script>
      </body>
    </html>
  `;

  return (
    <iframe
      sandbox="allow-scripts"
      srcDoc={srcDoc}
      title="Preview"
      style={{ flex: 1, border: "none" }}
    />
  );
};

export default Preview;
