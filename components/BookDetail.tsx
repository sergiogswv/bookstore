import React from "react";
import { useBookStore } from "../store";

const BookDetail: React.FC = () => {
  const books = useBookStore((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <div className="card" key={book.id}>
          <div className="is-flex">
            <div className="card-image">
              <figure className="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <h1 className="title is-2">{book.name}</h1>
              <h2 className="subtitle is-3">{book.author}</h2>
              <p className="is-6">{book.editorial}</p>
              <p className="is-6" style={{ marginBottom: "10px" }}>
                {book.year}
              </p>
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                View Details <a href="#">Here</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                Share on <a href="#">Facebook</a>
              </span>
            </p>
          </footer>
        </div>
      ))}
    </>
  );
};

export default BookDetail;
