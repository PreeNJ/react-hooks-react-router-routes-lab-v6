import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import movies from "../data/movies";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </div>
    </>
  );
}
