// src/pages/Actors.jsx
import React from "react";
import NavBar from "../components/NavBar";
import actors from "./actors";

export default function Actors() {
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
