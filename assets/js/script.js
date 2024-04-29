// // Selecting the form element
// let searchFormEl = document.querySelector("#search-form");

// // Function to handle a search submission
// function handleMovieSearch(e) {
//     e.preventDefault();

//     // Get the value of the input field
//     let searchMovieValue = document.querySelector(".movie-search-input").value;
//     console.log(searchMovieValue);

//     // Check if a search value is provided
//     if (!searchMovieValue) {
//         console.error("You need to provide a movie!");
//         return;
//     }

//     // Construct a query string for redirecting to the search-results page
//     let queryString = './search-results.html?q=' + encodeURIComponent(searchMovieValue);

//     // Redirect to the search-results page
//     location.assign(queryString);
// }

// // Add an event listener to the form for submission
// searchFormEl.addEventListener("submit", handleMovieSearch);