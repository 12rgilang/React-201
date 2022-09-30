import Hero from "./Hero";

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
