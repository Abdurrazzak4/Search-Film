

function addMovie() {
  for (let i = 0; i < localStorage.length; i++) {
    document.getElementById("wlbody").innerHTML += JSON.parse(localStorage.getItem(`movie${i}`));
  }  
}
addMovie();