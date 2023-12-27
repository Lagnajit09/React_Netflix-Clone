import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [showButtons, setShowButtons] = useState(false);

  // we need a snippet of code which runs on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    // if [xyz], run everytime the variable xyz changes... it's dependant on the variable xyz.
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.name || movie?.original_name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=TURbeWK2wwg&xyz=5
          // we need only "TURbeWK2wwg"
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // const handleMouseOver = () => {
  //   setShowButtons(true);
  // };

  // const handleMouseOut = () => {
  //   setShowButtons(false);
  // };

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row_posters">
        {/* several row-posters */}
        {movies.map((movie) => {
          return (
            /* <div
              className="poster"
              onMouseOver={() => handleMouseOver()}
              onMouseOut={() => handleMouseOut()}
            > */
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            /*{showButtons && (
                <div className="row_buttons">
                  <button className="play_button"></button>
                  <button className="info_button">i</button>
                </div>
              )}
            </div>*/
          );
        })}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
