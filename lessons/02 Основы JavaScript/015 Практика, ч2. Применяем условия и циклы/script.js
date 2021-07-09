const numberOfFilms = +prompt('How a lot of film are you already watched');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('One of the last watched films?', ''),
    b = prompt('How much do you rate it?');

  if (a != null && b != null && a != '' & b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Done');
  } else {
    console.log('Error');
    i--;                            //на шаг назад
  }
}

console.log(personalMovieDB.count);

if (personalMovieDB.count < 10) {
  console.log("You watched too few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are classic viewer");
} else if (personalMovieDB.count >= 30) {
  console.log("You are movielover");
} else {
  console.log("Error happens");
}

console.log(personalMovieDB);