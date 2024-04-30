// This fetch request is responsible for fetching the index.html
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
  },
};

const geTrendingFilms = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      searchOptions
    );

    // Parse response as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error for handling outside this function
  }
};

//
const getMovies = async (query = null, options = {}) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      searchOptions
    );

    // Parse response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error for handling outside this function
  }
};
/// STOP HERE!


const singleOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
  },
};

// Function to fetch details of a single movie
const getMovie = async (movieId) => {
  try {
    // Fetch movie data from TMDb API using singleOptions
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      singleOptions
    );
    // Check if the response was successful
    if (!request.ok) {
      throw new Error("Failed to fetch movie data");
    }
    // Parse the JSON response
    const data = await request.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

// Function to render details of a single movie
const renderMovieDetails = async (movieId) => {
  try {
    // Fetch details of the single movie
    const singleMovie = await getMovie(movieId);
    console.log(singleMovie)

    // Create HTML elements to display movie details
    const rootNode = document.createElement("div");
    rootNode.innerHTML = `
    <div id="movie-results-container" class="box">
    <div class="container mx-auto">
        <div class="flex size-48">
            <div class="size-48">
                <div class="relative flex flex-col mt-24 bg-white shadow-md rounded-xl w-96">
                    <div class="relative h-96 mx-6-mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
                    <img class="movie-poster-search" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${singleMovie.poster_path}" alt="poster_path"/>    
                    </div>
                    <div class="p-6">
                        <h5 class="movie-title-search text-xl font-semibold text-blue-gray-900">
                            ${singleMovie.title}
                        </h5>
                        <p class="movie-description-search h-24 text-base font-light leading-relaxed text-inherit">
                            ${singleMovie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

   // Append the movie details to the DOM
   document.getElementById("movie-details-container").appendChild(rootNode);
  } catch (error) {
    console.error("Error rendering movie details:", error);
  }
};
//TODO: Need to work on inplement on trying to get thee on  result to appear once the learned more is clicked
//Git push //Work around here 

//apply an event listen for the search result 
document.getElementById("movie-container").addEventListener("click", function (event) {
  //check if the clicked element is a s
})

// // Event listener for the search results
// document.getElementById("movie-container").addEventListener("click", function(event) {
//   // Check if the clicked element is a search result
//   if (event.target && event.target.matches(".search-result")) {
//     // Get the movie ID from the clicked element
//     const movieId = event.target.dataset.movieId;
//     // Render the details of the clicked movie
//     renderMovieDetails(movieId);
//   }
// });





















document.addEventListener("DOMContentLoaded", async (e) => {
  let results = await geTrendingFilms();

  results.results.forEach((item) => {
    //convert item into the html element
    const rootNode = document.createElement("div");
    rootNode.innerHTML = `
    <div class="flex flex-row flex-wrap justify-center">
        <div class="relative flex flex-col mt-8 bg-white shadow-md rounded-xl w-96">
          <div
            class="relative h-56 mx-4 -mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
            <img class="movie-poster" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="poster_path"/>
          </div>
          <div class="p-6">
            <h5 class="movie-title text-xl font-semibold text-blue-gray-900">
            ${item.original_title}
              </h5>
            <p class="movie-description text-base font-light leading-relaxed text-inherit">
            ${item.overview}  
            </p>
          </div>
          <div class="p-6 pt-0">
            <a href="details.html?id=${item.id}"
              class="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Learn more
            </a>
          </div>
      </div>
    </div>`;
    console.log(item.id);
    //now we want to create new element to the DOM
    document.getElementById("movie-container").append(rootNode); //there is an null error
  });
});

// Gets data from the DOM
// Selecting input field and button
let inputMovie = document.querySelector(".movie-search-input");
let movieBtn = document.querySelector(".movie-search-btn");

// Function to perform movie search
// Function to fetch movie data from the API
const searchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
  },
};

// Event listener for the button click
movieBtn.addEventListener("click", async function (e) {
  e.preventDefault(); // Prevent default form submission behavior //Err in 113
  const query = inputMovie.value; // Get the value typed by the user

  let results = await getMovies(query);

  document.getElementById("movie-container").innerHTML = "";

  //extract the movie RESULTS FROM the data

  results.results.forEach((item) => {
    //convert item into the html element
    const rootNode = document.createElement("div");
    rootNode.innerHTML = `
    <div class="flex flex-row flex-wrap justify-center">
    <div class="relative flex flex-col mt-8 bg-white shadow-md rounded-xl w-96">
      <div
        class="relative h-56 mx-4 -mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
        <img class="movie-poster" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="poster_path"/>
      </div>
      <div class="p-6">
        <h5 class="movie-title text-xl font-semibold text-blue-gray-900">
        ${item.original_title}
          </h5>
        <p class="movie-description text-base font-light leading-relaxed text-inherit">
        ${item.overview}
        </p>
      </div>
      <div class="p-6 pt-0">
        <a href="details.html?id=${item.id}"
          class="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button">
          Read More
        </a>
      </div>
  </div>
</div>
`;
    //now we want to create new element to the DOM
    document.getElementById("movie-container").append(rootNode);
  });
});
