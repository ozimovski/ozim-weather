import { ForecastResponse, CurrentWeatherResponse } from './../interfaces/response.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
// services
import { HelperService } from './helper.service';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private httpClient: HttpClientService, private helper: HelperService) {}

  public getCurrentWeather(city: string): Observable<CurrentWeatherResponse> {
    return this.httpClient.get(
      this.helper.getForecastUrl() + `/weather/?q=${city}&units=metric${this.helper.getApiKey()}`
    );
  }

  public getForecast(city: string): Observable<ForecastResponse> {
    return this.httpClient.get(
      this.helper.getForecastUrl() + `/forecast/?q=${city}&units=metric${this.helper.getApiKey()}`
    );
  }
}
