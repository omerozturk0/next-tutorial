import { useContext } from "react";
import { MoviesContext } from "../contexts/movies-context";

const Page = () => {
  const { setPage } = useContext(MoviesContext);

  return (
    <div className="row-cols-1 mt-5">
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(prevState => prevState + 1)}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Page;
