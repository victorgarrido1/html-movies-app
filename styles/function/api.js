async function fetchApi(url, options) {
  
  try {

    // Fetch API
    const result = await fetch(url, options);

    // Convert Result to JSON
    const resultJson = await result.json();

    // Return Result
    return result;

  } catch (error) {
    
    // Log Error to console
    console.log(`Error fetching API: ${JSON.stringify(error)}`);

  }
}

// Get Movie Title from HTML Field
let title = document.getElementById('title').value;

// Clean Movie Title
title = title.trim();

// Encode Movie Title for URL
encodeURIComponent(title);

// Create URL for Fetch API
let url = `https://streaming-availability.p.rapidapi.com/search/title?title=${title}&country=us&show_type=all&output_language=en`;

// Options for Fetch API
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  },
};

fetchApi(url, options);
