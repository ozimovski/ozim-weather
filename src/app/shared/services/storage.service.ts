import { ForecastResponse, CurrentWeatherResponse } from './../interfaces/response.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public setWeather(weather: CurrentWeatherResponse): void {
    localStorage.setItem('currentWeather', JSON.stringify(weather));
  }

  public setForecast(forecast: ForecastResponse): void {
    localStorage.setItem('forecast', JSON.stringify(forecast));
  }

  public setDataReceived(dataDate: string): void {
    localStorage.setItem('dataReceived', dataDate);
  }

  public getWeather(): CurrentWeatherResponse {
    const weather: CurrentWeatherResponse = JSON.parse(localStorage.getItem('currentWeather'));
    return weather;
  }

  public getForecast(): ForecastResponse {
    const forecast: ForecastResponse = JSON.parse(localStorage.getItem('forecast'));
    return forecast;
  }

  public getDataReceived(): string {
    return localStorage.getItem('dataReceived');
  }

  public removeWeather(): void {
    localStorage.removeItem('currentWeather');
  }

  public removeForecast(): void {
    localStorage.removeItem('forecast');
  }

  public removeDataReceived(): void {
    localStorage.removeItem('dataReceived');
  }
}
