import { Link } from "react-router-dom";
import { useBookStore } from "../store";
import styled from 'styled-components'
import BookDetail from "../components/BookDetail";

const LinkButton = styled(Link)({
  margin: "0  auto",
  width: "45%",
  textTransform: "uppercase",
  background: '#34ddce',
  borderRadius: '5px',
  color: '#fff'
})

const Home = () => {
  const totalBooks = useBookStore((state) => state.totalBooks);

  return (
    <>
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
          <div className="columns is-centered" style={{ margin: "30px auto" }}>
            <LinkButton to="/addbook">
              Add a new book
            </LinkButton>

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
    </>
  );
};

export default Home;
