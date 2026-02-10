function Movie(title, director, duration, isWatched) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.isWatched = isWatched;
}

Movie.prototype.info = function () {
  const readStatus = this.isWatched ? "Has been watched" : "Watch now";
  return `${this.title} by ${this.director} is ${this.duration} hours long. ${readStatus}`;
};

const myWatchList = [];

const form = document.getElementById("movieForm");
const movieList = document.getElementById("movieList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const director = document.getElementById("director").value;
  const duration = parseInt(document.getElementById("duration").value);
  const isWatched = document.getElementById("isWatched").checked;

  const newMovie = new Movie(title, director, duration, isWatched);
  myWatchList.push(newMovie);

  displayMovie();
  form.reset();
});

function displayMovie() {
  movieList.innerHTML = "";

  myWatchList.forEach((movie) => {
    const div = document.createElement("div");
    div.textContent = movie.info();
    movieList.appendChild(div);
  });
}