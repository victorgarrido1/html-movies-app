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
    const response = await fetch( "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", searchOptions);

    // Parse response as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error for handling outside this function
  }
}


document.addEventListener("DOMContentLoaded", async (e) => {
  let results = await geTrendingFilms();

  results.results.forEach((item, ) => {
    //convert item into the html element 
    const rootNode = document.createElement("div")
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
              movie descrip
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
  `
  
  //now we want to create new element to the DOM
  document.getElementById("movie-container").append(rootNode);
    })

} )

// Gets data from the DOM
// Selecting input field and button
let inputMovie = document.querySelector(".movie-search-input");
let movieBtn = document.querySelector(".movie-search-btn");

// Function to perform movie search
// Function to fetch movie data from the API
  const searchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4'
    }
  };

  const getMovies = async (query = null, options = {}) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, searchOptions);
  
      // Parse response as JSON
      const data = await response.json();  
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; // Rethrow the error for handling outside this function
    }
  }


// Event listener for the button click
movieBtn.addEventListener("click", async function(e) {
  e.preventDefault(); // Prevent default form submission behavior
  const query = inputMovie.value; // Get the value typed by the user

  let results = await getMovies(query);

  document.getElementById("movie-container").innerHTML = "";

  //extract the movie RESULTS FROM the data

  results.results.forEach((item, ) => {
  //convert item into the html element 
  const rootNode = document.createElement("div")
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
            movie descrip
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            Read More
          </button>
        </div>
    </div>
  </div>
`


//now we want to create new element to the DOM
document.getElementById("movie-container").append(rootNode);
  })
});
