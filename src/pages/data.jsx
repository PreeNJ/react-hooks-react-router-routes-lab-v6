// Static fixtures used by every component and by the tests
export const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Spider-Man: Homecoming",
    time: 133,
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: 3,
    title: "Thor: Ragnarok",
    time: 130,
    genres: ["Action", "Adventure", "Comedy"],
  },
];

export const directors = [
  { name: "Scott Derrickson", movies: ["Doctor Strange"] },
  { name: "Jon Watts",       movies: ["Spider-Man: Homecoming"] },
  { name: "Taika Waititi",   movies: ["Thor: Ragnarok"] },
];

export const actors = [
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange"] },
  { name: "Tom Holland",         movies: ["Spider-Man: Homecoming"] },
  { name: "Chris Hemsworth",     movies: ["Thor: Ragnarok"] },
];
