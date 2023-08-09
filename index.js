document.getElementById("searchButton").addEventListener("click", () => {
  let searchInput = document.getElementById("inputMovieName").value;
  fetch(`https://www.omdbapi.com/?apikey=16ec79b8&s=${searchInput}&page=3`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("body").innerHTML = `
                <div class="movies">
                    <img src=${data.Poster} alt="img" id="movieImg" />

                    <div class="aboutMovie">
                    <div id="movieName">
                    ${data.Title} <img src="img/star.png" /><span>${data.imdbRating}</span>
                    </div>

                    <div class="content">
                        <span>${data.Runtime}</span><span>${data.Genre}</span
                        ><span class="pointer"><img src="img/plus.png" />Watchlist</span>
                    </div>
                    <p>
                    ${data.Plot}
                    </p>
                    </div>
                </div>
                `;
    });
});
