import './style.css';
import WeatherDataHandler from './WeatherDataHandler';

const weather = new WeatherDataHandler();
weather.getLocationWeather('Berlin');
