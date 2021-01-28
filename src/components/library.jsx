import React from "react";
import BookShelf from "./bookShelf";

const Library = () => {
  return (
    <div className="pt-3">
      <p>
        I am inside the library component.{" "}
        <span role="img" aria-labelledby="emoji">
          ⚡
        </span>{" "}
      </p>
      <BookShelf />
    </div>
  );
};

export default Library;
