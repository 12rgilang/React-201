import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Movie Detail Component
const MovieView = () => {
    const { id } = useParams()

    const [movieDetails, setMovieDetails ] = useState({})

    useEffect(() => {
        console.log("make an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
            })
    }, [id])

  return (
    <>
      <Hero text={movieDetails.original_title} />
      
    </>
  );
};

export default MovieView;
