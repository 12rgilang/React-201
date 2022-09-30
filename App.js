import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";

// Search component props
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  // React API Request
  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
    })
  }, [searchText])




  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
