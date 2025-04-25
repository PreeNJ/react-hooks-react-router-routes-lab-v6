import React from "react";
import NavBar from "../components/NavBar";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>

      {actors.map(({ name, movies }) => (
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

export default Actors;
