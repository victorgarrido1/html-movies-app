const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/keyword/%7Bkeyword%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}