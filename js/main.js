let elForm = $(".js-form");
let elInput = $(".js-input");
let elList = $(".result-list");
let elTemplate = $("#movies-template").content;
kinolar.splice(100)

let normalizedMovies = kinolar.map((kino, i) => {

  return {
    id: i + 1 ,
    title: kino.title,
    cast: kino.cast.join(", "),
    genres: kino.genres.join(", "),
    year: kino.year,
    
  }
});


let createMovieElement = (movie) => {

  elList.innerHTML = "";

  let movieElement = elTemplate.cloneNode(true);

  $(".card-title", movieElement ).textContent = movie.title;
  $(".card-cast", movieElement ).textContent = movie.cast;
  $(".card-genres", movieElement ).textContent = movie.genres;
  $(".card-year", movieElement ).textContent = movie.year;

  return movieElement;
}

let renderMovies = (movies) => {
  let elResultFragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    elResultFragment.appendChild(createMovieElement(movie));
  })

  elList.appendChild(elResultFragment)
} 

renderMovies(normalizedMovies);



elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let searchMovie = new RegExp(elInput.value.trim(), "gi");

  let searchResult = normalizedMovies.filter((movie) => {
    if (movie.title.match(searchMovie)) {
      return movie.title.match(searchMovie);
    }
  })

  renderMovies(searchResult)
})