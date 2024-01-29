class WeatherDataHandler {
    
    #BASE_URL = 'http://api.weatherapi.com/v1';

    #API_KEY = 'd65b04c324db47b6acd132112230810';

    constructor(APIUrl = this.#BASE_URL, APIKey = this.#API_KEY) {
        this.#BASE_URL = APIUrl;
        this.#API_KEY = APIKey;
    }

    async getLocationWeatherData(cityName) {
        const response = await fetch(`${this.#BASE_URL}/current.json?key=${this.#API_KEY}&q=${cityName}`, { mode: 'cors' })
        const weatherData = await response.json();

        return {
            name: weatherData.location.name,
            temp_c: weatherData.current.temp_c
        };
    }
}

export default WeatherDataHandler;