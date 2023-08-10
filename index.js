document.getElementById("searchButton").addEventListener("click", () => {
  document.getElementById("body").innerHTML = "";
  let searchInput = document.getElementById("inputMovieName").value;
  fetch(`https://www.omdbapi.com/?apikey=16ec79b8&s=${searchInput}&page=3`)
    .then((response) => response.json())
    .then((data) => {
      let moviesId = data.Search.map((movie) => movie.imdbID);
      console.log(moviesId);
      moviesId.map((id) => {
        fetch(`https://www.omdbapi.com/?apikey=16ec79b8&i=${id}`)
          .then((response) => response.json())
          .then((movies) => {
            console.log(movies);
            const newDiv = document.createElement("div");
            newDiv.className = "movies";
            if (movies.Poster !== "N/A" && movies.Plot !== "N/A") {
              newDiv.innerHTML = `
                <div class="movies">
                    <img src=${movies.Poster} alt="img" id="movieImg" />

                    <div class="aboutMovie">
                    <div id="movieName">
                    ${movies.Title} <img src="img/star.png" /><span>${movies.imdbRating}</span>
                    </div>

                    <div class="content">
                        <span>${movies.Runtime}</span><span>${movies.Genre}</span
                        ><span class="pointer addMovie"><img src="img/plus.png" class="pointer" />Watchlist</span>
                    </div>
                    <p>
                    ${movies.Plot}
                    </p>
                    </div>
                </div>
                `;
              document.getElementById("body").appendChild(newDiv);
            }
          });
      });
    });
});
let i = 0;

document.addEventListener("click", (e) => {
  if (e.target.className === "pointer addMovie") {
  i++;
    console.log(e.target.parentElement.parentElement.parentElement);
    localStorage.setItem(
      `movie${i}`,
      JSON.stringify(
        e.target.parentElement.parentElement.parentElement.innerHTML
      )
    );
    console.log(localStorage.getItem("movie"))
  }

});

