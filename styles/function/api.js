const url =
  "https://streaming-availability.p.rapidapi.com/search/title?title=%3CREQUIRED%3E&country=us&show_type=all&output_language=en";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

async function getMovie() {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData)

  respData.r
}// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

async function getMovie() {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData)
}
