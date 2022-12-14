import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Movie Detail Component
const MovieView = () => {
    const { id } = useParams()
    const [ movieDetails, setMovieDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    // Loading State with 2 sec loading wait
    useEffect(() => {
        console.log("make an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18e659b9c7680f677bc6ab62bf5a8838&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setTimeout (() =>{
                    setMovieDetails(data)
                    setIsLoading(false) 
                }) 
            })
    }, [id])

    // Add Loading State
    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            //TODO: deal with a possible missing image
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` // movie component API
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` //adding backdrop in hero section
            return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded" 
                            />
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
                    
            </>
            )
        }
    }


  return renderMovieDetails()
};

export default MovieView;
