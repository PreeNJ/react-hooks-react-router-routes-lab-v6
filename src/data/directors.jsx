import NavBar from "../components/NavBar";
import { directors } from "../data";

export default function DirectorsPage() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((dir) => (
        <article key={dir.id}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
