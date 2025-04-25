import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>

      {movies.map(({ id, title }) => (
        <div key={id}>
          <h2>{title}</h2>                          {/* <- tests look for <h2> */}
          <Link to={`/movie/${id}`}>View Info</Link>
        </div>
      ))}
    </>
  );
}

export default Home;
