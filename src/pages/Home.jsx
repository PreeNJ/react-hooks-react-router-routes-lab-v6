import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

// Sample movie data - in a real app, you might fetch this from an API
const movies = [
  { id: 1, title: "Doctor Strange", time: "115 min", genres: ["Fantasy", "Action", "Superhero"] },
  { id: 2, title: "The Shawshank Redemption", time: "142 min", genres: ["Drama"] },
  { id: 3, title: "The Dark Knight", time: "152 min", genres: ["Action", "Crime", "Drama"] }
];

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;