import React from "react";
import NavBar from "../components/NavBar";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>

      {directors.map(({ name, movies }) => (
        <div key={name}>
          <h3>{name}</h3>
          <ul>
            {movies.map((movie) => (
              <li key={movie}>{movie}</li>   
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Directors;
