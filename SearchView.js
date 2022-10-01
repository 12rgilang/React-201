import Hero from "./Hero";
import { Link } from "react-router-dom"


//Bootstrap 5 search result and card
const MovieCard = ({ movie }) =>{
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-5">
      <div className="card">
        <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} class="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )     
}

// React Browser History
const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} /> 
    // <div key={i} >{obj.original_title}</div>
  })

  return (
    <>
      <Hero text={title} />
      {resultHtml &&
      <div className="container">
        <div className="row">
        {resultHtml}
        </div>
      </div>
    }
    </>
  );
};

export default SearchView;
