// Define an async function to fetch API data
async function fetchApi(url, options) {
  try {
    // Fetch API
    const result = await fetch(url, options);

    // Convert Result to JSON
    const resultJson = await result.json();

    // Return Result JSON
    return resultJson;
  } catch (error) {
    // Log Error to console
    console.log(`Error fetching API: ${JSON.stringify(error)}`);
    throw error; // Re-throwing the error if needed for further handling
  }
}

// Function to handle the button click event
async function handleButtonClick() {
  try {
    // Get Movie Title from HTML Field
    let movieSearch = document.getElementById("scr-movie-btn").value;

    // Clean Movie Title
    movieSearch = movieSearch.trim();

    // Encode Movie Title for URL
    const encodedMovieSearch = encodeURIComponent(movieSearch);

    // Create URL for Fetch API
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${encodedMovieSearch}&country=us&show_type=all&output_language=en`;

    // Options for Fetch API
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      },
    };

    // Call fetchApi and handle the returned promise
    const apiResult = await fetchApi(url, options);
    console.log('API Result:', apiResult);
    
    // Process the API result as needed here...
  } catch (error) {
    console.error('Error:', error);
    // Handle errors here...
  }
}



// Define an async function to fetch API data
async function fetchApi(url, options) {
  try {
    // Fetch API
    const result = await fetch(url, options);

    // Convert Result to JSON
    const resultJson = await result.json();

    // Return Result JSON
    return resultJson;
  } catch (error) {
    // Log Error to console
    console.log(`Error fetching API: ${JSON.stringify(error)}`);
    throw error; // Re-throwing the error if needed for further handling
  }
}

// Function to handle the button click event
async function handleButtonClick() {
  try {
    // Get Movie Title from HTML Field
    let movieSearch = document.getElementById("scr-movie-btn").value;

    // Clean Movie Title
    movieSearch = movieSearch.trim();

    // Encode Movie Title for URL
    const encodedMovieSearch = encodeURIComponent(movieSearch);

    // Create URL for Fetch API
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${encodedMovieSearch}&country=us&show_type=all&output_language=en`;

    // Options for Fetch API
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      },
    };

    // Call fetchApi and handle the returned promise
    const apiResult = await fetchApi(url, options);
    console.log('API Result:', apiResult);
    
    // Process the API result as needed here...
  } catch (error) {
    console.error('Error:', error);
    
    // Handle errors here...
  }
}


// Attach the handleButtonClick function to the button click event
const searchInput = document.getElementById('searchfield-movies');
const button = document.getElementById('scr-movie-btn'); // Replace 'your-button-id' with the actual ID of your button
button.addEventListener('click', handleButtonClick);

searchInput.addEventListener('input', () => {
  console.log('User input:', userInput)
  let userInput = searchInput.value.trim();
});


