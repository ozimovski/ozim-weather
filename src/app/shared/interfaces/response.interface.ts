import { City } from './city.interface';
import { List, Weather, Main } from './forecast.interface';

export interface ForecastResponse {
  list: List[];
  city: City;
}

export interface CurrentWeatherResponse {
  weather: Weather[];
  main: Main;
  dt: number;
}
