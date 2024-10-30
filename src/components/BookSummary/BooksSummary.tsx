import { SummaryStats } from "../../apis/HttpDataApis";

export default function BooksSummary(props: SummaryStats) {

  const bookByRating = props.booksByRating.map((aRating, index) =>
    <li key={index}><span className="text-capitalize">{aRating.rating.toLowerCase()}</span> - {aRating.countOfBooks} {aRating.countOfBooks === 1 ? 'book' : 'books'}</li>);
  const booksByGenreLimited = props.bookByGenre.length > 0 ? props.bookByGenre.slice(0, 10) : props.bookByGenre;
  const bookByGenre = booksByGenreLimited.map((aGenre, index) => <li key={index}>{aGenre.genre} - {aGenre.countOfBooks} {aGenre.countOfBooks === 1 ? 'book' : 'books'}</li>);

  return (
    <>
      <p className="lead mt-3 mb-4 ms-2">
        There are currently {props.count} book reviews on {import.meta.env.VITE_APPLICATION_NAME}.
      </p>

      <div className="container">
        <div className="row">

          <div className="col-sm mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Books By Rating</h5>
                <h6 className="card-subtitle mb-2 text-muted fst-italic">A count of book reviews by review rating</h6>
                <ul className="card-text list-unstyled">{bookByRating}</ul>
              </div>
            </div>
          </div>

          <div className="col-sm mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Books By Genre</h5>
                <h6 className="card-subtitle mb-2 text-muted fst-italic">A count of book reviews by most popular book genres</h6>
                <ul className="card-text list-unstyled">{bookByGenre}</ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
