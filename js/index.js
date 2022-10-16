import { getWeatherData } from "./api.js";
import { createContent } from "./appContent.js";
import { createHeader } from "./createHeader.js";


const app = async () => {
	const weather = await getWeatherData('Dnipro');
	const header = createHeader(weather.name)
	const content = createContent(weather);
	console.log(weather)
	document.body.append(header, content);
}

app();