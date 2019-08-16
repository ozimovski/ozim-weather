import { ForecastResponse, CurrentWeatherResponse } from './../../shared/interfaces/response.interface';
import { ForecastService } from './../../shared/services/forecast.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public city = 'Maribor';
  public weatherData: CurrentWeatherResponse;
  public forecastData: ForecastResponse;
  public dataReceived: string;
  public isLoading = true;
  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    this.getWeatherData();
    this.getForecastData();
  }

  public getWeatherData(): void {
    this.forecastService.getCurrentWeather(this.city).subscribe(res => {
      this.weatherData = res;
      this.dataReceived = moment.unix(res.dt).toISOString();
      this.isLoading = false;
    });
  }

  public getForecastData(): void {
    this.forecastService.getForecast(this.city).subscribe(res => {
      this.forecastData = res;
    });
  }

  public refreshForecast(): void {
    this.isLoading = true;
    this.getWeatherData();
  }
}
