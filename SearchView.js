import Hero from "./Hero";

// TMDB API KEY = 18e659b9c7680f677bc6ab62bf5a8838
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US&query=Harry%20Potter&page=1&include_adult=false




// React Browser History
const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultHtml = searchResults.map((obj, i) => {
    return <div key={i} >{obj.original_title}</div>
  })

  return (
    <>
      <Hero text={title} />
      {resultHtml}
    </>
  );
};

export default SearchView;
