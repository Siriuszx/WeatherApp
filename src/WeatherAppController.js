import WeatherDataHandler from "./WeatherDataHandler";
import WeatherAppStorage from "./WeatherAppStorage";
import WeatherAppUI from "./WeatherAppUI";

class WeatherAppController {

    constructor() {
        this.APIHandler = new WeatherDataHandler();
        this.UIController = new WeatherAppUI(
            {
                getForecast: this.getForecast.bind(this)
            }
        );
    }

    async getForecast() {
        const weatherData = await this.APIHandler.getLocationWeatherData(this.UIController.getLocation() || 'Berlin');

        this.UIController.logCurrentWeather(weatherData);
        this.UIController.updateCurrentTemperature(weatherData);
    }
}

export default WeatherAppController;