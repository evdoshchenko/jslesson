let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How a lot of film are you already watched');
  //                                                      true - если внутри не число
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How a lot of film are you already watched');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

console.log(personalMovieDB.count);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("You watched too few movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are classic viewer");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are movielover");
  } else {
    console.log("Error happens");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(genre) {
  for (let i = 1; i <= 3; i++) {
    genre[i - 1] = prompt(`what is you favorite movie genre by number ${i}`);
  }
}

writeYourGenres(personalMovieDB.genres);