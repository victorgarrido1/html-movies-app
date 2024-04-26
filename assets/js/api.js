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

    // Extract movie titles from the data
    const movieTitles = data.results.map(movie => movie.original_title);
    
    // Select all elements with the class "movie-title"
    const titleElements = document.querySelectorAll(".movie-title")
   
    // Iterate over the title elements and update their text content
    titleElements.forEach((titleElement, index) => {
      titleElement.textContent = movieTitles[index] || "No title available";
    });

  } catch (err) {
    // Handle errors
    console.error(err);
  }
}

getTrendingFilms();

// Call the function to fetch and display trending films