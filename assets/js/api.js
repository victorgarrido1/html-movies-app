// This fetch request is responsible for fetching the index.html
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
  },
};

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

const singleOptions = {
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

    // Create HTML elements to display movie details
    const rootNode = document.createElement("div");
    rootNode.innerHTML = `
    <div id='movie-details-link' class="box">
      <div class="container mx-auto">
        <div class="flex size-48">
          <div class="size-48">
            <div class="relative flex flex-col mt-24 bg-white shadow-md rounded-xl w-96">
              <div class="relative h-96 mx-6-mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
                <img class="movie-poster-search" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${singleMovie.poster_path}" alt="poster_path" />
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

    // updated content
    // Append the movie details to the document body
    document.body.appendChild(rootNode);
  } catch (error) {
    console.error("Error rendering movie details:", error.message);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // Retrieve the movie ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  console.log(movieId);

  if (movieId) {
    try {
      // Fetch movie details using the movie ID
      const singleMovie = await getMovie(movieId);
      console.log(singleMovie);

      // Create a new div to hold the movie details
      const movieDetailsDiv = document.createElement("div");
      movieDetailsDiv.classList.add("container", "mx-auto");
      movieDetailsDiv.innerHTML = `

<div class="flex justify-left">
    <div class="w-96 xl:w-full" style="margin-left: 2rem;">
        <div class="relative flex bg-blue-100 shadow-md rounded-xl xl:flex-row p-4">
            <!-- Image container -->
            <div class="relative h-96 overflow-hidden overflow-y-visible bg-blue-gray-500/40 rounded-t-xl shadow-blue-gray-500/40">      
                <img id="movie-poster" class="movie-poster-search" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${singleMovie.poster_path}" alt="poster_path"/>
            </div>
            <!-- Text content container -->
            <div class="p-6 flex justify-end bg-blue-100 shadow">
            <div class="text-right">
                <div class="movie-details mb-4"> <!-- Added mb-4 class for margin bottom -->
                    <h5 id="movie-title" class="movie-title-search text-2xl font-extrabold text-blue-gray-900">${singleMovie.title}</h5>
                    <p id="movie-description" class="movie-description-search text-base font-light leading-relaxed text-inherit">${singleMovie.overview}</p>
                    <p><strong>Movie Runtime:</strong> ${singleMovie.runtime} mins</p>
                    <p><strong>Movie Genre:</strong> ${singleMovie.genres[0].name}</p>
                    <p><strong>Released:</strong> ${singleMovie.release_date}</p>
                </div>
            </div>
        </div>
      `;
      // Append the movie details div to the main section of the page
      document.querySelector("main").appendChild(movieDetailsDiv);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  } else {
    console.error("No movie ID found in URL parameters.");
  }
});

document.addEventListener("DOMContentLoaded", async (e) => {
  let results = await geTrendingFilms();

  results.results.forEach((item) => {
    //convert item into the html element
    const rootNode = document.createElement("div");
    rootNode.innerHTML = `
    <div class="flex-row flex-wrap justify-center">
        <div class="relative flex flex-col mt-8 bg-blue-100 shadow-md rounded-xl w-96">
          <div
            class="relative h-56 mx-4 mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
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
          <a href="details.html?id=${item.id}" class="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none learn-more-button" data-movie-id="${item.id}" type="button">Learn more</a>
      </div>
      `;

    //now we want to create new element to the DOM
    document.getElementById("movie-container").append(rootNode); //there is an null error
  });

  //add event listener to handle a click on  movie details link
  const movieDetailsLinks = document.querySelectorAll(".learn-more-button");
  movieDetailsLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); //prevent default link behavior
      const movieId = link.dataset.movieId;
      window.location.href = `details.html?id=${movieId}`;
    });
  });
});

// Gets data from the DOM
// Selecting input field and button
let inputMovie = document.querySelector(".movie-search-input");
let movieBtn = document.querySelector(".movie-search-btn");

// Event listener for the button click
movieBtn.addEventListener("click", async function (e) {
  e.preventDefault(); // Prevent default form submission behavior //Err in 113
  const query = inputMovie.value; // Get the value typed by the user

  let results = await getMovies(query);
  console.log(results);

  document.getElementById("movie-container").innerHTML = "";

  results.results.forEach((item) => {
    //convert item into the html element
    const rootNode = document.createElement("div"); //EDIT HERE
    rootNode.innerHTML = ` 
    <div class="flex-row flex-wrap justify-center">
    <div class="relative flex flex-col mt-8 bg-blue-100 shadow-md rounded-xl w-96">
        <div class="relative h-56 mx-4 mt-6 overflow-hidden bg-blue-gray-500/40 rounded-xl shadow-blue-gray-500/40">
            <img class="movie-poster" src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="poster_path">
        </div>
        <div class="p-6">
            <h5 class="movie-title text-xl font-semibold text-blue-gray-900">${item.original_title}</h5>
            <p class="movie-description text-base font-light leading-relaxed text-inherit">${item.overview}</p>
        </div>
        <div class="p-6 pt-0">
            <a href="details.html?id=${item.id}" class="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">Read More</a>
        </div>
    </div>
</div>
`;

    //now we want to create new element to the DOM
    document.getElementById("movie-container").append(rootNode);
  });
});
