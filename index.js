// creating movie constructor
function Movie(title, director, duration, isWatched){
    this.title = title;
    this.director = director;
    this.duration = duration;
    this.isWatched = isWatched;
};

Movie.prototype.info = function(){
    const readStatus = this.isWatched ? 'Has been watched' : 'Watch Now';
    return`${this.title} by ${this.director} is ${this.duration} hours long. ${this.isWatched}`
};

// creating watchlist array to store added movies
const myWatchList = [];

const form = document.getElementById('#movieForm');
const movieDiv = document.getElementById('movieList');

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// get values from form
const title = document.getElementById('#title').value;
const director = document.getElementById('#director').value;
const duration = parseInt(document.getElementById('#duaration').value);
const isWatched = document.getElementById('#isWatched').value;

// create new movie
const newMovie = new Movie(title, director, duration, isWatched);

// add it to the watchlist array
myWatchList.push(newMovie);

// display the movies