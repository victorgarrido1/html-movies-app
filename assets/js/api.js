// let movieTitle = document.getElementById("movie-title");
// let movieDesc = document.getElementById("movie-description");

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

    // 
    const results = data.results
    console.log(results)

    const titleElement = document.getElementById("movie-title");
    const overviewElement = document.getElementById("movie-description")
    
    // Iterate through the first 6 movies and display their titles
    for (let i = 0; i < results.length; i++) {
      // Create a new div element for each movie title
      console.log(results[i].original_title)


      // Set the inner HTML of the div to the original title of the movie
            titleElement.innerHTML = results[i].original_title;
            overviewElement.innerHTML = results[i].overview;



      // Append the title element to the document body or any other desired container
    }

  } catch (err) {
    // Handle errors
    console.error(err);
}
}

getTrendingFilms();

// Call the function to fetch and display trending films
