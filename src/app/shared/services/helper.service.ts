import { Injectable } from '@angular/core';

// environment
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() {}

  getApiKey(): string {
    return environment.apiKey;
  }

  getCurrentWeatherUrl(): string {
    return environment.forecast.protocol + environment.forecast.rootUrl + environment.forecast.apiUrl;
  }

  getForecastUrl(): string {
    return environment.forecast.protocol + environment.forecast.rootUrl + environment.forecast.apiUrl;
  }

  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  }
}
