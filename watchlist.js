
function addMovie() {
  
  document.getElementById("wlbody").innerHTML += JSON.parse(localStorage.getItem("movie"));
}
addMovie();