export const getWeatherData = async (city) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b114ae9fbf16c9c5de9d4f180a5a6dc&units=metric`
		);
		return await response.json();
	} catch (e) {
		console.error(e);
	}
}