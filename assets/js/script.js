// const searchOptions = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNhNGM2NWM0YmIxNjQyYmQxZGIwNDdiMGFiYmMwYyIsInN1YiI6IjY1Njk3ZjVjZWVlMTg2MDBhZTYzNmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwECgYGXPKl2a4YxM9NGuyM-TIDJOXXpJSlaeQz6NL4",
//     },
//   };
  
// const getMovies = async (query = null, options = {}) => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
//         searchOptions
//       );
  
//       // Parse response as JSON
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       throw error; // Rethrow the error for handling outside this function
//     }
// }