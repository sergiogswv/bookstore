import React from "react";
import { useBookStore } from "../store";

const Formulario: React.FC = () => {
  const addBook = useBookStore((state) => state.addBook);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(1);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="block">
        <label htmlFor="nameBook">Name:</label>
        <input
          type="text"
          name="nameBook"
          id="nameBook"
          placeholder="Name's book"
          className="input"
        />
      </div>
      <div className="block">
        <label htmlFor="authorBook">Author:</label>
        <input
          type="text"
          name="authorBook"
          id="authorBook"
          placeholder="Author's book"
          className="input"
        />
      </div>
      <div className="block">
        <label htmlFor="editorialBook">Editorial:</label>
        <input
          type="text"
          name="editorialBook"
          id="editorialBook"
          placeholder="Editorial"
          className="input"
        />
      </div>
      <div className="block">
        <label htmlFor="yearBook">Year:</label>
        <input
          type="number"
          min={0}
          max={3000}
          name="yearBook"
          id="yearBook"
          placeholder="2023"
          className="input"
        />
      </div>
      <button
        type="submit"
        className="button is-primary"
        style={{ width: "100%" }}
      >
        Add new book
      </button>
    </form>
  );
};

export default Formulario;
