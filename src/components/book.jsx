import React, { useContext } from "react";
import LibraryContext from "../context/libraryContext";

const Book = () => {
  // useContext() hook
  const context = useContext(LibraryContext);
  return (
    <React.Fragment>
      <p>
       Salut, je suis un livre dans la bibliothèque. Mes informations proviennent de context!{" "}
        <span role="img" aria-labelledby="emoji">
          🧱
        </span>
      </p>
      {/* Book Information */}
      <p>Book Name: {context.state.name} </p>
      <p>Quantity: {context.state.quantity}</p>
      <p>Book Shelf: {context.state.shelf}</p>
      <div>
        <button className="btn btn-primary" onClick={context.incrementQuantity}>
          Increment{" "}
          <span role="img" aria-labelledby="emoji">
            🙌
          </span>
        </button>
        <button className="ml-2 btn btn-dark" onClick={context.resetQuantity}>
          Reset{" "}
          <span role="img" aria-labelledby="emoji">
            🙈
          </span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Book;
