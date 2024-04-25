let movieTitle = document.getElementById("movie-title");
let movieDesc = document.getElementById("movie-description");

// This section will allow us to display data to the user
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
  },
};

async function getTrendingFilms() {
  try {
    // Fetch data from the API
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options // Pass options to fetch
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    // Parse response data as JSON
    const data = await response.json();

    

    // Extracting movie title
    let movieTitleE = data.results[0].title;
    for (let i = 1; i < data.results.length; i++) {
      movieTitleE += ", " + data.results[i].title;

     movieTitle.append("movieTitle") 
  }


    // Display the movie title (for now, just log it to the console)
    console.log("Movie Title:", movieTitle);

  } catch (err) {
    // Handle errors
    console.error(err);
  }
}




// Call the function to fetch and display trending films
getTrendingFilms();
