import { useBookStore } from "../store";
import BookDetail from '../components/BookDetail';

const Home = () => {
  const totalBooks = useBookStore((state) => state.totalBooks);

  return (
    <div>
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="">
            <div className="is-flex">
              <p
                className="title is-1"
                style={{
                  textTransform: "capitalize",
                  margin: "10px auto 20px auto",
                }}
              >
                total books on storage: {totalBooks}
              </p>
            </div>
          </div>
          <div className="box block">
            <BookDetail />
          </div>
          <div className="columns is-centered">
            <button
              className="button is-primary"
              style={{
                margin: "0  auto",
                width: "45%",
                textTransform: "uppercase",
              }}
            >
              Add a new book
            </button>

            <button
              className="button is-info"
              style={{
                margin: "0  auto",
                width: "45%",
                textTransform: "uppercase",
              }}
            >
              See all books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
