class WeatherAppUI {

    #forecastForm = document.querySelector('#forecast-form');

    #forecastModal = document.querySelector('#forecast-modal');

    #openModalButton = document.querySelector('#open-modal');

    #getForecastButton = document.querySelector('#submit-forecast-button');
    
    #locationField = document.querySelector('#location-field');

    #currentLocationHeader = document.querySelector('#location-header');

    #currentTemperatureSpan = document.querySelector('#weatherdata-current-temp');

    constructor(handlersObj) {
        this.#mapListeners(handlersObj);
    }

    #mapListeners(handlersObj) {
        this.#openModalButton.addEventListener('click', this.#openModalHandler.bind(this));
        this.#getForecastButton.addEventListener('click', handlersObj.getForecast);
    }

    #openModalHandler(event) {
        this.#forecastModal.showModal();
    }

    getLocation() {
        if(this.#forecastForm.reportValidity())
            return this.#locationField.value || 'Berlin';
    }

    updateCurrentTemperature(weatherData) {
        this.#currentLocationHeader.textContent = weatherData.name;
        this.#currentTemperatureSpan.textContent = weatherData.temp_c;
    }

    logCurrentWeather(weatherData) {
        console.log(weatherData);
        console.log(`Location: '${weatherData.name}'\nCurrent Temp Celsius: ${weatherData.temp_c}°`);
    }
}

export default WeatherAppUI;