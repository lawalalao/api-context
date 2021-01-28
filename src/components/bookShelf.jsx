import React from "react";
import Book from "./book";

const BookShelf = () => {
  return (
    <React.Fragment>
      <p>
       Je suis dans le composant bibliothèque{" "}
        <span role="img" aria-labelledby="emoji">
          🚀
        </span>
      </p>
      <Book />
    </React.Fragment>
  );
};

export default BookShelf;
