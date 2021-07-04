const numberOfFilms = prompt('How a lot of film are you already watched');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of the last watched films?', ''),
  b = prompt('How much do you rate it?'),
  c = prompt('One of the last watched films?', ''),
  d = prompt('How much do you rate it?');

personalMovieDB.movies[a] = b;
//personalMovieDB.movies.a = b;  // так лучше не делать из-за некоторых браузеров
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);