import Hero from "./Hero";

// TMDB API KEY = 18e659b9c7680f677bc6ab62bf5a8838
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US&query=Harry%20Potter&page=1&include_adult=false




// Binding Keyup events
const SearchView = ({ keyword, SearchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(SearchResults, "are the search results");
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
