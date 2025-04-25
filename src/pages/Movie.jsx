import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <>
        <NavBar />
        <p>Movie not found</p>
      </>
    );
  }

  const { title, time, genres } = movie;

  return (
    <>
      <NavBar />
      <h1>{title}</h1>            {/* <- tests expect <h1> Doctor Strange */}
      <p>{time}</p>               {/* <- tests search for /115/ etc. */}
      <div className="genres">
        {genres.map((g) => (
          <span key={g}>{g}</span> 
        ))}
      </div>
    </>
  );
}

export default Movie;
