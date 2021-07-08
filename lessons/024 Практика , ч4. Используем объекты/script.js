'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('How a lot of film are you already watched');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How a lot of film are you already watched');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("You watched too few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are movielover");
    } else {
      console.log("Error happens");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function (genre) {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`what is you favorite movie genre by number ${i}`);
      if (genre === '' || genre == null) {
        console.log('You were inserting incorrect data');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} is ${item}`);
    });
  },
  anotherWriteYourGenres: function (genre) {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Add you favorite movie genre separated by commas`).toLocaleLowerCase();              // в одинаковый регистр
      if (genres === '' || genres == null) {
        console.log('You were inserting incorrect data');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort(); // тк сортирует - Б, Г, а, в
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} is ${item}`);
    });
  }
};