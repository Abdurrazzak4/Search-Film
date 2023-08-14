

function addMovie() {
  let allContent = ""
  for (let i = 1; i < localStorage.length+1; i++) {
    allContent += JSON.parse(localStorage.getItem(`movie${i}`));
    document.getElementById("wlbody").innerHTML = allContent
    console.log(allContent);
  }  
}
addMovie();