import React from "react";
import Library from "./components/library";
import LibraryState from "./context/libraryState";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid pt-4 pl-4">
        <h2>
          React Context API Demo{" "}
          <span role="img" aria-labelledby="emoji">
            🔥
          </span>
        </h2>
        <LibraryState>
          <Library />
        </LibraryState>
      </div>
    </React.Fragment>
  );
}

export default App;
