import Hero from "./Hero";

// TMDB API KEY = 18e659b9c7680f677bc6ab62bf5a8838
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US&query=Harry%20Potter&page=1&include_adult=false

//Bootstrap 5 search result and card
const MovieCard = ({ movie }) =>{
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-5">
      <div className="card">
        <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <a href="#" class="btn btn-primary">Show details</a>
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
