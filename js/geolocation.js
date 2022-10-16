import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}

	const success = async (pos) => {
		const crd = pos.coords;

		const response = await fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=0d8862b3818743a9bc3d5ea8875c2ea5`
		);

		const result = await response.json();
		console.log(result);

		const weather = await getWeatherData(result.features[0].properties.city);
		resetWeatherContent(result.features[0].properties.city, weather);
	}

	const error = (error) => {
		console.log(error.code + ` ` + error.message);
	}
	navigator.geolocation.getCurrentPosition(success, error, options);
}