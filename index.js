fetch("https://www.omdbapi.com/?apikey=16ec79b8&")
    .then(response => response.json())
    .then(data => console.log(data));