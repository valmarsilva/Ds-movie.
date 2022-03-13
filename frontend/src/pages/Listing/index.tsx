import MovieCard from "components/MovieCard";

import Pagination from "components/pagination";

function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6col-lg-4colxl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6col-lg-4colxl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6col-lg-4colxl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6col-lg-4colxl-3  mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
