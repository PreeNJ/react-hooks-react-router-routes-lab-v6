// src/pages/Movie.jsx
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import movies from "../data/movies";

export default function MoviePage() {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return (
      <>
        <NavBar />
        <p>Movie not found</p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} min</p>
      <div className="genres">
        {movie.genres.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </div>
    </>
  );
}
