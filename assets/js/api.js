// This fetch request is responsible for fetching the index.html
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
    console.log(data);
    const movieTitles = data.results.map((movie) => movie.original_title);
    const overviews = data.results.map((movie) => movie.overview);

    //extract the poster from the data
    const posterPaths = data.results.map((movie) => movie.poster_path);

    // Select all elements with the class "movie-title"
    const titleElements = document.querySelectorAll(".movie-title");
    ///select all elements with the class of  movie description

    // Iterate over the title elements and update their text content
    titleElements.forEach((titleElement, index) => {
      titleElement.textContent = movieTitles[index] || "No title available";
    });

    const overviewElements = document.querySelectorAll(".movie-description");
    console.log(overviewElements);

    overviewElements.forEach((overviewElement, index) => {
      overviewElement.textContent =
        overviews[index] || "No description available";
    });

    const posterElements = document.querySelectorAll(".movie-poster");
    console.log(posterElements);

    // Iterate over posterElements and update src attribute
    posterElements.forEach((posterElement, index) => {
      // Construct the full URL for the poster image
      const posterURL = `https://image.tmdb.org/t/p/w500${
        posterPaths[index] || ""
      }`;

      // Update the src attribute of the current posterElement
      posterElement.src = posterURL;
    });
  } catch (err) {
    // Handle errors
    console.error(err);
  }
}

getTrendingFilms();

//end
//here wil will make it when the user clicks the search button their search appears
const apiKey = "8c3a4c65c4bb1642bd1db047b0abbc0c";

const searchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

let searchQuery = ""; // placeholder working search //

const fetchMovies = () => {
  // Select the search button and input field elements
  const searchMovieBtn = document.querySelector(".movie-search-btn");
  const searchMovieInput = document.querySelector(".movie-search-input");

  // Add an event listener to the search button to handle search submissions
  searchMovieBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the search query from the input field
    const searchQuery = searchMovieInput.value.trim();

    // Check if a search query is provided
    if (searchQuery) {
      // Construct the URL for fetching movie data based on the search query
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchQuery
      )}&include_adult=false&language=en-US&page=1`;

      // Fetch movie data from the API using the constructed URL and options
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Log or process the movie data here
          console.log(data);

          // Redirect to the search-results.html page with the search query as a query parameter
          window.location.href = `search-results.html?query=${encodeURIComponent(
            searchQuery
          )}`;
        })
        .catch((err) => {
          console.error("Error fetching movie data:", err);
        });
    } else {
      console.error("Please enter a search query."); // Log an error message if no search query is provided
    }
  });
};

// Trigger the fetchMovies function to initiate movie search when the DOM is loaded
document.addEventListener("DOMContentLoaded", fetchMovies);
