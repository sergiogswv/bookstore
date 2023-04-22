import Formulario from "../components/Formulario";

const NewBook = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-10 box">
        <div className="column">
          <div className="is-flex">
            <h1
              className="title is-1"
              style={{
                textTransform: "capitalize",
                margin: "10px auto 20px auto",
              }}
            >
              Add a new book
            </h1>
          </div>
          <div className="columns is-centered">
            <div className="column">
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
